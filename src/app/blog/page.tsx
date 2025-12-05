import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, User } from "lucide-react";
import { blogPosts } from "@/data/blog-posts";

export const metadata: Metadata = {
  title: "Blog & News | My Lending Choice",
  description:
    "Latest lending insights, home loan tips, and refinancing guidance from the My Lending Choice team.",
};

export default function BlogPage() {
  return (
    <div className="bg-white min-h-screen font-sans">
      <div className="bg-brand-secondary text-white py-24 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="text-brand-primary font-bold tracking-wider text-sm uppercase mb-6 block">
            Blog & News
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Latest{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-primary to-brand-accent">
              Insights
            </span>
          </h1>
          <p className="text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Expert advice, market updates, and financial tips to help you make
            smarter lending decisions.
          </p>
        </div>
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/4 opacity-5">
          <svg
            viewBox="0 0 1024 1024"
            className="h-256 w-5xl"
            aria-hidden="true"
          >
            <circle cx="512" cy="512" r="512" fill="white" />
          </svg>
        </div>
      </div>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="flex flex-col bg-white rounded-4xl overflow-hidden border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:border-brand-primary/20 transition-all duration-300 group"
              >
                <div className="h-64 bg-slate-200 w-full relative overflow-hidden">
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
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
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
                      href={`/blog/${post.slug}`}
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
