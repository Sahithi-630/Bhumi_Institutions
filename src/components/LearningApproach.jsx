import React from 'react';
import { Lightbulb, Compass, Code, Trophy } from 'lucide-react';

export default function LearningApproach() {
  const steps = [
    {
      step: "01",
      title: "Understand",
      tagline: "Build the fundamentals.",
      description: "Students demystify how AI systems, machine learning models, and web architectures function through relatable real-world analogies.",
      icon: Lightbulb,
    },
    {
      step: "02",
      title: "Explore",
      tagline: "Experiment with technology.",
      description: "Students test diverse AI tool categories, prompt structures, and code generators in safe, supervised, mentor-led sandboxes.",
      icon: Compass,
    },
    {
      step: "03",
      title: "Create",
      tagline: "Turn ideas into projects.",
      description: "Students apply their skills to build real digital creations—from live published websites and games to automated study decks.",
      icon: Code,
    },
    {
      step: "04",
      title: "Showcase",
      tagline: "Present what you built.",
      description: "Students articulate their design decisions, explain prompt iterations, demonstrate live links to parents, and earn recognition.",
      icon: Trophy,
    }
  ];

  return (
    <section id="learning-approach" className="py-20 bg-slate-900/30 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-slate-800 text-xs font-medium text-slate-300 mb-3">
            <span>PEDAGOGY & METHODOLOGY</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            We Don't Just Teach. <span className="text-blue-400">We Let Students Create.</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base mt-3 max-w-2xl mx-auto">
            Traditional education often restricts students to passive theory. Our 4-stage cyclical framework guarantees students leave every cohort with real digital creations.
          </p>
        </div>

        {/* 4-Step Timeline: Calm, Unified Tone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="flex flex-col p-6 rounded-2xl bg-slate-900/60 border border-slate-800 text-left"
              >
                {/* Step Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono font-bold text-xl text-slate-500">
                    {item.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700/60 flex items-center justify-center text-blue-400">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Title & Tagline */}
                <h3 className="font-heading font-bold text-xl text-white mb-1">
                  {item.title}
                </h3>
                <p className="font-medium text-xs text-blue-400 mb-3">
                  {item.tagline}
                </p>

                {/* Description */}
                <p className="text-slate-400 text-xs leading-relaxed mt-auto">
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
