"use client";

import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";

type FormStatus = "idle" | "loading" | "success" | "error" | "rate-limited";

export default function PropertyValuationPage() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Form fields
  const [address, setAddress] = useState("");
  const [propertyType, setPropertyType] = useState("House");
  const [propertyStatus, setPropertyStatus] = useState("Owner Occupied");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [honeypot, setHoneypot] = useState("");

  const resetForm = () => {
    setAddress("");
    setPropertyType("House");
    setPropertyStatus("Owner Occupied");
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setHoneypot("");
    setStatus("idle");
    setErrorMessage("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/valuation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          address,
          propertyType,
          propertyStatus,
          firstName,
          lastName,
          email,
          phone,
          honeypot,
        }),
      });

      const data = await response.json();

      if (response.status === 429) {
        setStatus("rate-limited");
        setErrorMessage(
          "You've sent too many requests. Please try again in an hour."
        );
        return;
      }

      if (!response.ok || !data.success) {
        setStatus("error");
        setErrorMessage(data.error || "Failed to submit request");
        return;
      }

      setStatus("success");
      window.scrollTo(0, 0);
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please check your connection.");
    }
  };

  const isLoading = status === "loading";

  if (status === "success") {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 font-sans">
        <div className="bg-white p-12 rounded-3xl shadow-xl border border-slate-100 text-center max-w-lg mx-auto">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-brand-secondary mb-4">
            Request Received!
          </h2>
          <p className="text-lg text-slate-600 mb-10 leading-relaxed">
            Thank you for your property valuation request. One of our experts
            will analyze your property details and contact you shortly with a
            comprehensive report.
          </p>
          <button
            onClick={resetForm}
            className="bg-brand-primary text-white font-bold py-4 px-10 rounded-full shadow-lg shadow-brand-primary/25 hover:bg-brand-secondary transition-all hover:-translate-y-0.5"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      {/* Header */}
      <div className="relative py-20 bg-brand-secondary overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Free Property Valuation
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Get an accurate estimate of your property&apos;s value in
            today&apos;s market. Complete the form below for a no-obligation
            report.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 -mt-10 relative z-20">
        <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-10">
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

            {/* Property Details */}
            <div>
              <h3 className="text-xl font-bold text-brand-secondary mb-6 flex items-center gap-3 pb-4 border-b border-slate-100">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-primary/10 text-brand-primary text-sm">
                  1
                </span>
                Property Details
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label
                    htmlFor="address"
                    className="block text-sm font-bold text-slate-700 mb-2"
                  >
                    Property Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    required
                    disabled={isLoading}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full rounded-xl border-slate-200 border p-3.5 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all bg-slate-50 focus:bg-white disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="123 Street Name, Suburb, State, Postcode"
                  />
                </div>
                <div>
                  <label
                    htmlFor="type"
                    className="block text-sm font-bold text-slate-700 mb-2"
                  >
                    Property Type
                  </label>
                  <select
                    id="type"
                    disabled={isLoading}
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="w-full rounded-xl border-slate-200 border p-3.5 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all text-slate-600 bg-slate-50 focus:bg-white disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <option>House</option>
                    <option>Apartment / Unit</option>
                    <option>Townhouse</option>
                    <option>Land</option>
                    <option>Commercial</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="status"
                    className="block text-sm font-bold text-slate-700 mb-2"
                  >
                    Property Status
                  </label>
                  <select
                    id="status"
                    disabled={isLoading}
                    value={propertyStatus}
                    onChange={(e) => setPropertyStatus(e.target.value)}
                    className="w-full rounded-xl border-slate-200 border p-3.5 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all text-slate-600 bg-slate-50 focus:bg-white disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <option>Owner Occupied</option>
                    <option>Investment</option>
                    <option>Vacant</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div>
              <h3 className="text-xl font-bold text-brand-secondary mb-6 flex items-center gap-3 pb-4 border-b border-slate-100">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-primary/10 text-brand-primary text-sm">
                  2
                </span>
                Your Contact Details
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-bold text-slate-700 mb-2"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    required
                    disabled={isLoading}
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full rounded-xl border-slate-200 border p-3.5 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all bg-slate-50 focus:bg-white disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-bold text-slate-700 mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    required
                    disabled={isLoading}
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full rounded-xl border-slate-200 border p-3.5 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all bg-slate-50 focus:bg-white disabled:opacity-50 disabled:cursor-not-allowed"
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
                  />
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
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={isLoading || status === "rate-limited"}
                className="w-full bg-brand-primary text-white font-bold py-4 rounded-full shadow-lg shadow-brand-primary/25 hover:bg-brand-secondary hover:shadow-brand-primary/40 transition-all hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Get Free Valuation"
                )}
              </button>
              <p className="text-xs text-slate-500 text-center mt-6">
                By submitting this form, you agree to our privacy policy and
                terms of service.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
