import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import TrustStrip from '../components/TrustStrip';
import AboutSnippet from '../components/AboutSnippet';
import CourseCard from '../components/CourseCard';
import LearningApproach from '../components/LearningApproach';
import WhyBhumiGrid from '../components/WhyBhumiGrid';
import ForParentsSection from '../components/ForParentsSection';
import StudentProjectsSection from '../components/StudentProjectsSection';
import CourseComparison from '../components/CourseComparison';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQAccordion from '../components/FAQAccordion';
import CTASection from '../components/CTASection';
import { courses } from '../data/courses';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function HomePage({ onOpenEnquiry }) {
  return (
    <div className="space-y-0">
      {/* 1. Hero Section */}
      <Hero onOpenEnquiry={onOpenEnquiry} />

      {/* 2. Trust / Introduction Strip */}
      <TrustStrip />

      {/* 3. About Bhumi Institutions */}
      <AboutSnippet />

      {/* 4. Courses — Main Section (Most Important Section) */}
      <section id="courses" className="py-20 bg-navy-950 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-slate-800 text-xs font-medium text-slate-300 mb-3">
              <span>CORE CURRICULUM</span>
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
              Explore Our Courses
            </h2>

            <p className="text-slate-300 text-base sm:text-lg font-medium mt-3">
              Learn AI. Explore technology. Build something real.
            </p>

            <p className="text-slate-400 text-xs sm:text-sm mt-2 max-w-2xl mx-auto">
              Each program combines fundamental conceptual understanding with hands-on activities, real project builds, and digital safety for school students.
            </p>
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.slice(0, 3).map((course) => (
              <CourseCard key={course.id} course={course} onOpenEnquiry={onOpenEnquiry} />
            ))}
          </div>

          {/* 4th Course Banner: Clean & Grounded */}
          {courses.length > 3 && (
            <div className="mt-8 p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-semibold text-xs border border-slate-700">
                    NEW COURSE
                  </span>
                  <span className="text-xs text-slate-400">Classes 7–12</span>
                </div>
                <h3 className="font-heading font-bold text-xl text-white">
                  {courses[3].title}
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-xl">
                  {courses[3].shortDescription}
                </p>
              </div>

              <Link
                to={`/courses/${courses[3].slug}`}
                className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
              >
                <span>Explore Game Dev</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}

          {/* Bottom Catalog Link */}
          <div className="mt-12 text-center">
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors group"
            >
              <span>View Full Course Catalog with Filters</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </section>

      {/* 5. Learning Approach: 4-Step Framework */}
      <LearningApproach />

      {/* 6. Why Bhumi Institutions: 6 Pillars */}
      <WhyBhumiGrid />

      {/* 7. For Parents Section */}
      <ForParentsSection onOpenEnquiry={onOpenEnquiry} />

      {/* 8. Student Projects Showcase */}
      <StudentProjectsSection />

      {/* 9. Course Comparison */}
      <CourseComparison />

      {/* 10. Testimonials */}
      <TestimonialsSection />

      {/* 11. Frequently Asked Questions */}
      <FAQAccordion />

      {/* 12. Registration / Enquiry CTA Banner */}
      <CTASection onOpenEnquiry={onOpenEnquiry} />
    </div>
  );
}
