const features = [
  {
    id: 1,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Höchste Qualität',
    description: 'Rama Shehu Natursteine garantiert höchste Qualität -  sorgfältig ausgewählte Natursteine, die durch Langlebigkeit, natürliche Schönheit und Robustheit überzeugen.'
  },
  {
    id: 4,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Einzigartige internationale Auswahl',
    description: 'Rama Shehu Natursteine bieten Ihnen eine vielfältige und exklusive Auswahl an Granit- und Quarzitsteinen aus aller Welt – Qualität und Vielfalt, die Sie so nicht überall finden. Dank unserer direkten Kontakte zu Steinbrüchen in Indien und anderen Ländern können wir Ihnen einzigartige Natursteine anbieten, die nicht jeder Händler im Sortiment hat. So finden Sie bei uns genau den besonderen Stein, der Ihr Projekt unverwechselbar macht.'
  }
];

const WhyChooseSection = () => {
  return (
    <section className="section-luxury bg-surface-soft marble-texture">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="font-luxury text-5xl md:text-6xl font-bold text-primary mb-8">
            Warum Rama Shehu Natursteine Ihre beste Auswahl ist
          </h2>
          <div className="w-24 h-1 bg-gold-gradient mx-auto mb-8 rounded-full"></div>
          <p className="font-body text-xl text-primary/70 max-w-3xl mx-auto leading-relaxed">
            Bei Rama Shehu Natursteine setzen wir auf höchste Qualität, natürliche Schönheit – damit Ihr Projekt mit unseren sorgfältig ausgewählten Natursteinen nicht nur langlebig, sondern auch einzigartig wird.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="card-marble p-8 h-full">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gold-gradient rounded-2xl flex items-center justify-center text-white shadow-gold group-hover:animate-luxury-glow">
                      {feature.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-luxury text-2xl font-semibold text-primary mb-4">
                      {feature.title}
                    </h3>
                    <p className="font-body text-primary/70 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;