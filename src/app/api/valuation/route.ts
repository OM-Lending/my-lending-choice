import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import {
  checkRateLimit,
  recordRequest,
  getClientIp,
} from "@/lib/rate-limit";
import { valuationEmailTemplate } from "@/lib/email-templates";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ValuationFormData {
  address: string;
  propertyType: string;
  propertyStatus: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
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

    const body: ValuationFormData = await request.json();

    // Honeypot check - if filled, silently reject (pretend success to bots)
    if (body.honeypot) {
      return NextResponse.json({ success: true });
    }

    // Validation
    if (!body.address || body.address.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: "Property address is required" },
        { status: 400 }
      );
    }

    if (!body.propertyType || body.propertyType.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: "Property type is required" },
        { status: 400 }
      );
    }

    if (!body.propertyStatus || body.propertyStatus.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: "Property status is required" },
        { status: 400 }
      );
    }

    if (!body.firstName || body.firstName.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: "First name is required" },
        { status: 400 }
      );
    }

    if (!body.lastName || body.lastName.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: "Last name is required" },
        { status: 400 }
      );
    }

    if (!body.email || !validateEmail(body.email)) {
      return NextResponse.json(
        { success: false, error: "Valid email is required" },
        { status: 400 }
      );
    }

    // Record this request for rate limiting
    recordRequest(ip);

    // Send email via Resend
    const { error } = await resend.emails.send({
      from: `My Lending Choice <${process.env.RESEND_FROM_EMAIL}>`,
      to: [process.env.ADMIN_EMAIL!],
      subject: `Property Valuation Request: ${body.address.trim()}`,
      html: valuationEmailTemplate({
        address: body.address.trim(),
        propertyType: body.propertyType.trim(),
        propertyStatus: body.propertyStatus.trim(),
        firstName: body.firstName.trim(),
        lastName: body.lastName.trim(),
        email: body.email.trim(),
        phone: body.phone?.trim(),
      }),
      replyTo: body.email.trim(),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { success: false, error: "Failed to send request. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Valuation form error:", error);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}

