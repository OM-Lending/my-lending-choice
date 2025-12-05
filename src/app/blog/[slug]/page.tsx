import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Home,
  PhoneCall,
  User,
} from "lucide-react";
import { blogPosts, getPostBySlug } from "@/data/blog-posts";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Blog | My Lending Choice",
    };
  }

  return {
    title: `${post.title} | My Lending Choice`,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-white min-h-screen font-sans">
      <div className="relative overflow-hidden bg-brand-secondary text-white">
        <div className="absolute inset-y-0 right-0 w-1/2 bg-brand-primary/10 blur-3xl" />
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/4 opacity-5">
          <svg viewBox="0 0 1024 1024" className="h-256 w-5xl" aria-hidden="true">
            <circle cx="512" cy="512" r="512" fill="white" />
          </svg>
        </div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-bold text-brand-primary hover:text-brand-accent transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          <div className="flex flex-col gap-3 md:gap-4">
            <span className="inline-flex self-start text-brand-primary font-bold tracking-wider text-sm uppercase">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              {post.title}
            </h1>
            <p className="text-lg text-slate-200 max-w-3xl leading-relaxed">
              {post.excerpt}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-200">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-slate-200" />
                <span className="font-bold">
                  {post.author}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-slate-200" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-slate-200" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="space-y-12">
          {post.content.map((section) => (
            <section key={section.heading} className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-secondary">
                {section.heading}
              </h2>
              {section.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-lg leading-relaxed text-slate-700"
                >
                  {paragraph}
                </p>
              ))}
              {section.list && (
                <ul className="list-disc list-outside pl-6 space-y-2 text-slate-700">
                  {section.list.map((item) => (
                    <li key={item} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <div className="p-8 rounded-3xl border border-slate-100 bg-slate-50">
            <div className="flex items-center gap-3 mb-4">
              <Home className="w-5 h-5 text-brand-primary" />
              <h3 className="text-xl font-bold text-brand-secondary">
                Ready to explore your options?
              </h3>
            </div>
            <p className="text-slate-700 mb-6">
              Talk with our brokers to compare lenders and structure a loan that
              fits your goals.
            </p>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 font-bold text-brand-primary hover:text-brand-secondary transition-colors"
            >
              Speak to a broker
            </Link>
          </div>
          <div className="p-8 rounded-3xl border border-slate-100 bg-brand-primary/5">
            <div className="flex items-center gap-3 mb-4">
              <PhoneCall className="w-5 h-5 text-brand-primary" />
              <h3 className="text-xl font-bold text-brand-secondary">
                Get a free property valuation
              </h3>
            </div>
            <p className="text-slate-700 mb-6">
              Understand your borrowing position and equity with a quick
              valuation request.
            </p>
            <Link
              href="/free-property-valuation"
              className="inline-flex items-center gap-2 font-bold text-brand-primary hover:text-brand-secondary transition-colors"
            >
              Request valuation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

