import React from 'react';
import { MessageCircle } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function WhatsAppFloatingBtn() {
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40">
      <a
        href={siteConfig.createWhatsAppUrl("Hi Bhumi Institutions! I have a question regarding course admissions.")}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 p-3 sm:px-3.5 sm:py-2.5 rounded-full bg-emerald-700 hover:bg-emerald-600 text-white shadow-md border border-emerald-600/50 transition-colors text-xs font-semibold"
        aria-label="Enquire on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 sm:w-4 sm:h-4 fill-white/20" />
        <span className="hidden sm:inline">WhatsApp Enquiry</span>
      </a>
    </div>
  );
}
