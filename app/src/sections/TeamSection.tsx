import { Linkedin, Twitter } from 'lucide-react';

const teamMembers = [
  {
    name: 'Afser Shariff',
    title: 'Co-Founder & Chief Medical Officer',
    bio: 'Board-certified Otolaryngologist who envisioned and designed the Virtual Scribe concept. Founded Physicians Angels in 2007.',
    image: '/images/afser.png',
    social: {
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    name: 'M. Prem Anand',
    title: 'CEO & Co-Founder',
    bio: 'Over a decade of experience in IT and outsourcing, specializing in U.S. healthcare. Passionate about blending healthcare and technology.',
    image: '/images/prem1.png',
    social: {
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    name: 'Mir Zakir Ali',
    title: 'Managing Director & Co-Founder',
    bio: 'Nearly 2 decades of business experience including ten years of managing outsourced healthcare services.',
    image: '/images/zakir.png',
    social: {
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    name: 'Kevin Brady',
    title: 'President - US Operations',
    bio: 'Over two decades of government and private sector experience, specializing in international economic development.',
    image: '/images/kevin.png',
    social: {
      linkedin: '#',
      twitter: '#',
    },
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-orange-500 font-semibold text-sm uppercase tracking-wider scroll-hidden">
            <span className="w-8 h-0.5 bg-orange-500" />
            Leadership
            <span className="w-8 h-0.5 bg-orange-500" />
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6 scroll-hidden">
            Meet the <span className="text-orange-500">Team</span>
          </h2>
          <p className="text-lg text-gray-600 scroll-hidden">
            The visionaries behind S10 Health's success, dedicated to transforming 
            healthcare through innovation and excellence.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-card card-hover scroll-hidden"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden img-zoom">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Social Links */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <a
                    href={member.social.linkedin}
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href={member.social.twitter}
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-orange-500 transition-colors">
                  {member.name}
                </h3>
                <p className="text-orange-500 font-medium text-sm mb-3">
                  {member.title}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Join Team CTA */}
        <div className="mt-16 text-center scroll-hidden">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-card border border-gray-100">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Want to Join Our Team?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We're always looking for talented individuals who are passionate about 
              transforming healthcare. Check out our open positions and become part of 
              our growing family.
            </p>
            <button 
              onClick={() => document.getElementById('careers')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium btn-hover transition-colors"
            >
              View Careers
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
