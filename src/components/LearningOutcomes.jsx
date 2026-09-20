import React from 'react';
import { 
  Lightbulb, 
  Compass, 
  Sparkles, 
  Presentation, 
  Code2, 
  Wand2, 
  Layout, 
  Share2,
  Layers,
  Sliders,
  Workflow,
  CheckCircle2,
  Binary,
  Image as ImageIcon,
  Gamepad,
  Trophy
} from 'lucide-react';

export default function LearningOutcomes({ outcomes }) {
  const renderIcon = (iconName) => {
    const iconClass = "w-5 h-5 text-blue-400";
    switch (iconName) {
      case 'Lightbulb': return <Lightbulb className={iconClass} />;
      case 'Compass': return <Compass className={iconClass} />;
      case 'Sparkles': return <Sparkles className={iconClass} />;
      case 'Presentation': return <Presentation className={iconClass} />;
      case 'Code2': return <Code2 className={iconClass} />;
      case 'Wand2': return <Wand2 className={iconClass} />;
      case 'Layout': return <Layout className={iconClass} />;
      case 'Share2': return <Share2 className={iconClass} />;
      case 'Layers': return <Layers className={iconClass} />;
      case 'Sliders': return <Sliders className={iconClass} />;
      case 'Workflow': return <Workflow className={iconClass} />;
      case 'CheckCircle2': return <CheckCircle2 className={iconClass} />;
      case 'Binary': return <Binary className={iconClass} />;
      case 'Image': return <ImageIcon className={iconClass} />;
      case 'Gamepad': return <Gamepad className={iconClass} />;
      case 'Trophy': return <Trophy className={iconClass} />;
      default: return <Sparkles className={iconClass} />;
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
      {outcomes.map((item, index) => (
        <div
          key={index}
          className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between"
        >
          <div>
            <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700/60 flex items-center justify-center mb-4">
              {renderIcon(item.icon)}
            </div>

            <span className="text-[11px] font-semibold uppercase tracking-wider text-blue-400 block mb-1">
              Pillar: {item.pillar}
            </span>

            <h4 className="font-heading font-bold text-lg text-white mb-2">
              {item.title}
            </h4>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
