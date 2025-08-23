const AboutSection = () => {
  return (
    <section className="section-luxury bg-surface marble-texture">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in-up">
          <h2 className="font-luxury text-5xl md:text-6xl font-bold text-primary mb-8">
            Our Story
          </h2>
          <div className="w-24 h-1 bg-gold-gradient mx-auto mb-12 rounded-full"></div>
          
          <div className="space-y-8 text-lg md:text-xl leading-relaxed">
            <p className="font-body text-primary/80">
              For over three decades, LuxeMarble has been at the forefront of luxury natural stone curation. 
              Born from a passion for geological excellence and architectural beauty, we have built our reputation 
              on an unwavering commitment to quality and sustainability.
            </p>
            
            <p className="font-body text-primary/70">
              Each marble in our collection is carefully selected from the world's most prestigious quarries, 
              from the pristine Carrara mountains of Italy to the exotic quarries of Brazil and Turkey. 
              We believe that every stone has a unique character, a story written by nature itself.
            </p>
            
            <div className="grid md:grid-cols-3 gap-12 mt-16">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-luxury font-bold accent-gold mb-4">30+</div>
                <p className="font-body text-primary/70">Years of Excellence</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-luxury font-bold accent-gold mb-4">500+</div>
                <p className="font-body text-primary/70">Premium Projects</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-luxury font-bold accent-gold mb-4">50+</div>
                <p className="font-body text-primary/70">Marble Varieties</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;