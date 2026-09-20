import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MessageCircle, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin, 
  Sparkles, 
  ArrowUpRight,
  ShieldCheck,
  Bot
} from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { courses } from '../data/courses';
import logoImg from '../assets/bhumi-logo.jpg';

export default function Footer({ onOpenEnquiry }) {
  return (
    <footer className="bg-navy-950 border-t border-slate-800/80 pt-16 pb-12 relative overflow-hidden">
      {/* Subtle background ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px] bg-brand-blue/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Col 1 & 2: Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3 group inline-block">
              <div className="relative w-12 h-12 rounded-full p-[2px] bg-gradient-to-tr from-brand-orange via-amber-400 to-brand-blue shadow-lg shadow-brand-orange/20">
                <img
                  src={logoImg}
                  alt="Bhumi Institutions Official Logo"
                  className="w-full h-full rounded-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-xl tracking-wider text-white">
                  BHUMI <span className="text-brand-orange text-sm font-bold tracking-normal">INSTITUTIONS</span>
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  AI Education For Classes 6–12
                </span>
              </div>
            </Link>

            <p className="text-slate-300 font-medium text-base leading-relaxed max-w-sm pt-1">
              {siteConfig.tagline}
            </p>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              {siteConfig.supportingTagline} Preparing young minds with future-ready skills, safe practices, and real-world project portfolios.
            </p>

            {/* Direct WhatsApp Action in Footer */}
            <div className="pt-2">
              <a
                href={siteConfig.createWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-950/60 border border-emerald-600/40 text-emerald-300 text-xs font-semibold hover:bg-emerald-900/60 transition-all hover:scale-105"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Admissions: {siteConfig.whatsappFormatted}</span>
              </a>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-wider">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-slate-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-slate-400 hover:text-white transition-colors">
                  All Courses
                </Link>
              </li>
              <li>
                <Link to="/why-bhumi" className="text-slate-400 hover:text-white transition-colors">
                  Why Bhumi
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-white transition-colors">
                  Contact & Enquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Featured Courses */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-wider">
              AI Programs
            </h4>
            <ul className="space-y-2.5 text-sm">
              {courses.map((course) => (
                <li key={course.id}>
                  <Link
                    to={`/courses/${course.slug}`}
                    className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="truncate">{course.title}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-blue-400" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Contact & Connect */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-wider">
              Connect
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <a
                  href={siteConfig.createWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{siteConfig.whatsappFormatted}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:+91${siteConfig.alternatePhone}`}
                  className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>{siteConfig.alternatePhoneFormatted}</span>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-300 hover:text-pink-400 transition-colors"
                >
                  <Instagram className="w-4 h-4 text-pink-400 shrink-0" />
                  <span>@{siteConfig.instagramHandle}</span>
                </a>
              </li>
              <li className="flex items-center gap-2 text-slate-400">
                <MapPin className="w-4 h-4 text-brand-orange shrink-0" />
                <span>{siteConfig.location}</span>
              </li>
            </ul>

            <div className="pt-2">
              <button
                onClick={() => onOpenEnquiry && onOpenEnquiry()}
                className="w-full py-2 px-3 rounded-lg text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Request Callback / Enquiry</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Strip: Copyright & Safety Promise */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Safe, Age-Appropriate AI Learning Environment for School Students</span>
          </div>
          <p>© {siteConfig.academicYear} Bhumi Institutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
