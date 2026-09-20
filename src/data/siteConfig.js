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

  createCourseWhatsAppUrl: (courseTitle, studentClass = "") => {
    const classText = studentClass ? ` for Class ${studentClass}` : "";
    const msg = `Hi Bhumi Institutions! I am interested in registering/enquiring about the "${courseTitle}" course${classText}. Please share the batch timings and details.`;
    return `https://wa.me/918317518463?text=${encodeURIComponent(msg)}`;
  }
};
