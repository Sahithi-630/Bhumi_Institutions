import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Shield, HeartHandshake, ArrowRight, MessageCircle } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function ForParentsSection({ onOpenEnquiry }) {
  return (
    <section className="py-20 bg-slate-900/30 border-b border-slate-800/80 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-2xl bg-slate-900/70 border border-slate-800 shadow-md">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-800 text-xs font-medium text-slate-300">
                <HeartHandshake className="w-3.5 h-3.5 text-blue-400" />
                <span>FOR PARENTS & GUARDIANS</span>
              </div>

              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
                Give Your Child a Head Start in the <span className="text-blue-400">AI Era</span>
              </h2>

              <p className="text-slate-300 text-base leading-relaxed max-w-2xl font-normal">
                “AI will be part of the world your child grows up in. Our goal is not simply to teach students how to use AI tools, but to help them understand technology, think creatively and use AI responsibly.”
              </p>

              {/* Three Specific Checkmarks */}
              <div className="space-y-2.5 pt-1">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span className="text-slate-200 font-medium text-sm sm:text-base">
                    Age-appropriate learning
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span className="text-slate-200 font-medium text-sm sm:text-base">
                    Practical activities
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span className="text-slate-200 font-medium text-sm sm:text-base">
                    Focus on creativity and understanding
                  </span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3.5 pt-3">
                <Link
                  to="/courses"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm"
                >
                  <span>Explore Programs</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={siteConfig.createWhatsAppUrl("Hi Bhumi Institutions! I am a parent looking for course recommendations for my child.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium text-emerald-300 bg-emerald-950/40 hover:bg-emerald-900/40 border border-emerald-800/50 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Talk with Academic Counselor on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right Card: Parent Trust Box */}
            <div className="lg:col-span-4">
              <div className="p-6 rounded-xl bg-slate-950 border border-slate-800 space-y-3.5">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-slate-800 text-blue-400 flex items-center justify-center">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm">Parent-First Reassurance</h4>
                    <p className="text-slate-400 text-xs">Safe, supervised environment</p>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  We understand your concerns about screen time and online safety. Every tool, exercise, and interaction is strictly supervised and focused on genuine creative synthesis rather than mindless browsing.
                </p>

                <div className="pt-2 border-t border-slate-800 text-xs text-slate-400 space-y-1">
                  <p>• Regular student progress updates</p>
                  <p>• Final demo showcase for parents</p>
                  <p>• Verified certificate of completion</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
