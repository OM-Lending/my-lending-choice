import Link from "next/link";
import {
  Home as HomeIcon,
  Banknote,
  Percent,
  Briefcase,
  Building,
  Car,
  ChevronRight,
} from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      icon: <HomeIcon className="w-8 h-8 text-brand-primary" />,
      title: "Home Loans",
      description:
        "Buying your first home or moving to a new one? We help you navigate the complex world of mortgages to find the best rates and terms that suit your lifestyle and budget.",
    },
    {
      icon: <Banknote className="w-8 h-8 text-green-600" />,
      title: "Commercial Loans",
      description:
        "Ready to take your business to the next level? Our commercial lending solutions provide the capital you need for expansion, equipment, or operational costs.",
    },
    {
      icon: <Percent className="w-8 h-8 text-brand-accent" />,
      title: "Refinancing",
      description:
        "Interest rates change. If you're paying too much on your current loan, we can help you refinance to a lower rate, potentially saving you thousands over the life of your loan.",
    },
    {
      icon: <Briefcase className="w-8 h-8 text-purple-600" />,
      title: "Business Loans",
      description:
        "From small business loans to lines of credit, we offer flexible financing options to help maintain cash flow and fund growth opportunities.",
    },
    {
      icon: <Building className="w-8 h-8 text-teal-600" />,
      title: "Construction Loans",
      description:
        "Building your dream home or a commercial property? Our construction loans are designed to support you through every stage of the building process.",
    },
    {
      icon: <Car className="w-8 h-8 text-red-600" />,
      title: "Vehicle & Asset Finance",
      description:
        "Need a new car for yourself or a fleet for your business? We offer competitive finance rates for vehicles and other substantial assets.",
    },
  ];

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Header */}
      <div className="relative py-24 overflow-hidden bg-linear-to-br from-slate-50 to-slate-100">
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="text-brand-primary font-bold tracking-wider text-sm uppercase mb-4 block">
            What We Do
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-secondary mb-6">
            Our Services
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Comprehensive financial solutions tailored to your unique needs. From home loans to business financing, we&apos;ve got you covered.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-10 rounded-4xl border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:border-brand-primary/20 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="bg-slate-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-white group-hover:shadow-md transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-brand-secondary mb-4 group-hover:text-brand-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center text-brand-primary font-bold hover:translate-x-2 transition-transform"
                >
                  Get Started <ChevronRight className="w-5 h-5 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-secondary">Not sure what you need?</h2>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Our expert team is here to guide you through the options and find the best solution for your situation.
          </p>
          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center rounded-full bg-brand-primary px-10 py-5 text-lg font-bold text-white shadow-xl shadow-brand-primary/20 transition-all hover:bg-brand-secondary hover:shadow-brand-primary/30 hover:-translate-y-1"
          >
            Talk to an Expert
          </Link>
        </div>
      </section>
    </div>
  );
}
