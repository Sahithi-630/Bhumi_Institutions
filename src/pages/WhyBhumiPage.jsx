import React from 'react';
import { Link } from 'react-router-dom';
import WhyBhumiGrid from '../components/WhyBhumiGrid';
import LearningApproach from '../components/LearningApproach';
import ForParentsSection from '../components/ForParentsSection';
import CTASection from '../components/CTASection';
import { Sparkles, Shield, Compass, BookOpen, Target, ArrowRight } from 'lucide-react';

export default function WhyBhumiPage({ onOpenEnquiry }) {
  return (
    <div className="pt-28 pb-16 bg-navy-950 min-h-screen text-left">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-14 text-center relative">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-slate-800 text-xs font-medium text-slate-300 mb-3">
          <span>EDUCATIONAL PHILOSOPHY</span>
        </div>

        <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight max-w-4xl mx-auto">
          Empowering School Students <br />
          to <span className="text-blue-400">Lead the AI Revolution</span>
        </h1>

        <p className="text-slate-300 text-sm sm:text-base mt-3 max-w-2xl mx-auto leading-relaxed font-normal">
          We don't teach students to treat AI as a cheating shortcut or a scary mystery. We teach them to treat it as an empowering tool for imagination, learning, and creation.
        </p>
      </div>

      {/* Core Philosophical Contrast Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="p-7 rounded-2xl bg-slate-900/50 border border-slate-800 text-left">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block mb-2">
              The Passive Alternative
            </span>
            <h3 className="font-heading font-bold text-xl text-white mb-2">
              Unguided Screen Consumption
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
              Hours spent scrolling feeds or using AI blindly without understanding how the algorithms work, raising parent anxiety and weakening student critical thinking.
            </p>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>✕ Copy-pasting without understanding</li>
              <li>✕ Vulnerable to AI hallucinations & bias</li>
              <li>✕ Zero tangible portfolio created</li>
            </ul>
          </div>

          <div className="p-7 rounded-2xl bg-slate-900/80 border border-slate-700 text-left shadow-md">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-blue-400 block mb-2">
              The Bhumi Approach
            </span>
            <h3 className="font-heading font-bold text-xl text-white mb-2">
              Active Digital Creation
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
              Understanding foundational machine intelligence, mastering precision prompts, building real web products, and applying ethical safeguards to school studies.
            </p>
            <ul className="space-y-1.5 text-xs text-slate-300">
              <li>✓ Independent critical thinking & fact verification</li>
              <li>✓ Real published websites, games & portfolios</li>
              <li>✓ Confident communication and presentation skills</li>
            </ul>
          </div>

        </div>
      </div>

      {/* 6 Feature Pillars */}
      <WhyBhumiGrid />

      {/* 4 Steps Learning Framework */}
      <LearningApproach />

      {/* Reassurance for Parents */}
      <ForParentsSection onOpenEnquiry={onOpenEnquiry} />

      {/* CTA */}
      <CTASection onOpenEnquiry={onOpenEnquiry} />
    </div>
  );
}
