"use client";

import { useState } from "react";
import { Mail, MapPin, Loader2 } from "lucide-react";

type FormStatus = "idle" | "loading" | "success" | "error" | "rate-limited";

export default function ContactPage() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("General Inquiry");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");

  const resetForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setSubject("General Inquiry");
    setMessage("");
    setHoneypot("");
    setStatus("idle");
    setErrorMessage("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          subject,
          message,
          honeypot,
        }),
      });

      const data = await response.json();

      if (response.status === 429) {
        setStatus("rate-limited");
        setErrorMessage(
          "You've sent too many messages. Please try again in an hour."
        );
        return;
      }

      if (!response.ok || !data.success) {
        setStatus("error");
        setErrorMessage(data.error || "Failed to send message");
        return;
      }

      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please check your connection.");
    }
  };

  const isLoading = status === "loading";

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      {/* Header */}
      <div className="relative py-20 bg-brand-secondary overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Have questions about your loan options? We&apos;re here to help.
            Reach out to our team for expert advice and support.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 -mt-10 relative z-20">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl overflow-hidden shadow-xl flex flex-col md:flex-row border border-slate-100">
          <div className="p-10 md:w-2/5 bg-brand-primary text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-accent/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <p className="text-slate-200 mb-8 leading-relaxed">
                Fill out the form and our team will get back to you within 24
                hours.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-lg mb-1">Email</p>
                    <p className="text-slate-200 hover:text-white transition-colors cursor-pointer">
                      application@mylendingchoice.com.au
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-lg mb-1">Office</p>
                    <p className="text-slate-200">
                      Suite 1211/87 Liverpool St,
                      <br />
                      Sydney NSW 2000
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 relative z-10">
              <div className="flex gap-4">
                {/* Social Icons could go here */}
              </div>
            </div>
          </div>

          <div className="p-10 md:w-3/5">
            {status === "success" ? (
              <div className="h-full flex flex-col items-center justify-center text-center min-h-[400px]">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-10 h-10 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">
                  Message Sent!
                </h3>
                <p className="text-slate-600 mb-8 text-lg">
                  We&apos;ll be in touch shortly.
                </p>
                <button
                  onClick={resetForm}
                  className="text-brand-primary font-bold hover:text-brand-secondary transition-colors underline decoration-2 underline-offset-4"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Error Message */}
                {(status === "error" || status === "rate-limited") && (
                  <div
                    className={`p-4 rounded-xl ${
                      status === "rate-limited"
                        ? "bg-amber-50 border border-amber-200 text-amber-800"
                        : "bg-red-50 border border-red-200 text-red-800"
                    }`}
                  >
                    <p className="font-medium">{errorMessage}</p>
                    {status === "error" && (
                      <button
                        type="button"
                        onClick={() => setStatus("idle")}
                        className="text-sm underline mt-1"
                      >
                        Try again
                      </button>
                    )}
                  </div>
                )}

                {/* Honeypot field - hidden from users, visible to bots */}
                <input
                  type="text"
                  name="honeypot"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-bold text-slate-700 mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      disabled={isLoading}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full rounded-xl border-slate-200 border p-3.5 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all bg-slate-50 focus:bg-white disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-bold text-slate-700 mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      disabled={isLoading}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-xl border-slate-200 border p-3.5 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all bg-slate-50 focus:bg-white disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-bold text-slate-700 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    disabled={isLoading}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full rounded-xl border-slate-200 border p-3.5 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all bg-slate-50 focus:bg-white disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-bold text-slate-700 mb-2"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    disabled={isLoading}
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full rounded-xl border-slate-200 border p-3.5 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all text-slate-600 bg-slate-50 focus:bg-white disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <option>General Inquiry</option>
                    <option>Home Loan</option>
                    <option>Refinancing</option>
                    <option>Commercial Loan</option>
                    <option>Partnership</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-bold text-slate-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    disabled={isLoading}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full rounded-xl border-slate-200 border p-3.5 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all bg-slate-50 focus:bg-white disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isLoading || status === "rate-limited"}
                  className="w-full bg-brand-primary text-white font-bold py-4 rounded-full shadow-lg shadow-brand-primary/25 hover:bg-brand-secondary hover:shadow-brand-primary/40 hover:-translate-y-0.5 transition-all active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
