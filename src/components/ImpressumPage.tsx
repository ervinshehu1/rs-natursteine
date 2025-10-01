// src/pages/ImpressumPage.tsx
import React, { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import logo from "@/assets/Logo.png";

const ImpressumPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (section: string) => {
    navigate("/", { state: { scrollTo: section } });
  };

  return (
    <div className="bg-surface marble-texture flex flex-col min-h-screen">
      <div style={{ paddingTop: "64px" }}> {/* offset for nav */}
        {/* ===== Navbar ===== */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-primary/10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between h-16">
              <RouterLink to="/" className="flex items-center">
                <img
                  src={logo}
                  alt="Rama Shehu Natursteine Logo"
                  className="h-16 md:h-16 lg:h-28 w-auto object-contain"
                />
              </RouterLink>

              {/* Desktop menu */}
              <div className="hidden md:flex items-center space-x-8">
                <button onClick={() => handleNavigation("hero")} className="font-body text-primary hover:text-luxury-gold transition-colors duration-300">Willkommen</button>
                <button onClick={() => handleNavigation("about")} className="font-body text-primary hover:text-luxury-gold transition-colors duration-300">Über uns</button>
                <button onClick={() => handleNavigation("collections")} className="font-body text-primary hover:text-luxury-gold transition-colors duration-300">Bildergalerie</button>
                <button onClick={() => handleNavigation("contact")} className="font-body text-primary hover:text-luxury-gold transition-colors duration-300">Kontakt</button>
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
                <button onClick={() => { handleNavigation("hero"); setMobileMenuOpen(false); }} className="block font-body text-primary hover:text-luxury-gold">Willkommen</button>
                <button onClick={() => { handleNavigation("about"); setMobileMenuOpen(false); }} className="block font-body text-primary hover:text-luxury-gold">Über uns</button>
                <button onClick={() => { handleNavigation("collections"); setMobileMenuOpen(false); }} className="block font-body text-primary hover:text-luxury-gold">Bildergalerie</button>
                <button onClick={() => { handleNavigation("contact"); setMobileMenuOpen(false); }} className="block font-body text-primary hover:text-luxury-gold">Kontakt</button>
              </div>
            )}
          </div>
        </nav>

        {/* ===== Content ===== */}
        <main className="flex-1 pt-32 pb-20">
          <section id="impressum" className="max-w-4xl mx-auto px-6">
            <h1 className="font-luxury text-5xl md:text-6xl font-bold text-primary mb-12">Impressum</h1>

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
              <p>Trotz sorgfältiger inhaltlicher Kontrolle übernimmt Rama Shehu Natursteine keine Haftung für die Richtigkeit, Vollständigkeit oder Aktualität der bereitgestellten Inhalte. Für den Inhalt verlinkter externer Seiten sind ausschliesslich deren Betreiber verantwortlich.</p>

              <h2 className="font-luxury text-2xl mt-6">Datenschutzhinweis</h2>
              <p>Personenbezogene Daten, die über diese Website übermittelt werden (z. B. über das Kontaktformular oder per E-Mail), werden vertraulich behandelt und ausschliesslich zur Bearbeitung Ihres Anliegens verwendet. Es erfolgt keine Weitergabe an Dritte ohne Ihre ausdrückliche Zustimmung.</p>

              <h2 className="font-luxury text-2xl mt-6">Urheberrecht</h2>
              <p>Alle Inhalte dieser Website (Texte, Bilder, Design) sind urheberrechtlich geschützt. Eine Verwendung ohne ausdrückliche schriftliche Genehmigung ist nicht gestattet.</p>
            </div>
          </section>
        </main>

        {/* ===== Footer ===== */}
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
                  <li><button onClick={() => handleNavigation("about")}>Über uns</button></li>
                  <li><button onClick={() => handleNavigation("collections")}>Bildergalerie</button></li>
                  <li><button onClick={() => handleNavigation("why-choose")}>Warum wir</button></li>
                  <li><button onClick={() => handleNavigation("contact")}>Kontakt</button></li>
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
    </div>
  );
};

export default ImpressumPage;
