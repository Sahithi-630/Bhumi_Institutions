import React from 'react';
import { 
  Wrench, 
  Smile, 
  Rocket, 
  Sparkles, 
  ShieldCheck, 
  FolderGit2 
} from 'lucide-react';

export default function WhyBhumiGrid() {
  const features = [
    {
      title: "Practical Learning",
      tagline: "Students learn by doing.",
      description: "We believe conceptual clarity comes from active participation. Hands-on coding, prompt testing, and live creation make up 80% of our curriculum.",
      icon: Wrench,
    },
    {
      title: "Beginner Friendly",
      tagline: "No prior AI experience required.",
      description: "Designed from ground zero. No complex math prerequisites or prior coding needed—just natural curiosity and an interest in technology.",
      icon: Smile,
    },
    {
      title: "Future-Ready Skills",
      tagline: "Introduce students to emerging technologies.",
      description: "Equip young learners with understanding of modern generative models, prompt engineering, and digital workflows shaping tomorrow's careers.",
      icon: Rocket,
    },
    {
      title: "Creative Thinking",
      tagline: "Use technology to turn ideas into creations.",
      description: "We don't teach students to be passive screen consumers. We teach them to treat AI as a canvas to amplify storytelling, design, and innovation.",
      icon: Sparkles,
    },
    {
      title: "Responsible AI",
      tagline: "Teach students to use AI thoughtfully and safely.",
      description: "Digital safety, privacy awareness, academic integrity, and fact verification are woven directly into every single module we teach.",
      icon: ShieldCheck,
    },
    {
      title: "Project-Based",
      tagline: "Students finish with something they can showcase.",
      description: "Every student graduates with real capstone projects—published websites, interactive games, or study systems—to share with parents and teachers.",
      icon: FolderGit2,
    }
  ];

  return (
    <section className="py-20 bg-navy-950 border-b border-slate-800/80 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-slate-800 text-xs font-medium text-slate-300 mb-3">
            <span>THE BHUMI ADVANTAGE</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Why Learn with Bhumi?
          </h2>

          <p className="text-slate-400 text-sm sm:text-base mt-3 max-w-2xl mx-auto">
            A purposeful curriculum designed to nurture confident creators, critical thinkers, and responsible digital leaders for the modern world.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 text-left"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700/60 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-blue-400" />
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
            );
          })}
        </div>

      </div>
    </section>
  );
}
