import { useState, useRef } from "react";
import emailjs from "emailjs-com";

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

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
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="font-luxury text-5xl md:text-6xl font-bold text-primary mb-8">
            Kontaktieren Sie uns
          </h2>
          <div className="w-24 h-1 bg-gold-gradient mx-auto mb-8 rounded-full"></div>
          <p className="font-body text-xl text-primary/70 leading-relaxed">
            Wir freuen uns auf Ihre Nachricht!
          </p>
        </div>

        {/* Contact Form */}
        <div className="animate-fade-in-up">
          <div className="card-marble p-8 flex flex-col w-full mx-auto">
            {submitStatus === "success" && (
              <div className="mb-6 p-4 bg-luxury-gold/10 border border-luxury-gold/20 rounded-xl">
                <p className="font-body text-luxury-gold-dark">
                  Vielen Dank für Ihre Nachricht. Wir werden Ihnen innerhalb von 24 Stunden antworten.
                </p>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mb-6 p-4 bg-destructive/10 border border-destructive/20 rounded-xl">
                <p className="font-body text-destructive">
                  Beim Senden Ihrer Nachricht ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.
                </p>
              </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 flex-1">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block font-body text-primary/80 mb-2">
                    Name, Vorname *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-primary/20 rounded-xl focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/20 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                    placeholder="Geben Sie Ihren vollständigen Namen ein"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-body text-primary/80 mb-2">
                    E-Mail Adresse *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-primary/20 rounded-xl focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/20 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                    placeholder="Geben Sie Ihre E-Mail Adresse ein"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block font-body text-primary/80 mb-2">
                  Telefonnummer
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  pattern="[0-9+\-\s]{7,15}"
                  className="w-full px-4 py-3 border border-primary/20 rounded-xl focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/20 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                  placeholder="Geben Sie Ihre Telefonnummer ein"
                />
              </div>

              <div>
                <label htmlFor="company" className="block font-body text-primary/80 mb-2">
                  Firma
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-3 border border-primary/20 rounded-xl focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/20 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                  placeholder="Geben Sie Ihren Firmennamen ein"
                />
              </div>

              <div>
                <label htmlFor="message" className="block font-body text-primary/80 mb-2">
                  Nachricht *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-primary/20 rounded-xl focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/20 transition-all duration-300 resize-vertical bg-white/50 backdrop-blur-sm"
                  placeholder="Bitte verfassen Sie hier Ihre Nachricht..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-luxury w-full text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Nachricht wird gesendet..." : "Nachricht senden"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
