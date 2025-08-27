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
} from 'lucide-react';


const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Contact Us <span className="text-gold">Today</span>
        </motion.h2>
        
        <div className="flex flex-col md:flex-row gap-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2"
          >
            <p className="mb-8 text-xl">
              Let's make your next event the talk of the town! Whether it's a wedding, birthday, engagement, or reception, trust V.I.P Function Planners – the best in Nagercoil – to create a celebration you'll never forget.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-gold/20 p-3 rounded-full">
                  <Phone className="text-gold" size={24} />
                </div>
                <a href="tel:8778304145" className="text-xl hover:text-gold transition-colors">
                  +91 8778304145
                </a>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-gold/20 p-3 rounded-full">
                  <Mail className="text-gold" size={24} />
                </div>
                <a href="mailto:info@vipfunctionplanners.com" className="text-xl hover:text-gold transition-colors">
                  info@vipfunctionplanners.com
                </a>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-gold/20 p-3 rounded-full">
                  <MapPin className="text-gold" size={24} />
                </div>
                <span className="text-xl">Nagercoil, Kanyakumari District</span>
              </div>
            </div>
            
            <div className="mt-10 flex gap-4">
              <a href="#" className="bg-gold/20 p-3 rounded-full hover:bg-gold/30 transition-colors">
                <Instagram className="text-gold" size={24} />
              </a>
              <a href="#" className="bg-gold/20 p-3 rounded-full hover:bg-gold/30 transition-colors">
                <Facebook className="text-gold" size={24} />
              </a>
              <a href="#" className="bg-gold/20 p-3 rounded-full hover:bg-gold/30 transition-colors">
                <Youtube className="text-gold" size={24} />
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/2"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-gold focus:outline-none"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-gold focus:outline-none"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block mb-2">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-gold focus:outline-none"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-gold focus:outline-none"
                ></textarea>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-gold text-black py-3 rounded font-semibold"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;