import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles, MessageCircle } from 'lucide-react';
import { faqs } from '../data/faqs';
import { siteConfig } from '../data/siteConfig';

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-24 bg-navy-950 border-t border-slate-800/80 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-brand-orange mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>COMMONLY ASKED QUESTIONS</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Frequently Asked Questions
          </h2>

          <p className="text-slate-400 text-sm sm:text-base mt-4 max-w-xl mx-auto">
            Everything students and parents need to know about our curriculum, safety standards, and batch logistics.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4 text-left">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isOpen
                    ? 'bg-navy-900/90 border-brand-blue/40 shadow-lg shadow-brand-blue/5'
                    : 'bg-navy-900/40 border-slate-800 hover:border-slate-700'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left font-heading font-semibold text-base sm:text-lg text-white"
                  aria-expanded={isOpen}
                >
                  <span className="flex-1">{faq.question}</span>
                  <div
                    className={`w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-brand-blue text-white' : 'text-slate-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-slate-800/60 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions WhatsApp block */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-heading font-bold text-white text-base">
              Have another question not answered here?
            </h4>
            <p className="text-slate-400 text-xs sm:text-sm mt-0.5">
              Speak directly with our counselor on WhatsApp for instant guidance.
            </p>
          </div>

          <a
            href={siteConfig.createWhatsAppUrl("Hi Bhumi Institutions! I have a question about the course schedule and batch timings.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-950/70 hover:bg-emerald-900/80 border border-emerald-600/40 text-emerald-300 text-xs sm:text-sm font-semibold transition-all shrink-0"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Chat on WhatsApp ({siteConfig.whatsappFormatted})</span>
          </a>
        </div>

      </div>
    </section>
  );
}
