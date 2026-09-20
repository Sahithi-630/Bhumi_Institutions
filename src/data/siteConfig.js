export const siteConfig = {
  name: "BHUMI INSTITUTIONS",
  brandName: "Bhumi Institutions",
  motto: "Building the Future Through Education",
  tagline: "Understand AI. Create with AI. Shape the Future.",
  supportingTagline: "Practical AI education for students from Classes 6–12.",
  targetAudience: "School Students from Classes 6 to 12 & Forward-Thinking Parents",
  whatsappNumber: "8317518463",
  whatsappFormatted: "+91 83175 18463",
  alternatePhone: "6301884617",
  alternatePhoneFormatted: "+91 63018 84617",
  email: "admissions@bhumiinstitutions.com",
  instagramHandle: "bhumi_instutions",
  instagramUrl: "https://www.instagram.com/bhumi_instutions/",
  location: "India • Interactive Online Batches Nationwide",
  academicYear: "2026",
  
  createWhatsAppUrl: (customMessage) => {
    const defaultMsg = "Hi Bhumi Institutions! I would like to enquire about your AI courses for school students (Classes 6-12).";
    const msg = customMessage || defaultMsg;
    return `https://wa.me/918317518463?text=${encodeURIComponent(msg)}`;
  },

  createCourseWhatsAppUrl: (courseTitle, studentClass = "", fee = "") => {
    const classText = studentClass ? ` for Class ${studentClass}` : "";
    const feeText = fee ? ` (Fee: ${fee})` : "";
    const msg = `Hi Bhumi Institutions! I am interested in registering/enquiring about the "${courseTitle}" course${feeText}${classText}. Please share the batch timings and details.`;
    return `https://wa.me/918317518463?text=${encodeURIComponent(msg)}`;
  },

  createEnquiryWhatsAppUrl: (data) => {
    const text = `*New Admission Enquiry - Bhumi Institutions*\n\n` +
      `👤 *Student Name:* ${data.studentName || 'Not specified'}\n` +
      `👨‍👩‍👦 *Parent / Guardian:* ${data.parentName || 'Not specified'}\n` +
      `🏫 *Class / Grade:* ${data.studentClass || 'Class 8'}\n` +
      `📚 *Course Interested:* ${data.course || 'AI Courses'}\n` +
      `📱 *Contact Phone:* ${data.phone || 'Not specified'}\n` +
      `📧 *Email:* ${data.email || 'Not provided'}\n` +
      `💬 *Query / Note:* ${data.message || 'Please provide details on batches and admissions.'}\n\n` +
      `Thank you! Looking forward to your guidance.`;
    return `https://wa.me/918317518463?text=${encodeURIComponent(text)}`;
  }
};

export const openWhatsApp = (url) => {
  if (typeof window === 'undefined') return;
  try {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
      window.location.href = url;
    }
  } catch (e) {
    window.location.href = url;
  }
};
