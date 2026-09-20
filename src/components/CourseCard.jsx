import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Bot, 
  Globe, 
  ArrowRight, 
  Check, 
  GraduationCap, 
  Layers,
  Clock,
  MessageCircle,
  BookOpen
} from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function CourseCard({ course, onOpenEnquiry }) {
  const getIcon = () => {
    switch (course.id) {
      case 'ai-basics':
        return <Bot className="w-5 h-5 text-blue-400" />;
      case 'build-websites-with-ai':
        return <Globe className="w-5 h-5 text-blue-400" />;
      case 'ai-basics-website-building':
        return <Layers className="w-5 h-5 text-blue-400" />;
      default:
        return <BookOpen className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <div className="flex flex-col h-full rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 p-5 sm:p-6 text-left transition-colors duration-200">
      
      {/* Top Row: Icon + Calm Label Badge */}
      <div className="flex items-center justify-between gap-2 mb-4">
        <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center">
          {getIcon()}
        </div>

        <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold uppercase tracking-wider bg-slate-800 text-slate-300 border border-slate-700">
          {course.label}
        </span>
      </div>

      {/* Course Title & Description */}
      <h3 className="font-heading font-bold text-xl text-white">
        {course.title}
      </h3>
      <p className="text-slate-300 text-xs sm:text-sm mt-2 line-clamp-2 leading-relaxed">
        {course.shortDescription}
      </p>

      {/* Meta Specifications: Class, Duration, Focus */}
      <div className="grid grid-cols-2 gap-2 my-4 py-2.5 px-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs text-slate-300">
        <div className="flex items-center gap-1.5">
          <GraduationCap className="w-3.5 h-3.5 text-blue-400 shrink-0" />
          <span><strong>For:</strong> {course.targetClasses}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5 text-blue-400 shrink-0" />
          <span><strong>Duration:</strong> 1 Week</span>
        </div>
        <div className="flex items-center gap-1.5 col-span-2 text-slate-400">
          <span><strong>Focus:</strong> <span className="text-slate-200">{course.focus}</span></span>
        </div>
      </div>

      {/* Topics List */}
      <div className="space-y-2 mb-5 flex-1">
        <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
          Key Topics & Activities:
        </p>
        <ul className="space-y-1.5 text-xs text-slate-300">
          {course.curriculum.slice(0, 4).map((m, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <Check className="w-3.5 h-3.5 text-blue-400 mt-0.5 shrink-0" />
              <span className="line-clamp-1">{m.title}</span>
            </li>
          ))}
          {course.curriculum.length > 4 && (
            <li className="text-[11px] text-blue-400 font-medium pl-5">
              + {course.curriculum.length - 4} more comprehensive modules & capstone
            </li>
          )}
        </ul>
      </div>

      {/* Price & Action Buttons: Clean & Grounded */}
      <div className="pt-4 border-t border-slate-800 space-y-3">
        {course.priceFormatted && (
          <div className="flex items-baseline justify-between pb-1">
            <div className="flex items-baseline gap-1.5">
              <span className="text-xs text-slate-400 font-medium">Fee:</span>
              <span className="text-2xl font-heading font-extrabold text-white">
                {course.priceFormatted}
              </span>
            </div>
            <span className="text-[11px] font-medium text-emerald-400 bg-emerald-950/70 border border-emerald-800/40 px-2 py-0.5 rounded-md">
              Full Program
            </span>
          </div>
        )}

        <div className="space-y-2">
          <Link
            to={`/courses/${course.slug}`}
            className="w-full py-2.5 px-4 rounded-xl font-semibold text-xs sm:text-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
          >
            <span>Explore Course</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href={siteConfig.createCourseWhatsAppUrl(course.title, course.targetClasses, course.priceFormatted)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2 px-3 rounded-xl font-medium text-xs text-emerald-300 hover:text-white bg-emerald-950/40 hover:bg-emerald-900/40 border border-emerald-800/40 transition-colors flex items-center justify-center gap-1.5"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>Enquire on WhatsApp</span>
          </a>
        </div>
      </div>

    </div>
  );
}
