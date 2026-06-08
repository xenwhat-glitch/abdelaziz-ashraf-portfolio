import { useState, useEffect } from "react";
import { Smartphone, Mail, Menu, X, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { profileSummary } from "../data";

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Intro", id: "hero" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" },
    { label: "Credentials", id: "credentials" },
    { label: "Contact", id: "contact" },
  ];

  function scrollToSection(id: string) {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  }

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-gray-200 py-3 shadow-sm"
          : "bg-white/70 backdrop-blur-xs border-b border-gray-200/50 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand/Logo: Sharp Geometric Block */}
        <div 
          onClick={() => scrollToSection("hero")}
          className="flex items-center space-x-3 cursor-pointer group"
          id="nav-logo"
        >
          <div className="w-10 h-10 bg-gray-900 flex items-center justify-center text-white font-mono font-bold text-lg select-none group-hover:bg-blue-600 transition-colors">
            AA
          </div>
          <div>
            <h1 className="font-display font-medium text-gray-950 uppercase tracking-widest text-xs sm:text-sm leading-none flex items-center gap-1.5 font-bold">
              {profileSummary.name}
              <span className="inline-flex w-2 h-2 rounded-none bg-blue-600" title="Available for opportunities"></span>
            </h1>
            <p className="font-mono text-[9px] text-blue-600 font-bold uppercase tracking-[0.15em] mt-1.5 max-sm:hidden">
              <Terminal className="w-3 h-3 inline mr-1 text-blue-600" />
              android_architect.kt
            </p>
          </div>
        </div>

        {/* Desktop Navigation: Uppercase Architectural Labels */}
        <nav className="hidden lg:flex items-center space-x-4" id="nav-desktop-links">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                id={`nav-item-${item.id}`}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest transition-all duration-200 cursor-pointer relative ${
                  isActive
                    ? "text-blue-600"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-3 right-3 h-0.5 bg-blue-600"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center space-x-4" id="nav-right-cta">
          <a
            href={`tel:${profileSummary.phone}`}
            className="flex items-center space-x-1.5 font-mono text-[10px] uppercase tracking-wider text-gray-500 hover:text-blue-600 transition-colors"
            id="nav-phone-link"
          >
            <Smartphone className="w-3.5 h-3.5 text-blue-600" />
            <span className="max-md:hidden">{profileSummary.phone}</span>
          </a>
          <button
            onClick={() => scrollToSection("contact")}
            className="px-5 py-2 border-2 border-gray-950 hover:bg-gray-950 hover:text-white text-gray-950 text-[11px] font-bold uppercase tracking-widest transition-all cursor-pointer bg-transparent"
            id="nav-hire-btn"
          >
            <span>Connect</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="lg:hidden flex items-center space-x-2" id="nav-mobile-trigger">
          <button
            onClick={() => scrollToSection("contact")}
            className="p-2 border border-gray-200 text-gray-700 hover:text-blue-600 rounded-none transition-all"
            title="Contact"
          >
            <Mail className="w-4 h-4 text-blue-600" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-none transition-colors cursor-pointer border border-transparent"
            id="mobile-menu-btn"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-b border-gray-200 overflow-hidden py-4 px-4 sm:px-6"
            id="mobile-nav-panel"
          >
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    id={`nav-mob-item-${item.id}`}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left px-4 py-3 text-xs font-bold uppercase tracking-wider transition-all ${
                      isActive
                        ? "bg-blue-50 text-blue-600 border-l-4 border-blue-600"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
              <div className="pt-4 border-t border-gray-200 flex flex-col gap-3">
                <a
                  href={`tel:${profileSummary.phone}`}
                  className="flex items-center space-x-2.5 px-4 font-mono text-xs text-gray-600 hover:text-blue-600 uppercase tracking-wider"
                >
                  <Smartphone className="w-4 h-4 text-blue-600" />
                  <span>{profileSummary.phone}</span>
                </a>
                <a
                  href={`mailto:${profileSummary.email}`}
                  className="flex items-center space-x-2.5 px-4 font-mono text-xs text-gray-600 hover:text-blue-600 uppercase tracking-wider"
                >
                  <Mail className="w-4 h-4 text-blue-600" />
                  <span>{profileSummary.email}</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
