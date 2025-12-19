# Neongrowlabs Website Code - Part 4 (Contact, Footer, Backend)

### 9. `/app/frontend/src/components/Contact.jsx`

```javascript
import React, { useState } from 'react';
import { contact } from '../mock';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent } from './ui/card';
import { Mail, Phone, MapPin, Instagram } from 'lucide-react';
import { toast } from 'sonner';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Send message to backend
      await axios.post(`${API}/contact`, formData);
      
      // Show success message
      toast.success('Thank you! Your message has been sent successfully. We will get back to you soon.');
      
      // Clear form
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('Sorry, there was an error sending your message. Please try again or contact us directly via email.');
    } finally {
      setIsSubmitting(false);
    }
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
                    placeholder="+91 (555) 123-4567"
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
                  disabled={isSubmitting}
                  className="button-3d w-full bg-black text-white hover:bg-gray-800 py-6 disabled:opacity-50 disabled:cursor-not-allowed"
                  data-testid="contact-submit-button"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
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
                    href={contact.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
                    data-testid="contact-instagram-link"
                    aria-label="Instagram"
                  >
                    <Instagram size={24} />
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
```

### 10. `/app/frontend/src/components/Footer.jsx`

```javascript
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
```

---

## Backend Files

### `/app/backend/server.py`

```python
from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

class ContactMessage(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    phone: str = ""
    message: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    status: str = "new"  # new, read, replied

class ContactMessageCreate(BaseModel):
    name: str
    email: str
    phone: str = ""
    message: str

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks

@api_router.post("/contact", response_model=ContactMessage)
async def create_contact_message(input: ContactMessageCreate):
    message_dict = input.model_dump()
    message_obj = ContactMessage(**message_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = message_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.contact_messages.insert_one(doc)
    logger.info(f"New contact message from {message_obj.name} ({message_obj.email})")
    return message_obj

@api_router.get("/contact/messages", response_model=List[ContactMessage])
async def get_contact_messages():
    # Exclude MongoDB's _id field from the query results
    messages = await db.contact_messages.find({}, {"_id": 0}).sort("timestamp", -1).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for msg in messages:
        if isinstance(msg['timestamp'], str):
            msg['timestamp'] = datetime.fromisoformat(msg['timestamp'])
    
    return messages

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
```

---

## Summary

Your complete Neongrowlabs website includes:

✅ **Frontend (React)**
- 10 Components (Header, Hero, Services, Pricing, Portfolio, About, Testimonials, Contact, Footer + UI components)
- App.js and App.css (3D animations)
- mock.js (all data)

✅ **Backend (FastAPI)**
- Contact form API endpoint
- Message storage in MongoDB
- API to view all messages

✅ **Features**
- 7 Services with AI Agents
- 21 Pricing Plans (collapsible)
- 4 Portfolio projects
- 3 Indian client testimonials
- Working contact form
- Instagram integration
- Mobile responsive

✅ **Live URL**
https://neongrowlabs.preview.emergentagent.com
