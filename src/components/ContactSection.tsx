import { useState, useRef } from "react";
import emailjs from "emailjs-com";

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    if (!formRef.current) return;

    try {
      await emailjs.sendForm(
        "service_bbce7gj", 
        "template_s4zmnde", 
        formRef.current,
        "u7ScdEJVAT4r-QRBD" 
      );

      setSubmitStatus("success");
      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section-luxury bg-surface marble-texture">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="font-luxury text-5xl md:text-6xl font-bold text-primary mb-8">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-gold-gradient mx-auto mb-8 rounded-full"></div>
          <p className="font-body text-xl text-primary/70 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your space with the world's finest marble? Let's
            discuss how we can bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="animate-fade-in-up">
            <div className="card-marble p-8">
              <h3 className="font-luxury text-3xl font-bold text-primary mb-8">
                Get In Touch
              </h3>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="card-marble p-8">
              <h3 className="font-luxury text-3xl font-bold text-primary mb-8">
                Send us a Message
              </h3>

              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-luxury-gold/10 border border-luxury-gold/20 rounded-xl">
                  <p className="font-body text-luxury-gold-dark">
                    Thank you for your message! We'll get back to you within
                    24 hours.
                  </p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-6 p-4 bg-destructive/10 border border-destructive/20 rounded-xl">
                  <p className="font-body text-destructive">
                    There was an error sending your message. Please try
                    again.
                  </p>
                </div>
              )}

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block font-body text-primary/80 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-primary/20 rounded-xl focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/20 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block font-body text-primary/80 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-primary/20 rounded-xl focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/20 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block font-body text-primary/80 mb-2"
                  >
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 border border-primary/20 rounded-xl focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/20 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                    placeholder="Enter your company name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block font-body text-primary/80 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-primary/20 rounded-xl focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/20 transition-all duration-300 resize-vertical bg-white/50 backdrop-blur-sm"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-luxury w-full text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending Message..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
