import {
  Code,
  Smartphone,
  MessageCircle,
  Mail,
  MapPin,
  Zap,
  Shield,
  Search,
  Palette,
  Database,
  BarChart3,
  Headphones,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";
import foxParallax from "../assets/fox.json"; // your fox Lottie

export default function Services() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [parallax, setParallax] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const isDesktop = window.innerWidth >= 1024; // lg breakpoint
      if (!isDesktop) {
        // disable parallax on mobile/tablet
        setParallax(0);
        return;
      }

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;

      // Progress as section enters viewport (0 -> 1)
      const rawProgress = 1 - rect.top / windowHeight;
      const clamped = Math.min(Math.max(rawProgress, 0), 1);
      setParallax(clamped);
    };

    handleScroll(); // initial
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // STRONGER but safe movement ranges
  const foxTranslate = parallax * -60; // up to -60px up
  const cardsTranslate = parallax * 40; // up to +40px down
  const bgTranslate = parallax * -100; // up to -100px up

  const services = [
    {
      icon: <Palette size={40} />,
      title: "Website Design & Development",
      description:
        "Custom-designed websites that reflect your brand identity and business values. Modern, clean layouts that engage visitors and convert them into customers.",
      features: [
        "Custom Design",
        "Brand Integration",
        "User-Friendly Interface",
        "Professional Layout",
      ],
    },
    {
      icon: <Smartphone size={40} />,
      title: "Mobile Responsive Design",
      description:
        "Websites that look perfect on all devices - smartphones, tablets, laptops, and desktops. Mobile-first approach ensures optimal user experience.",
      features: [
        "Mobile-First Design",
        "Touch-Friendly",
        "Fast Loading",
        "Cross-Browser Compatible",
      ],
    },
    {
      icon: <MessageCircle size={40} />,
      title: "WhatsApp Button Integration",
      description:
        "Connect directly with customers through WhatsApp. Floating button for instant communication and better lead generation.",
      features: [
        "Click-to-Chat",
        "Custom Messages",
        "Lead Generation",
        "Instant Connection",
      ],
    },
    {
      icon: <Mail size={40} />,
      title: "Contact Forms",
      description:
        "Professional contact forms with validation and email notifications. Capture leads effectively and respond quickly.",
      features: [
        "Form Validation",
        "Email Notifications",
        "Spam Protection",
        "Custom Fields",
      ],
    },
    {
      icon: <MapPin size={40} />,
      title: "Google Maps Integration",
      description:
        "Help customers find your business location easily with embedded Google Maps. Improve local SEO and customer convenience.",
      features: [
        "Embedded Maps",
        "Directions Link",
        "Location Marker",
        "Mobile Navigation",
      ],
    },
    {
      icon: <Zap size={40} />,
      title: "Speed Optimization",
      description:
        "Lightning-fast loading websites that rank better on Google and provide superior user experience. Performance-optimized code.",
      features: [
        "Fast Loading",
        "Image Optimization",
        "Code Minification",
        "Caching",
      ],
    },
    {
      icon: <Search size={40} />,
      title: "SEO Optimization",
      description:
        "Search engine optimized websites that rank on Google. Local SEO for Chennai businesses to attract nearby customers.",
      features: ["On-Page SEO", "Meta Tags", "Local SEO", "Google Indexing"],
    },
    {
      icon: <Shield size={40} />,
      title: "Security & SSL",
      description:
        "Secure websites with SSL certificates and best security practices. Protect your business and customer data.",
      features: [
        "SSL Certificate",
        "Secure Hosting",
        "Regular Backups",
        "Security Updates",
      ],
    },
    {
      icon: <Database size={40} />,
      title: "Content Management",
      description:
        "Easy-to-update websites where you can manage content without technical knowledge. Training and support included.",
      features: [
        "Easy Updates",
        "Media Library",
        "Content Editor",
        "Training Included",
      ],
    },
    {
      icon: <BarChart3 size={40} />,
      title: "Analytics Integration",
      description:
        "Track website visitors, understand customer behavior, and make data-driven decisions with integrated analytics.",
      features: ["Google Analytics", "Visitor Tracking", "Reports", "Insights"],
    },
    {
      icon: <Code size={40} />,
      title: "Custom Features",
      description:
        "Need something specific? We build custom features tailored to your business needs - booking systems, galleries, and more.",
      features: [
        "Custom Development",
        "Third-party Integration",
        "API Integration",
        "Scalable Solutions",
      ],
    },
    {
      icon: <Headphones size={40} />,
      title: "Maintenance & Support",
      description:
        "Ongoing maintenance, updates, and technical support to keep your website running smoothly. Monthly packages available.",
      features: [
        "Regular Updates",
        "Bug Fixes",
        "Technical Support",
        "Performance Monitoring",
      ],
    },
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative overflow-hidden bg-softWhite pt-24 pb-20"
    >
      {/* Parallax background blob */}
      <div
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 flex justify-center"
        style={{
          transform: `translateY(${bgTranslate}px)`,
          transition: "transform 0.08s linear",
        }}
      >
        <div className="h-80 w-80 sm:h-96 sm:w-96 rounded-full bg-gradient-to-b from-[#ffe7cf] via-white to-[#ffe0c0] blur-3xl opacity-80" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-16">
        {/* LEFT: heading + fox animation */}
        <div
          className="w-full lg:w-[38%] flex flex-col items-center lg:items-start text-center lg:text-left"
          style={{
            transform: `translateY(${foxTranslate}px)`,
            transition: "transform 0.12s linear",
          }}
        >
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-[#e77e23]">
            Services
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-graphite mb-3">
            Everything your{" "}
            <span className="text-[#e77e23]">website</span> needs to feel
            premium.
          </h2>
          <p className="text-sm sm:text-base text-graphite/75 font-body max-w-md mb-6">
            From structure, speed, and SEO to analytics and support, FoxPalette
            gives your brand a full-stack web presence that feels crafted, not
            templated.
          </p>

          <div className="relative max-w-sm w-full">
            <div className="pointer-events-none absolute inset-0 -z-10">
              <div className="h-full w-full rounded-3xl bg-gradient-to-tr from-[#ffe7cf] via-white to-[#ffe0c0] blur-2xl" />
            </div>
            <div className="rounded-3xl border border-[#f3e6d9] bg-white/80 p-4 shadow-md backdrop-blur">
              <Lottie
                animationData={foxParallax}
                loop
                className="h-64 w-full sm:h-72 lg:h-80"
              />
            </div>
            <div className="pointer-events-none absolute -bottom-4 left-4 flex items-center gap-2 rounded-full bg-[#1f2933] px-4 py-1 text-[11px] font-medium text-softWhite shadow-lg">
              <Palette className="h-4 w-4 text-[#e77e23]" />
              FoxPalette services in motion
            </div>
          </div>
        </div>

        {/* RIGHT: services grid */}
        <div
          className="w-full lg:flex-1"
          style={{
            transform: `translateY(${cardsTranslate}px)`,
            transition: "transform 0.12s linear",
          }}
        >
          <div className="mb-8 text-center lg:text-left">
            <h3 className="text-xl font-semibold text-graphite mb-2">
              Complete web development solutions
            </h3>
            <p className="text-sm sm:text-base text-graphite/70 max-w-2xl mx-auto lg:mx-0">
              Everything you need to establish and grow your online presence –
              designed, built, secured, and optimized with fox-level attention
              to detail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl border border-gray-100 bg-white/90 hover:shadow-xl hover:border-[#e77e23]/70 transition-all duration-300 group"
              >
                <div className="text-[#e77e23] mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-start">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-graphite mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-graphite/70 mb-3">
                  {service.description}
                </p>
                {/* Uncomment if you want the feature tags */}
                {/* <div className="flex flex-wrap gap-2 mt-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="rounded-full bg-[#fff3e6] px-3 py-1 text-[11px] text-[#e77e23]"
                    >
                      {feature}
                    </span>
                  ))}
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
