const testimonials = [
  {
    id: 1,
    quote: "LuxeMarble transformed our hotel lobby into a masterpiece. The quality of their Calacatta Gold is simply unmatched. Every guest comments on the breathtaking beauty.",
    author: "Isabella Rodriguez",
    title: "Interior Designer",
    company: "Rodriguez Design Studio"
  },
  {
    id: 2,
    quote: "Working with LuxeMarble has been an absolute pleasure. Their expertise in marble selection and their commitment to sustainability align perfectly with our values.",
    author: "Michael Chen",
    title: "Principal Architect", 
    company: "Chen Architecture Group"
  },
  {
    id: 3,
    quote: "The attention to detail and craftsmanship is extraordinary. Our Nero Marquina installation exceeded all expectations. LuxeMarble truly understands luxury.",
    author: "Sophia Williams",
    title: "Design Director",
    company: "Williams & Associates"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="section-luxury bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="font-luxury text-5xl md:text-6xl font-bold text-primary mb-8">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-gold-gradient mx-auto mb-8 rounded-full"></div>
          <p className="font-body text-xl text-primary/70 max-w-3xl mx-auto leading-relaxed">
            Discover why architects, designers, and discerning clients choose LuxeMarble 
            for their most prestigious projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="card-marble p-8 h-full">
                <div className="flex flex-col h-full">
                  {/* Quote Icon */}
                  <div className="mb-6">
                    <svg className="w-10 h-10 accent-gold" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                  </div>
                  
                  {/* Quote */}
                  <blockquote className="font-body text-lg text-primary/80 leading-relaxed mb-8 flex-1 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  {/* Author */}
                  <div className="border-t border-primary/10 pt-6">
                    <div className="font-luxury text-xl font-semibold text-primary mb-1">
                      {testimonial.author}
                    </div>
                    <div className="font-body text-primary/60">
                      {testimonial.title}
                    </div>
                    <div className="font-body text-sm accent-gold font-medium">
                      {testimonial.company}
                    </div>
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

export default TestimonialsSection;