import React from 'react';
import { services } from '../mock';
import * as LucideIcons from 'lucide-react';
import { Card, CardContent } from './ui/card';

const Services = () => {
  const getIcon = (iconName) => {
    const Icon = LucideIcons[iconName];
    return Icon ? <Icon size={32} /> : <LucideIcons.Sparkles size={32} />;
  };

  const getColorClasses = (color) => {
    const colorMap = {
      'mid-purple': 'bg-purple-50 text-purple-600 hover:bg-purple-100',
      'mid-blue': 'bg-blue-50 text-blue-600 hover:bg-blue-100',
      'light-pink': 'bg-pink-50 text-pink-600 hover:bg-pink-100',
      'mid-green': 'bg-green-50 text-green-600 hover:bg-green-100',
      'mid-orange': 'bg-orange-50 text-orange-600 hover:bg-orange-100',
      'mid-yellow': 'bg-yellow-50 text-yellow-600 hover:bg-yellow-100'
    };
    return colorMap[color] || 'bg-gray-50 text-gray-600';
  };

  return (
    <section id="services" className="py-24 bg-white" data-testid="services-section">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-heading mb-6 fade-in-up" data-testid="services-heading">
            Our Services
          </h2>
          <p className="body-large text-gray-600 fade-in-up stagger-1" data-testid="services-description">
            Comprehensive digital solutions tailored to elevate your brand and drive measurable results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.id}
              className={`card-3d hover-lift border-0 shadow-lg fade-in-up stagger-${(index % 6) + 1}`}
              data-testid={`service-card-${service.id}`}
            >
              <CardContent className="p-8 space-y-4">
                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-colors ${
                    getColorClasses(service.color)
                  }`}
                  data-testid={`service-icon-${service.id}`}
                >
                  {getIcon(service.icon)}
                </div>

                {/* Content */}
                <div>
                  <h3 className="card-heading mb-3" data-testid={`service-title-${service.id}`}>
                    {service.title}
                  </h3>
                  <p className="body-medium text-gray-600" data-testid={`service-description-${service.id}`}>
                    {service.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;