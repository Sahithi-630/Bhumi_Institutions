import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle, ArrowRight } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import logoImg from '../assets/bhumi-logo.jpg';

export default function Navbar({ onOpenEnquiry }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'Why Bhumi', path: '/why-bhumi' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        isScrolled
          ? 'bg-navy-950/95 border-b border-slate-800 py-3 shadow-md'
          : 'bg-navy-950/80 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Official Logo Brandmark */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full border border-slate-700 bg-white p-0.5 shrink-0">
              <img
                src={logoImg}
                alt="Bhumi Institutions Logo"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-heading font-bold text-base sm:text-lg tracking-wider text-white flex items-center gap-1.5">
                BHUMI <span className="text-orange-500 font-semibold text-xs tracking-normal">INSTITUTIONS</span>
              </span>
              <span className="text-[11px] text-slate-400 font-medium -mt-1 hidden sm:block">
                AI For Classes 6–12
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-white bg-slate-800 border border-slate-700'
                      : 'text-slate-300 hover:text-white hover:bg-slate-900'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons: Settled, Professional Styling */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={siteConfig.createWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-emerald-300 bg-emerald-950/50 hover:bg-emerald-900/50 border border-emerald-800/60 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp</span>
            </a>

            <Link
              to="/courses"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm"
            >
              <span>Explore Courses</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={siteConfig.createWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-emerald-400 bg-emerald-950/50 border border-emerald-800/60"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800 transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-navy-950 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 mt-3 shadow-xl">
          <div className="space-y-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-white bg-slate-800'
                      : 'text-slate-300 hover:text-white hover:bg-slate-900'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-800 space-y-2">
            <Link
              to="/courses"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700"
            >
              <span>Explore Courses</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={siteConfig.createWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2 rounded-lg text-xs font-medium text-emerald-300 bg-emerald-950/50 border border-emerald-800/50"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Direct WhatsApp ({siteConfig.whatsappFormatted})</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
