import { Code, Smartphone, MessageCircle, Mail, MapPin, Zap, Shield, Search, Palette, Database, BarChart3, Headphones } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Palette size={40} />,
      title: 'Website Design & Development',
      description: 'Custom-designed websites that reflect your brand identity and business values. Modern, clean layouts that engage visitors and convert them into customers.',
      features: ['Custom Design', 'Brand Integration', 'User-Friendly Interface', 'Professional Layout'],
    },
    {
      icon: <Smartphone size={40} />,
      title: 'Mobile Responsive Design',
      description: 'Websites that look perfect on all devices - smartphones, tablets, laptops, and desktops. Mobile-first approach ensures optimal user experience.',
      features: ['Mobile-First Design', 'Touch-Friendly', 'Fast Loading', 'Cross-Browser Compatible'],
    },
    {
      icon: <MessageCircle size={40} />,
      title: 'WhatsApp Button Integration',
      description: 'Connect directly with customers through WhatsApp. Floating button for instant communication and better lead generation.',
      features: ['Click-to-Chat', 'Custom Messages', 'Lead Generation', 'Instant Connection'],
    },
    {
      icon: <Mail size={40} />,
      title: 'Contact Forms',
      description: 'Professional contact forms with validation and email notifications. Capture leads effectively and respond quickly.',
      features: ['Form Validation', 'Email Notifications', 'Spam Protection', 'Custom Fields'],
    },
    {
      icon: <MapPin size={40} />,
      title: 'Google Maps Integration',
      description: 'Help customers find your business location easily with embedded Google Maps. Improve local SEO and customer convenience.',
      features: ['Embedded Maps', 'Directions Link', 'Location Marker', 'Mobile Navigation'],
    },
    {
      icon: <Zap size={40} />,
      title: 'Speed Optimization',
      description: 'Lightning-fast loading websites that rank better on Google and provide superior user experience. Performance-optimized code.',
      features: ['Fast Loading', 'Image Optimization', 'Code Minification', 'Caching'],
    },
    {
      icon: <Search size={40} />,
      title: 'SEO Optimization',
      description: 'Search engine optimized websites that rank on Google. Local SEO for Chennai businesses to attract nearby customers.',
      features: ['On-Page SEO', 'Meta Tags', 'Local SEO', 'Google Indexing'],
    },
    {
      icon: <Shield size={40} />,
      title: 'Security & SSL',
      description: 'Secure websites with SSL certificates and best security practices. Protect your business and customer data.',
      features: ['SSL Certificate', 'Secure Hosting', 'Regular Backups', 'Security Updates'],
    },
    {
      icon: <Database size={40} />,
      title: 'Content Management',
      description: 'Easy-to-update websites where you can manage content without technical knowledge. Training and support included.',
      features: ['Easy Updates', 'Media Library', 'Content Editor', 'Training Included'],
    },
    {
      icon: <BarChart3 size={40} />,
      title: 'Analytics Integration',
      description: 'Track website visitors, understand customer behavior, and make data-driven decisions with integrated analytics.',
      features: ['Google Analytics', 'Visitor Tracking', 'Reports', 'Insights'],
    },
    {
      icon: <Code size={40} />,
      title: 'Custom Features',
      description: 'Need something specific? We build custom features tailored to your business needs - booking systems, galleries, and more.',
      features: ['Custom Development', 'Third-party Integration', 'API Integration', 'Scalable Solutions'],
    },
    {
      icon: <Headphones size={40} />,
      title: 'Maintenance & Support',
      description: 'Ongoing maintenance, updates, and technical support to keep your website running smoothly. Monthly packages available.',
      features: ['Regular Updates', 'Bug Fixes', 'Technical Support', 'Performance Monitoring'],
    },
  ];

  return (
    <div id="services" className="pt-16 min-h-screen bg-softWhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete web development solutions for businesses. Everything you need to establish and grow your online presence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gold group"
            >
              <div className="text-gold mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

       
      </div>
    </div>
  );
}
