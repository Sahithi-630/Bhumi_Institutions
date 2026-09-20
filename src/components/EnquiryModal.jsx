import React, { useState } from 'react';
import { X, Send, MessageCircle, CheckCircle2, Sparkles, BookOpen } from 'lucide-react';
import confetti from 'canvas-confetti';
import { siteConfig } from '../data/siteConfig';
import { courses } from '../data/courses';

export default function EnquiryModal({ isOpen, onClose, preselectedCourse = '' }) {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    studentClass: 'Class 8',
    phone: '',
    email: '',
    course: preselectedCourse || courses[0]?.title || '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Keep course updated if preselectedCourse changes
  React.useEffect(() => {
    if (preselectedCourse) {
      setFormData(prev => ({ ...prev, course: preselectedCourse }));
    }
  }, [preselectedCourse]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppDirect = (e) => {
    e.preventDefault();
    const text = `*New Admission Enquiry - Bhumi Institutions*\n` +
      `• *Student Name:* ${formData.studentName || 'Not provided'}\n` +
      `• *Parent/Guardian:* ${formData.parentName || 'Not provided'}\n` +
      `• *Grade/Class:* ${formData.studentClass}\n` +
      `• *Course Interested:* ${formData.course}\n` +
      `• *Contact Number:* ${formData.phone || 'Not provided'}\n` +
      `• *Email:* ${formData.email || 'Not provided'}\n` +
      `• *Note:* ${formData.message || 'I would like to know batch details and enrollment steps.'}`;

    const url = `https://wa.me/918317518463?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    onClose();
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // Safe fallback
      }
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg max-h-[92vh] overflow-y-auto bg-navy-900 border border-slate-700/80 rounded-2xl shadow-2xl p-5 sm:p-8 my-auto text-left">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-2xl flex items-center justify-center mx-auto border border-emerald-500/30">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="font-heading font-bold text-2xl text-white">
              Enquiry Received!
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed max-w-sm mx-auto">
              Thank you for reaching out to <strong>Bhumi Institutions</strong>. Our academic team will get in touch via WhatsApp / Phone within 24 hours.
            </p>

            <div className="pt-4 space-y-2.5">
              <a
                href={siteConfig.createCourseWhatsAppUrl(formData.course, formData.studentClass)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl text-sm font-semibold text-emerald-300 bg-emerald-950/80 border border-emerald-600/50 hover:bg-emerald-900/80 transition-all shadow-lg shadow-emerald-950/30"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Follow Up Immediately on WhatsApp</span>
              </a>

              <button
                onClick={handleReset}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-400 hover:text-white bg-slate-800/60 hover:bg-slate-800 transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Modal Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/30 text-blue-400 text-xs font-semibold mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Admissions & Course Consultation</span>
              </div>
              <h3 className="font-heading font-bold text-2xl text-white">
                Start Your Child's AI Journey
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm mt-1">
                Fill this quick form or chat directly on WhatsApp ({siteConfig.whatsappFormatted}) with our course counselor.
              </p>
            </div>

            {/* Quick WhatsApp Action Banner */}
            <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-600/30 mb-5 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="text-xs text-emerald-200">
                  Prefer instant messaging? Chat right now with our admissions team.
                </span>
              </div>
              <button
                type="button"
                onClick={handleWhatsAppDirect}
                className="shrink-0 text-xs font-semibold px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
              >
                WhatsApp Now
              </button>
            </div>

            {/* Main Form */}
            <form onSubmit={handleSubmitForm} className="space-y-4 text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-slate-300 font-medium mb-1">
                    Student Name <span className="text-brand-orange">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    name="studentName"
                    value={formData.studentName}
                    onChange={handleChange}
                    placeholder="e.g. Aarav Sharma"
                    className="w-full bg-slate-950/60 border border-slate-700/80 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-brand-blue transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1">
                    Parent / Guardian Name <span className="text-brand-orange">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleChange}
                    placeholder="e.g. Rajiv Sharma"
                    className="w-full bg-slate-950/60 border border-slate-700/80 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-brand-blue transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-slate-300 font-medium mb-1">
                    Student Class / Grade <span className="text-brand-orange">*</span>
                  </label>
                  <select
                    name="studentClass"
                    value={formData.studentClass}
                    onChange={handleChange}
                    className="w-full bg-slate-950/60 border border-slate-700/80 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-brand-blue transition-colors"
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
                  <label className="block text-slate-300 font-medium mb-1">
                    Phone / WhatsApp Number <span className="text-brand-orange">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. 9876543210"
                    className="w-full bg-slate-950/60 border border-slate-700/80 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-brand-blue transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-slate-300 font-medium mb-1">
                    Course Interested In
                  </label>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className="w-full bg-slate-950/60 border border-slate-700/80 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-brand-blue transition-colors"
                  >
                    {courses.map((c) => (
                      <option key={c.id} value={c.title}>
                        {c.title} ({c.priceFormatted})
                      </option>
                    ))}
                    <option value="Undecided / Needs Guidance">Undecided / Needs Guidance</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="parent@example.com"
                    className="w-full bg-slate-950/60 border border-slate-700/80 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-brand-blue transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1">
                  Questions or Preferred Timings
                </label>
                <textarea
                  rows={2}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about the student's interests or questions..."
                  className="w-full bg-slate-950/60 border border-slate-700/80 rounded-xl px-3.5 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-brand-blue transition-colors resize-none"
                />
              </div>

              {/* Form Submission Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 py-2.5 px-5 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 text-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Sending...' : 'Submit Enquiry'}</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="py-2.5 px-4 rounded-xl font-medium text-emerald-300 bg-emerald-950/40 hover:bg-emerald-900/40 border border-emerald-800/50 transition-colors flex items-center justify-center gap-2 text-sm"
                  title="Send via WhatsApp"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Send via WhatsApp</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
