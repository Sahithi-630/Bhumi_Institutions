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
import { ArrowRight } from 'lucide-react';

export default function HomePage({ onOpenEnquiry }) {
  return (
    <div className="space-y-0">
      {/* 1. Hero Section */}
      <Hero onOpenEnquiry={onOpenEnquiry} />

      {/* 2. Courses — Main Section (Directly after Hero) */}
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
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} onOpenEnquiry={onOpenEnquiry} />
            ))}
          </div>

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

      {/* 3. Trust / Introduction Strip */}
      <TrustStrip />

      {/* 4. About Bhumi Institutions */}
      <AboutSnippet />

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
