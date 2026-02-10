import { 
  Lightbulb, 
  BookOpen, 
  Users, 
  Heart, 
  Trophy,
  ArrowRight,
  MapPin,
  Briefcase,
  Clock
} from 'lucide-react';

const benefits = [
  {
    icon: Lightbulb,
    title: 'Unleash Your Creativity',
    description: 'We foster an environment that encourages innovation. Your ideas will be heard and nurtured.',
  },
  {
    icon: BookOpen,
    title: 'Continuous Learning',
    description: 'Personalized development plans, workshops, and mentorship to sharpen your skills.',
  },
  {
    icon: Users,
    title: 'Inclusive Community',
    description: 'Diversity is our strength. Be part of a family that values every individual.',
  },
  {
    icon: Heart,
    title: 'Meaningful Impact',
    description: 'Your work contributes to projects that shape industries and improve lives.',
  },
  {
    icon: Trophy,
    title: 'Recognition & Growth',
    description: 'Hard work is noticed. Opportunities for advancement and recognition await.',
  },
];

const jobs = [
  {
    title: 'Trainee - Financial Transaction Executive',
    type: 'Full-time',
    location: 'Chennai, India',
    experience: 'Fresher',
    highlight: 'FREE TRAINING + 2 YEAR JOB ASSURANCE',
  },
  {
    title: 'Medical Coder',
    type: 'Full-time',
    location: 'Chennai, India',
    experience: '2+ years',
    highlight: null,
  },
  {
    title: 'AR Caller',
    type: 'Full-time',
    location: 'Chennai, India',
    experience: '1+ year',
    highlight: null,
  },
  {
    title: 'Assistant Manager/Manager - Medical Billing',
    type: 'Full-time',
    location: 'Chennai, India',
    experience: '5+ years',
    highlight: null,
  },
];

export default function CareersSection() {
  return (
    <section id="careers" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-orange-500 font-semibold text-sm uppercase tracking-wider scroll-hidden">
            <span className="w-8 h-0.5 bg-orange-500" />
            Careers
            <span className="w-8 h-0.5 bg-orange-500" />
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6 scroll-hidden">
            Embrace Your <span className="text-orange-500">Potential</span>
          </h2>
          <p className="text-lg text-gray-600 scroll-hidden">
            At S10 Health, we're not just offering jobs – we're crafting life-enriching 
            careers. Join us for a transformative journey of growth and achievement.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Benefits */}
          <div className="scroll-hidden">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Why Join S10 Health?
            </h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-4 bg-gray-50 rounded-xl hover:bg-orange-50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500 transition-colors">
                    <benefit.icon className="h-6 w-6 text-orange-500 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {benefit.title}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact */}
            <div className="mt-8 p-6 bg-orange-50 rounded-xl border border-orange-100">
              <p className="text-sm text-gray-600 mb-2">Have questions?</p>
              <p className="text-lg font-semibold text-orange-600">
                smartsupport@s10health.com
              </p>
            </div>
          </div>

          {/* Job Listings */}
          <div className="scroll-hidden">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Open Positions
            </h3>
            <div className="space-y-4">
              {jobs.map((job, index) => (
                <div
                  key={index}
                  className="group bg-white border border-gray-200 rounded-xl p-6 hover:border-orange-300 hover:shadow-lg transition-all cursor-pointer"
                >
                  {job.highlight && (
                    <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full mb-3">
                      {job.highlight}
                    </span>
                  )}
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors">
                    {job.title}
                  </h4>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Briefcase className="h-4 w-4" />
                      {job.type}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {job.experience}
                    </span>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-orange-500 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    Apply Now
                    <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>

            {/* Application Info */}
            <div className="mt-6 p-4 bg-gray-50 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-2">
                Before Applying:
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-0.5">•</span>
                  Laptop/desktop with working audio and internet
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-0.5">•</span>
                  Working headphones or earphones
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-0.5">•</span>
                  Quiet space to help you focus
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
