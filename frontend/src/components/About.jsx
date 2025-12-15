import React from 'react';
import { about } from '../mock';
import { Card, CardContent } from './ui/card';
import { Award, Users, Briefcase, Calendar } from 'lucide-react';

const About = () => {
  const icons = [Award, Users, Users, Calendar];

  return (
    <section id="about" className="py-24 bg-white" data-testid="about-section">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="section-heading fade-in-up" data-testid="about-heading">
              {about.title}
            </h2>
            <p className="body-large text-gray-600 fade-in-up stagger-1" data-testid="about-description">
              {about.description}
            </p>
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-2xl fade-in-up stagger-2">
              <h3 className="font-semibold text-lg mb-2">Our Mission</h3>
              <p className="body-medium text-gray-700" data-testid="about-mission">
                {about.mission}
              </p>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="grid grid-cols-2 gap-6">
            {about.stats.map((stat, index) => {
              const Icon = icons[index];
              return (
                <Card
                  key={index}
                  className={`card-3d hover-lift border-0 shadow-lg fade-in-up stagger-${index + 1}`}
                  data-testid={`about-stat-card-${index}`}
                >
                  <CardContent className="p-6 text-center space-y-3">
                    <div className="w-12 h-12 mx-auto bg-indigo-100 rounded-full flex items-center justify-center">
                      <Icon className="text-indigo-600" size={24} />
                    </div>
                    <div className="text-4xl font-bold text-gray-900" data-testid={`about-stat-value-${index}`}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600" data-testid={`about-stat-label-${index}`}>
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;