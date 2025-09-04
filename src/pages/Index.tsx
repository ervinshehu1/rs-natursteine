import { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import CollectionsSection from '@/components/CollectionsSection';
import WhyChooseSection from '@/components/WhyChooseSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  useEffect(() => {
    // Add smooth scrolling behavior for anchor links
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = target.getAttribute('href')?.slice(1);
        const targetElement = document.getElementById(targetId || '');
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  return (
    <main className="overflow-x-hidden">
      {/* SEO and Meta Information */}
      <div className="sr-only">
        <h1>LuxeMarble - Premium Luxury Marble Collections</h1>
        <p>
          Discover the world's finest marble collections at LuxeMarble. 
          Premium Carrara, Calacatta, Nero Marquina, and exclusive marble varieties 
          sourced from the most prestigious quarries worldwide. 
          Sustainable luxury natural stone for discerning architectural projects.
        </p>
      </div>

      {/* Navigation (Fixed) */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="font-luxury text-2xl font-bold accent-gold">
              LuxeMarble
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#hero" className="font-body text-primary hover:text-luxury-gold transition-colors duration-300">
                Home
              </a>
              <a href="#about" className="font-body text-primary hover:text-luxury-gold transition-colors duration-300">
                About
              </a>
              <a href="#collections" className="font-body text-primary hover:text-luxury-gold transition-colors duration-300">
                Collections
              </a>
              <a href="#contact" className="font-body text-primary hover:text-luxury-gold transition-colors duration-300">
                Contact
              </a>
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

      {/* Hero Section */}
      <section id="hero">
        <HeroSection />
      </section>

      {/* About Section */}
      <section id="about">
        <AboutSection />
      </section>

      {/* Collections Section */}
      <section id="collections">
        <CollectionsSection />
      </section>

      {/* Why Choose Section */}
      <section id="why-choose">
        <WhyChooseSection />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <ContactSection />
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="font-luxury text-3xl font-bold mb-4 text-luxury-gold">
                LuxeMarble
              </div>
              <p className="font-body text-primary-foreground/80 leading-relaxed mb-6">
                Crafting luxury with nature's finest marble for over three decades. 
                Each stone tells a story of geological artistry and human craftsmanship.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-luxury-gold rounded-full flex items-center justify-center text-white hover:bg-luxury-gold-dark transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.56c-.88.39-1.83.65-2.83.77 1.02-.61 1.8-1.58 2.17-2.73-.95.56-2.01.98-3.14 1.2-.9-.96-2.18-1.56-3.59-1.56-2.72 0-4.92 2.2-4.92 4.92 0 .39.04.76.13 1.12-4.09-.2-7.72-2.16-10.15-5.13-.42.72-.67 1.56-.67 2.45 0 1.7.87 3.2 2.19 4.08-.8-.02-1.57-.25-2.23-.62v.06c0 2.38 1.69 4.37 3.95 4.82-.41.11-.85.17-1.3.17-.32 0-.63-.03-.93-.08.63 1.96 2.46 3.38 4.63 3.42-1.69 1.32-3.82 2.11-6.14 2.11-.4 0-.79-.02-1.17-.07 2.18 1.4 4.77 2.21 7.55 2.21 9.06 0 14.01-7.5 14.01-14.01 0-.21 0-.42-.01-.62.96-.69 1.8-1.56 2.46-2.55z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-luxury-gold rounded-full flex items-center justify-center text-white hover:bg-luxury-gold-dark transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-luxury-gold rounded-full flex items-center justify-center text-white hover:bg-luxury-gold-dark transition-colors">  
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-luxury text-xl font-semibold mb-4 text-luxury-gold">Quick Links</h3>
              <ul className="space-y-2 font-body">
                <li><a href="#about" className="text-primary-foreground/80 hover:text-luxury-gold transition-colors">About Us</a></li>
                <li><a href="#collections" className="text-primary-foreground/80 hover:text-luxury-gold transition-colors">Collections</a></li>
                <li><a href="#testimonials" className="text-primary-foreground/80 hover:text-luxury-gold transition-colors">Testimonials</a></li>
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
    </main>
  );
};

export default Index;