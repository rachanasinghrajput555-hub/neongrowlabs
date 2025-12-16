import React from 'react';
import { Button } from './ui/button';
import { heroData } from '../mock';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50"
      data-testid="hero-section"
    >
      {/* Floating Background Elements */}
      <div className="floating-element" style={{ top: '10%', left: '10%', width: '400px', height: '400px', background: 'linear-gradient(135deg, #d987ff 0%, #ff84e4 100%)' }}></div>
      <div className="floating-element" style={{ top: '50%', right: '10%', width: '350px', height: '350px', background: 'linear-gradient(135deg, #60a5fa 0%, #818cf8 100%)', animationDelay: '2s' }}></div>
      <div className="floating-element" style={{ bottom: '15%', left: '15%', width: '300px', height: '300px', background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)', animationDelay: '4s' }}></div>

      <div className="max-w-5xl mx-auto px-6 py-32 relative z-10">
        <div className="text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full fade-in shadow-sm" data-testid="hero-badge">
            <Sparkles size={16} className="text-indigo-600" />
            <span className="text-sm font-medium text-gray-700">Digital Excellence Since 2020</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold uppercase tracking-tight leading-none fade-in-up stagger-1" data-testid="hero-title">
            Neongrowlabs
          </h1>

          {/* Subtitle */}
          <h2 className="text-4xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 fade-in-up stagger-2" data-testid="hero-subtitle">
            {heroData.subtitle}
          </h2>

          {/* Description */}
          <p className="body-large text-gray-600 max-w-2xl mx-auto fade-in-up stagger-3" data-testid="hero-description">
            {heroData.description}
          </p>

          {/* CTA Button */}
          <div className="fade-in-up stagger-4 pt-4">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="button-3d bg-black text-white hover:bg-gray-800 text-lg px-10 py-7 rounded-full"
              data-testid="hero-cta-button"
            >
              {heroData.cta.toUpperCase()}
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 md:gap-16 pt-16 max-w-3xl mx-auto fade-in-up stagger-5">
            <div className="text-center" data-testid="hero-stat-1">
              <div className="text-4xl md:text-5xl font-bold text-indigo-600 mb-2">200+</div>
              <div className="text-sm md:text-base text-gray-600 uppercase tracking-wide">Projects</div>
            </div>
            <div className="text-center" data-testid="hero-stat-2">
              <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">150+</div>
              <div className="text-sm md:text-base text-gray-600 uppercase tracking-wide">Clients</div>
            </div>
            <div className="text-center" data-testid="hero-stat-3">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">5+</div>
              <div className="text-sm md:text-base text-gray-600 uppercase tracking-wide">Years</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 fade-in-up stagger-6" data-testid="scroll-indicator">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-gray-400 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;