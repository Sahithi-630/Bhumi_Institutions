import React from 'react';
import { MessageCircle } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function WhatsAppFloatingBtn() {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <a
        href={siteConfig.createWhatsAppUrl("Hi Bhumi Institutions! I have a question regarding course admissions.")}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-emerald-700 hover:bg-emerald-600 text-white shadow-md border border-emerald-600/50 transition-colors text-xs font-semibold"
        aria-label="Enquire on WhatsApp"
      >
        <MessageCircle className="w-4 h-4 fill-white/20" />
        <span className="hidden sm:inline">WhatsApp Enquiry</span>
      </a>
    </div>
  );
}
