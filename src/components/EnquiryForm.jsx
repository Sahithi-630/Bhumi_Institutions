import React, { useState } from 'react';
import { Send, MessageCircle, CheckCircle2, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { courses } from '../data/courses';
import { siteConfig, openWhatsApp } from '../data/siteConfig';

export default function EnquiryForm({ initialCourse = '' }) {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    studentClass: 'Class 8',
    phone: '',
    email: '',
    course: initialCourse || courses[0]?.title || '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppDirect = (e) => {
    e.preventDefault();
    const waUrl = siteConfig.createEnquiryWhatsAppUrl(formData);
    openWhatsApp(waUrl);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Immediately pass the message into WhatsApp
    const waUrl = siteConfig.createEnquiryWhatsAppUrl(formData);
    openWhatsApp(waUrl);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.6 }
        });
      } catch (err) {}
    }, 400);
  };

  if (submitted) {
    const waUrl = siteConfig.createEnquiryWhatsAppUrl(formData);
    return (
      <div className="p-8 sm:p-10 rounded-3xl bg-navy-900/90 border border-emerald-500/40 text-center space-y-5 shadow-2xl">
        <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white">
          Enquiry Sent to WhatsApp!
        </h3>
        <p className="text-slate-300 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
          Thank you! We have opened WhatsApp with your admission enquiry for <strong>{formData.studentName || 'your child'}</strong>. If WhatsApp did not open automatically, please click below to send.
        </p>

        <div className="pt-4 space-y-3 max-w-sm mx-auto">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3.5 px-5 rounded-xl font-semibold text-emerald-300 bg-emerald-950/80 hover:bg-emerald-900/90 border border-emerald-600/50 shadow-lg shadow-emerald-950/40 transition-all text-sm"
          >
            <MessageCircle className="w-5 h-5 text-emerald-400" />
            <span>Open WhatsApp Chat ({siteConfig.whatsappFormatted})</span>
          </a>

          <button
            onClick={() => setSubmitted(false)}
            className="w-full py-2.5 rounded-xl text-xs text-slate-400 hover:text-white transition-colors"
          >
            Submit Another Query
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-3xl bg-navy-900/80 border border-slate-700/80 p-6 sm:p-10 shadow-2xl text-left relative overflow-hidden">
      
      {/* Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/30 text-xs font-semibold text-blue-400 mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Course Consultation & Admission Form</span>
        </div>
        <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white">
          Let's Start the Conversation
        </h3>
        <p className="text-slate-400 text-sm mt-1.5">
          Have questions regarding batch dates, curriculum, or online class logistics? Send an enquiry or message us on WhatsApp ({siteConfig.whatsappFormatted}).
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
        
        {/* Row 1: Student Name & Parent Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-slate-300 font-medium mb-1.5">
              Student Name <span className="text-brand-orange">*</span>
            </label>
            <input
              type="text"
              required
              name="studentName"
              value={formData.studentName}
              onChange={handleChange}
              placeholder="e.g. Ananya Patel"
              className="w-full bg-slate-950/60 border border-slate-700/80 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-brand-blue transition-colors"
            />
          </div>

          <div>
            <label className="block text-slate-300 font-medium mb-1.5">
              Parent / Guardian Name <span className="text-brand-orange">*</span>
            </label>
            <input
              type="text"
              required
              name="parentName"
              value={formData.parentName}
              onChange={handleChange}
              placeholder="e.g. Vikram Patel"
              className="w-full bg-slate-950/60 border border-slate-700/80 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-brand-blue transition-colors"
            />
          </div>
        </div>

        {/* Row 2: Class & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-slate-300 font-medium mb-1.5">
              Class / Grade <span className="text-brand-orange">*</span>
            </label>
            <select
              name="studentClass"
              value={formData.studentClass}
              onChange={handleChange}
              className="w-full bg-slate-950/60 border border-slate-700/80 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-blue transition-colors"
            >
              <option value="Class 6">Class 6</option>
              <option value="Class 7">Class 7</option>
              <option value="Class 8">Class 8</option>
              <option value="Class 9">Class 9</option>
              <option value="Class 10">Class 10</option>
              <option value="Class 11">Class 11</option>
              <option value="Class 12">Class 12</option>
            </select>
          </div>

          <div>
            <label className="block text-slate-300 font-medium mb-1.5">
              Phone / WhatsApp Number <span className="text-brand-orange">*</span>
            </label>
            <input
              type="tel"
              required
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. 9876543210"
              className="w-full bg-slate-950/60 border border-slate-700/80 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-brand-blue transition-colors"
            />
          </div>
        </div>

        {/* Row 3: Email & Course Interested */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-slate-300 font-medium mb-1.5">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="parent@example.com"
              className="w-full bg-slate-950/60 border border-slate-700/80 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-brand-blue transition-colors"
            />
          </div>

          <div>
            <label className="block text-slate-300 font-medium mb-1.5">
              Course Interested In <span className="text-brand-orange">*</span>
            </label>
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              className="w-full bg-slate-950/60 border border-slate-700/80 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-blue transition-colors"
            >
              {courses.map((c) => (
                <option key={c.id} value={c.title}>
                  {c.title} ({c.priceFormatted})
                </option>
              ))}
              <option value="General Counselling / Unsure">General Counselling / Unsure</option>
            </select>
          </div>
        </div>

        {/* Row 4: Message */}
        <div>
          <label className="block text-slate-300 font-medium mb-1.5">
            Your Message or Questions
          </label>
          <textarea
            rows={3}
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about the student's background, preferred weekend batch timings, or specific queries..."
            className="w-full bg-slate-950/60 border border-slate-700/80 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-brand-blue transition-colors resize-none"
          />
        </div>

        {/* Action Buttons */}
        <div className="pt-3 flex flex-col sm:flex-row gap-3.5">
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex-1 py-3 px-6 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 text-sm shadow-md"
          >
            <Send className="w-4 h-4" />
            <span>{isSubmitting ? 'Opening WhatsApp...' : 'Submit Enquiry (Open WhatsApp)'}</span>
          </button>

          <button
            type="button"
            onClick={handleWhatsAppDirect}
            className="py-3 px-5 rounded-xl font-medium text-emerald-300 bg-emerald-950/40 hover:bg-emerald-900/40 border border-emerald-800/50 transition-colors flex items-center justify-center gap-2 text-sm"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Chat Directly on WhatsApp</span>
          </button>
        </div>

      </form>
    </div>
  );
}
