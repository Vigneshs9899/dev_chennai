import { useEffect, useRef, useState } from "react";
import {
  Mail,
  MapPin,
  Send,
  MessageCircle,
  CheckCircle,
} from "lucide-react";

// ✅ NEW: import EmailJS
import emailjs from "@emailjs/browser";

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // ✅ OPTIONAL: you can use a form ref if you prefer sendForm()
  // const formRef = useRef<HTMLFormElement | null>(null);

  const [parallax, setParallax] = useState(0);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessType: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // ✅ NEW: track sending & errors (optional but nice UX)
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // ✅ Put your EmailJS credentials here (or use env variables)
  const EMAILJS_SERVICE_ID = "service_ao57hii";
  const EMAILJS_TEMPLATE_ID = "template_mbtvbh8";
  const EMAILJS_PUBLIC_KEY = "NRF-B7oOY5TggldBN";

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

  const bgTranslate = parallax * -60;
  const leftTranslate = parallax * -20;
  const rightTranslate = parallax * 20;

  // ⬇️ UPDATED: handleSubmit now sends via EmailJS
  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setError(null);
  setIsSending(true);

  try {
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        from_name: formData.name,          // {{from_name}}
        reply_to: formData.email,          // {{reply_to}}
        phone: formData.phone,             // {{phone}}
        business_type: formData.businessType, // {{business_type}}
        message: formData.message,         // {{message}}
      },
      {
        publicKey: EMAILJS_PUBLIC_KEY,
      }
    );

    setIsSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      businessType: "",
      message: "",
    });

    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  } catch (err) {
    console.error("EmailJS error:", err);
    setError("Something went wrong, please try again.");
  } finally {
    setIsSending(false);
  }
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* LEFT: form + WhatsApp */}
          <div
            style={{
              transform: `translateY(${leftTranslate}px)`,
              transition: "transform 0.12s linear",
            }}
          >
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
                <>
                  {/* ✅ show error if any */}
                  {error && (
                    <p className="mb-4 text-sm text-red-600">{error}</p>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-5">
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
                      disabled={isSending}
                      className="w-full bg-gold text-softWhite px-6 py-4 rounded-full font-medium shadow-lg hover:shadow-xl hover:-translate-y-[1px] transition-all flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSending ? "Sending..." : "Send Message"}
                      <Send size={18} className="ml-2" />
                    </button>
                  </form>
                </>
              )}
            </div>

            {/* WhatsApp CTA (unchanged) */}
            {/* ... your existing code ... */}
          </div>

          {/* RIGHT SIDE unchanged */}
          {/* ... your existing code ... */}
        </div>
      </div>
    </section>
  );
}
