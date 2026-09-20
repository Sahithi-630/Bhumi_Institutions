import React from 'react';
import { 
  BookOpen, 
  Globe, 
  Presentation, 
  Image as ImageIcon, 
  UserCheck, 
  Gamepad2
} from 'lucide-react';

export default function StudentProjectsSection() {
  const projects = [
    {
      title: "AI Story Creator",
      tagline: "Create stories using AI.",
      description: "Original multi-chapter adventure stories with branching plots, character concept sketches, and dialogue written through structured prompt engineering.",
      icon: BookOpen,
      badge: "Storytelling"
    },
    {
      title: "AI-Powered Website",
      tagline: "Build a functional website using AI.",
      description: "Live responsive websites created using AI code assistants—complete with navigation bars, interactive buttons, responsive grids, and live links.",
      icon: Globe,
      badge: "Live Coding"
    },
    {
      title: "AI Presentation",
      tagline: "Create engaging presentations.",
      description: "Impactful school presentations transforming complex science or history topics into visual slide decks, summaries, and structured speaking scripts.",
      icon: Presentation,
      badge: "Productivity"
    },
    {
      title: "Creative Image Project",
      tagline: "Explore AI-assisted visual creation.",
      description: "Digital art concepts, book covers, futuristic eco-city designs, and illustrated school banners generated with prompt engineering and human taste.",
      icon: ImageIcon,
      badge: "Visual Design"
    },
    {
      title: "Student Portfolio",
      tagline: "Build a personal website.",
      description: "A polished personal student portfolio website showcasing academic achievements, sports, creative projects, and hobbies to share with schools.",
      icon: UserCheck,
      badge: "Web Portfolio"
    },
    {
      title: "Interactive 2D Game",
      tagline: "Design playable arcade quests.",
      description: "Retro 2D arcade games with playable character physics, asteroid dodgers, custom sprites, and victory states built with AI logic assistants.",
      icon: Gamepad2,
      badge: "Logic & Play"
    }
  ];

  return (
    <section className="py-20 bg-navy-950 border-b border-slate-800/80 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-slate-800 text-xs font-medium text-slate-300 mb-3">
            <span>REAL STUDENT OUTCOMES</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            What Can Students Build?
          </h2>

          <p className="text-slate-400 text-sm sm:text-base mt-3 max-w-2xl mx-auto">
            Practical projects, tangible artifacts, and shareable web links. Here is a glimpse of what young learners create during Bhumi Institutions cohorts.
          </p>
        </div>

        {/* Project Cards Grid: Calm & Consistent */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700/60 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <span className="text-[11px] font-medium px-2.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-lg text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs font-medium text-blue-400 uppercase tracking-wider mb-2">
                    {item.tagline}
                  </p>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span>Student Project</span>
                  <span className="font-mono text-slate-500">Classes 6–12</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
