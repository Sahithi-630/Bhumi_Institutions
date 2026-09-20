import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Bot, 
  Code2, 
  MessageCircle, 
  CheckCircle2,
  Terminal,
  BookOpen,
  Laptop
} from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function Hero({ onOpenEnquiry }) {
  return (
    <section className="relative pt-28 pb-14 sm:pt-32 sm:pb-20 md:pt-36 md:pb-24 bg-navy-950 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-center">
          
          {/* Left Column: Calm, Clear Educational Focus */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-left">
            
            {/* Minimalist Top Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300 text-xs font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <span className="uppercase tracking-wide font-semibold text-[11px] text-slate-300">
                AI LEARNING FOR CLASSES 6–12
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.15]">
              Understand AI. <br />
              <span className="text-blue-400">Create with AI.</span> <br />
              Shape the Future.
            </h1>

            {/* Supporting Text */}
            <p className="text-slate-300 text-sm sm:text-lg font-normal leading-relaxed max-w-2xl">
              Helping students from <strong>Classes 6–12</strong> discover Artificial Intelligence, explore modern AI tools and build real-world projects.
            </p>

            {/* Reassuring Trust Points */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-5 text-xs sm:text-sm text-slate-400 pt-1">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Zero Coding Prerequisite</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Hands-On Capstones</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Safe & Supervised</span>
              </div>
            </div>

            {/* Actions: Responsive Stacking on Mobile, Horizontal on Desktop */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-2">
              <a
                href="#courses"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm w-full sm:w-auto text-center"
              >
                <span>Explore Courses</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#learning-approach"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-medium text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:text-white transition-colors w-full sm:w-auto text-center"
              >
                <span>How It Works</span>
              </a>

              <a
                href={siteConfig.createWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-medium text-emerald-300 bg-emerald-950/40 hover:bg-emerald-900/40 border border-emerald-800/50 transition-colors w-full sm:w-auto text-center"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>WhatsApp: {siteConfig.whatsappFormatted}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Structured Educational Workstation Preview */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-6 text-left shadow-lg">
              
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                  <span className="text-xs text-slate-400 font-mono ml-1.5">bhumi-curriculum.study</span>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                  Classes 6–12
                </span>
              </div>

              {/* Study Prompt & Concept Code Block */}
              <div className="mt-4 p-4 rounded-xl bg-slate-950 border border-slate-800/80 font-mono text-xs space-y-2">
                <div className="flex items-center gap-2 text-slate-400 text-[11px]">
                  <Terminal className="w-3.5 h-3.5 text-blue-400" />
                  <span>student_activity.py</span>
                </div>
                <p className="text-slate-300">
                  <span className="text-blue-400">topic</span> = "AI Fundamentals & Ethics"
                </p>
                <p className="text-slate-300">
                  <span className="text-blue-400">learning_goal</span> = "Build live website with AI guidance"
                </p>
                <p className="text-emerald-400">
                  &gt; Model output verified: 100% Student-Authored
                </p>
              </div>

              {/* Study Modules Strip */}
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                  <div className="flex items-center gap-2 text-blue-400 font-semibold text-xs mb-1">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Conceptual Clarity</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-snug">Foundational understanding of machine learning</p>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                  <div className="flex items-center gap-2 text-blue-400 font-semibold text-xs mb-1">
                    <Laptop className="w-3.5 h-3.5" />
                    <span>Practical Creation</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-snug">Original projects, web pages & portfolios</p>
                </div>
              </div>

              {/* Calm Progress Indicator */}
              <div className="mt-4 pt-3 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs text-slate-400">
                <span className="text-[11px]">Learning Pathway: 4 Stages</span>
                <span className="text-slate-300 font-medium text-[11px]">Understand → Explore → Create → Showcase</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
