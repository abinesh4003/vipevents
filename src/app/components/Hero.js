'use client'
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [particlePositions, setParticlePositions] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Check if mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Generate random positions only on the client
    setParticlePositions(
      Array.from({ length: isMobile ? 8 : 15 }, () => ({
        x: Math.random() * 100 - 50,
        y: Math.random() * 100 - 50
      }))
    );
    
    return () => window.removeEventListener('resize', checkMobile);
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
      {/* Luxury background with video or image */}
      <div className="absolute inset-0 z-0">
        {/* Video background for luxury feel - falls back to image */}
        <div className="absolute inset-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
            poster="/hero.jpg"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
            <source src="/hero-video.webm" type="video/webm" />
          </video>
        </div>
        
        {/* Enhanced overlay for better readability on mobile */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/60 to-black/85 md:from-black/80 md:via-black/50 md:to-black/80"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0)_0%,_rgba(0,0,0,0.8)_100%)] md:bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0)_0%,_rgba(0,0,0,0.7)_100%)]"></div>
        
        {/* Animated particles - only render on client, fewer on mobile */}
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
        <div className="mb-6 md:mb-8 px-2">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gold font-light tracking-widest text-xs md:text-sm mb-4 md:mb-6 uppercase"
          >
            Premium Event Planning
          </motion.div>
          
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight md:leading-normal">
            {headline.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="inline-block mr-2 md:mr-4"
              >
                {word}
              </motion.span>
            ))}
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-2xl text-white mb-4 md:mb-8 max-w-2xl mx-auto font-light px-2"
          >
            Your One-Stop Best Event Management in Nagercoil
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-base md:text-lg text-gold italic mb-8 md:mb-12 font-serif"
          >
            Turning moments into memories, beautifully.
          </motion.p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center px-2">
          <motion.button 
            whileHover={{ 
              scale: 1.03, 
              boxShadow: "0 0 20px rgba(212, 175, 55, 0.6)" 
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('contact')}
            className="bg-gradient-to-r from-gold to-gold-dark text-black px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold text-base md:text-lg relative overflow-hidden group w-full sm:w-auto"
          >
            <span className="relative z-10 flex items-center justify-center">
              Plan Your Event
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
              </svg>
            </span>
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-gold-light to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </motion.button>
          
          <motion.button 
            whileHover={{ 
              scale: 1.03,
              backgroundColor: "rgba(212, 175, 55, 0.1)"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('gallery')}
            className="border-2 border-gold text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold text-base md:text-lg bg-transparent hover:bg-gold/10 transition-all duration-300 flex items-center justify-center w-full sm:w-auto"
          >
            View Our Work
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
            </svg>
          </motion.button>
        </div>
      </div>
      
      {/* Enhanced luxury scroll indicator - smaller on mobile */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 text-white z-10"
      >
        <div className="flex flex-col items-center">
          <span className="text-gold text-xs md:text-sm mb-1 md:mb-2 tracking-widest">EXPLORE</span>
          <div className="relative">
            <motion.div 
              animate={{ height: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut", delay: 0.2 }}
              className="w-px h-6 md:h-8 bg-gold mx-auto"
            />
            <motion.svg 
              animate={{ y: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gold mt-1"
            >
              <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </motion.svg>
          </div>
        </div>
      </motion.div>

      {/* Decorative elements - hidden on mobile to reduce clutter */}
      <motion.div 
        initial={{ opacity: 0, rotate: -45 }}
        animate={{ opacity: 0.3, rotate: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute top-1/4 left-10 text-gold text-6xl opacity-30 hidden lg:block"
      >
        ❖
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, rotate: 45 }}
        animate={{ opacity: 0.3, rotate: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-1/4 right-10 text-gold text-6xl opacity-30 hidden lg:block"
      >
        ❖
      </motion.div>
      
      {/* Quick contact buttons for mobile - positioned better */}
      {isMobile && (
        <div className="fixed bottom-4 right-4 z-20 flex flex-col gap-2">
          <motion.a
            href="https://wa.me/1234567890" // Replace with actual WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.3, type: "spring" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-green-600 text-white p-3 rounded-full shadow-lg"
            aria-label="Contact via WhatsApp"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.864 3.488"/>
            </svg>
          </motion.a>
          
          <motion.a
            href="tel:+1234567890" // Replace with actual phone number
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.5, type: "spring" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-gold text-black p-3 rounded-full shadow-lg"
            aria-label="Call now"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.487 17.14l-4.065-3.696a1.001 1.001 0 00-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 00.043-1.391L6.859 3.513a1 1 0 00-1.391-.087l-3.211 2.861a1 1 0 00-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 00.648-.291l2.861-3.211a.997.997 0 00-.086-1.39z"/>
            </svg>
          </motion.a>
        </div>
      )}
    </section>
  );
};

export default HeroSection;