import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import india31 from "../assets/India/foto.png"
import india32 from "../assets/India/foto-1.png"
import india33 from "../assets/India/foto-2.png"


const collections = [
  {
    id: 1,
    name: 'Imperial Red',
    image: india31,
    origin: 'Indien',
  },
  {
    id: 2,
    name: 'Paradisso Classic',
    image: india32,
    origin: 'Indien',
  },
  {
    id: 3,
    name: 'Hymala',
    image: india33,
    origin: 'Indien',
  },
];

const CollectionsSection = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const navigate = useNavigate(); 

  return (
    <section className="section-luxury bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="font-luxury text-5xl md:text-6xl font-bold text-primary mb-8">
            Bildergalerie
          </h2>
          <div className="w-24 h-1 bg-gold-gradient mx-auto mb-8 rounded-full"></div>
          <p className="font-body text-xl text-primary/70 max-w-3xl mx-auto leading-relaxed">
            Inspiration für Ihre nächsten Projekte
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {collections.map((marble, index) => (
            <div
              key={marble.id}
              className="group cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
              onMouseEnter={() => setHoveredId(marble.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="card-marble overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={marble.image}
                    alt={`${marble.name} luxury marble`}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div 
                    className={`absolute inset-0 bg-primary/60 transition-opacity duration-300 ${
                      hoveredId === marble.id ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white p-6">
                        <p className="font-body text-sm mb-2 uppercase tracking-wide">Origin</p>
                        <p className="font-luxury text-lg mb-4">{marble.origin}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="font-luxury text-2xl font-semibold text-primary mb-4">
                    {marble.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <button
            onClick={() => navigate('/collections')}
            className="px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition duration-300"
          >
            Kollektionen ansehen
          </button>
        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;
