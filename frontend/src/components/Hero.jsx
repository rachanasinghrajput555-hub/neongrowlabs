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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white"
      data-testid="hero-section"
    >
      {/* Floating Background Elements */}
      <div className="floating-element" style={{ top: '10%', left: '10%', width: '300px', height: '300px', background: 'linear-gradient(135deg, #d987ff 0%, #ff84e4 100%)' }}></div>
      <div className="floating-element" style={{ top: '60%', right: '15%', width: '250px', height: '250px', background: 'linear-gradient(135deg, #60a5fa 0%, #6366f1 100%)', animationDelay: '2s' }}></div>
      <div className="floating-element" style={{ bottom: '10%', left: '20%', width: '200px', height: '200px', background: 'linear-gradient(135deg, #78d692 0%, #fbbf24 100%)', animationDelay: '4s' }}></div>

      <div className="max-w-7xl mx-auto px-6 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/5 rounded-full fade-in" data-testid="hero-badge">
              <Sparkles size={16} className="text-indigo-600" />
              <span className="text-sm font-medium">Digital Excellence Since 2016</span>
            </div>

            <h1 className="brand-display fade-in-up stagger-1" data-testid="hero-title">
              {heroData.title}
            </h1>

            <h2 className="hero-heading text-gray-800 fade-in-up stagger-2" data-testid="hero-subtitle">
              {heroData.subtitle}
            </h2>

            <p className="body-large text-gray-600 max-w-xl fade-in-up stagger-3" data-testid="hero-description">
              {heroData.description}
            </p>

            <div className="flex flex-wrap gap-4 fade-in-up stagger-4">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="button-3d bg-black text-white hover:bg-gray-800 text-lg px-8 py-6"
                data-testid="hero-cta-button"
              >
                {heroData.cta}
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button
                onClick={() => {
                  const element = document.getElementById('portfolio');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                size="lg"
                variant="outline"
                className="button-3d text-lg px-8 py-6 border-2 border-black hover:bg-black hover:text-white"
                data-testid="hero-portfolio-button"
              >
                View Our Work
              </Button>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative perspective-container fade-in-up stagger-2" data-testid="hero-image-container">
            <div className="relative image-3d">
              <img
                src={heroData.image}
                alt="Digital Innovation"
                className="w-full h-auto rounded-3xl shadow-2xl"
                data-testid="hero-image"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/20 to-transparent rounded-3xl"></div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl card-3d" data-testid="hero-stat-card-1">
              <div className="text-4xl font-bold text-indigo-600">200+</div>
              <div className="text-sm text-gray-600 mt-1">Projects Delivered</div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white p-6 rounded-2xl shadow-xl card-3d" data-testid="hero-stat-card-2">
              <div className="text-4xl font-bold text-pink-500">150+</div>
              <div className="text-sm text-gray-600 mt-1">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;