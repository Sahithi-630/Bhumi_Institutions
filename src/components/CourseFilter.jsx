import React from 'react';
import { filterOptions } from '../data/courses';
import { Filter, RotateCcw, Search } from 'lucide-react';

export default function CourseFilter({
  selectedClass,
  setSelectedClass,
  selectedSkill,
  setSelectedSkill,
  selectedLevel,
  setSelectedLevel,
  searchQuery,
  setSearchQuery,
  onResetFilters,
  resultCount
}) {
  const hasActiveFilters =
    selectedClass !== 'all' ||
    selectedSkill !== 'all' ||
    selectedLevel !== 'all' ||
    searchQuery.trim() !== '';

  return (
    <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5 sm:p-6 mb-8 text-left">
      {/* Top row: Header & Search */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-800/80">
        <div className="flex items-center gap-2 text-white font-heading font-semibold text-base">
          <Filter className="w-4 h-4 text-blue-400" />
          <span>Filter Courses</span>
          <span className="text-xs font-mono font-normal text-slate-400 bg-slate-800 px-2 py-0.5 rounded ml-1">
            {resultCount} Available
          </span>
        </div>

        {/* Search input */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search topics, skills..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-950 border border-slate-700/80 rounded-xl pl-9 pr-3.5 py-2 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
          />
        </div>
      </div>

      {/* Filter Options Grid: Calm & Consistent */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-5">
        
        {/* Filter 1: By Class */}
        <div className="space-y-2">
          <label className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
            By Class / Grade
          </label>
          <div className="flex flex-wrap gap-1.5">
            {filterOptions.classes.map((c) => (
              <button
                key={c.value}
                onClick={() => setSelectedClass(c.value)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  selectedClass === c.value
                    ? 'bg-blue-600 text-white font-semibold'
                    : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Filter 2: By Skill */}
        <div className="space-y-2">
          <label className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
            By Skill Focus
          </label>
          <div className="flex flex-wrap gap-1.5">
            {filterOptions.skills.map((s) => (
              <button
                key={s.value}
                onClick={() => setSelectedSkill(s.value)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  selectedSkill === s.value
                    ? 'bg-blue-600 text-white font-semibold'
                    : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        {/* Filter 3: By Level */}
        <div className="space-y-2">
          <label className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
            By Level
          </label>
          <div className="flex flex-wrap gap-1.5">
            {filterOptions.levels.map((l) => (
              <button
                key={l.value}
                onClick={() => setSelectedLevel(l.value)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  selectedLevel === l.value
                    ? 'bg-blue-600 text-white font-semibold'
                    : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* Reset filters bar */}
      {hasActiveFilters && (
        <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
          <span className="text-slate-400">Filters applied</span>
          <button
            onClick={onResetFilters}
            className="flex items-center gap-1.5 text-blue-400 hover:text-blue-300 font-medium transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset All Filters</span>
          </button>
        </div>
      )}
    </div>
  );
}
