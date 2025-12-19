# Neongrowlabs Website Code - Part 2 (Components Continued)

### 4. `/app/frontend/src/components/Services.jsx`

```javascript
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
```

### 5. `/app/frontend/src/components/Pricing.jsx`

```javascript
import React, { useState } from 'react';
import { pricingPlans } from '../mock';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import * as LucideIcons from 'lucide-react';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';

const Pricing = () => {
  const [showAll, setShowAll] = useState(false);
  const INITIAL_CATEGORIES = 2; // Show first 2 categories initially
  
  const getIcon = (iconName) => {
    const Icon = LucideIcons[iconName];
    return Icon ? <Icon size={28} /> : <LucideIcons.Sparkles size={28} />;
  };

  const getColorClasses = (color) => {
    const colorMap = {
      'purple': 'border-purple-200 bg-purple-50 hover:border-purple-300',
      'blue': 'border-blue-200 bg-blue-50 hover:border-blue-300',
      'pink': 'border-pink-200 bg-pink-50 hover:border-pink-300',
      'green': 'border-green-200 bg-green-50 hover:border-green-300',
      'yellow': 'border-yellow-200 bg-yellow-50 hover:border-yellow-300'
    };
    return colorMap[color] || 'border-gray-200 bg-gray-50';
  };

  const getButtonColor = (color) => {
    const colorMap = {
      'purple': 'bg-purple-600 hover:bg-purple-700',
      'blue': 'bg-blue-600 hover:bg-blue-700',
      'pink': 'bg-pink-600 hover:bg-pink-700',
      'green': 'bg-green-600 hover:bg-green-700',
      'yellow': 'bg-yellow-600 hover:bg-yellow-700'
    };
    return colorMap[color] || 'bg-black hover:bg-gray-800';
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-24 bg-white" data-testid="pricing-section">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-heading mb-4 fade-in-up" data-testid="pricing-heading">
            {pricingPlans.title}
          </h2>
          <p className="text-xl text-gray-600 fade-in-up stagger-1" data-testid="pricing-subtitle">
            {pricingPlans.subtitle}
          </p>
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-yellow-50 border border-yellow-200 rounded-full fade-in-up stagger-2">
            <span className="text-sm text-yellow-800 font-medium">
              ⚠️ Note: Real-life pricing can vary based on project requirements
            </span>
          </div>
        </div>

        {/* Pricing Categories */}
        <div className="space-y-20">
          {pricingPlans.categories
            .slice(0, showAll ? pricingPlans.categories.length : INITIAL_CATEGORIES)
            .map((category, catIndex) => (
            <div key={category.id} className="fade-in-up" data-testid={`pricing-category-${category.id}`}>
              {/* Category Header */}
              <div className="text-center mb-10">
                <div className="inline-flex items-center justify-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
                    {getIcon(category.icon)}
                  </div>
                  <h3 className="card-heading text-2xl">{category.name}</h3>
                </div>
                {category.subtitle && (
                  <p className="text-sm text-gray-500">{category.subtitle}</p>
                )}
              </div>

              {/* Plans Grid */}
              <div className="grid md:grid-cols-3 gap-8">
                {category.plans.map((plan, planIndex) => (
                  <Card
                    key={planIndex}
                    className={`relative card-3d hover-lift border-2 transition-all duration-300 ${
                      getColorClasses(plan.color)
                    } ${plan.popular ? 'scale-105 shadow-2xl' : 'shadow-lg'}`}
                    data-testid={`pricing-plan-${category.id}-${planIndex}`}
                  >
                    {plan.popular && (
                      <Badge
                        className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-indigo-600 text-white px-4 py-1"
                        data-testid={`popular-badge-${category.id}-${planIndex}`}
                      >
                        Most Popular
                      </Badge>
                    )}
                    
                    <CardContent className="p-8 space-y-6">
                      {/* Plan Name */}
                      <div>
                        <h4 className="text-xl font-semibold mb-2" data-testid={`plan-name-${category.id}-${planIndex}`}>
                          {plan.name}
                        </h4>
                      </div>

                      {/* Price */}
                      <div className="border-b pb-6">
                        <div className="flex items-baseline gap-2">
                          <span className="text-4xl font-bold" data-testid={`plan-price-${category.id}-${planIndex}`}>
                            {plan.price}
                          </span>
                          <span className="text-gray-500">
                            {plan.period === 'one-time' ? '' : `/ ${plan.period}`}
                          </span>
                        </div>
                        {plan.period === 'one-time' && (
                          <span className="text-sm text-gray-500">One-time payment</span>
                        )}
                      </div>

                      {/* Features */}
                      <ul className="space-y-3">
                        {plan.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-start gap-3"
                            data-testid={`plan-feature-${category.id}-${planIndex}-${featureIndex}`}
                          >
                            <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {/* CTA Button */}
                      <Button
                        onClick={scrollToContact}
                        className={`w-full button-3d text-white ${getButtonColor(plan.color)} py-6`}
                        data-testid={`plan-cta-${category.id}-${planIndex}`}
                      >
                        Get Started
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Show More/Less Button */}
        {pricingPlans.categories.length > INITIAL_CATEGORIES && (
          <div className="mt-16 text-center fade-in-up">
            <Button
              onClick={() => setShowAll(!showAll)}
              size="lg"
              variant="outline"
              className="button-3d border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white px-8 py-6 text-lg"
              data-testid="pricing-show-more-button"
            >
              {showAll ? (
                <>
                  Show Less Pricing Plans
                  <ChevronUp className="ml-2" size={20} />
                </>
              ) : (
                <>
                  Show More Pricing Plans ({pricingPlans.categories.length - INITIAL_CATEGORIES} more)
                  <ChevronDown className="ml-2" size={20} />
                </>
              )}
            </Button>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-20 text-center bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-12 fade-in-up">
          <h3 className="text-3xl font-bold mb-4">Need a Custom Solution?</h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Have unique requirements? Let's discuss a custom package tailored to your business needs.
          </p>
          <Button
            onClick={scrollToContact}
            size="lg"
            className="button-3d bg-black text-white hover:bg-gray-800 text-lg px-10 py-6"
            data-testid="pricing-custom-cta"
          >
            Contact Us for Custom Pricing
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
```

Continue to Part 3 for remaining components...
