import { useState, useMemo, useEffect, useRef } from "react";
import collectionsData from "@/data/collections";
import logo from "@/assets/Logo.png";
import { Link } from "react-router-dom";
import Scrollbar from "smooth-scrollbar";

const CollectionsPage = () => {
  const [filter, setFilter] = useState<string>("All");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const scrollbarRef = useRef<any>(null);

  // ✅ Initialize smooth-scrollbar when component mounts
  useEffect(() => {
    const container = document.querySelector("#smooth-scroll");
    if (container && !scrollbarRef.current) {
      scrollbarRef.current = Scrollbar.init(container as HTMLElement, {
        damping: 0.08,
        renderByPixels: true,
        continuousScrolling: true,
      });
    }

    return () => {
      scrollbarRef.current?.destroy();
      scrollbarRef.current = null;
    };
  }, []);

  // ✅ Filter collections efficiently
  const filteredCollections = useMemo(() => {
    if (filter === "All") return collectionsData;
    if (filter === "Quarzit") {
      return collectionsData.filter((item) => item.name === "Quarzit");
    }
    if (filter === "Indien") {
      return collectionsData.filter((item) => item.origin === "Indien");
    }
    return collectionsData.filter((item) => item.origin === filter);
  }, [filter]);

  return (
    <div id="smooth-scroll" style={{ height: "100vh", overflow: "hidden" }}>
      {/* ===== Header (Nav) ===== */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="Rama Shehu Natursteine Logo"
                className="h-12 md:h-16 lg:h-28 w-auto object-contain"
              />
            </Link>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#hero" className="font-body text-primary hover:text-luxury-gold transition-colors duration-300">Willkommen</a>
              <a href="#about" className="font-body text-primary hover:text-luxury-gold transition-colors duration-300">Über uns</a>
              <a href="#collections" className="font-body text-primary hover:text-luxury-gold transition-colors duration-300">Bildergalerie</a>
              <a href="#contact" className="font-body text-primary hover:text-luxury-gold transition-colors duration-300">Kontakt</a>
            </div>

            {/* Mobile burger */}
            <div className="md:hidden">
              <button className="text-primary" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile menu dropdown */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-2 space-y-2 pb-4 px-4 bg-white/90 backdrop-blur-sm border-t border-primary/10">
              <a href="#hero" className="block font-body text-primary hover:text-luxury-gold" onClick={() => setMobileMenuOpen(false)}>Willkommen</a>
              <a href="#about" className="block font-body text-primary hover:text-luxury-gold" onClick={() => setMobileMenuOpen(false)}>Über uns</a>
              <a href="#collections" className="block font-body text-primary hover:text-luxury-gold" onClick={() => setMobileMenuOpen(false)}>Bildergalerie</a>
              <a href="#contact" className="block font-body text-primary hover:text-luxury-gold" onClick={() => setMobileMenuOpen(false)}>Kontakt</a>
            </div>
          )}
        </div>
      </nav>

      {/* ===== Collections Section ===== */}
      <section className="section-luxury bg-background pt-32 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 animate-fade-in-up">
            <h2 className="font-luxury text-5xl md:text-6xl font-bold text-primary mb-8">Alle Kollektionen</h2>
            <div className="w-24 h-1 bg-gold-gradient mx-auto mb-8 rounded-full"></div>
            <p className="font-body text-xl text-primary/70 max-w-3xl mx-auto leading-relaxed mb-6">
              Entdecken Sie alle Kollektionen und finden Sie den perfekten Stein für Ihr Projekt.
            </p>

            {/* Filter Buttons */}
            <div className="flex justify-center gap-4 relative">
              {/* Indien with dropdown */}
              <div className="relative">
                <button onClick={() => setShowDropdown((prev) => !prev)}
                  className={`px-5 py-2 rounded-lg font-body transition-colors ${filter === "Indien" || filter === "Quarzit" ? "bg-primary text-white" : "bg-gray-200 hover:bg-gray-300"}`}>
                  {filter === "Quarzit" ? "Quarzit" : "Indien"}
                </button>

                {showDropdown && (
                  <div className="absolute left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                    <button onClick={() => { setFilter("Indien"); setShowDropdown(false); }}
                      className={`block px-5 py-2 w-full text-left hover:bg-gray-100 ${filter === "Indien" ? "bg-primary text-white" : ""}`}>Indien</button>
                    <button onClick={() => { setFilter("Quarzit"); setShowDropdown(false); }}
                      className={`block px-5 py-2 w-full text-left hover:bg-gray-100 ${filter === "Quarzit" ? "bg-primary text-white" : ""}`}>Quarzit</button>
                  </div>
                )}
              </div>

              {/* Ägypten */}
              <button onClick={() => { setFilter("Ägypten"); setShowDropdown(false); }}
                className={`px-5 py-2 rounded-lg font-body transition-colors ${filter === "Ägypten" ? "bg-primary text-white" : "bg-gray-200 hover:bg-gray-300"}`}>Ägypten</button>

              {/* Alle */}
              <button onClick={() => { setFilter("All"); setShowDropdown(false); }}
                className={`px-5 py-2 rounded-lg font-body transition-colors ${filter === "All" ? "bg-primary text-white" : "bg-gray-200 hover:bg-gray-300"}`}>Alle</button>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 hover:cursor-pointer">
            {filteredCollections.map((marble, index) => (
              <div key={index} className="card-marble overflow-hidden animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative overflow-hidden group">
                  <img src={marble.image} alt={marble.name} loading="lazy"
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white p-6">
                      <p className="font-body text-sm mb-2 uppercase tracking-wide">Herkunft</p>
                      <p className="font-luxury text-lg mb-4">{marble.origin}</p>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="font-luxury text-2xl font-semibold text-primary mb-4">{marble.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
                <li><a href="#about" className="text-primary-foreground/80 hover:text-luxury-gold transition-colors">Über uns</a></li>
                <li><a href="#collections" className="text-primary-foreground/80 hover:text-luxury-gold transition-colors">Bildergalerie</a></li>
                <li><a href="#why-choose" className="text-primary-foreground/80 hover:text-luxury-gold transition-colors">Warum wir</a></li>
                <li><a href="#contact" className="text-primary-foreground/80 hover:text-luxury-gold transition-colors">Kontakt</a></li>
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
  );
};

export default CollectionsPage;
