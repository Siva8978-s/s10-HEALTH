import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Building2, Stethoscope, MapPin, Calendar } from 'lucide-react';

const stats = [
  { icon: Building2, value: 1000, suffix: '+', label: 'Hospitals Worldwide' },
  { icon: Stethoscope, value: 50, suffix: '+', label: 'EHR Systems' },
  { icon: MapPin, value: 40, suffix: '', label: 'US States Covered' },
  { icon: Calendar, value: 17, suffix: '+', label: 'Years of Excellence' },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function HeroSection() {
  const handleExplore = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-orange-100 rounded-full blur-3xl opacity-50 animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-orange-50 rounded-full blur-3xl opacity-60" />
      
      {/* Dot Pattern */}
      <div className="absolute top-40 right-20 grid grid-cols-6 gap-2 opacity-20">
        {Array.from({ length: 36 }).map((_, i) => (
          <div key={i} className="w-2 h-2 bg-orange-400 rounded-full" />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-6 md:space-y-8 z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 rounded-full border border-orange-100 animate-fade-in-up">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-orange-700">
                Trusted by 1000+ Hospitals Worldwide
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight animate-fade-in-up stagger-1">
              The Leader in{' '}
              <span className="text-orange-500">Virtual Medical Scribing</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl animate-fade-in-up stagger-2">
              With the world's growing need for better health and improved well-being, 
              S10 Health seamlessly unifies the fragmented healthcare system. We are 
              pioneers in inventing virtual medical scribe services to hospitals across 
              the world.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up stagger-3">
              <Button
                onClick={handleExplore}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg rounded-lg btn-hover animate-pulse-soft"
              >
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-gray-300 hover:border-orange-500 hover:text-orange-500 px-8 py-6 text-lg rounded-lg transition-colors"
              >
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-gray-200 animate-fade-in-up stagger-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                    <stat.icon className="h-5 w-5 text-orange-500" />
                    <span className="text-2xl md:text-3xl font-bold text-gray-900">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </span>
                  </div>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative lg:h-[600px] flex items-center justify-center animate-fade-in-up stagger-2">
            <div className="relative w-full max-w-lg lg:max-w-none">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-200 to-orange-100 rounded-3xl blur-2xl opacity-30 transform rotate-3" />
              
              {/* Main Image */}
              <img
                src="/images/hero-image.jpg"
                alt="Healthcare Technology"
                className="relative rounded-2xl shadow-2xl w-full object-cover"
              />
              
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 md:p-6 animate-float">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Documentation</p>
                    <p className="text-lg font-bold text-gray-900">99% Accuracy</p>
                  </div>
                </div>
              </div>

              {/* Another Floating Card */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl p-4 animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Time Saved</p>
                    <p className="text-base font-bold text-gray-900">2+ Hours/Day</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
