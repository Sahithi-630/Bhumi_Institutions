import React, { useState } from 'react';
import { ChevronDown, BookOpen, CheckCircle, Sparkles, Laptop } from 'lucide-react';

export default function CurriculumAccordion({ curriculum }) {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const toggleModule = (index) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  return (
    <div className="space-y-4 text-left">
      {curriculum.map((item, index) => {
        const isExpanded = expandedIndex === index;
        return (
          <div
            key={index}
            className={`rounded-2xl border transition-all overflow-hidden ${
              isExpanded
                ? 'bg-navy-900/90 border-brand-blue/50 shadow-lg shadow-brand-blue/5'
                : 'bg-navy-900/40 border-slate-800 hover:border-slate-700'
            }`}
          >
            {/* Accordion Header */}
            <button
              onClick={() => toggleModule(index)}
              className="w-full px-4 py-4 sm:px-6 sm:py-5 flex items-center justify-between gap-3 sm:gap-4 text-left font-heading"
              aria-expanded={isExpanded}
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3.5">
                <span className="font-mono text-[11px] sm:text-xs font-bold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-slate-800 text-blue-400 border border-slate-700 w-fit">
                  {item.module}
                </span>
                <h4 className="font-bold text-sm sm:text-lg text-white leading-snug">
                  {item.title}
                </h4>
              </div>

              <div
                className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                  isExpanded ? 'rotate-180 bg-blue-600 text-white' : 'text-slate-400'
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            {/* Accordion Body */}
            {isExpanded && (
              <div className="px-4 pb-5 pt-2 sm:px-6 sm:pb-6 border-t border-slate-800/80 space-y-4 animate-in fade-in duration-200">
                {/* Topics Covered */}
                <div className="space-y-2">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                    Topics Covered:
                  </span>
                  <ul className="space-y-2 text-sm text-slate-300">
                    {item.topics.map((topic, tIdx) => (
                      <li key={tIdx} className="flex items-start gap-2.5">
                        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Practical Activity Highlight */}
                {item.activity && (
                  <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-brand-orange/20 text-brand-orange flex items-center justify-center shrink-0">
                      <Laptop className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-brand-orange block">
                        Hands-On Practical Lab:
                      </span>
                      <p className="text-xs sm:text-sm text-slate-200 mt-0.5">
                        {item.activity}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
