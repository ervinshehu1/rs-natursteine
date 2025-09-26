// src/pages/Index.tsx
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Scrollbar from "smooth-scrollbar";

import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CollectionsSection from "@/components/CollectionsSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ContactSection from "@/components/ContactSection";
import logo from "@/assets/Logo.png";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const scrollbarRef = useRef<any>(null);

  // Initialize smooth scrollbar
  useEffect(() => {
    if (!containerRef.current) return;

    scrollbarRef.current = Scrollbar.init(containerRef.current, {
      damping: 0.08,
      continuousScrolling: true,
      alwaysShowTracks: true,
    });

    return () => {
      scrollbarRef.current?.destroy();
      scrollbarRef.current = null;
    };
  }, []);

  const handleAnchorClick = (id: string) => {
    const el = document.getElementById(id);
    if (el && scrollbarRef.current && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();
      const navHeight = 64; // adjust if your nav height is different
      const top = scrollbarRef.current.offset.y + (elRect.top - containerRect.top) - navHeight;
      scrollbarRef.current.scrollTo(0, top, 600);
    }
    setMobileMenuOpen(false);
  };

  return (
    <div
      ref={containerRef}
      id="smooth-scroll"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: "hidden",
      }}
    >
      <div style={{ paddingTop: "64px" }}> {/* offset for nav */}
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-primary/10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between h-16">
              <Link
                to="/"
                className="flex items-center"
                onClick={() => scrollbarRef.current?.scrollTo(0, 0, 600)}
              >
                <img
                  src={logo}
                  alt="Rama Shehu Natursteine Logo"
                  className="h-16 md:h-16 lg:h-28 w-auto object-contain"
                />
              </Link>

              {/* Desktop menu */}
              <div className="hidden md:flex items-center space-x-8">
                <button onClick={() => handleAnchorClick("hero")} className="font-body text-primary hover:text-luxury-gold transition-colors duration-300">Willkommen</button>
                <button onClick={() => handleAnchorClick("about")} className="font-body text-primary hover:text-luxury-gold transition-colors duration-300">Über uns</button>
                <button onClick={() => handleAnchorClick("collections")} className="font-body text-primary hover:text-luxury-gold transition-colors duration-300">Bildergalerie</button>
                <button onClick={() => handleAnchorClick("contact")} className="font-body text-primary hover:text-luxury-gold transition-colors duration-300">Kontakt</button>
              </div>

              {/* Mobile burger */}
              <div className="md:hidden">
                <button className="text-primary" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                  </svg>
                </button>
              </div>
            </div>

            {/* Mobile menu dropdown */}
            {mobileMenuOpen && (
              <div className="md:hidden mt-2 space-y-2 pb-4 px-4 bg-white/90 backdrop-blur-sm border-t border-primary/10">
                <button onClick={() => handleAnchorClick("hero")} className="block font-body text-primary hover:text-luxury-gold transition-colors duration-300">Willkommen</button>
                <button onClick={() => handleAnchorClick("about")} className="block font-body text-primary hover:text-luxury-gold transition-colors duration-300">Über uns</button>
                <button onClick={() => handleAnchorClick("collections")} className="block font-body text-primary hover:text-luxury-gold transition-colors duration-300">Bildergalerie</button>
                <button onClick={() => handleAnchorClick("contact")} className="block font-body text-primary hover:text-luxury-gold transition-colors duration-300">Kontakt</button>
              </div>
            )}
          </div>
        </nav>

        {/* Sections */}
        <section id="hero"><HeroSection /></section>
        <section id="about"><AboutSection /></section>
        <section id="collections"><CollectionsSection /></section>
        <section id="why-choose"><WhyChooseSection /></section>
        <section id="contact"><ContactSection /></section>

        {/* Footer */}
        <footer className="bg-primary text-primary-foreground py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <div className="font-luxury text-3xl font-bold mb-4 text-luxury-gold">Rama Shehu Natursteine</div>
                <p className="font-body text-primary-foreground/80 leading-relaxed mb-6">Stein für Stein - Qualität aus der Natur.</p>
              </div>
              <div>
                <h3 className="font-luxury text-xl font-semibold mb-4 text-luxury-gold">Schnellzugriffe</h3>
                <ul className="space-y-2 font-body">
                  <li><button onClick={() => handleAnchorClick("about")}>Über uns</button></li>
                  <li><button onClick={() => handleAnchorClick("collections")}>Bildergalerie</button></li>
                  <li><button onClick={() => handleAnchorClick("why-choose")}>Warum wir</button></li>
                  <li><button onClick={() => handleAnchorClick("contact")}>Kontakt</button></li>
                </ul>
              </div>
              <div>
                <h3 className="font-luxury text-xl font-semibold mb-4 text-luxury-gold">Impress</h3>
                <div className="space-y-2 font-body text-primary-foreground/80">
                  <Link to="/impressum">Impressum</Link>
                </div>
              </div>
            </div>

            <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center font-body text-primary-foreground/60">
              <p>&copy; 2025 Rama Shehu Natursteine. Alle Rechte vorbehalten. Stein für Stein - Qualität aus der Natur.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
