import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { courses } from '../data/courses';
import CourseHero from '../components/CourseHero';
import LearningOutcomes from '../components/LearningOutcomes';
import CurriculumAccordion from '../components/CurriculumAccordion';
import EnquiryForm from '../components/EnquiryForm';
import { 
  Sparkles, 
  BookOpen, 
  CheckCircle2, 
  Award, 
  Calendar, 
  Layers, 
  ArrowLeft,
  ArrowRight,
  MessageCircle,
  HelpCircle,
  FolderGit2
} from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function CourseDetailPage({ onOpenEnquiry }) {
  const { slug } = useParams();
  const course = courses.find((c) => c.slug === slug);

  if (!course) {
    return <Navigate to="/courses" replace />;
  }

  // Next course suggestion
  const currentIndex = courses.findIndex((c) => c.slug === slug);
  const nextCourse = courses[(currentIndex + 1) % courses.length];

  return (
    <div className="bg-navy-950 min-h-screen text-left">
      
      {/* 1. Course Hero */}
      <CourseHero course={course} onOpenEnquiry={onOpenEnquiry} />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
        
        {/* 2. What You Will Learn (Section 11) */}
        <section>
          <div className="mb-10 text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-slate-800 text-xs font-medium text-slate-300 mb-2">
              <span>LEARNING OUTCOMES</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
              What You Will Learn
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              Our 4-pillar methodology ensures your child builds genuine conceptual understanding, experiments with modern tools, and crafts concrete creations.
            </p>
          </div>

          <LearningOutcomes outcomes={course.learningOutcomes} />
        </section>

        {/* Tool Categories Showcase (Only for AI Tools Mastery) */}
        {course.toolCategories && (
          <section className="p-7 rounded-2xl bg-slate-900/60 border border-slate-800">
            <div className="mb-6">
              <span className="text-xs font-medium uppercase tracking-wider text-blue-400 block mb-1">
                Taxonomy & Mental Models
              </span>
              <h3 className="font-heading font-bold text-2xl text-white">
                9 Core AI Tool Categories Covered
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-2xl">
                Instead of binding to single apps that quickly become obsolete, students learn to navigate and combine durable tool categories.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {course.toolCategories.map((cat, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-950 border border-slate-800/80">
                  <h4 className="font-semibold text-white text-sm mb-1 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    <span>{cat.name}</span>
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{cat.desc}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 3. Comprehensive Curriculum (Section 12) */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Curriculum Description & Highlights */}
            <div className="lg:col-span-4 space-y-5">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-slate-800 text-xs font-medium text-slate-300">
                <span>STEP-BY-STEP ROADMAP</span>
              </div>

              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
                Course Curriculum
              </h2>

              <p className="text-slate-400 text-sm leading-relaxed">
                Structured progressively across {course.curriculum.length} modules, starting from intuitive conceptual foundations up to an independent capstone project showcase.
              </p>

              {/* Fast Facts Card */}
              <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3 text-xs text-slate-300">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <span className="text-slate-400">Total Modules</span>
                  <span className="font-bold text-white">{course.curriculum.length} Modules</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <span className="text-slate-400">Batch Format</span>
                  <span className="font-bold text-white">{course.mode}</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <span className="text-slate-400">Prerequisites</span>
                  <span className="font-bold text-blue-400">None (Zero Coding)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Certification</span>
                  <span className="font-bold text-slate-200">Included</span>
                </div>
              </div>

              {/* Instant WhatsApp Help */}
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                <p className="text-xs text-slate-300 mb-2">
                  Want the full syllabus PDF or preferred batch timings?
                </p>
                <a
                  href={siteConfig.createCourseWhatsAppUrl(course.title, course.targetClasses)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Ask counselor on WhatsApp &rarr;</span>
                </a>
              </div>
            </div>

            {/* Right: Interactive Accordion */}
            <div className="lg:col-span-8">
              <CurriculumAccordion curriculum={course.curriculum} />
            </div>

          </div>
        </section>

        {/* 4. Sample Projects Capstone (Section 16) */}
        {course.sampleProjects && course.sampleProjects.length > 0 && (
          <section className="p-7 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800">
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-slate-800 text-xs font-medium text-slate-300 mb-2">
                <span>TANGIBLE CREATIONS</span>
              </div>
              <h3 className="font-heading font-bold text-2xl text-white">
                Projects Students Build in This Course
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm mt-1">
                Every student finishes with concrete, demonstrable work they can proudly present to school teachers, parents, and friends.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {course.sampleProjects.map((proj, pIdx) => (
                <div key={pIdx} className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800/80 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-blue bg-blue-500/10 px-2 py-0.5 rounded-full mb-2 inline-block">
                      Capstone Project 0{pIdx + 1}
                    </span>
                    <h4 className="font-heading font-bold text-lg text-white mb-2">
                      {proj.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {proj.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 5. In-Page Admission / Enquiry Form */}
        <section id="register-enquiry">
          <div className="max-w-3xl mx-auto">
            <EnquiryForm initialCourse={course.title} />
          </div>
        </section>

        {/* Next Course Navigation Strip */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Courses</span>
          </Link>

          {nextCourse && (
            <Link
              to={`/courses/${nextCourse.slug}`}
              className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
            >
              <span>Next Course: {nextCourse.title}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>

      </div>
    </div>
  );
}
