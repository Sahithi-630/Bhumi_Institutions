import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Target } from 'lucide-react';
import posterImg from '../assets/bhumi-course-poster.jpg';
import logoImg from '../assets/bhumi-logo.jpg';
import { siteConfig } from '../data/siteConfig';

export default function AboutSnippet() {
  return (
    <section className="py-20 bg-navy-950 border-b border-slate-800/80 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Visual Side: Poster / Student Representation */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative mx-auto max-w-md">
              <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-md">
                <img
                  src={posterImg}
                  alt="Bhumi Institutions AI Course Poster"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Calm Badge */}
              <div className="mt-3 p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full overflow-hidden border border-slate-700 shrink-0">
                  <img src={logoImg} alt="Bhumi Icon" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-white uppercase tracking-wider">Learn • Create • Build</p>
                  <p className="text-[11px] text-slate-400">Programs for Classes 6 to 12</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text Side: Calm Educational Mission */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 border border-slate-800">
              <img src={logoImg} alt="Bhumi Crest" className="w-4 h-4 rounded-full object-cover" />
              <span className="text-xs font-medium text-slate-300 uppercase tracking-wider">
                {siteConfig.motto}
              </span>
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
              Preparing Students for an <span className="text-blue-400">AI-Powered World</span>
            </h2>

            <p className="text-slate-300 text-base leading-relaxed font-normal">
              “Artificial Intelligence is becoming part of everyday life. Bhumi Institutions helps students understand this technology early, use it responsibly and turn their ideas into real creations.”
            </p>

            <p className="text-slate-400 text-sm leading-relaxed font-normal">
              “Our programs focus on practical learning rather than simply teaching theory. Students explore AI concepts, experiment with modern tools and create projects that make learning meaningful.”
            </p>

            {/* Subdued Reassurance Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="w-8 h-8 rounded-lg bg-slate-800 text-blue-400 flex items-center justify-center shrink-0">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm">Responsible & Safe AI</h4>
                  <p className="text-slate-400 text-xs mt-0.5">Focusing on ethics, truth verification, and digital safety.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="w-8 h-8 rounded-lg bg-slate-800 text-blue-400 flex items-center justify-center shrink-0">
                  <Target className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm">Hands-on Creations</h4>
                  <p className="text-slate-400 text-xs mt-0.5">Every student finishes with concrete, demonstrable projects.</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
              >
                <span>Discover Bhumi Institutions</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
