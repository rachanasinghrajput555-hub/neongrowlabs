import React, { useState } from 'react';
import { contact } from '../mock';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent } from './ui/card';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast.success('Thank you! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-white" data-testid="contact-section">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-heading mb-6 fade-in-up" data-testid="contact-heading">
            Get In Touch
          </h2>
          <p className="body-large text-gray-600 fade-in-up stagger-1" data-testid="contact-description">
            Ready to elevate your digital presence? Let's discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-0 shadow-xl fade-in-up stagger-1" data-testid="contact-form-card">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="w-full"
                    data-testid="contact-name-input"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="w-full"
                    data-testid="contact-email-input"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 123-4567"
                    className="w-full"
                    data-testid="contact-phone-input"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    required
                    rows={5}
                    className="w-full"
                    data-testid="contact-message-textarea"
                  />
                </div>

                <Button
                  type="submit"
                  className="button-3d w-full bg-black text-white hover:bg-gray-800 py-6"
                  data-testid="contact-submit-button"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 fade-in-up stagger-2">
            {/* Contact Details */}
            <div className="space-y-6">
              <Card className="card-3d border-0 shadow-lg" data-testid="contact-email-card">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-indigo-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-gray-600 hover:text-indigo-600 transition-colors"
                      data-testid="contact-email-link"
                    >
                      {contact.email}
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-3d border-0 shadow-lg" data-testid="contact-phone-card">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <a
                      href={`tel:${contact.phone}`}
                      className="text-gray-600 hover:text-green-600 transition-colors"
                      data-testid="contact-phone-link"
                    >
                      {contact.phone}
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-3d border-0 shadow-lg" data-testid="contact-address-card">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-pink-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-gray-600" data-testid="contact-address-text">
                      {contact.address}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Social Media */}
            <Card className="card-3d border-0 shadow-lg" data-testid="contact-social-card">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href={contact.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
                    data-testid="contact-linkedin-link"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={24} />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;