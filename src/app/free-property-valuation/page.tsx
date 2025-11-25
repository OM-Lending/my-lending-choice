"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

export default function PropertyValuationPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    window.scrollTo(0, 0);
  };

  if (submitted) {
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
            onClick={() => setSubmitted(false)}
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
             Get an accurate estimate of your property&apos;s value in today&apos;s market.
             Complete the form below for a no-obligation report.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 -mt-10 relative z-20">
        <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-10">
              {/* Property Details */}
              <div>
                <h3 className="text-xl font-bold text-brand-secondary mb-6 flex items-center gap-3 pb-4 border-b border-slate-100">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-primary/10 text-brand-primary text-sm">1</span>
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
                      className="w-full rounded-xl border-slate-200 border p-3.5 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all bg-slate-50 focus:bg-white"
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
                      className="w-full rounded-xl border-slate-200 border p-3.5 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all text-slate-600 bg-slate-50 focus:bg-white"
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
                      className="w-full rounded-xl border-slate-200 border p-3.5 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all text-slate-600 bg-slate-50 focus:bg-white"
                    >
                      <option>Owner Occupied</option>
                      <option>Investment</option>
                      <option>Vacant</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="bedrooms"
                      className="block text-sm font-bold text-slate-700 mb-2"
                    >
                      Bedrooms
                    </label>
                    <input
                      type="number"
                      id="bedrooms"
                      min="0"
                      className="w-full rounded-xl border-slate-200 border p-3.5 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all bg-slate-50 focus:bg-white"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="bathrooms"
                      className="block text-sm font-bold text-slate-700 mb-2"
                    >
                      Bathrooms
                    </label>
                    <input
                      type="number"
                      id="bathrooms"
                      min="0"
                      className="w-full rounded-xl border-slate-200 border p-3.5 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all bg-slate-50 focus:bg-white"
                    />
                  </div>
                </div>
              </div>

              {/* Contact Details */}
              <div>
                <h3 className="text-xl font-bold text-brand-secondary mb-6 flex items-center gap-3 pb-4 border-b border-slate-100">
                   <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-primary/10 text-brand-primary text-sm">2</span>
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
                      className="w-full rounded-xl border-slate-200 border p-3.5 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all bg-slate-50 focus:bg-white"
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
                      className="w-full rounded-xl border-slate-200 border p-3.5 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all bg-slate-50 focus:bg-white"
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
                      className="w-full rounded-xl border-slate-200 border p-3.5 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all bg-slate-50 focus:bg-white"
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
                      className="w-full rounded-xl border-slate-200 border p-3.5 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all bg-slate-50 focus:bg-white"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-brand-primary text-white font-bold py-4 rounded-full shadow-lg shadow-brand-primary/25 hover:bg-brand-secondary hover:shadow-brand-primary/40 transition-all hover:-translate-y-0.5"
                >
                  Get Free Valuation
                </button>
                <p className="text-xs text-slate-500 text-center mt-6">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </div>
            </form>
        </div>
      </div>
    </div>
  );
}
