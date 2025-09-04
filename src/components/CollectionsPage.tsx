import collections from "@/data/collections";

const CollectionsPage = () => {
  return (
    <section className="section-luxury bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="font-luxury text-5xl md:text-6xl font-bold text-primary mb-8">
            All Collections
          </h2>
          <div className="w-24 h-1 bg-gold-gradient mx-auto mb-8 rounded-full"></div>
          <p className="font-body text-xl text-primary/70 max-w-3xl mx-auto leading-relaxed">
            Explore all our marble collections and find the perfect stone for
            your project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {collections.map((marble, index) => (
            <div
              key={marble.id}
              className="card-marble overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={marble.image}
                  alt={marble.name}
                  className="w-full h-80 object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-8">
                <h3 className="font-luxury text-2xl font-semibold text-primary mb-4">
                  {marble.name}
                </h3>
                <p className="font-body text-primary/70 leading-relaxed">
                  {marble.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionsPage;
