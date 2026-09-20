import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, Send } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function CTASection({ onOpenEnquiry }) {
  return (
    <section className="py-20 bg-navy-950 border-t border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-12 rounded-2xl bg-slate-900/80 border border-slate-800 text-center">
          
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-slate-800 text-xs font-medium text-slate-300 mb-4">
            <span>ADMISSIONS OPEN FOR 2026 COHORTS</span>
          </div>

          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-white tracking-tight leading-tight max-w-xl mx-auto">
            Start Your AI Journey
          </h2>

          <p className="text-slate-300 text-sm sm:text-base mt-3 max-w-lg mx-auto leading-relaxed">
            “Explore our courses and find the right program for your learning journey.”
          </p>

          <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-md mx-auto">
            Interactive batches designed specifically for school students from Classes 6 to 12.
          </p>

          {/* Action Buttons: Responsive Stacking on Mobile */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-center gap-3 pt-6">
            <Link
              to="/courses"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm w-full sm:w-auto text-center"
            >
              <span>Explore Courses</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <button
              onClick={() => onOpenEnquiry && onOpenEnquiry()}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors w-full sm:w-auto text-center"
            >
              <Send className="w-4 h-4 text-blue-400" />
              <span>Enquire Now</span>
            </button>

            <a
              href={siteConfig.createWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-medium text-emerald-300 bg-emerald-950/50 hover:bg-emerald-900/50 border border-emerald-800/50 transition-colors w-full sm:w-auto text-center"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>WhatsApp: {siteConfig.whatsappFormatted}</span>
            </a>
          </div>

          <div className="pt-6 text-xs text-slate-400 flex flex-wrap items-center justify-center gap-3 sm:gap-5">
            <span>✓ No coding required</span>
            <span>✓ Verified certificate</span>
            <span>✓ Structured batches</span>
          </div>

        </div>
      </div>
    </section>
  );
}
