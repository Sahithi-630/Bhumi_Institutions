import React, { useState, useMemo } from 'react';
import { courses } from '../data/courses';
import CourseCard from '../components/CourseCard';
import CourseFilter from '../components/CourseFilter';
import CTASection from '../components/CTASection';
import { Sparkles, BookOpen, AlertCircle, RotateCcw } from 'lucide-react';

export default function CoursesPage({ onOpenEnquiry }) {
  const [selectedClass, setSelectedClass] = useState('all');
  const [selectedSkill, setSelectedSkill] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter courses dynamically
  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      // Filter by Class
      if (selectedClass !== 'all') {
        const matchesClass = course.classGroups.includes(selectedClass);
        if (!matchesClass) return false;
      }

      // Filter by Skill
      if (selectedSkill !== 'all') {
        const matchesSkill = course.skills.some(
          (s) => s.toLowerCase() === selectedSkill.toLowerCase()
        );
        if (!matchesSkill) return false;
      }

      // Filter by Level
      if (selectedLevel !== 'all') {
        const matchesLevel = course.level.toLowerCase().includes(selectedLevel.toLowerCase());
        if (!matchesLevel) return false;
      }

      // Search Query
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesQuery =
          course.title.toLowerCase().includes(query) ||
          course.shortDescription.toLowerCase().includes(query) ||
          course.skills.some((s) => s.toLowerCase().includes(query)) ||
          course.curriculum.some((c) => c.title.toLowerCase().includes(query));
        if (!matchesQuery) return false;
      }

      return true;
    });
  }, [selectedClass, selectedSkill, selectedLevel, searchQuery]);

  const handleResetFilters = () => {
    setSelectedClass('all');
    setSelectedSkill('all');
    setSelectedLevel('all');
    setSearchQuery('');
  };

  return (
    <div className="pt-28 pb-16 bg-navy-950 min-h-screen">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-10 text-center relative">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-slate-800 text-xs font-medium text-slate-300 mb-3">
          <span>CURRICULUM CATALOGUE</span>
        </div>

        <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
          Explore Our Courses
        </h1>

        <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl mx-auto">
          AI programs designed specifically for school students from Classes 6 to 12. Filter by grade, skill, or experience level.
        </p>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Interactive Filter Toolbar */}
        <CourseFilter
          selectedClass={selectedClass}
          setSelectedClass={setSelectedClass}
          selectedSkill={selectedSkill}
          setSelectedSkill={setSelectedSkill}
          selectedLevel={selectedLevel}
          setSelectedLevel={setSelectedLevel}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onResetFilters={handleResetFilters}
          resultCount={filteredCourses.length}
        />

        {/* Results Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} onOpenEnquiry={onOpenEnquiry} />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="p-12 rounded-3xl bg-navy-900/60 border border-slate-800 text-center max-w-md mx-auto my-12 space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-slate-800 text-slate-400 flex items-center justify-center mx-auto">
              <AlertCircle className="w-8 h-8" />
            </div>
            <h3 className="font-heading font-bold text-xl text-white">
              No matching courses found
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm">
              We couldn't find any courses matching your specific filter combination. Try resetting the filters.
            </p>
            <button
              onClick={handleResetFilters}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-blue hover:bg-blue-600 text-white text-xs font-semibold transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Filters</span>
            </button>
          </div>
        )}

      </div>

      {/* CTA Section */}
      <div className="mt-20">
        <CTASection onOpenEnquiry={onOpenEnquiry} />
      </div>
    </div>
  );
}
