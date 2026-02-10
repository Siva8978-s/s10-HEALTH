import { Facebook, Instagram, Twitter, Linkedin, Heart } from 'lucide-react';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Team', href: '#team' },
  { name: 'Careers', href: '#careers' },
  { name: 'Contact', href: '#contact' },
];

const services = [
  'Virtual Medical Scribing',
  'AI Medical Scribe',
  'Medical Billing',
  'Healthcare Staffing',
  'Training & Certification',
  'Practice Management',
];

const socialLinks = [
  { icon: Facebook, href: 'https://www.facebook.com/S10healthishiring/', label: 'Facebook' },
  { icon: Instagram, href: 'https://www.instagram.com/s10_health/', label: 'Instagram' },
  { icon: Twitter, href: 'https://twitter.com/S10_Health', label: 'Twitter' },
  { icon: Linkedin, href: 'https://www.linkedin.com/company/3807339/', label: 'LinkedIn' },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Logo & About */}
          <div className="lg:col-span-1">
            <div className="flex flex-col mb-4">
              <span className="text-3xl font-bold text-orange-500 tracking-tight">
                S10
              </span>
              <span className="text-sm text-gray-400 -mt-1 tracking-widest">
                health
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              The leader in virtual medical scribing services, transforming 
              healthcare documentation worldwide. Improving lives, one chart at a time.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors group"
                >
                  <social.icon className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-gray-400 hover:text-orange-500 transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-400 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-4">
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <a 
                  href="mailto:smartsupport@s10health.com"
                  className="text-orange-500 hover:text-orange-400 transition-colors"
                >
                  smartsupport@s10health.com
                </a>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Support</p>
                <p className="text-white">24/7 Available</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Locations</p>
                <p className="text-white">4 Strategic Locations in India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {new Date().getFullYear()} S10 Healthcare Solutions Pvt Ltd. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm flex items-center gap-1">
              Made with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> for better healthcare
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
