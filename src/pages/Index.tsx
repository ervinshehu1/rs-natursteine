import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Scrollbar from "smooth-scrollbar";

import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CollectionsSection from "@/components/CollectionsSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ContactSection from "@/components/ContactSection";
import logo from "@/assets/Logo.png";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Initialize Smooth Scrollbar on the main container
    const scrollbarContainer = document.getElementById("scroll-container");
    if (!scrollbarContainer) return;

    const scrollbar = Scrollbar.init(scrollbarContainer, {
      damping: 0.08,
      renderByPixels: true,
      continuousScrolling: true,
    });

    // Smooth anchor links
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "A" && target.getAttribute("href")?.startsWith("#")) {
        e.preventDefault();
        const targetId = target.getAttribute("href")!.slice(1);
        const el = document.getElementById(targetId);
        if (el) {
          const top = el.offsetTop;
          scrollbar.scrollTo(0, top, 600); // scroll to target in 600ms
        }
      }
    };

    scrollbarContainer.addEventListener("click", handleAnchorClick);
    return () => {
      scrollbar.destroy();
      scrollbarContainer.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  return (
    <div id="scroll-container" style={{ height: '100vh', overflow: 'hidden' }}>
      {/* SEO Hidden Content */}
      <div className="sr-only">
        <h1>LuxeMarble - Premium Luxury Marble Collections</h1>
        <p>
          Discover the world's finest marble collections at LuxeMarble. Premium
          Carrara, Calacatta, Nero Marquina, and exclusive marble varieties
          sourced from the most prestigious quarries worldwide.
        </p>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="flex items-center">
              <img
                src={logo}
                alt="Rama Shehu Natursteine Logo"
                className="h-12 md:h-16 lg:h-28 w-auto object-contain"
              />
            </a>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#hero" className="font-body text-primary hover:text-luxury-gold transition-colors duration-300">Home</a>
              <a href="#about" className="font-body text-primary hover:text-luxury-gold transition-colors duration-300">About</a>
              <a href="#collections" className="font-body text-primary hover:text-luxury-gold transition-colors duration-300">Collections</a>
              <a href="#contact" className="font-body text-primary hover:text-luxury-gold transition-colors duration-300">Contact</a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-primary">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
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
              <p className="font-body text-primary-foreground/80 leading-relaxed mb-6">
                Crafting luxury with nature's finest marble for over three decades. Each stone tells a story of geological artistry and human craftsmanship.
              </p>
            </div>
            <div>
              <h3 className="font-luxury text-xl font-semibold mb-4 text-luxury-gold">Quick Links</h3>
              <ul className="space-y-2 font-body">
                <li><a href="#about" className="text-primary-foreground/80 hover:text-luxury-gold transition-colors">About Us</a></li>
                <li><a href="#collections" className="text-primary-foreground/80 hover:text-luxury-gold transition-colors">Collections</a></li>
                <li><a href="#why-choose" className="text-primary-foreground/80 hover:text-luxury-gold transition-colors">Why Choose</a></li>
                <li><a href="#contact" className="text-primary-foreground/80 hover:text-luxury-gold transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-luxury text-xl font-semibold mb-4 text-luxury-gold">Contact Info</h3>
              <div className="space-y-2 font-body text-primary-foreground/80">
                <p>1234 Marble Avenue</p>
                <p>Luxury District, NY 10001</p>
                <p>+1 (555) 123-4567</p>
                <p>info@luxemarble.com</p>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center font-body text-primary-foreground/60">
            <p>&copy; 2024 LuxeMarble. All rights reserved. Crafted with passion for luxury natural stone.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
