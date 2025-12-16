import React from 'react';
import { Instagram, Heart } from 'lucide-react';
import { contact } from '../mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black text-white py-16" data-testid="footer">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold" data-testid="footer-brand">
              Neongrowlabs
            </h3>
            <p className="text-gray-400 text-sm" data-testid="footer-tagline">
              Elevating your digital presence through innovation and excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4" data-testid="footer-quick-links-heading">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {['services', 'portfolio', 'about', 'testimonials'].map((section) => (
                <li key={section}>
                  <button
                    onClick={() => scrollToSection(section)}
                    className="text-gray-400 hover:text-white transition-colors capitalize text-sm"
                    data-testid={`footer-link-${section}`}
                  >
                    {section}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4" data-testid="footer-services-heading">
              Services
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li data-testid="footer-service-1">Instagram Management</li>
              <li data-testid="footer-service-2">Meta Ads</li>
              <li data-testid="footer-service-3">Web Development</li>
              <li data-testid="footer-service-4">App Development</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4" data-testid="footer-contact-heading">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="hover:text-white transition-colors"
                  data-testid="footer-email"
                >
                  {contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contact.phone}`}
                  className="hover:text-white transition-colors"
                  data-testid="footer-phone"
                >
                  {contact.phone}
                </a>
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex gap-3 mt-4">
              <a
                href={contact.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                data-testid="footer-instagram"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400" data-testid="footer-copyright">
            © {currentYear} Neongrowlabs. All rights reserved.
          </p>
          <p className="text-sm text-gray-400 flex items-center gap-1" data-testid="footer-credits">
            Made with <Heart size={16} className="fill-red-500 text-red-500" /> by Neongrowlabs
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;