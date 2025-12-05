import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-graphite text-softWhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-heading font-bold text-gold mb-4">FoxPalette</h3>
            <p className="text-softWhite font-body mb-4">
              Professional web development services for businesses. Affordable, modern, and mobile-friendly websites.
            </p>
            <div className="flex space-x-4 font-body">
              <a href="#" className="text-softWhite hover:text-opacity-90 hover:text-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-softWhite hover:text-opacity-90 hover:text-gold transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-softWhite hover:text-opacity-90 hover:text-gold transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-softWhite hover:text-opacity-90 hover:text-gold transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 font-body">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-softWhite hover:text-gold transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-softWhite hover:text-gold transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-softWhite hover:text-gold transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-softWhite hover:text-gold transition-colors">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold font-body text-softWhite mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-softWhite hover:text-gold transition-colors cursor-pointer font-body">Website Design</li>
              <li className="text-softWhite hover:text-gold transition-colors cursor-pointer font-body">Mobile Responsive</li>
              <li className="text-softWhite hover:text-gold transition-colors cursor-pointer font-body">WhatsApp Integration</li>
              <li className="text-softWhite hover:text-gold transition-colors cursor-pointer font-body">SEO Optimization</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 font-body">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-center text-softWhite hover:text-gold transition-colors cursor-pointer font-body">
                <MapPin size={18} className="mr-2 flex-shrink-0" />
                <span>India</span>
              </li>
              {/* <li className="flex items-center text-softWhite hover:text-gold transition-colors cursor-pointer font-body">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <span>+91 98765 43210</span>
              </li> */}
              <li className="flex items-center text-softWhite hover:text-gold transition-colors cursor-pointer font-body">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <span>hello.foxpalette@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 <span className='text-gold font-heading'>FoxPalette.</span> All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
