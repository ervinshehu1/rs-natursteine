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
          <h1 className="font-luxury text-6xl md:text-8xl lg:text-7xl font-bold text-primary mb-8 leading-tight">
            RAMA SHEHU NATURSTEINE
          </h1>
          <p className="font-luxury text-2xl md:text-4xl text-primary/80 mb-6 italic font-light">
            Stein für Stein
          </p>
          <p className="font-body text-lg md:text-xl text-primary/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            Qualität aus der Natur.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="/collections"><button className="btn-luxury text-lg px-10 py-5">
              Entdecke unsere Kollektionen
            </button>
            </a>
            {/* <button className="btn-marble text-lg px-10 py-5">
              Learn Our Story
            </button> */}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default HeroSection;