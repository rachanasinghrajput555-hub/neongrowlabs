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