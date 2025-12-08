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
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-graphite mb-6 leading-tight">
                Web Developer for{' '}
                <span className="text-gold">Businesses</span>
              </h1>
              <p className="text-xl font-body text-graphite mb-8 leading-relaxed">
                Affordable websites for doctors, coaching centers & local businesses. Get online and grow your business today!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="bg-gold text-softWhite px-8 py-4 rounded-full hover:opacity-90 transition-all duration-300 font-body font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
                >
                  Get Free Website Review
                  <ArrowRight className="ml-2" size={20} />
                </button>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-8 py-4 rounded-full hover:bg-green-600 transition-all duration-300 font-body font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
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

      <section ref={sectionRef} className="py-20 bg-softWhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-graphite mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to build a strong online presence
            </p>
          </div>
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {services.map((service, index) => (
              <div
                key={index}
                className="p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gold"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-softWhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Who I Help
            </h2>
            <p className="text-xl text-gray-600">
              Specialized websites for growing businesses
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clientTypes.map((client, index) => (
              <div
                key={index}
                className="p-8 hover:border-gold hover:shadow-xl border border-gray-100 transition-all duration-300"
              >
                <div className="text-6xl mb-4 text-center">{client.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3 text-center">
                  {client.title}
                </h3>
                <p className="text-gray-600 text-center">{client.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-softWhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Trusted by businesses
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-8 hover:shadow-xl hover:border-gold transition-all duration-300 border border-gray-100"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} fill="#FCD34D" className="text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.business}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-softWhite text-graphite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="flex text-gold justify-center mb-4">
                <Users size={48} />
              </div>
              <p className="text-4xl font-bold mb-2 text-gold">50+</p>
              <p className="text-graphite">Happy Clients</p>
            </div>
            <div>
              <div className="flex text-gold justify-center mb-4">
                <CheckCircle size={48} />
              </div>
              <p className="text-4xl font-bold mb-2 text-gold">80+</p>
              <p className="text-graphite">Projects Completed</p>
            </div>
            <div>
              <div className="flex text-gold justify-center mb-4">
                <Award size={48}/>
              </div>
              <p className="text-4xl font-bold mb-2 text-gold">5.0</p>
              <p className="text-graphite">Average Rating</p>
            </div>
            <div>
              <div className="flex text-gold justify-center mb-4">
                <TrendingUp size={48} />
              </div>
              <p className="text-4xl font-bold mb-2 text-gold">100%</p>
              <p className="text-graphite">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-softWhite text-graphite">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Take Your Business Online?
          </h2>
          <p className="text-xl mb-8 text-gold-100">
            Get a professional website that attracts customers and grows your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('#contact')}
              className="bg-gold text-softWhite px-8 py-4 rounded-full hover:opacity-90 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Start Your Project
            </button>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-full hover:bg-green-600 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
