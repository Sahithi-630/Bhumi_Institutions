import React from 'react';
import { 
  GraduationCap, 
  Layers, 
  Clock, 
  Laptop, 
  Award, 
  MessageCircle, 
  Send
} from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function CourseHero({ course, onOpenEnquiry }) {
  return (
    <section className="relative pt-32 pb-14 md:pt-36 md:pb-20 bg-navy-950 text-left border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          
          {/* Top Category Badge */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-2.5 py-0.5 rounded bg-slate-800 text-slate-300 text-xs font-semibold uppercase tracking-wider border border-slate-700">
              {course.focus}
            </span>
            <span className="px-2.5 py-0.5 rounded bg-blue-900/40 text-blue-300 text-xs font-semibold uppercase tracking-wider border border-blue-800/50">
              {course.label}
            </span>
            <span className="text-xs text-slate-400 font-mono">
              Academic Cohort 2026
            </span>
          </div>

          {/* Title */}
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            {course.title}
          </h1>

          {/* Tagline */}
          <p className="text-lg sm:text-xl text-blue-400 font-medium mt-2">
            {course.tagline}
          </p>

          {/* Description */}
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-3 max-w-3xl font-normal">
            {course.description}
          </p>

          {/* Course Metadata Strip: Calm & Structured */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6 p-4 rounded-xl bg-slate-900/70 border border-slate-800 text-xs">
            <div className="space-y-0.5">
              <div className="flex items-center gap-1.5 text-slate-400">
                <GraduationCap className="w-3.5 h-3.5 text-blue-400" />
                <span className="uppercase text-[10px] tracking-wider font-semibold">Eligibility</span>
              </div>
              <p className="text-white font-bold text-sm">{course.targetClasses}</p>
            </div>

            <div className="space-y-0.5">
              <div className="flex items-center gap-1.5 text-slate-400">
                <Layers className="w-3.5 h-3.5 text-slate-400" />
                <span className="uppercase text-[10px] tracking-wider font-semibold">Level</span>
              </div>
              <p className="text-white font-bold text-sm">{course.level}</p>
            </div>

            <div className="space-y-0.5">
              <div className="flex items-center gap-1.5 text-slate-400">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span className="uppercase text-[10px] tracking-wider font-semibold">Duration</span>
              </div>
              <p className="text-white font-bold text-sm">{course.duration.split('•')[0]}</p>
            </div>

            <div className="space-y-0.5">
              <div className="flex items-center gap-1.5 text-slate-400">
                <Laptop className="w-3.5 h-3.5 text-blue-400" />
                <span className="uppercase text-[10px] tracking-wider font-semibold">Format</span>
              </div>
              <p className="text-white font-bold text-sm">Live Interactive</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <button
              onClick={() => onOpenEnquiry && onOpenEnquiry(course.title)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm"
            >
              <Send className="w-4 h-4" />
              <span>Register / Enquire Now</span>
            </button>

            <a
              href={siteConfig.createCourseWhatsAppUrl(course.title, course.targetClasses)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium text-emerald-300 bg-emerald-950/40 hover:bg-emerald-900/40 border border-emerald-800/50 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Chat on WhatsApp ({siteConfig.whatsappFormatted})</span>
            </a>
          </div>

          {/* Certificate note */}
          <div className="flex items-center gap-2 mt-5 text-xs text-slate-400">
            <Award className="w-4 h-4 text-blue-400" />
            <span>{course.certificate}</span>
          </div>

        </div>
      </div>
    </section>
  );
}
