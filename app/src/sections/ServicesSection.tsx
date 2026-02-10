import { 
  ClipboardList, 
  Bot, 
  Calculator, 
  Users, 
  GraduationCap, 
  Settings,
  ArrowRight 
} from 'lucide-react';

const services = [
  {
    icon: ClipboardList,
    title: 'Virtual Medical Scribing',
    description: 'Our highly-trained virtual scribes document patient encounters in real-time, allowing physicians to focus entirely on patient care. HIPAA-compliant and secure.',
    features: ['Real-time documentation', '50+ EHR compatibility', 'Same-day chart completion'],
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Bot,
    title: 'AI Medical Scribe (S10.AI)',
    description: 'Our AI-powered medical scribe uses advanced speech recognition and NLP to automatically generate clinical notes with 99% accuracy.',
    features: ['99% accuracy', '16+ languages', 'Works with any EHR'],
    color: 'bg-orange-50 text-orange-600',
  },
  {
    icon: Calculator,
    title: 'Medical Billing & Coding',
    description: 'Expert medical billing and coding services to optimize your revenue cycle and ensure accurate claim submissions.',
    features: ['ICD-10/CPT coding', 'Claims management', 'Revenue optimization'],
    color: 'bg-green-50 text-green-600',
  },
  {
    icon: Users,
    title: 'Healthcare Staffing',
    description: 'Virtual staffing solutions including prior authorizations, scheduling, phone support, and denials management.',
    features: ['24/7 support', 'Trained professionals', 'Scalable solutions'],
    color: 'bg-purple-50 text-purple-600',
  },
  {
    icon: GraduationCap,
    title: 'Training & Certification',
    description: "India's first Medical Scribe certification program, training professionals to meet international healthcare standards.",
    features: ['Industry-first program', '2-year job assurance', 'Expert faculty'],
    color: 'bg-pink-50 text-pink-600',
  },
  {
    icon: Settings,
    title: 'Practice Management',
    description: 'Comprehensive practice management solutions to streamline operations and improve patient engagement.',
    features: ['Workflow optimization', 'Patient engagement', 'Analytics dashboard'],
    color: 'bg-teal-50 text-teal-600',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-orange-500 font-semibold text-sm uppercase tracking-wider scroll-hidden">
            <span className="w-8 h-0.5 bg-orange-500" />
            Our Services
            <span className="w-8 h-0.5 bg-orange-500" />
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6 scroll-hidden">
            Comprehensive{' '}
            <span className="text-orange-500">Healthcare Solutions</span>
          </h2>
          <p className="text-lg text-gray-600 scroll-hidden">
            We provide end-to-end services that transform how healthcare providers work, 
            enabling them to focus on what matters most - patient care.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-card card-hover scroll-hidden"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="h-7 w-7" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-2 text-sm text-gray-500">
                    <span className="w-1.5 h-1.5 bg-orange-400 rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Learn More Link */}
              <button className="inline-flex items-center gap-2 text-orange-500 font-medium text-sm group/link">
                Learn More
                <ArrowRight className="h-4 w-4 transform group-hover/link:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 scroll-hidden">
          <p className="text-gray-600 mb-4">
            Need a customized solution for your practice?
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium btn-hover transition-colors"
          >
            Contact Us
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
