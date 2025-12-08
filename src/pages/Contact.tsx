import { useEffect, useRef, useState } from "react";
import {
  Mail,
  MapPin,
  Send,
  MessageCircle,
  CheckCircle,
} from "lucide-react";

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [parallax, setParallax] = useState(0);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessType: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const isDesktop = window.innerWidth >= 1024;
      if (!isDesktop) {
        setParallax(0);
        return;
      }

      const rect = sectionRef.current.getBoundingClientRect();
      const WH =
        window.innerHeight || document.documentElement.clientHeight;

      const progress = 1 - rect.top / WH;
      const clamped = Math.min(Math.max(progress, 0), 1);
      setParallax(clamped);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // Subtle parallax values
  const bgTranslate = parallax * -60;
  const leftTranslate = parallax * -20;
  const rightTranslate = parallax * 20;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        businessType: "",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative overflow-hidden bg-softWhite pt-24 pb-20"
    >
      {/* Background accent */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-[#ffe7cf] via-white to-[#ffe0c0] blur-3xl"
        style={{
          transform: `translateY(${bgTranslate}px) translateX(-50%)`,
          transition: "transform 0.08s linear",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-[#e77e23] mb-2">
            Let’s talk
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-graphite mb-4">
            Get In Touch
          </h1>
          <p className="font-body text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to take your business online? Let’s build something fast,
            modern, and made to convert.
          </p>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* LEFT: form + WhatsApp */}
          <div
            style={{
              transform: `translateY(${leftTranslate}px)`,
              transition: "transform 0.12s linear",
            }}
          >
            {/* Form */}
            <div className="rounded-3xl border border-[#f3e6d9] bg-white/90 p-8 shadow-sm mb-8">
              <h2 className="text-2xl font-semibold text-graphite mb-6">
                Send Us a Message
              </h2>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                    <CheckCircle className="text-green-600" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-graphite mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600">
                    We’ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/** Inputs unchanged but cleaned */}
                  {[
                    { label: "Your Name", name: "name", type: "text" },
                    { label: "Email Address", name: "email", type: "email" },
                    { label: "Phone Number", name: "phone", type: "tel" },
                  ].map((field) => (
                    <div key={field.name}>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        name={field.name}
                        value={(formData as any)[field.name]}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                      />
                    </div>
                  ))}

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Business Type
                    </label>
                    <select
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                    >
                      <option value="">Select your business type</option>
                      <option value="clinic">Clinic / Healthcare</option>
                      <option value="coaching">Coaching Center</option>
                      <option value="salon">Salon / Spa</option>
                      <option value="gym">Gym / Fitness</option>
                      <option value="restaurant">Restaurant / Cafe</option>
                      <option value="shop">Retail Shop</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gold text-softWhite px-6 py-4 rounded-full font-medium shadow-lg hover:shadow-xl hover:-translate-y-[1px] transition-all flex items-center justify-center"
                  >
                    Send Message
                    <Send size={18} className="ml-2" />
                  </button>
                </form>
              )}
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-3xl shadow-lg p-8 text-white">
              <h3 className="text-2xl font-semibold mb-2">Prefer WhatsApp?</h3>
              <p className="mb-5 text-sm opacity-90">
                Get instant replies from our team.
              </p>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-green-600 px-6 py-3 rounded-full hover:bg-green-50 transition-all shadow-md"
              >
                <MessageCircle size={22} className="mr-2" />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* RIGHT: info + map + trust */}
          <div
            style={{
              transform: `translateY(${rightTranslate}px)`,
              transition: "transform 0.12s linear",
            }}
          >
            {/* Info */}
            <div className="rounded-3xl border border-[#f3e6d9] bg-white/90 p-8 shadow-sm mb-8">
              <h2 className="text-2xl font-semibold text-graphite mb-6">
                Contact Information
              </h2>

              <div className="space-y-5">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                    <MapPin size={22} className="text-softWhite" />
                  </div>
                  <div className="ml-4">
                    <p className="font-medium text-graphite">Location</p>
                    <p className="text-sm text-gray-600">India</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                    <Mail size={22} className="text-softWhite" />
                  </div>
                  <div className="ml-4">
                    <p className="font-medium text-graphite">Email</p>
                    <a
                      href="mailto:hello.foxpalette@gmail.com"
                      className="text-sm text-graphite hover:text-gold"
                    >
                      hello.foxpalette@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-3xl overflow-hidden shadow-lg mb-8">
              <div className="h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.90089943495!2d80.04419904999999!3d13.047984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1234567890"
                  className="w-full h-full border-none"
                  loading="lazy"
                  title="Chennai Location"
                />
              </div>
            </div>

            {/* Trust list */}
            <div className="rounded-3xl border border-[#f3e6d9] bg-white/90 p-8 shadow-sm">
              <h3 className="text-lg font-semibold text-graphite mb-4">
                Why Choose FoxPalette?
              </h3>
              <ul className="space-y-3 text-sm text-gray-700">
                {[
                  "Understanding local business needs",
                  "Transparent pricing",
                  "Fast delivery & support",
                  "SEO-first development",
                ].map((text) => (
                  <li key={text} className="flex items-center">
                    <CheckCircle
                      size={18}
                      className="text-green-500 mr-3"
                    />
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
