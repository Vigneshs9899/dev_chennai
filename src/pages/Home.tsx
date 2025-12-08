import { ArrowRight, Star, CheckCircle, Users, Award, TrendingUp } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import FoxLottie from "../components/FoxLottie";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const testimonials = [
    {
      name: 'Dr. Rajesh Kumar',
      business: 'Kumar Clinic',
      text: 'Excellent work! My clinic website looks professional and patients can now book appointments easily.',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      business: 'Excel Coaching Center',
      text: 'Very responsive and understood my requirements perfectly. Students love the new website!',
      rating: 5,
    },
    {
      name: 'Arun Patel',
      business: 'Fitness First Gym',
      text: 'Affordable pricing and great quality. The WhatsApp integration brings me more clients daily.',
      rating: 5,
    },
  ];

  const services = [
    {
      icon: '🎨',
      title: 'Website Design',
      description: 'Modern, clean designs that represent your business professionally',
    },
    {
      icon: '📱',
      title: 'Mobile Responsive',
      description: 'Perfect display on all devices - phones, tablets, and desktops',
    },
    {
      icon: '💬',
      title: 'WhatsApp Integration',
      description: 'Direct customer communication with WhatsApp button',
    },
    {
      icon: '📍',
      title: 'Google Maps',
      description: 'Help customers find your business location easily',
    },
    {
      icon: '⚡',
      title: 'Fast Loading',
      description: 'Optimized websites that load quickly and rank better',
    },
    {
      icon: '🔒',
      title: 'Secure & Reliable',
      description: 'Safe, secure websites with regular maintenance',
    },
  ];

  const clientTypes = [
    {
      icon: '🏥',
      title: 'Doctors & Clinics',
      description: 'Professional websites for healthcare professionals with appointment booking',
    },
    {
      icon: '📚',
      title: 'Coaching Centers',
      description: 'Engaging websites for educational institutions with course listings',
    },
    {
      icon: '🏪',
      title: 'Local Businesses',
      description: 'Perfect for salons, gyms, restaurants, and shops to grow online',
    },
  ];

  return (
    <div id="home" className="pt-16">
      <section className="relative bg-softWhite text-graphite min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-xl sm:text-3xl lg:text-6xl font-heading font-bold text-graphite mb-6 leading-tight">
                Web Developer for{' '}
                <span className="text-gold">Businesses</span>
              </h1>
              <p className="text-lg font-light font-body text-graphite mb-8 leading-relaxed">
                Affordable websites for doctors, coaching centers & local businesses. Get online and grow your business today!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="bg-gold text-softWhite px-8 py-4 rounded-full hover:opacity-90 transition-all duration-300 font-body text-sm shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
                >
                  Get Free Website Review
                  <ArrowRight className="ml-2" size={20} />
                </button>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-8 py-4 rounded-full hover:bg-green-600 transition-all duration-300 font-body text-sm shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
                >
                  Chat on WhatsApp
                  <ArrowRight className="ml-2" size={20} />
                </a>
              </div>
              <div className="mt-8 flex items-center justify-center lg:justify-start gap-8">
                <div className="flex items-center">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full bg-gold border-2 border-softWhite"
                      />
                    ))}
                  </div>
                  <span className="ml-3 text-sm text-graphite">50+ Happy Clients</span>
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
            <div className="relative">
              <div className="relative z-10">
                 <FoxLottie />
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-gold rounded-full opacity-20 blur-3xl" />
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gold rounded-full opacity-20 blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      

      
    </div>
  );
}
