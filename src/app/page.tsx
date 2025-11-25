import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Home as HomeIcon,
  Banknote,
  Percent,
  Star,
  TrendingUp,
} from "lucide-react";

export default function LandingPage() {
  // List of lender logos from public/lenders directory
  const lenderLogos = [
    "cr=w_355,h_200 (1).webp",
    "cr=w_355,h_200 (2).webp",
    "cr=w_355,h_200 (3).webp",
    "cr=w_355,h_200 (4).webp",
    "cr=w_355,h_200 (5).webp",
    "cr=w_355,h_200 (6).webp",
    "cr=w_355,h_200 (7).webp",
    "cr=w_355,h_200 (8).webp",
    "cr=w_355,h_200.webp",
    "cr=w_356,h_200 (1).webp",
    "cr=w_356,h_200 (3).webp",
    "cr=w_356,h_200 (5).webp",
    "cr=w_356,h_200.webp",
    "rs=w_267,h_200,cg_true.webp",
    "rs=w_355,h_200,cg_true (1).webp",
    "rs=w_355,h_200,cg_true (2).webp",
    "rs=w_355,h_200,cg_true (3).webp",
    "rs=w_355,h_200,cg_true (4).webp",
    "rs=w_355,h_200,cg_true (5).webp",
    "rs=w_355,h_200,cg_true.webp",
    "rs=w_356,h_200,cg_true (1).webp",
    "rs=w_356,h_200,cg_true,m (1).webp",
    "rs=w_356,h_200,cg_true,m.webp",
    "rs=w_356,h_200,cg_true.webp",
  ];

  return (
    <div className="flex flex-col bg-white text-slate-900 font-sans">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-linear-to-br from-slate-50 to-slate-100">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary font-semibold text-sm mb-8">
                <Star className="w-4 h-4 fill-current" />
                <span>Trusted by 500+ Australian Families</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-brand-secondary mb-8 leading-[1.1]">
                Secure Your Future with the{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-primary to-brand-accent">
                  Right Loan
                </span>
              </h1>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
                We simplify the lending process to help you find the best rates
                for home loans, refinancing, and business financing. Expert
                guidance every step of the way.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/free-property-valuation"
                  className="inline-flex items-center justify-center rounded-full bg-brand-primary px-8 py-4 text-lg font-bold text-white shadow-xl shadow-brand-primary/20 transition-all hover:bg-brand-secondary hover:shadow-brand-primary/30 hover:-translate-y-1"
                >
                  Free Property Valuation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-lg font-bold text-brand-secondary shadow-sm border border-slate-200 transition-all hover:bg-slate-50 hover:border-slate-300 hover:-translate-y-1"
                >
                  Explore Services
                </Link>
              </div>
              <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-slate-600 font-medium">
                <div className="flex items-center gap-2">
                  <div className="p-1 rounded-full bg-green-100 text-green-600">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <span>No Hidden Fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="p-1 rounded-full bg-green-100 text-green-600">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <span>Fast Approval</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="p-1 rounded-full bg-green-100 text-green-600">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <span>Top Lenders</span>
                </div>
              </div>
            </div>
            {/* Abstract Graphic */}
            <div className="relative hidden lg:block">
              <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-linear-to-bl from-brand-primary/10 to-brand-accent/10 rounded-full blur-3xl -z-10" />
              <div className="relative bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 max-w-md ml-auto transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <p className="text-slate-500 text-sm font-medium mb-1">
                      Current Best Rate
                    </p>
                    <p className="text-4xl font-bold text-brand-secondary">
                      5.84%
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-brand-primary rounded-full" />
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Loan Amount</span>
                    <span className="font-bold text-brand-secondary">
                      $500,000
                    </span>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full w-1/2 bg-brand-accent rounded-full" />
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Monthly Repayment</span>
                    <span className="font-bold text-brand-secondary">
                      $2,984
                    </span>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t border-slate-100">
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-3">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white"
                        />
                      ))}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-brand-secondary">
                        Join 2,000+ others
                      </p>
                      <p className="text-xs text-slate-500">
                        who saved on their mortgage
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-brand-primary font-bold tracking-wider text-sm uppercase mb-4 block">
              Our Services
            </span>
            <h2 className="text-4xl font-bold text-brand-secondary mb-6">
              Tailored Financial Solutions
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Whether you are buying your first home or expanding your business,
              we have the right loan products for you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="group p-10 rounded-4xl border border-slate-100 bg-white shadow-lg shadow-slate-200/50 hover:shadow-xl hover:border-brand-primary/20 transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-primary group-hover:scale-110 transition-all duration-300">
                <HomeIcon className="w-8 h-8 text-brand-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-brand-secondary mb-4 group-hover:text-brand-primary transition-colors">
                Home Loans
              </h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Competitive rates for first-time buyers and investors. We make
                the mortgage process simple and stress-free.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center text-brand-primary font-bold hover:translate-x-2 transition-transform"
              >
                Learn more <ChevronRight className="w-5 h-5 ml-1" />
              </Link>
            </div>

            {/* Service 2 */}
            <div className="group p-10 rounded-4xl border border-slate-100 bg-white shadow-lg shadow-slate-200/50 hover:shadow-xl hover:border-green-500/20 transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-green-600 group-hover:scale-110 transition-all duration-300">
                <Banknote className="w-8 h-8 text-green-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-brand-secondary mb-4 group-hover:text-green-600 transition-colors">
                Commercial Loans
              </h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Fuel your business growth with our flexible commercial financing
                options tailored to your industry needs.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center text-green-600 font-bold hover:translate-x-2 transition-transform"
              >
                Learn more <ChevronRight className="w-5 h-5 ml-1" />
              </Link>
            </div>

            {/* Service 3 */}
            <div className="group p-10 rounded-4xl border border-slate-100 bg-white shadow-lg shadow-slate-200/50 hover:shadow-xl hover:border-brand-accent/20 transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-accent group-hover:scale-110 transition-all duration-300">
                <Percent className="w-8 h-8 text-brand-accent group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-brand-secondary mb-4 group-hover:text-brand-accent transition-colors">
                Refinancing
              </h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Reduce your monthly payments or unlock equity. We analyze your
                current loan to find better opportunities.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center text-brand-accent font-bold hover:translate-x-2 transition-transform"
              >
                Learn more <ChevronRight className="w-5 h-5 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Lenders Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-brand-secondary mb-4">
              Our Lending Partners
            </h2>
            <p className="text-lg text-slate-600">
              We work with over 40 of Australia&apos;s leading lenders to find
              you the best deal.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-items-center">
            {lenderLogos.map((logo, index) => (
              <div
                key={index}
                className="relative w-full h-20 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-center justify-center border border-slate-100"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={`/lenders/${logo}`}
                    alt="Lender Logo"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 16vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-secondary">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Contact us today to discuss your financial goals and find out how
            much you can borrow. No obligation, just expert advice.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center rounded-full bg-brand-primary px-10 py-5 text-lg font-bold text-white shadow-xl shadow-brand-primary/20 transition-all hover:bg-brand-secondary hover:shadow-brand-primary/30 hover:-translate-y-1"
            >
              Contact Us
            </Link>
            <Link
              href="/free-property-valuation"
              className="inline-flex items-center justify-center rounded-full bg-white px-10 py-5 text-lg font-bold text-brand-secondary shadow-sm border border-slate-200 transition-all hover:bg-slate-100 hover:border-slate-300 hover:-translate-y-1"
            >
              Free Property Valuation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
