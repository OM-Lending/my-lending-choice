import Link from "next/link";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-secondary text-slate-300 py-16 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold text-white">
                My Lending Choice
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-sm">
              Your trusted partner in finding the best loan solutions. We work
              with top lenders to secure the best rates for your future.
            </p>
            <div className="flex gap-4 pt-2">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <Link
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-brand-primary hover:text-white transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: "Home", href: "/" },
                { name: "Services", href: "/services" },
                { name: "Products", href: "/products" },
                {
                  name: "Free Property Valuation",
                  href: "/free-property-valuation",
                },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-brand-primary transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-4">
              {[
                { name: "About Us", href: "/about-us" },
                { name: "Contact Us", href: "/contact-us" },
                { name: "Blog", href: "/blog" },
                { name: "Privacy Policy", href: "#" },
                { name: "Terms of Service", href: "#" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-brand-primary transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact Info</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-brand-primary shrink-0" />
                <span className="text-slate-400">
                  Suite 1211/87 Liverpool St,
                  <br />
                  Sydney NSW 2000
                </span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-brand-primary shrink-0" />
                <Link
                  href="mailto:application@mylendingchoice.com.au"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  application@mylendingchoice.com.au
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} My Lending Choice. All rights reserved.
          </p>
          <p className="text-sm text-slate-600">
            ABN: 12 345 678 901 | ACL: 123456
          </p>
        </div>
      </div>
    </footer>
  );
}
