import React from 'react';
import { portfolio } from '../mock';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { TrendingUp } from 'lucide-react';

const Portfolio = () => {
  const getBgColorClass = (color) => {
    const colorMap = {
      'light-pink': 'bg-pink-50',
      'mid-blue': 'bg-blue-50',
      'light-yellow': 'bg-yellow-50',
      'mid-purple': 'bg-purple-50'
    };
    return colorMap[color] || 'bg-gray-50';
  };

  return (
    <section id="portfolio" className="py-24 bg-gray-50" data-testid="portfolio-section">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-heading mb-6 fade-in-up" data-testid="portfolio-heading">
            Our Portfolio
          </h2>
          <p className="body-large text-gray-600 fade-in-up stagger-1" data-testid="portfolio-description">
            Showcasing our most impactful projects and the remarkable results we've achieved for our clients.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {portfolio.map((project, index) => (
            <Card
              key={project.id}
              className={`card-3d-tilt overflow-hidden border-0 shadow-xl fade-in-up stagger-${(index % 4) + 1}`}
              data-testid={`portfolio-card-${project.id}`}
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  data-testid={`portfolio-image-${project.id}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Categories Badges */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {project.categories.map((category, idx) => (
                    <Badge
                      key={idx}
                      className="bg-white/90 text-black backdrop-blur-sm"
                      data-testid={`portfolio-category-${project.id}-${idx}`}
                    >
                      {category}
                    </Badge>
                  ))}
                </div>
              </div>

              <CardContent className={`p-8 ${getBgColorClass(project.bgColor)}`}>
                {/* Project Info */}
                <h3 className="card-heading mb-3" data-testid={`portfolio-title-${project.id}`}>
                  {project.title}
                </h3>
                <p className="body-medium text-gray-600 mb-6" data-testid={`portfolio-description-${project.id}`}>
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
                  {Object.entries(project.metrics).map(([key, value], idx) => (
                    <div key={idx} className="text-center" data-testid={`portfolio-metric-${project.id}-${idx}`}>
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <TrendingUp size={16} className="text-green-600" />
                        <span className="font-bold text-lg">{value}</span>
                      </div>
                      <div className="text-xs text-gray-500 capitalize">{key}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;