import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import SkillsGrid from "./components/SkillsGrid";
import WorkTimeline from "./components/WorkTimeline";
import ProjectsShowcase from "./components/ProjectsShowcase";
import CertificatesList from "./components/CertificatesList";
import ContactForm from "./components/ContactForm";
import { profileSummary } from "./data";
import { Smartphone, Mail, Linkedin, ChevronUp } from "lucide-react";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Intersection Observer to track active sections during scrolling
  useEffect(() => {
    const sectionIds = ["hero", "about", "skills", "experience", "projects", "credentials", "contact"];
    const observers: IntersectionObserver[] = [];

    const options = {
      root: null,
      rootMargin: "-25% 0px -55% 0px", // Trigger when section occupies the active zone
      threshold: 0
    };

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    observers.push(observer);

    // Track scroll for "Back to top" button
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      observers.forEach((obs) => obs.disconnect());
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleScrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  return (
    <div className="min-h-screen flex flex-col font-sans select-text text-gray-900 bg-[#FAFAFA]" id="app-root-container">
      {/* Header element */}
      <Navbar activeSection={activeSection} />

      {/* Main viewport sections */}
      <main className="flex-grow z-10" id="app-main-layout">
        <Hero />
        <About />
        <SkillsGrid />
        <WorkTimeline />
        <ProjectsShowcase />
        <CertificatesList />
        <ContactForm />
      </main>

      {/* Footer component */}
      <footer className="bg-gray-950 text-gray-400 py-12 border-t border-gray-800 relative z-20" id="main-footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-b border-gray-800 pb-8 mb-8">
            
            {/* Branding */}
            <div className="flex items-center space-x-2.5">
              <div className="w-9 h-9 rounded-none bg-blue-600 flex items-center justify-center text-white font-mono font-bold text-base shadow-sm">
                AA
              </div>
              <div>
                <h4 className="font-display font-bold text-white text-sm tracking-widest uppercase">
                  {profileSummary.name}
                </h4>
                <p className="font-mono text-[9px] text-gray-500 tracking-wide mt-0.5">
                  android_ecosystem_engineer
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex gap-4 text-[10px] font-mono uppercase tracking-wider">
              <a href="#about" className="hover:text-blue-500 transition-colors">About</a>
              <span className="text-gray-800">/</span>
              <a href="#skills" className="hover:text-blue-500 transition-colors">Skills</a>
              <span className="text-gray-800">/</span>
              <a href="#experience" className="hover:text-blue-500 transition-colors">Experience</a>
              <span className="text-gray-800">/</span>
              <a href="#projects" className="hover:text-blue-500 transition-colors">Projects</a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3" id="footer-social-links">
              <a
                href={profileSummary.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-none bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${profileSummary.email}`}
                className="w-9 h-9 rounded-none bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={`tel:${profileSummary.phone}`}
                className="w-9 h-9 rounded-none bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all"
                title="Mobile Phone Contacts"
              >
                <Smartphone className="w-4 h-4" />
              </a>
            </div>

          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-mono text-gray-500 uppercase tracking-wider">
            <span>© 2026 {profileSummary.name}. All product ownership and intellectual material reserved.</span>
            <span>Made in Cairo, Egypt.</span>
          </div>

        </div>
      </footer>

      {/* Fluent float back-to-top button */}
      {showScrollTop && (
        <button
          onClick={handleScrollToTop}
          className="fixed bottom-6 right-6 p-3 bg-white hover:bg-gray-950 hover:text-white text-gray-950 border-2 border-gray-950 rounded-none shadow-md transition-all cursor-pointer z-50 flex items-center justify-center animate-in fade-in slide-in-from-bottom-4 duration-300 pointer-events-auto"
          aria-label="Back to top"
          id="back-to-top-btn"
        >
          <ChevronUp className="w-4.5 h-4.5" />
        </button>
      )}

    </div>
  );
}
