'use client'
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    setMobileMenuOpen(false);
  };

  const navItems = ['home', 'about', 'services', 'gallery', 'testimonials', 'contact'];

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-black/95 py-2 shadow-lg' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex items-center"
          >
            <div className="text-3xl font-bold text-gold relative">
              <span className="absolute -top-2 -left-2 w-4 h-4 bg-gold rounded-full opacity-70 animate-ping"></span>
              V.I.P
            </div>
            <span className="text-white ml-2 text-lg hidden md:block">Function Planners</span>
          </motion.div>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => scrollToSection(item)}
                className="text-white hover:text-gold transition-colors capitalize relative group"
              >
                {item === 'home' ? 'Home' : 
                 item === 'whyus' ? 'Why Us' : item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all group-hover:w-full"></span>
              </motion.button>
            ))}
          </div>
          
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(212, 175, 55, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('contact')}
            className="bg-gradient-to-r from-gold to-gold-dark text-black px-6 py-2.5 rounded-full font-semibold hidden md:block relative overflow-hidden"
          >
            <span className="relative z-10">Plan Your Event</span>
            <motion.span 
              className="absolute inset-0 bg-gradient-to-r from-gold-light to-gold"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>

          {/* Mobile menu button */}
          <motion.button 
            className="md:hidden flex flex-col space-y-1.5 z-50 relative"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle menu"
          >
            <motion.span 
              animate={mobileMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-gold block"
            ></motion.span>
            <motion.span 
              animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-0.5 bg-gold block"
            ></motion.span>
            <motion.span 
              animate={mobileMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-gold block"
            ></motion.span>
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
            className="fixed top-0 left-0 w-full h-screen bg-black/95 z-40 pt-20 md:hidden"
          >
            <div className="container mx-auto px-4 flex flex-col space-y-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  onClick={() => scrollToSection(item)}
                  className="text-2xl font-light text-white hover:text-gold transition-colors capitalize text-left py-2 border-b border-white/10"
                >
                  {item === 'home' ? 'Home' : 
                   item === 'whyus' ? 'Why Us' : item}
                </motion.button>
              ))}
              <motion.button 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-gold to-gold-dark text-black px-8 py-4 rounded-full font-semibold mt-8 text-lg"
              >
                Plan Your Event
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
export default Navigation;