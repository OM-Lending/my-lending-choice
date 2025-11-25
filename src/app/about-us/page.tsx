import { CheckCircle2 } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Hero */}
      <div className="bg-brand-secondary text-white py-24 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="text-brand-primary font-bold tracking-wider text-sm uppercase mb-6 block">
             About Us
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Empowering Your <br/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-primary to-brand-accent">
                Financial Future
              </span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
              At My Lending Choice, we believe that everyone deserves access to transparent, affordable, and tailored financial solutions.
            </p>
          </div>
        </div>
         {/* Decorative background pattern */}
         <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/4 opacity-5">
          <svg
            viewBox="0 0 1024 1024"
            className="h-256 w-5xl"
            aria-hidden="true"
          >
            <circle
              cx="512"
              cy="512"
              r="512"
              fill="white"
              fillOpacity="1"
            />
          </svg>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-brand-secondary mb-6">Our Mission</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                We founded My Lending Choice with a simple goal: to demystify the lending process. We understand that applying for a loan can be stressful and confusing. That&apos;s why we&apos;ve built a team of experts dedicated to guiding you through every step.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We leverage technology and deep industry relationships to find you the best rates from over 40 top lenders. Our success is measured by your financial well-being.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-brand-primary" />
                  <span className="font-bold text-brand-secondary">100% Transparent Process</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-brand-primary" />
                  <span className="font-bold text-brand-secondary">Client-First Approach</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-brand-primary" />
                  <span className="font-bold text-brand-secondary">Expert Industry Knowledge</span>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] rounded-4xl overflow-hidden bg-slate-100 shadow-2xl shadow-slate-200">
               {/* Placeholder for an image */}
               <div className="absolute inset-0 flex items-center justify-center bg-slate-200 text-slate-400">
                  <span className="text-lg font-bold">Team Image Placeholder</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100">
                    <div className="text-5xl font-bold text-brand-primary mb-3">10+</div>
                    <div className="text-slate-600 font-medium text-lg">Years Experience</div>
                </div>
                <div className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100">
                    <div className="text-5xl font-bold text-brand-primary mb-3">$500M+</div>
                    <div className="text-slate-600 font-medium text-lg">Loans Settled</div>
                </div>
                <div className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100">
                    <div className="text-5xl font-bold text-brand-primary mb-3">2,000+</div>
                    <div className="text-slate-600 font-medium text-lg">Satisfied Families</div>
                </div>
            </div>
        </div>
      </section>

      {/* Team Section Placeholder */}
      <section className="py-24">
          <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold text-brand-secondary mb-16">Meet Our Experts</h2>
              <div className="grid md:grid-cols-3 gap-12">
                  {[1, 2, 3].map((i) => (
                      <div key={i} className="group">
                          <div className="w-64 h-64 bg-slate-100 rounded-full mx-auto mb-8 overflow-hidden border-4 border-white shadow-xl group-hover:scale-105 transition-transform duration-300">
                             {/* Image placeholder */}
                             <div className="w-full h-full flex items-center justify-center text-slate-300 font-medium bg-slate-50">Photo</div>
                          </div>
                          <h3 className="text-2xl font-bold text-brand-secondary mb-2">Team Member {i}</h3>
                          <p className="text-brand-primary font-medium">Senior Broker</p>
                      </div>
                  ))}
              </div>
          </div>
      </section>
    </div>
  );
}
