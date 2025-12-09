import { ArrowRight, Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import FoxLottie from "../components/FoxLottie";

export default function Home() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [parallax, setParallax] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const isDesktop = window.innerWidth >= 1024; // lg breakpoint
      if (!isDesktop) {
        setParallax(0);
        return;
      }

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;

      // How far hero has moved in viewport (0 -> 1)
      const rawProgress = 1 - rect.top / windowHeight;
      const clamped = Math.min(Math.max(rawProgress, 0), 1);
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

  // Parallax strengths (tweak if you want more/less)
  const titleTranslate = parallax * -20; // text slightly up
  const foxTranslate = parallax * 40; // fox goes down
  const blobTopTranslate = parallax * -60; // top blob moves up more
  const blobBottomTranslate = parallax * 30; // bottom blob moves down

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="home"
      ref={sectionRef}
      className="relative pt-16 overflow-hidden bg-softWhite"
    >
      <section className="relative text-graphite min-h-screen flex items-center">
        {/* Background blobs with parallax */}
        <div
          className="pointer-events-none absolute -top-32 -right-10 w-72 h-72 bg-gold rounded-full opacity-20 blur-3xl"
          style={{
            transform: `translateY(${blobTopTranslate}px)`,
            transition: "transform 0.08s linear",
          }}
        />
        <div
          className="pointer-events-none absolute -bottom-32 -left-10 w-80 h-80 bg-gold rounded-full opacity-20 blur-3xl"
          style={{
            transform: `translateY(${blobBottomTranslate}px)`,
            transition: "transform 0.08s linear",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* LEFT: Text content */}
            <div
              className="text-center lg:text-left"
              style={{
                transform: `translateY(${titleTranslate}px)`,
                transition: "transform 0.12s linear",
              }}
            >
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-[#e77e23]">
                FoxPalette
              </p>
              <h1 className="text-2xl sm:text-3xl lg:text-6xl font-heading font-bold text-graphite mb-6 leading-tight">
                Web Developer for{" "}
                <span className="text-gold">Businesses</span>
              </h1>
              <p className="text-base sm:text-lg font-light font-body text-graphite mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Affordable websites for doctors, coaching centers & local
                businesses. Get online and grow your business with a website
                that looks premium and works hard for you.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => scrollToSection("#contact")}
                  className="bg-gold text-softWhite px-8 py-4 rounded-full hover:opacity-90 transition-all duration-300 font-body text-sm shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
                >
                  Get Free Website Review
                  <ArrowRight className="ml-2" size={20} />
                </button>
                <a
                  href="https://wa.link/32t9ex"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-8 py-4 rounded-full hover:bg-green-600 transition-all duration-300 font-body text-sm shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
                >
                  Chat on WhatsApp
                  <ArrowRight className="ml-2" size={20} />
                </a>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 sm:gap-8">
                <div className="flex items-center">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full bg-gold border-2 border-softWhite"
                      />
                    ))}
                  </div>
                  <span className="ml-3 text-sm text-graphite">
                    50+ Happy Clients
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="flex text-yellow-400">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} size={20} fill="currentColor" />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-graphite">5.0 Rating</span>
                </div>
              </div>
            </div>

            {/* RIGHT: Fox animation with parallax */}
            <div
              className="relative flex justify-center lg:justify-end"
              style={{
                transform: `translateY(${foxTranslate}px)`,
                transition: "transform 0.12s linear",
              }}
            >
              <div className="relative z-10 max-w-md w-full">
                <FoxLottie />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
