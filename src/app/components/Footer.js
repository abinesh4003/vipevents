'use client'
import { 
  Instagram, 
  Facebook, 
  Youtube,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ArrowRight
} from 'lucide-react';
import { motion } from 'framer-motion';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    const message = "Hello V.I.P Function Planners! Im interested in your event planning services.";
    const whatsappUrl = `https://wa.me/918778304145?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer className="bg-gray-950 py-12 text-white">
      <div className="container mx-auto px-4">
        {/* CTA Button - Top of Footer */}
        <div className="text-center mb-12">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollToSection('contact')}
            className="bg-gradient-to-r from-gold to-gold-dark text-black px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
          >
            Plan Your Event Today
            <ArrowRight size={20} />
          </motion.button>
        </div>

        {/* Footer Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-gold mb-4">V.I.P Function Planners</h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Creating unforgettable events with precision, creativity, and the distinctive V.I.P touch that sets us apart as Nagercoils premier event planners.
            </p>
            <div className="flex justify-center md:justify-start gap-3">
              <a href="#" className="text-gray-400 hover:text-gold transition-colors p-2 bg-gray-900 rounded-full">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors p-2 bg-gray-900 rounded-full">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors p-2 bg-gray-900 rounded-full">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-gold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['home', 'about', 'services', 'gallery', 'testimonials', 'contact'].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => scrollToSection(item)}
                    className="text-gray-400 hover:text-gold transition-colors capitalize"
                  >
                    {item === 'home' ? 'Home' : 
                     item === 'services' ? 'Services' : item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-gold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Phone className="text-gold" size={18} />
                <a href="tel:8778304145" className="text-gray-400 hover:text-gold transition-colors">
                  +91 8778304145
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <MessageCircle className="text-gold" size={18} />
                <button onClick={openWhatsApp} className="text-gray-400 hover:text-gold transition-colors">
                  WhatsApp Chat
                </button>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Mail className="text-gold" size={18} />
                <a href="mailto:shejinoantony@gmail.com" className="text-gray-400 hover:text-gold transition-colors text-sm">
                  shejinoantony@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <MapPin className="text-gold" size={18} />
                <span className="text-gray-400 text-sm">Nagercoil, Kanyakumari</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} V.I.P Function Planners. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;