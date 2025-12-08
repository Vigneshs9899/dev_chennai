import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks: { name: string; href: string }[] = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-softWhite/95 shadow-md backdrop-blur-sm"
          : "bg-softWhite/80 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* no fixed h-16, use vertical padding for height */}
        <div className="flex items-center justify-between py-1 sm:py-2">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="#home"
              className="inline-flex items-center clickable"
              aria-label="FoxPalette Home"
            >
              <img
                src="/img/transparent-logo.png"
                alt="FoxPalette Logo"
                className="h-10 sm:h-14 md:h-18 lg:h-24 w-auto object-contain"
              />
            </a>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-sm lg:text-base text-graphite hover:text-gold transition-colors font-body duration-200"
              >
                {link.name}
              </button>
            ))}
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-softWhite px-4 py-2 lg:px-6 lg:py-2 rounded-full hover:bg-green-600 transition-colors duration-200 font-body font-medium text-sm lg:text-base"
            >
              WhatsApp
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="text-graphite hover:text-gold transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-softWhite/95 shadow-md border-t">
          <div className="mx-auto max-w-7xl px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left px-4 py-2 text-graphite hover:text-gold rounded-lg transition-colors duration-200 text-sm"
              >
                {link.name}
              </button>
            ))}
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-left bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-200 mt-2 text-sm"
            >
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
