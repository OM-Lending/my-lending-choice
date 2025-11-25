"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? "bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm" 
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 h-24 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group pt-2">
          <div className="relative w-72 h-20 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/logo.jpg"
              alt="My Lending Choice Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {[
            { name: "Home", href: "/" },
            { name: "Services", href: "/services" },
            { name: "Products", href: "/products" },
            { name: "Free Valuation", href: "/free-property-valuation" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold text-slate-600 hover:text-brand-primary transition-colors relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-brand-primary after:transition-all hover:after:w-full"
            >
              {item.name}
            </Link>
          ))}
          
          {/* More Dropdown */}
          <div className="relative group">
            <button
              onClick={() => setIsMoreOpen(!isMoreOpen)}
              onMouseEnter={() => setIsMoreOpen(true)}
              className="flex items-center gap-1 text-sm font-semibold text-slate-600 hover:text-brand-primary transition-colors focus:outline-none"
            >
              More <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
            </button>
            
            {/* Dropdown Menu */}
            <div 
              className={`absolute right-0 top-full mt-4 w-56 bg-white rounded-xl shadow-xl border border-slate-100 py-3 transition-all duration-200 origin-top-right ${
                isMoreOpen ? "opacity-100 scale-100 visible translate-y-0" : "opacity-0 scale-95 invisible -translate-y-2"
              }`}
              onMouseEnter={() => setIsMoreOpen(true)}
              onMouseLeave={() => setIsMoreOpen(false)}
            >
              {[
                { name: "Contact Us", href: "/contact-us" },
                { name: "About Us", href: "/about-us" },
                { name: "Blog", href: "/blog" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-6 py-2.5 text-sm font-medium text-slate-600 hover:bg-brand-primary/5 hover:text-brand-primary transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        {/* Call to Action */}
        <div className="hidden lg:flex items-center gap-6">
          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center rounded-full bg-brand-primary px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-brand-primary/25 transition-all hover:bg-brand-secondary hover:shadow-brand-primary/30 hover:-translate-y-0.5 active:translate-y-0"
          >
            Apply Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-slate-600 hover:text-brand-primary transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ top: "96px" }}
      >
        <div className="p-6 space-y-6 h-full overflow-y-auto pb-24">
          <div className="space-y-2">
            {[
              { name: "Home", href: "/" },
              { name: "Services", href: "/services" },
              { name: "Products", href: "/products" },
              { name: "Free Property Valuation", href: "/free-property-valuation" },
              { name: "Contact Us", href: "/contact-us" },
              { name: "About Us", href: "/about-us" },
              { name: "Blog", href: "/blog" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-lg font-semibold text-slate-900 hover:text-brand-primary py-2 border-b border-slate-50 last:border-0"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="pt-6 flex flex-col gap-4">
            <Link
              href="/contact-us"
              className="w-full inline-flex items-center justify-center rounded-full bg-brand-primary px-6 py-4 text-lg font-bold text-white shadow-xl transition-all active:scale-95"
              onClick={() => setIsMenuOpen(false)}
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
