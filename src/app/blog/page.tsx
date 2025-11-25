import Link from "next/link";
import { Calendar, Clock, User } from "lucide-react";

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: "5 Tips for First-Home Buyers in 2024",
      excerpt:
        "Navigating the property market as a first-time buyer can be daunting. Here are our top strategies to help you secure your dream home.",
      date: "Oct 12, 2024",
      author: "Sarah Jenkins",
      category: "Home Buying",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "Understanding Fixed vs. Variable Rates",
      excerpt:
        "Should you lock in your rate or go variable? We break down the pros and cons of each to help you make an informed decision.",
      date: "Oct 05, 2024",
      author: "Michael Chen",
      category: "Finance Guides",
      readTime: "7 min read",
    },
    {
      id: 3,
      title: "How to Improve Your Borrowing Power",
      excerpt:
        "Want to increase your loan approval chances? Discover practical steps you can take today to boost your borrowing capacity.",
      date: "Sep 28, 2024",
      author: "Sarah Jenkins",
      category: "Credit Tips",
      readTime: "6 min read",
    },
    {
      id: 4,
      title: "The Benefits of Refinancing Your Home Loan",
      excerpt:
        "Refinancing isn't just about lower rates. Learn how it can help you access equity for renovations or investments.",
      date: "Sep 15, 2024",
      author: "David Wilson",
      category: "Refinancing",
      readTime: "4 min read",
    },
  ];

  return (
    <div className="bg-white min-h-screen font-sans">
      <div className="relative py-24 overflow-hidden bg-linear-to-br from-slate-50 to-slate-100">
        <div className="container mx-auto px-4 text-center relative z-10">
           <span className="text-brand-primary font-bold tracking-wider text-sm uppercase mb-4 block">
             Blog & News
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-secondary mb-6">Latest Insights</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Expert advice, market updates, and financial tips to help you make smarter lending decisions.
          </p>
        </div>
      </div>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {posts.map((post) => (
              <article
                key={post.id}
                className="flex flex-col bg-white rounded-4xl overflow-hidden border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:border-brand-primary/20 transition-all duration-300 group"
              >
                <div className="h-64 bg-slate-200 w-full relative overflow-hidden">
                    {/* Image Placeholder */}
                    <div className="absolute inset-0 bg-brand-secondary/5 flex items-center justify-center text-slate-400 group-hover:scale-105 transition-transform duration-500">
                        <span className="font-medium">Blog Image Placeholder</span>
                    </div>
                </div>
                <div className="p-10 flex-1 flex flex-col">
                  <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
                    <span className="bg-brand-primary/10 text-brand-primary px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-wide">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1.5 font-medium">
                      <Calendar className="w-4 h-4 text-slate-400" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1.5 font-medium">
                      <Clock className="w-4 h-4 text-slate-400" />
                      {post.readTime}
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-brand-secondary mb-4 group-hover:text-brand-primary transition-colors">
                    <Link href="#">{post.title}</Link>
                  </h2>
                  <p className="text-slate-600 mb-8 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-brand-secondary">
                         <User className="w-5 h-5" />
                      </div>
                      <span className="text-sm font-bold text-brand-secondary">
                        {post.author}
                      </span>
                    </div>
                    <Link
                      href="#"
                      className="text-brand-primary font-bold text-sm hover:text-brand-secondary hover:underline decoration-2 underline-offset-4"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
