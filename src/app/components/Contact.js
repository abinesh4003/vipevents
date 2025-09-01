'use client'

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  Facebook, 
  Youtube,
  MessageCircle,
  Calendar,
  Clock
} from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear any previous status when user starts typing
    if (submitStatus) setSubmitStatus(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.phone || !formData.eventType || !formData.message) {
      setSubmitStatus('error');
      alert('Please fill in all required fields');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus('error');
      alert('Please enter a valid email address');
      return;
    }

    try {
      setIsSubmitting(true);
      setSubmitStatus(null);
      
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        alert('Thank you for your message! We will contact you within 24 hours.');
        
        // Reset form
        setFormData({ 
          name: '', 
          email: '', 
          phone: '', 
          eventType: '', 
          eventDate: '', 
          message: '' 
        });
      } else {
        setSubmitStatus('error');
        console.error('Server error:', data.error);
        alert(data.error || 'Sorry, there was an error sending your message. Please try again later.');
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Network error:', error);
      alert('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const openWhatsApp = () => {
    const message = "Hello V.I.P Function Planners! I'm interested in your event planning services.";
    const whatsappUrl = `https://wa.me/918778304145?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Plan Your <span className="text-gold">Event Today</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Get a free consultation and quote for your special occasion
          </p>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Column - Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:w-2/5"
          >
            <div className="bg-gray-800 rounded-2xl p-6 md:p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gold">Get In Touch</h3>
              
              <p className="mb-8 text-gray-300">
                Let's make your next event the talk of the town! Whether it's a wedding, birthday, engagement, or reception, trust V.I.P Function Planners – the best in Nagercoil – to create a celebration you will never forget.
              </p>
              
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="bg-gold/20 p-2 rounded-full flex-shrink-0">
                    <Phone className="text-gold" size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Call Us</p>
                    <a href="tel:8778304145" className="text-lg hover:text-gold transition-colors block mt-1">
                      +91 8778304145
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-gold/20 p-2 rounded-full flex-shrink-0">
                    <Mail className="text-gold" size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Email Us</p>
                    <a href="mailto:info@vipfunctionplanners.com" className="text-lg hover:text-gold transition-colors block mt-1 break-all">
                      info@vipfunctionplanners.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-gold/20 p-2 rounded-full flex-shrink-0">
                    <MapPin className="text-gold" size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <span className="text-lg block mt-1">Nagercoil, Kanyakumari District</span>
                  </div>
                </div>
              </div>
              
              {/* Quick Action Buttons */}
              <div className="mt-8 space-y-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={openWhatsApp}
                  className="w-full bg-green-600 text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2"
                >
                  <MessageCircle size={20} />
                  Message on WhatsApp
                </motion.button>
                
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="tel:8778304145"
                  className="w-full bg-gold text-black py-3 rounded-lg font-medium flex items-center justify-center gap-2 block text-center"
                >
                  <Phone size={20} />
                  Call Now
                </motion.a>
              </div>
              
              {/* Social Media Links */}
              <div className="mt-8">
                <p className="font-medium mb-3">Follow Us</p>
                <div className="flex gap-3">
                  <a href="#" className="bg-gold/20 p-3 rounded-full hover:bg-gold/30 transition-colors">
                    <Instagram className="text-gold" size={20} />
                  </a>
                  <a href="#" className="bg-gold/20 p-3 rounded-full hover:bg-gold/30 transition-colors">
                    <Facebook className="text-gold" size={20} />
                  </a>
                  <a href="#" className="bg-gold/20 p-3 rounded-full hover:bg-gold/30 transition-colors">
                    <Youtube className="text-gold" size={20} />
                  </a>
                </div>
              </div>
              
              {/* Trust Badges */}
              <div className="mt-8 pt-6 border-t border-gray-700">
                <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                  <Clock size={16} />
                  <span>We reply within 24 hours</span>
                </div>
                <p className="text-gold text-sm font-medium">500+ Events Planned Successfully</p>
              </div>
            </div>
          </motion.div>
          
          {/* Right Column - Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:w-3/5"
          >
            <div className="bg-gray-800 rounded-2xl p-6 md:p-8 shadow-lg relative overflow-hidden">
              {/* Decorative Background Element */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-50 pointer-events-none"></div>
              
              <h3 className="text-2xl font-bold mb-6 text-gold relative z-10">Get a Free Quote</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium">Your Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your full name"
                      className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-gold focus:ring-2 focus:ring-gold/20 focus:outline-none"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-gold focus:ring-2 focus:ring-gold/20 focus:outline-none"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block mb-2 text-sm font-medium">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="Enter your phone number"
                      className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-gold focus:ring-2 focus:ring-gold/20 focus:outline-none"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="eventType" className="block mb-2 text-sm font-medium">Event Type *</label>
                    <select
                      id="eventType"
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      required
                      className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-gold focus:ring-2 focus:ring-gold/20 focus:outline-none"
                    >
                      <option value="">Select event type</option>
                      <option value="wedding">Wedding</option>
                      <option value="birthday">Birthday</option>
                      <option value="engagement">Engagement</option>
                      <option value="reception">Reception</option>
                      <option value="corporate">Corporate Event</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="eventDate" className="block mb-2 text-sm font-medium">Event Date (if known)</label>
                  <div className="relative">
                    <input
                      type="date"
                      id="eventDate"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-gold focus:ring-2 focus:ring-gold/20 focus:outline-none"
                    />
                    <Calendar className="absolute right-3 top-3.5 text-gray-400" size={18} />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium">Your Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    placeholder="Tell us about your event requirements..."
                    className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-gold focus:ring-2 focus:ring-gold/20 focus:outline-none"
                  ></textarea>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gold text-black py-3 rounded-lg font-semibold text-lg"
                >
                  Get Free Consultation
                </motion.button>
                
                <p className="text-center text-gray-400 text-sm mt-4">
                  We respect your privacy and will never share your information
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;