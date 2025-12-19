# Neongrowlabs Website Code - Part 3 (Portfolio, About, Testimonials)

### 6. `/app/frontend/src/components/Portfolio.jsx`

```javascript
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
```

### 7. `/app/frontend/src/components/About.jsx`

```javascript
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
```

### 8. `/app/frontend/src/components/Testimonials.jsx`

```javascript
import React from 'react';
import { testimonials } from '../mock';
import { Card, CardContent } from './ui/card';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-gray-50" data-testid="testimonials-section">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-heading mb-6 fade-in-up" data-testid="testimonials-heading">
            Client Testimonials
          </h2>
          <p className="body-large text-gray-600 fade-in-up stagger-1" data-testid="testimonials-description">
            Don't just take our word for it. Hear what our clients have to say about their experience working with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className={`card-3d hover-lift border-0 shadow-lg fade-in-up stagger-${index + 1}`}
              data-testid={`testimonial-card-${testimonial.id}`}
            >
              <CardContent className="p-8 space-y-6">
                {/* Quote Icon */}
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                  <Quote className="text-indigo-600" size={24} />
                </div>

                {/* Rating */}
                <div className="flex gap-1" data-testid={`testimonial-rating-${testimonial.id}`}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="body-medium text-gray-700 italic" data-testid={`testimonial-content-${testimonial.id}`}>
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                    data-testid={`testimonial-image-${testimonial.id}`}
                  />
                  <div>
                    <div className="font-semibold" data-testid={`testimonial-name-${testimonial.id}`}>
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600" data-testid={`testimonial-position-${testimonial.id}`}>
                      {testimonial.position}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
```

Continue to Part 4 for Contact, Footer and Backend...
