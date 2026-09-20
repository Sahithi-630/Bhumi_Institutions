import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, ArrowRight, Home } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="pt-36 pb-24 bg-navy-950 min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center p-8 rounded-3xl bg-navy-900/80 border border-slate-800 shadow-2xl space-y-5">
        <div className="w-16 h-16 rounded-2xl bg-brand-blue/20 text-blue-400 flex items-center justify-center mx-auto">
          <Bot className="w-8 h-8" />
        </div>
        <h1 className="font-heading font-black text-6xl text-white">
          404
        </h1>
        <h2 className="font-heading font-bold text-xl text-slate-200">
          Page Not Found
        </h2>
        <p className="text-slate-400 text-sm">
          The page or course you are looking for might have moved or is unavailable.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-brand-blue hover:bg-blue-600 text-white text-xs font-semibold transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </Link>
          <Link
            to="/courses"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-colors"
          >
            <span>Explore Courses</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
