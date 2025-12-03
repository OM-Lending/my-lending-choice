import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import {
  checkRateLimit,
  recordRequest,
  getClientIp,
} from "@/lib/rate-limit";
import { contactEmailTemplate } from "@/lib/email-templates";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  honeypot?: string;
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request.headers);

    // Check rate limit
    const { isLimited, retryAfter } = checkRateLimit(ip);
    if (isLimited) {
      return NextResponse.json(
        {
          success: false,
          error: "Too many requests. Please try again later.",
        },
        {
          status: 429,
          headers: {
            "Retry-After": String(retryAfter),
          },
        }
      );
    }

    const body: ContactFormData = await request.json();

    // Honeypot check - if filled, silently reject (pretend success to bots)
    if (body.honeypot) {
      return NextResponse.json({ success: true });
    }

    // Validation
    if (!body.name || body.name.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: "Name is required" },
        { status: 400 }
      );
    }

    if (!body.email || !validateEmail(body.email)) {
      return NextResponse.json(
        { success: false, error: "Valid email is required" },
        { status: 400 }
      );
    }

    if (!body.message || body.message.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: "Message is required" },
        { status: 400 }
      );
    }

    const subject = body.subject || "General Inquiry";

    // Record this request for rate limiting
    recordRequest(ip);

    // Send email via Resend
    const { error } = await resend.emails.send({
      from: `My Lending Choice <${process.env.RESEND_FROM_EMAIL}>`,
      to: [process.env.ADMIN_EMAIL!],
      subject: `Website Contact: ${subject}`,
      html: contactEmailTemplate({
        name: body.name.trim(),
        email: body.email.trim(),
        phone: body.phone?.trim(),
        subject,
        message: body.message.trim(),
      }),
      replyTo: body.email.trim(),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { success: false, error: "Failed to send message. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}

