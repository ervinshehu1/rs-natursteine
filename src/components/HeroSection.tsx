import { useState, useEffect } from 'react';
import heroMarble from '@/assets/hero-marble.jpg';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background with Parallax */}
      <div 
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <img 
          src={heroMarble} 
          alt="Luxury marble texture background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="font-luxury text-6xl md:text-8xl lg:text-9xl font-bold text-primary mb-8 leading-tight">
            LuxeMarble
          </h1>
          <p className="font-luxury text-2xl md:text-4xl text-primary/80 mb-6 italic font-light">
            Crafted by Nature, Perfected by Excellence
          </p>
          <p className="font-body text-lg md:text-xl text-primary/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            Discover the world's finest marble collections. Each piece tells a story of geological artistry, 
            refined through millions of years and perfected by master craftsmen.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="btn-luxury text-lg px-10 py-5">
              Explore Collections
            </button>
            <button className="btn-marble text-lg px-10 py-5">
              Learn Our Story
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-luxury-gold rounded-full flex justify-center">
            <div className="w-1 h-3 bg-luxury-gold rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;