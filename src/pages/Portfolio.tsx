import { ExternalLink, Stethoscope, GraduationCap, Store } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'Dr. Kumar Medical Clinic',
      category: 'Healthcare',
      description: 'Modern clinic website with appointment booking system, doctor profiles, services showcase, and patient testimonials. Mobile-responsive design with WhatsApp integration for quick patient inquiries.',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop',
      icon: <Stethoscope size={24} />,
      features: ['Appointment Booking', 'Doctor Profiles', 'Service Listings', 'Patient Reviews', 'WhatsApp Chat', 'Google Maps'],
      color: 'from-blue-500 to-blue-600',
    },
    {
      id: 2,
      title: 'Excel Academy Coaching',
      category: 'Education',
      description: 'Engaging educational website for a coaching center featuring course catalogs, batch timings, faculty information, student success stories, and online inquiry forms. Optimized for student enrollment.',
      image: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&q=80',
      icon: <GraduationCap size={24} />,
      features: ['Course Catalog', 'Batch Schedule', 'Faculty Profiles', 'Student Results', 'Online Admission', 'Fee Structure'],
      color: 'from-green-500 to-green-600',
    },
    {
      id: 3,
      title: 'Trendy Salon & Spa',
      category: 'Local Business',
      description: 'Beautiful salon website showcasing services, pricing, gallery of work, stylist profiles, and online booking. Integrated with WhatsApp for instant appointment confirmations and customer service.',
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=600&fit=crop',
      icon: <Store size={24} />,
      features: ['Service Menu', 'Price List', 'Photo Gallery', 'Stylist Profiles', 'Online Booking', 'Location Map'],
      color: 'from-pink-500 to-pink-600',
    },
    {
      id: 4,
      title: 'Chennai Dental Care',
      category: 'Healthcare',
      description: 'Professional dental clinic website with treatment information, before/after galleries, dentist credentials, emergency contact, and patient education resources.',
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=600&fit=crop',
      icon: <Stethoscope size={24} />,
      features: ['Treatment Info', 'Before/After Gallery', 'Emergency Contact', 'Insurance Info', 'Patient Forms', 'Virtual Tour'],
      color: 'from-teal-500 to-teal-600',
    }
  ];

  return (
    <div id="portfolio" className="pt-16 min-h-screen bg-softWhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our Portfolio
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sample websites designed for businesses. Each project is customized to meet specific business needs and attract the right customers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute top-4 left-4 bg-gradient-to-r ${project.color} text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg`}>
                  {project.icon}
                  <span className="font-semibold">{project.category}</span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {project.description}
                </p>
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                <button className="flex items-center text-blue-600 hover:text-blue-700 font-semibold group-hover:translate-x-2 transition-transform">
                  View Similar Design
                  <ExternalLink size={18} className="ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-softWhite p-12 text-graphite text-center">
          <h2 className="text-3xl font-bold mb-4">
            Want a Website Like These?
          </h2>
          <p className="text-xl text-graphite mb-8 max-w-2xl mx-auto">
            These are sample designs. Your website will be uniquely crafted to represent your brand and business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="inline-block bg-gold text-softWhite px-8 py-4 rounded-full transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Start Your Project
            </button>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 text-white px-8 py-4 rounded-full hover:bg-green-600 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Discuss on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
