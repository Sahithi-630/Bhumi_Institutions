import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFloatingBtn from './components/WhatsAppFloatingBtn';
import EnquiryModal from './components/EnquiryModal';

// Pages
import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import CourseDetailPage from './pages/CourseDetailPage';
import WhyBhumiPage from './pages/WhyBhumiPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

// Scroll to top upon route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

export default function App() {
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [selectedCourseForModal, setSelectedCourseForModal] = useState('');

  const handleOpenEnquiry = (courseTitle = '') => {
    setSelectedCourseForModal(courseTitle);
    setEnquiryModalOpen(true);
  };

  const handleCloseEnquiry = () => {
    setEnquiryModalOpen(false);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen w-full overflow-x-hidden bg-navy-950 text-slate-100 font-sans selection:bg-brand-blue selection:text-white">
        {/* Sticky Header */}
        <Navbar onOpenEnquiry={() => handleOpenEnquiry()} />

        {/* Dynamic Route Pages */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/courses" element={<CoursesPage onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/courses/:slug" element={<CourseDetailPage onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/why-bhumi" element={<WhyBhumiPage onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/about" element={<AboutPage onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer onOpenEnquiry={() => handleOpenEnquiry()} />

        {/* Floating WhatsApp Quick Action Button */}
        <WhatsAppFloatingBtn />

        {/* Global Modal for Course Enquiries */}
        <EnquiryModal
          isOpen={enquiryModalOpen}
          onClose={handleCloseEnquiry}
          preselectedCourse={selectedCourseForModal}
        />
      </div>
    </BrowserRouter>
  );
}
