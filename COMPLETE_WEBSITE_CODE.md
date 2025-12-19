# Neongrowlabs Complete Website Code

## Table of Contents
1. [Frontend Files](#frontend-files)
2. [Backend Files](#backend-files)
3. [Configuration Files](#configuration-files)

---

## Frontend Files

### 1. `/app/frontend/src/mock.js` - Data File

```javascript
// Mock data for Neongrowlabs Agency Website

export const heroData = {
  title: "Neongrowlabs",
  subtitle: "Elevate Your Digital Presence",
  description: "We craft exceptional digital experiences through innovative strategies and cutting-edge solutions.",
  image: "https://images.unsplash.com/photo-1606211105533-0439bfecce21",
  cta: "Start Your Journey"
};

export const services = [
  {
    id: 1,
    title: "Instagram Profile Management",
    description: "Strategic content planning, engagement growth, and brand consistency across your Instagram presence.",
    icon: "Instagram",
    color: "mid-purple"
  },
  {
    id: 2,
    title: "Meta Ads",
    description: "Data-driven advertising campaigns across Facebook and Instagram to maximize your ROI.",
    icon: "Target",
    color: "mid-blue"
  },
  {
    id: 3,
    title: "Web Development",
    description: "Custom, responsive websites built with modern technologies for optimal performance.",
    icon: "Code",
    color: "light-pink"
  },
  {
    id: 4,
    title: "App Development",
    description: "Native and cross-platform mobile applications that deliver seamless user experiences.",
    icon: "Smartphone",
    color: "mid-green"
  },
  {
    id: 5,
    title: "Video Editing",
    description: "Professional editing for Instagram Reels, YouTube videos, and social media content.",
    icon: "Video",
    color: "mid-orange"
  },
  {
    id: 6,
    title: "Digital Marketing",
    description: "Comprehensive marketing strategies to grow your online presence and drive conversions.",
    icon: "TrendingUp",
    color: "mid-yellow"
  },
  {
    id: 7,
    title: "AI Agents",
    description: "Intelligent automation solutions powered by AI to streamline workflows and enhance customer interactions.",
    icon: "Bot",
    color: "mid-purple"
  }
];

export const portfolio = [
  {
    id: 1,
    title: "Social Media Campaign",
    description: "Increased engagement by 340% through strategic content and community management.",
    image: "https://images.unsplash.com/photo-1683721003111-070bcc053d8b",
    categories: ["Social Media", "Strategy"],
    bgColor: "light-pink",
    metrics: { engagement: "+340%", followers: "+25K", reach: "2.5M" }
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description: "Built a high-performance online store with seamless checkout and inventory management.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    categories: ["Web Development", "E-Commerce"],
    bgColor: "mid-blue",
    metrics: { conversion: "+180%", revenue: "+₹500K", speed: "0.8s" }
  },
  {
    id: 3,
    title: "Analytics Dashboard",
    description: "Data-driven insights platform helping clients make informed marketing decisions.",
    image: "https://images.unsplash.com/photo-1613347761493-4060c969cd28",
    categories: ["Analytics", "Strategy"],
    bgColor: "light-yellow",
    metrics: { dataPoints: "50K+", accuracy: "98%", users: "1.2K" }
  },
  {
    id: 4,
    title: "Brand Campaign",
    description: "Comprehensive digital marketing strategy resulting in significant brand awareness growth.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7",
    categories: ["Marketing", "Branding"],
    bgColor: "mid-purple",
    metrics: { awareness: "+280%", leads: "+15K", ctr: "8.5%" }
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    position: "CEO, TechVision",
    content: "Neongrowlabs transformed our digital presence completely. Their strategic approach to Instagram management doubled our engagement in just 3 months.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&q=80"
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    position: "Founder, StartupHub",
    content: "The web development team delivered beyond expectations. Our new platform is fast, beautiful, and exactly what we envisioned.",
    rating: 5,
    image: "https://customer-assets.emergentagent.com/job_neongrowlabs/artifacts/a1l1bgrm_Gemini_Generated_Image_weugvxweugvxweug.png"
  },
  {
    id: 3,
    name: "Ananya Patel",
    position: "Marketing Director, GrowthCo",
    content: "Their Meta Ads campaigns generated the highest ROI we've ever seen. Professional, data-driven, and results-focused.",
    rating: 5,
    image: "https://customer-assets.emergentagent.com/job_neongrowlabs/artifacts/6velkru0_Gemini_Generated_Image_xiq35dxiq35dxiq3.png"
  }
];

export const about = {
  title: "About Neongrowlabs",
  description: "We are a team of passionate digital experts dedicated to helping businesses thrive in the digital landscape. With years of experience and a commitment to excellence, we deliver solutions that drive real results.",
  mission: "To empower brands with innovative digital solutions that create lasting impact.",
  stats: [
    { label: "Projects Completed", value: "200+" },
    { label: "Happy Clients", value: "150+" },
    { label: "Team Members", value: "25+" },
    { label: "Years Experience", value: "5+" }
  ]
};

export const pricingPlans = {
  title: "Neongrowlabs – Pricing Plans",
  subtitle: "Transparent pricing. Real results. Scalable growth.",
  categories: [
    {
      id: 1,
      name: "Instagram Reels & YouTube Video Editing",
      icon: "Video",
      plans: [
        {
          name: "Starter Edit",
          price: "₹2,999",
          period: "month",
          features: [
            "Up to 12 short videos",
            "Basic cuts & transitions",
            "Music sync",
            "Text & captions",
            "1 revision"
          ],
          color: "purple"
        },
        {
          name: "Growth Edit",
          price: "₹5,999",
          period: "month",
          features: [
            "Up to 30 short videos",
            "Advanced cuts & transitions",
            "Subtitles (auto + styled)",
            "Trend-based editing",
            "2 revisions"
          ],
          popular: true,
          color: "blue"
        },
        {
          name: "Pro Creator",
          price: "₹9,999",
          period: "month",
          features: [
            "Up to 60 videos",
            "High-retention editing",
            "Custom animations & effects",
            "Viral hooks (first 3 sec)",
            "Unlimited revisions"
          ],
          color: "pink"
        }
      ]
    },
    {
      id: 2,
      name: "Meta Ads Management",
      subtitle: "Ad budget not included",
      icon: "Target",
      plans: [
        {
          name: "Basic Ads",
          price: "₹4,999",
          period: "month",
          features: [
            "1 campaign setup",
            "Audience targeting",
            "2 ad creatives",
            "Weekly optimization",
            "Performance report"
          ],
          color: "blue"
        },
        {
          name: "Performance Ads",
          price: "₹9,999",
          period: "month",
          features: [
            "Up to 3 campaigns",
            "Funnel setup (Leads/Sales)",
            "A/B testing",
            "Creative optimization",
            "Detailed reporting"
          ],
          popular: true,
          color: "purple"
        },
        {
          name: "Scaling Ads",
          price: "₹19,999",
          period: "month",
          features: [
            "Unlimited campaigns",
            "Retargeting & lookalike audiences",
            "Budget scaling strategy",
            "Daily optimization",
            "ROI-focused reporting"
          ],
          color: "green"
        }
      ]
    },
    {
      id: 3,
      name: "Website Development",
      subtitle: "One-Time Payment",
      icon: "Code",
      plans: [
        {
          name: "Basic Website",
          price: "₹7,999",
          period: "one-time",
          features: [
            "1–3 pages",
            "Mobile responsive",
            "Contact form",
            "Basic SEO",
            "7-day delivery"
          ],
          color: "pink"
        },
        {
          name: "Business Website",
          price: "₹14,999",
          period: "one-time",
          features: [
            "5–8 pages",
            "Custom UI/UX",
            "Speed optimization",
            "SEO-friendly structure",
            "WhatsApp integration"
          ],
          popular: true,
          color: "blue"
        },
        {
          name: "Premium Website",
          price: "₹29,999",
          period: "one-time",
          features: [
            "Unlimited pages",
            "Advanced animations",
            "Landing pages",
            "Blog / CMS",
            "30-day support"
          ],
          color: "purple"
        }
      ]
    },
    {
      id: 4,
      name: "App Development",
      icon: "Smartphone",
      plans: [
        {
          name: "Basic App",
          price: "₹49,999",
          period: "one-time",
          features: [
            "Single platform (Android/iOS)",
            "Basic UI",
            "Core features",
            "Admin panel"
          ],
          color: "green"
        },
        {
          name: "Advanced App",
          price: "₹99,999",
          period: "one-time",
          features: [
            "Android + iOS",
            "Custom UI/UX",
            "API integration",
            "Push notifications"
          ],
          popular: true,
          color: "blue"
        },
        {
          name: "Enterprise App",
          price: "₹1,99,999+",
          period: "one-time",
          features: [
            "Full custom solution",
            "Scalable backend",
            "Security & performance optimization",
            "Maintenance support"
          ],
          color: "purple"
        }
      ]
    },
    {
      id: 5,
      name: "Instagram Page Handling",
      icon: "Instagram",
      plans: [
        {
          name: "Starter",
          price: "₹4,999",
          period: "month",
          features: [
            "12 posts / reels",
            "Caption & hashtag strategy",
            "Basic engagement support"
          ],
          color: "pink"
        },
        {
          name: "Growth",
          price: "₹8,999",
          period: "month",
          features: [
            "20 posts / reels",
            "DM & comment handling",
            "Growth strategy",
            "Monthly insights"
          ],
          popular: true,
          color: "purple"
        },
        {
          name: "Brand Authority",
          price: "₹14,999",
          period: "month",
          features: [
            "30+ posts / reels",
            "Full page management",
            "Trend research",
            "Influencer collaboration guidance"
          ],
          color: "blue"
        }
      ]
    },
    {
      id: 6,
      name: "Digital Marketing",
      subtitle: "Complete Growth System",
      icon: "TrendingUp",
      plans: [
        {
          name: "Starter Marketing",
          price: "₹7,999",
          period: "month",
          features: [
            "Social media strategy",
            "Content planning",
            "Basic analytics"
          ],
          color: "yellow"
        },
        {
          name: "Growth Marketing",
          price: "₹14,999",
          period: "month",
          features: [
            "Ads + content strategy",
            "Lead generation funnel",
            "Conversion optimization"
          ],
          popular: true,
          color: "blue"
        },
        {
          name: "Scale Marketing",
          price: "₹24,999",
          period: "month",
          features: [
            "Multi-platform marketing",
            "Retargeting campaigns",
            "Weekly performance review",
            "Dedicated manager"
          ],
          color: "purple"
        }
      ]
    },
    {
      id: 7,
      name: "Combo Packages",
      subtitle: "High Conversion",
      icon: "Sparkles",
      plans: [
        {
          name: "Startup Boost",
          price: "₹14,999",
          period: "month",
          features: [
            "Instagram handling",
            "Reel editing (20 videos)",
            "Basic ads management"
          ],
          color: "green"
        },
        {
          name: "Business Growth",
          price: "₹29,999",
          period: "month",
          features: [
            "Full social media management",
            "Meta ads",
            "Video editing",
            "Monthly reports"
          ],
          popular: true,
          color: "blue"
        },
        {
          name: "Brand Domination",
          price: "₹49,999",
          period: "month",
          features: [
            "Everything included",
            "Website support",
            "Ads scaling",
            "Priority support"
          ],
          color: "purple"
        }
      ]
    }
  ]
};

export const contact = {
  email: "neongrowlabs@gmail.com",
  phone: "+91 7838399405",
  address: "Dwarka Mor, Jain Road Gali No 21, Delhi - 110059",
  social: {
    instagram: "https://www.instagram.com/neongrowlabs?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
  }
};
```

### 2. `/app/frontend/src/components/Header.jsx`

```javascript
import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Services', id: 'services' },
    { label: 'Pricing', id: 'pricing' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'About', id: 'about' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-lg shadow-sm'
          : 'bg-transparent'
      }`}
      data-testid="header"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-2xl font-bold tracking-tight hover:opacity-80 transition-opacity"
            data-testid="logo-button"
          >
            Neongrowlabs
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" data-testid="desktop-nav">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="body-medium text-gray-700 hover:text-black transition-colors"
                data-testid={`nav-${item.id}`}
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection('contact')}
              className="button-3d bg-black text-white hover:bg-gray-800"
              data-testid="get-started-button"
            >
              Get Started
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
            data-testid="mobile-menu-button"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav
            className="md:hidden mt-4 pb-4 flex flex-col gap-4 fade-in"
            data-testid="mobile-nav"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="body-medium text-gray-700 hover:text-black transition-colors text-left"
                data-testid={`mobile-nav-${item.id}`}
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection('contact')}
              className="button-3d bg-black text-white hover:bg-gray-800 w-full"
              data-testid="mobile-get-started-button"
            >
              Get Started
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
```

### 3. `/app/frontend/src/components/Hero.jsx`

```javascript
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
```

Continue to next message for more files...
