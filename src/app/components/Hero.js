'use client'
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [particlePositions, setParticlePositions] = useState([]);

  useEffect(() => {
    setIsMounted(true);
    // Generate random positions only on the client
    setParticlePositions(
      Array.from({ length: 15 }, () => ({
        x: Math.random() * 100 - 50,
        y: Math.random() * 100 - 50
      }))
    );
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const headline = "V.I.P Function Planners".split(" ");

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Luxury background with overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed transform scale-105"
          style={{ backgroundImage: "url('/hero.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0)_0%,_rgba(0,0,0,0.6)_100%)]"></div>
        
        {/* Animated particles - only render on client */}
        {isMounted && particlePositions.map((pos, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gold rounded-full"
            initial={{ 
              opacity: 0,
              x: `${pos.x}vw`,
              y: `${pos.y}vh`
            }}
            animate={{ 
              opacity: [0, 0.7, 0],
              scale: [0, 1, 0]
            }}
            transition={{ 
              duration: 3 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="mb-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-gold font-light tracking-widest text-sm md:text-base mb-6 uppercase"
          >
            Premium Event Planning
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            {headline.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="inline-block mr-4"
              >
                {word}
              </motion.span>
            ))}
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto font-light"
          >
            Your One-Stop Best Event Management in Nagercoil
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="text-lg text-gold italic mb-12 font-serif"
          >
            Turning moments into memories, beautifully.
          </motion.p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button 
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 0 30px rgba(212, 175, 55, 0.6)" 
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('contact')}
            className="bg-gradient-to-r from-gold to-gold-dark text-black px-8 py-4 rounded-full font-semibold text-lg relative overflow-hidden group"
          >
            <span className="relative z-10">Plan Your Event</span>
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-gold-light to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('services')}
            className="border-2 border-gold text-white px-8 py-4 rounded-full font-semibold text-lg bg-transparent hover:bg-gold/10 transition-colors"
          >
            Our Services
          </motion.button>
        </div>
      </div>
      
      {/* Luxury scroll indicator */}
      <motion.div 
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white z-10"
      >
        <div className="flex flex-col items-center">
          <span className="text-gold text-sm mb-2 tracking-widest">SCROLL</span>
          <div className="relative">
            <motion.div 
              animate={{ height: [0, 20, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.2 }}
              className="w-px h-8 bg-gold mx-auto"
            />
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" className="text-gold">
              <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </motion.div>

      {/* Decorative elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute top-1/4 left-10 text-gold text-6xl opacity-30 hidden lg:block"
      >
        ❖
      </motion.div>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-1/4 right-10 text-gold text-6xl opacity-30 hidden lg:block"
      >
        ❖
      </motion.div>
    </section>
  );
};

export default HeroSection;