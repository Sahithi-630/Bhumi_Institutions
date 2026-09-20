import React from 'react';
import { GraduationCap, Wrench, Cpu } from 'lucide-react';

export default function TrustStrip() {
  const cards = [
    {
      title: "Classes 6–12",
      tagline: "Designed specifically for school students.",
      description: "Structured age-appropriate cohorts ensuring concepts match developmental maturity and academic schedules.",
      icon: GraduationCap,
    },
    {
      title: "Practical Learning",
      tagline: "Learn through activities and projects.",
      description: "No passive memorization. Every student engages in live prompts, hands-on web coding, and creative digital builds.",
      icon: Wrench,
    },
    {
      title: "AI-Focused",
      tagline: "Understand and use modern AI technology.",
      description: "Demystifying generative models, large language assistants, and creative workflows with a focus on safety and ethics.",
      icon: Cpu,
    }
  ];

  return (
    <section className="py-14 border-b border-slate-800/80 bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-slate-800 text-xs font-medium text-slate-300 mb-2">
            <span>The Bhumi Standard</span>
          </div>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-white tracking-tight">
            Built for the Next Generation
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            A purposeful, structured educational model empowering students to understand technology with calm confidence.
          </p>
        </div>

        {/* 3 Calm Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 text-left"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700/60 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <span className="text-xs font-mono text-slate-500">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="font-heading font-semibold text-lg text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-slate-300 font-medium text-xs mb-2">
                  {item.tagline}
                </p>
                <p className="text-slate-400 text-xs leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
