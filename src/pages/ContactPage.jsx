import React from 'react';
import EnquiryForm from '../components/EnquiryForm';
import { 
  MessageCircle, 
  Phone, 
  Instagram, 
  Mail, 
  MapPin, 
  Clock, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function ContactPage() {
  return (
    <div className="pt-28 pb-20 bg-navy-950 min-h-screen text-left">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-10 text-center relative">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-slate-800 text-xs font-medium text-slate-300 mb-3">
          <span>ADMISSION & ENQUIRY DESK</span>
        </div>

        <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
          Let's Start the Conversation
        </h1>

        <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl mx-auto">
          We are excited to help you and your child discover the right AI learning pathway. Get in touch with our counseling team.
        </p>
      </div>

      {/* Main Grid: Contact Info + Form */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Information */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Direct WhatsApp Callout Card */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-950/60 border border-emerald-800/60 text-emerald-400 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base text-white">Instant WhatsApp Chat</h3>
                  <p className="text-xs text-slate-400">Fastest response for admissions</p>
                </div>
              </div>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                Message our academic counseling team on WhatsApp for immediate course brochures, upcoming cohort dates, and fee schedules.
              </p>

              <a
                href={siteConfig.createWhatsAppUrl("Hi Bhumi Institutions! I am enquiring about course admissions.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl text-sm font-semibold text-emerald-300 bg-emerald-900/50 hover:bg-emerald-800/60 border border-emerald-600/50 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Chat on {siteConfig.whatsappFormatted}</span>
              </a>
            </div>

            {/* Contact Details List */}
            <div className="p-6 rounded-3xl bg-navy-900/60 border border-slate-800 space-y-5">
              <h4 className="font-heading font-bold text-white text-base">
                Official Channels
              </h4>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-blue-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="text-xs text-slate-400 block">Phone Support</span>
                    <a href={`tel:+91${siteConfig.alternatePhone}`} className="text-white hover:text-blue-300 font-medium">
                      {siteConfig.alternatePhoneFormatted} / {siteConfig.whatsappFormatted}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Instagram className="w-5 h-5 text-pink-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="text-xs text-slate-400 block">Official Instagram</span>
                    <a 
                      href={siteConfig.instagramUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white hover:text-pink-300 font-medium"
                    >
                      @{siteConfig.instagramHandle}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-purple-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="text-xs text-slate-400 block">Admissions Email</span>
                    <a href={`mailto:${siteConfig.email}`} className="text-white hover:text-purple-300 font-medium">
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-amber-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="text-xs text-slate-400 block">Counseling Hours</span>
                    <span className="text-slate-300">
                      Monday to Sunday: 9:00 AM – 8:00 PM IST
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand-orange mt-0.5 shrink-0" />
                  <div>
                    <span className="text-xs text-slate-400 block">Batch Delivery</span>
                    <span className="text-slate-300">
                      {siteConfig.location}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center gap-2 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Dedicated one-on-one parent guidance</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Enquiry Form */}
          <div className="lg:col-span-7">
            <EnquiryForm />
          </div>

        </div>
      </div>
    </div>
  );
}
