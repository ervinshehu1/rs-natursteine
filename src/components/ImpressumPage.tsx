// src/pages/ImpressumPage.tsx
import React, { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import Scrollbar from "smooth-scrollbar";
import logo from "@/assets/Logo.png";

const ImpressumPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const scrollbarContainer = document.getElementById("scroll-container");
    if (!scrollbarContainer) return;

    const scrollbar = Scrollbar.init(scrollbarContainer, {
      damping: 0.08,
      renderByPixels: true,
      continuousScrolling: true,
    });

    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "A" && target.getAttribute("href")?.startsWith("#")) {
        e.preventDefault();
        const targetId = target.getAttribute("href")!.slice(1);
        const el = document.getElementById(targetId);
        if (el) {
          const top = el.offsetTop;
          scrollbar.scrollTo(0, top, 600); // smooth scroll to section
          setMobileMenuOpen(false); // close mobile menu on link click
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
    <div id="scroll-container" style={{ height: "100vh", overflow: "hidden" }} className="bg-surface marble-texture flex flex-col">
      {/* ===== Navbar ===== */}
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

            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#hero" className="font-body text-primary hover:text-luxury-gold transition-colors duration-300">Willkommen</a>
              <a href="#about" className="font-body text-primary hover:text-luxury-gold transition-colors duration-300">Über uns</a>
              <a href="#collections" className="font-body text-primary hover:text-luxury-gold transition-colors duration-300">Bildergalerie</a>
              <a href="#contact" className="font-body text-primary hover:text-luxury-gold transition-colors duration-300">Kontakt</a>
            </div>

            {/* Mobile burger */}
            <div className="md:hidden">
              <button
                className="text-primary"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile menu dropdown */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-2 space-y-2 pb-4 px-4 bg-white/90 backdrop-blur-sm border-t border-primary/10">
              <a href="#hero" className="block font-body text-primary hover:text-luxury-gold transition-colors duration-300" onClick={() => setMobileMenuOpen(false)}>Willkommen</a>
              <a href="#about" className="block font-body text-primary hover:text-luxury-gold transition-colors duration-300" onClick={() => setMobileMenuOpen(false)}>Über uns</a>
              <a href="#collections" className="block font-body text-primary hover:text-luxury-gold transition-colors duration-300" onClick={() => setMobileMenuOpen(false)}>Bildergalerie</a>
              <a href="#contact" className="block font-body text-primary hover:text-luxury-gold transition-colors duration-300" onClick={() => setMobileMenuOpen(false)}>Kontakt</a>
            </div>
          )}
        </div>
      </nav>

      {/* ===== Content ===== */}
      <main className="flex-1 pt-32 pb-20">
        <section id="impressum" className="max-w-4xl mx-auto px-6">
          <h1 className="font-luxury text-5xl md:text-6xl font-bold text-primary mb-12">
            Impressum
          </h1>

          <div className="space-y-6 font-body text-primary/80 leading-relaxed text-lg">
            <p><strong>Rama Shehu Natursteine</strong></p>
            <p><strong>Inhaberin:</strong> Rama Shehu Natursteine</p>
            <p><strong>E-Mail:</strong> info@natursteine.ch</p>
            <p><strong>Verantwortlich für den Inhalt dieser Website:</strong> Ervin Shehu (ervinshehu323@gmail.com)</p>
            <p><strong>Rechtsform:</strong> Einzelfirma</p>
            <p>
              <strong>Adresse:</strong> Die Tätigkeit erfolgt im Homeoffice.
              Aus Datenschutzgründen wird keine physische Adresse veröffentlicht. Eine
              ladungsfähige Anschrift wird auf Anfrage per E-Mail zur Verfügung gestellt.
            </p>

            <h2 className="font-luxury text-2xl mt-6">Haftungsausschluss</h2>
            <p>
              Trotz sorgfältiger inhaltlicher Kontrolle übernimmt Rama Shehu
              Natursteine keine Haftung für die Richtigkeit, Vollständigkeit
              oder Aktualität der bereitgestellten Inhalte. Für den Inhalt
              verlinkter externer Seiten sind ausschliesslich deren Betreiber
              verantwortlich.
            </p>

            <h2 className="font-luxury text-2xl mt-6">Datenschutzhinweis</h2>
            <p>
              Personenbezogene Daten, die über diese Website übermittelt werden
              (z. B. über das Kontaktformular oder per E-Mail), werden vertraulich
              behandelt und ausschließlich zur Bearbeitung Ihres Anliegens
              verwendet. Es erfolgt keine Weitergabe an Dritte ohne Ihre
              ausdrückliche Zustimmung.
            </p>

            <h2 className="font-luxury text-2xl mt-6">Urheberrecht</h2>
            <p>
              Alle Inhalte dieser Website (Texte, Bilder, Design) sind
              urheberrechtlich geschützt. Eine Verwendung ohne ausdrückliche
              schriftliche Genehmigung ist nicht gestattet.
            </p>
          </div>
        </section>
      </main>

      {/* ===== Footer ===== */}
      <footer className="bg-primary text-primary-foreground py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="font-luxury text-3xl font-bold mb-4 text-luxury-gold">Rama Shehu Natursteine</div>
              <p className="font-body text-primary-foreground/80 leading-relaxed mb-6">
                Stein für Stein - Qualität aus der Natur.
              </p>
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
                <RouterLink to="/impressum">Impressum</RouterLink>
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

export default ImpressumPage;
