import React from 'react';
import { Quote, Sparkles, UserCheck } from 'lucide-react';
import { testimonials } from '../data/testimonials';

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-navy-950 border-t border-slate-800/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-brand-orange mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>COMMUNITY FEEDBACK</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Learning That Inspires
          </h2>

          <p className="text-slate-400 text-sm sm:text-base mt-4 max-w-2xl mx-auto">
            Hearing from parents and school students as they discover, experiment, and turn their creative ideas into real projects with Bhumi Institutions.
          </p>
        </div>

        {/* 3 Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-navy-900/60 border border-slate-800 glass-card-hover text-left relative group"
            >
              <Quote className="w-8 h-8 text-slate-700 group-hover:text-blue-500/50 transition-colors mb-4" />

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed italic mb-6">
                “{item.quote}”
              </p>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <h4 className="font-heading font-bold text-white text-sm">
                    {item.author}
                  </h4>
                  <p className="text-xs text-slate-400">
                    {item.relation}
                  </p>
                </div>

                <span className="text-[11px] px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                  {item.badge}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
