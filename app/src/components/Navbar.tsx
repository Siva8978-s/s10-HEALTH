import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

interface NavbarProps {
  scrolled: boolean;
}

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Team', href: '#team' },
  { name: 'Careers', href: '#careers' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar({ scrolled }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => link.href.slice(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="flex flex-col">
              <span className="text-2xl md:text-3xl font-bold text-orange-500 tracking-tight">
                S10
              </span>
              <span className="text-xs md:text-sm text-gray-600 -mt-1 tracking-widest">
                health
              </span>
            </div>
            <span className="hidden sm:block text-xs text-gray-400 italic ml-2">
              Improving Lives
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className={`text-sm font-medium transition-colors duration-200 link-underline ${
                  activeSection === link.href.slice(1)
                    ? 'text-orange-500'
                    : 'text-gray-700 hover:text-orange-500'
                }`}
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              onClick={() => handleNavClick('#contact')}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg btn-hover"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-gray-700">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-white">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold text-orange-500">S10</span>
                    <span className="text-xs text-gray-600 -mt-1 tracking-widest">health</span>
                  </div>
                </div>
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <button
                      key={link.name}
                      onClick={() => handleNavClick(link.href)}
                      className={`text-left text-lg font-medium py-2 transition-colors duration-200 ${
                        activeSection === link.href.slice(1)
                          ? 'text-orange-500'
                          : 'text-gray-700 hover:text-orange-500'
                      }`}
                    >
                      {link.name}
                    </button>
                  ))}
                </nav>
                <div className="mt-auto pb-8">
                  <Button
                    onClick={() => handleNavClick('#contact')}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg"
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
