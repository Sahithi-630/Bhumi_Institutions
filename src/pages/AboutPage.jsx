import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Shield, Heart, Target, ArrowRight, MessageCircle, Award, CheckCircle } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import posterImg from '../assets/bhumi-course-poster.jpg';
import logoImg from '../assets/bhumi-logo.jpg';
import CTASection from '../components/CTASection';

export default function AboutPage({ onOpenEnquiry }) {
  return (
    <div className="pt-28 pb-16 bg-navy-950 min-h-screen text-left">
      
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 text-center relative">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-slate-800 text-xs font-medium text-slate-300 mb-3">
          <span>ABOUT BHUMI INSTITUTIONS</span>
        </div>

        <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight max-w-4xl mx-auto">
          Shaping the Next Generation <br />
          of <span className="text-blue-400">AI Innovators & Thinkers</span>
        </h1>

        <p className="text-slate-300 text-sm sm:text-base mt-3 max-w-2xl mx-auto leading-relaxed">
          {siteConfig.supportingTagline} Discover how we bridge cutting-edge technology and school education to help young minds build the future.
        </p>
      </div>

      {/* Main Narrative with Poster */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Poster Feature Column */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-md">
              <img
                src={posterImg}
                alt="Bhumi Institutions AI Course Poster"
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="mt-4 p-4 rounded-2xl bg-navy-900/80 border border-slate-800 text-xs text-slate-400 space-y-1">
              <p className="text-slate-200 font-semibold">Official Course Cohort 2026</p>
              <p>Programs designed for students from 6th Grade to 12th Grade.</p>
              <p className="text-brand-orange font-mono">Instagram: @{siteConfig.instagramHandle}</p>
            </div>
          </div>

          {/* Text Story Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Official Brand Crest Header */}
            <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-slate-900/60 border border-slate-800 w-fit">
              <img
                src={logoImg}
                alt="Bhumi Institutions Logo Emblem"
                className="w-12 h-12 rounded-full object-cover shadow-md border border-slate-700"
              />
              <div>
                <h3 className="text-white font-heading font-bold text-sm sm:text-base">Bhumi Institutions</h3>
                <p className="text-brand-orange text-[11px] font-semibold tracking-wide uppercase">
                  {siteConfig.motto}
                </p>
              </div>
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              Preparing Students for an AI-Powered World
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              “Artificial Intelligence is becoming part of everyday life. Bhumi Institutions helps students understand this technology early, use it responsibly and turn their ideas into real creations.”
            </p>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              “Our programs focus on practical learning rather than simply teaching theory. Students explore AI concepts, experiment with modern tools and create projects that make learning meaningful.”
            </p>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              We started Bhumi Institutions with a simple realization: while adults debate the future of artificial intelligence, school students are already growing up alongside it. If we don't teach them the mechanics, ethics, and potential of AI now, they risk remaining mere passive consumers.
            </p>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <h4 className="text-white font-bold text-sm flex items-center gap-2 mb-1">
                  <Target className="w-4 h-4 text-blue-400" />
                  <span>Our Vision</span>
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  To democratize practical, ethical AI literacy for every school student across India.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <h4 className="text-white font-bold text-sm flex items-center gap-2 mb-1">
                  <Shield className="w-4 h-4 text-emerald-400" />
                  <span>Safety & Integrity</span>
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Embedding age-appropriate privacy, safety guidelines, and critical evaluation in every class.
                </p>
              </div>
            </div>

            <div className="pt-3 flex flex-wrap gap-3">
              <Link
                to="/courses"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm"
              >
                <span>Browse Courses</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={siteConfig.createWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-emerald-300 bg-emerald-950/40 hover:bg-emerald-900/40 border border-emerald-800/50 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Contact on WhatsApp</span>
              </a>
            </div>

          </div>

        </div>
      </div>

      {/* CTA */}
      <CTASection onOpenEnquiry={onOpenEnquiry} />
    </div>
  );
}
