'use client'
import React from "react";
import { useState,useEffect } from "react";
import { motion } from "framer-motion";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-gold"
        >
          V.I.P <span className="text-white">Function Planners</span>
        </motion.div>
        
        <div className="hidden md:flex space-x-8">
          {['home', 'about', 'services', 'stalls', 'whyus', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-white hover:text-gold transition-colors capitalize"
            >
              {item === 'home' ? 'Home' : 
               item === 'whyus' ? 'Why Us' : item}
            </button>
          ))}
        </div>
        
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection('contact')}
          className="bg-gold text-black px-6 py-2 rounded-full font-semibold hidden md:block"
        >
          Plan Your Event
        </motion.button>

        {/* Mobile menu button would go here */}
      </div>
    </nav>
  );
};
export default Navigation;