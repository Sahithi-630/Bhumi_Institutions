import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bot, Globe, Cpu, Check } from 'lucide-react';

export default function CourseComparison() {
  const comparisonData = [
    {
      id: "ai-basics",
      slug: "ai-basics",
      title: "AI Basics",
      icon: Bot,
      bestFor: "Students completely new to AI.",
      focus: "Understanding AI.",
      classes: "Classes 6–12",
      idealStudent: "Curious about how AI works, loves stories, games, and quizzes.",
      keyTakeaway: "Clear grasp of AI concepts, prompt fundamentals & safety.",
    },
    {
      id: "build-websites-with-ai",
      slug: "build-websites-with-ai",
      title: "Build Websites with AI",
      icon: Globe,
      bestFor: "Students interested in technology and websites.",
      focus: "Creating websites.",
      classes: "Classes 8–12",
      idealStudent: "Eager to build a personal online presence, portfolio, or club site.",
      keyTakeaway: "A live published website created with HTML, CSS & AI coding tools.",
    },
    {
      id: "ai-tools-mastery",
      slug: "ai-tools-mastery",
      title: "AI Tools Mastery",
      icon: Cpu,
      bestFor: "Students who want to explore different AI applications.",
      focus: "AI tools and productivity.",
      classes: "Classes 6–12",
      idealStudent: "Wants to boost school research, presentations, writing, and design.",
      keyTakeaway: "Mastery over 9 AI categories and multi-tool workflow pipelines.",
    }
  ];

  return (
    <section className="py-20 bg-slate-900/30 border-b border-slate-800/80 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-slate-800 text-xs font-medium text-slate-300 mb-3">
            <span>COURSE GUIDANCE</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Find the Right Starting Point
          </h2>

          <p className="text-slate-400 text-sm sm:text-base mt-3 max-w-2xl mx-auto">
            Every student begins at a different point of curiosity. Each course provides a complete, rewarding experience on its own without requiring others first.
          </p>
        </div>

        {/* 3 Columns Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {comparisonData.map((col) => {
            const Icon = col.icon;
            return (
              <div
                key={col.id}
                className="flex flex-col p-6 sm:p-7 rounded-2xl bg-slate-900/60 border border-slate-800 text-left"
              >
                {/* Header */}
                <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700/60 flex items-center justify-center mb-4 text-blue-400">
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="font-heading font-bold text-xl text-white mb-3">
                  {col.title}
                </h3>

                {/* Best For Block */}
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80 mb-3">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block mb-0.5">
                    Best for:
                  </span>
                  <p className="text-white text-xs sm:text-sm">
                    {col.bestFor}
                  </p>
                </div>

                {/* Focus Block */}
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80 mb-4">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block mb-0.5">
                    Focus:
                  </span>
                  <p className="font-medium text-xs sm:text-sm text-blue-400">
                    {col.focus}
                  </p>
                </div>

                {/* Detailed Guidance */}
                <div className="space-y-2.5 mb-6 flex-1 text-xs text-slate-300">
                  <div className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                    <span><strong>Eligibility:</strong> {col.classes}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                    <span><strong>Ideal Student:</strong> {col.idealStudent}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                    <span><strong>Key Outcome:</strong> {col.keyTakeaway}</span>
                  </div>
                </div>

                {/* Explore Course CTA */}
                <Link
                  to={`/courses/${col.slug}`}
                  className="w-full py-2.5 px-4 rounded-xl font-semibold text-xs sm:text-sm text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors flex items-center justify-center gap-2"
                >
                  <span>Explore Course</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
