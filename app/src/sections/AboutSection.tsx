import { Check, Heart, Shield, Zap, Users, Globe } from 'lucide-react';

const values = [
  { icon: Heart, text: 'Passionate about what we do' },
  { icon: Shield, text: 'Reliable and Responsive' },
  { icon: Users, text: 'Respect for people' },
  { icon: Zap, text: 'Informed performance' },
  { icon: Globe, text: 'Well-being of the community we serve' },
];

const highlights = [
  'The first to design and execute a Medical Scribe certification programme in India',
  '4 strategic locations of operation in India to ensure business continuity',
  'Familiar with more than 50 different E.H.R.s',
  'Customers across 40 states in America',
  'Experience across all specialties',
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative scroll-hidden">
            <div className="relative">
              {/* Background Shape */}
              <div className="absolute -top-4 -left-4 w-full h-full bg-orange-100 rounded-2xl" />
              
              {/* Main Image */}
              <img
                src="/images/about-image.jpg"
                alt="Healthcare Team"
                className="relative rounded-2xl shadow-xl w-full object-cover"
              />
              
              {/* Experience Badge */}
              <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white rounded-xl p-6 shadow-xl">
                <p className="text-4xl font-bold">17+</p>
                <p className="text-sm text-orange-100">Years of Excellence</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="scroll-hidden">
              <span className="inline-flex items-center gap-2 text-orange-500 font-semibold text-sm uppercase tracking-wider">
                <span className="w-8 h-0.5 bg-orange-500" />
                About Us
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight scroll-hidden">
              Pioneering Healthcare{' '}
              <span className="text-orange-500">Innovation</span> Since 2007
            </h2>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p className="scroll-hidden">
                Since its inception in 2007, S10 Health has been dedicated to enhancing 
                the lives of healthcare providers and patients alike. We offer comprehensive, 
                end-to-end solutions designed to boost productivity, streamline operations, 
                and drive revenue growth.
              </p>
              <p className="scroll-hidden">
                Our latest AI-powered innovations are designed to tackle the complex challenges 
                of modern healthcare, using intelligent automation and data-driven insights to 
                optimize decision-making, improve patient outcomes, and empower healthcare 
                professionals to focus on what matters most.
              </p>
            </div>

            {/* Company Values */}
            <div className="pt-4 scroll-hidden">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Our Company Values
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <value.icon className="h-5 w-5 text-orange-500" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">{value.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div className="pt-4 scroll-hidden">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="text-orange-500">S10</span> HEALTH
                </h4>
                <ul className="space-y-3">
                  {highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
