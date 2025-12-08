import { Check, Star, Zap, Crown } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: 'One-Page Website',
      price: '2,999',
      icon: <Star size={32} />,
      description: 'Perfect for startups and small businesses',
      features: [
        'Single page website',
        'Mobile responsive design',
        'Contact form',
        'WhatsApp button integration',
        'Google Maps integration',
        'Social media links',
        'Basic SEO setup',
        '1 round of revisions',
        '7 days delivery',
        'Free SSL certificate',
      ],
      color: 'from-blue-500 to-blue-600',
      popular: false,
    },
    {
      name: 'Business Website',
      price: '4,999',
      icon: <Zap size={32} />,
      description: 'Most popular choice for growing businesses',
      features: [
        'Up to 5 pages',
        'Custom design & layout',
        'Mobile responsive',
        'Contact form with validation',
        'WhatsApp chat integration',
        'Google Maps & directions',
        'Image gallery/portfolio',
        'Advanced SEO optimization',
        'Google Analytics setup',
        '2 rounds of revisions',
        '10 days delivery',
        'Free SSL & hosting setup',
        'Social media integration',
      ],
      color: 'from-green-500 to-green-600',
      popular: true,
    },
    {
      name: 'Custom Website',
      price: 'Custom',
      icon: <Crown size={32} />,
      description: 'Fully customized solution for unique needs',
      features: [
        'Unlimited pages',
        'Custom features & functionality',
        'Advanced integrations',
        'Booking/appointment system',
        'E-commerce capabilities',
        'Customer portal/login',
        'Payment gateway integration',
        'Custom forms & automation',
        'Priority support',
        'Unlimited revisions',
        'Timeline as per project',
        'All features from Business plan',
      ],
      color: 'from-purple-500 to-purple-600',
      popular: false,
    },
  ];

  const maintenanceFeatures = [
    'Regular backups',
    'Security updates',
    'Content updates (up to 3 hours/month)',
    'Performance monitoring',
    'Bug fixes',
    'Technical support',
    'Uptime monitoring',
    'Monthly reports',
  ];

  return (
    <div id="pricing" className="pt-16 min-h-screen bg-softWhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Affordable website packages for businesses. No hidden charges, just quality work at honest prices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden ${
                plan.popular ? 'border-4 border-green-500' : 'border border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-green-500 text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
                  Most Popular
                </div>
              )}
              <div className={`bg-gradient-to-r ${plan.color} text-white p-8 text-center`}>
                <div className="flex justify-center mb-4">
                  {plan.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm opacity-90 mb-4">{plan.description}</p>
                <div className="text-5xl font-bold mb-2">
                  {plan.price === 'Custom' ? (
                    <span className="text-3xl">Get Quote</span>
                  ) : (
                    <>
                      ₹{plan.price}
                    </>
                  )}
                </div>
                {plan.price !== 'Custom' && (
                  <p className="text-sm opacity-90">One-time payment</p>
                )}
              </div>
              <div className="p-8">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check size={20} className="text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center bg-gradient-to-r ${plan.color} text-white px-6 py-4 rounded-full hover:opacity-90 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1`}
                >
                  {plan.price === 'Custom' ? 'Contact Us' : 'Get Started'}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-softWhite p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Monthly Maintenance
              </h2>
              <p className="text-gray-600 mb-6">
                Keep your website running smoothly with our affordable monthly maintenance package. Regular updates, backups, and technical support included.
              </p>
              <div className="flex items-baseline mb-6">
                <span className="text-5xl font-bold text-gold">₹1,000</span>
                <span className="text-xl text-gray-600 ml-2">/month</span>
              </div>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gold text-white px-8 py-4 rounded-full hover:bg-graphite transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Subscribe Now
              </a>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">What's Included:</h3>
              <ul className="space-y-3">
                {maintenanceFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <Check size={20} className="text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-softWhite rounded-2xl p-8 md:p-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Do you offer payment plans?</h3>
              <p className="text-gray-600">Yes, we can arrange 50% upfront and 50% on delivery for Business and Custom packages.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">What if I need changes later?</h3>
              <p className="text-gray-600">Minor updates are included in the maintenance package. Major changes can be quoted separately.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Is domain and hosting included?</h3>
              <p className="text-gray-600">Setup is included. Domain and hosting costs are separate but we help you get the best deals.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">How long does it take?</h3>
              <p className="text-gray-600">One-page sites: 7 days. Business sites: 10-14 days. Custom projects: Timeline discussed upfront.</p>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gold rounded-2xl p-12 text-softWhite text-center">
          <h2 className="text-3xl font-bold mb-4">
            Not Sure Which Plan to Choose?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your requirements and find the perfect solution for your business. Free consultation available!
          </p>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-graphite text-softWhite px-8 py-4 rounded-full hover:bg-opacity-85 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Get Free Consultation
          </a>
        </div>
      </div>
    </div>
  );
}
