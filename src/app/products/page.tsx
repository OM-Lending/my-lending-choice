import Link from "next/link";
import { Check } from "lucide-react";

export default function ProductsPage() {
  const products = [
    {
      category: "Residential",
      items: [
        "Variable Rate Home Loans",
        "Fixed Rate Home Loans",
        "Split Loans",
        "Interest Only Loans",
        "Line of Credit",
        "Low Doc Loans",
      ],
    },
    {
      category: "Investment",
      items: [
        "Investment Property Loans",
        "SMSF Loans",
        "Equity Release",
        "Portfolio Structuring",
      ],
    },
    {
      category: "Business",
      items: [
        "Business Overdrafts",
        "Term Loans",
        "Commercial Property Loans",
        "Equipment Finance",
        "Invoice Finance",
        "Trade Finance",
      ],
    },
  ];

  return (
    <div className="bg-white min-h-screen font-sans">
      <div className="relative py-24 overflow-hidden bg-linear-to-br from-slate-50 to-slate-100">
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="text-brand-primary font-bold tracking-wider text-sm uppercase mb-4 block">
             What We Offer
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-secondary mb-6">Loan Products</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            A wide range of loan products to suit every borrower. We compare hundreds of products from leading lenders.
          </p>
        </div>
      </div>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((category, index) => (
              <div key={index} className="bg-white rounded-4xl border border-slate-200 overflow-hidden shadow-lg shadow-slate-200/50 hover:shadow-xl hover:border-brand-primary/20 transition-all duration-300 hover:-translate-y-1 flex flex-col">
                <div className="bg-brand-secondary p-8 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <h3 className="text-2xl font-bold relative z-10">{category.category}</h3>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <ul className="space-y-4 mb-8 flex-1">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-600">
                        <div className="mt-1 bg-green-100 p-1 rounded-full shrink-0">
                            <Check className="w-3 h-3 text-green-600" />
                        </div>
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-8 border-t border-slate-100 mt-auto">
                    <Link
                      href="/contact-us"
                      className="block w-full text-center bg-brand-primary hover:bg-brand-secondary text-white font-bold py-4 rounded-full shadow-lg shadow-brand-primary/20 transition-all hover:-translate-y-0.5"
                    >
                      Enquire Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

       <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-brand-secondary mb-6">Why choose our products?</h2>
                <p className="text-lg text-slate-600 mb-12 leading-relaxed">
                    We don&apos;t just offer loans; we offer solutions. By accessing a vast network of lenders, we can find products with features that matter to you, whether it&apos;s offset accounts, redraw facilities, or flexible repayment options.
                </p>
                <div className="grid md:grid-cols-3 gap-8 text-left">
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                        <h4 className="font-bold text-brand-secondary text-lg mb-3">Lower Interest Rates</h4>
                        <p className="text-slate-600 leading-relaxed">Access to exclusive rates not available to the general public.</p>
                    </div>
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                        <h4 className="font-bold text-brand-secondary text-lg mb-3">Flexible Terms</h4>
                        <p className="text-slate-600 leading-relaxed">Loan terms that adapt to your changing financial situation.</p>
                    </div>
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                        <h4 className="font-bold text-brand-secondary text-lg mb-3">Fast Processing</h4>
                        <p className="text-slate-600 leading-relaxed">Streamlined application process for quicker approvals.</p>
                    </div>
                </div>
            </div>
        </div>
       </section>
    </div>
  );
}
