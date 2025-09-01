'use client';
import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const Stalls = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const stalls = [
    { 
      name: "Popcorn Stall", 
      description: "Fresh, buttery, and crowd-favorite",
      image: "/images/popcorn-stall.jpg",
      color: "bg-yellow-50",
      icon: "🍿"
    },
    { 
      name: "Cotton Candy Stall", 
      description: "Sweet, fluffy clouds of joy",
      image: "/images/cotton-candy-stall.jpg",
      color: "bg-pink-50",
      icon: "🍭"
    },
    { 
      name: "Chocolate Fountain", 
      description: "Dipping fruits and treats in smooth chocolate",
      image: "/images/chocolate-fountain.jpg",
      color: "bg-amber-50",
      icon: "🍫"
    },
    { 
      name: "Ice Cream Stall", 
      description: "Chilled treats in multiple flavors",
      image: "/images/ice-cream-stall.jpg",
      color: "bg-blue-50",
      icon: "🍦"
    },
    { 
      name: "Pani Puri & Chaat Stall", 
      description: "Spicy, tangy, and made fresh on spot",
      image: "/images/pani-puri-stall.jpg",
      color: "bg-green-50",
      icon: "🥙"
    },
    { 
      name: "Wine Counter", 
      description: "Adding elegance to your event",
      image: "/images/wine-counter.jpg",
      color: "bg-red-50",
      icon: "🍷"
    },
    { 
      name: "Welcome Drinks & Mocktails", 
      description: "Cool refreshments for guests",
      image: "/images/mocktails.jpg",
      color: "bg-cyan-50",
      icon: "🥂"
    },
    { 
      name: "Printed Balloons", 
      description: "Customized balloons with names, photos, or messages",
      image: "/images/printed-balloons.jpg",
      color: "bg-purple-50",
      icon: "🎈"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // For mobile touch scrolling
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Minimum swipe distance
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      setCurrentIndex(prev => Math.min(prev + 1, stalls.length - 1));
    } else if (isRightSwipe) {
      setCurrentIndex(prev => Math.max(prev - 1, 0));
    }
  };

  return (
    <section ref={ref} id="stalls" className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative elements - smaller for mobile */}
      <div className="absolute top-10 left-2 md:top-20 md:left-5 text-gold/5 text-4xl md:text-8xl">✦</div>
      <div className="absolute bottom-10 right-2 md:bottom-20 md:right-5 text-gold/5 text-4xl md:text-8xl">✦</div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-3 md:mb-4">
            Stalls & <span className="text-gold">Fun Options</span>
          </h2>
          <div className="w-16 md:w-24 h-0.5 bg-gradient-to-r from-gold to-gold-dark mx-auto mb-4 md:mb-6" />
          <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto font-light px-2">
            From colorful balloon setups to mouth-watering food stalls, we ensure your celebration has the best entertainment and catering in Nagercoil and Kanyakumari.
          </p>
        </motion.div>

        {/* Stalls Grid for Desktop, Carousel for Mobile */}
        {!isMobile ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6"
          >
            {stalls.map((stall, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative"
              >
                {/* Card with elegant borders */}
                <div className="absolute inset-0.5 border border-gold/10 rounded-2xl md:rounded-3xl pointer-events-none z-20" />
                
                {/* Image Container */}
                <div className="relative h-40 md:h-48 overflow-hidden">
                  <Image
                    src={stall.image}
                    alt={stall.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white text-base md:text-lg font-medium">{stall.name}</span>
                  </div>
                  
                  {/* Icon Badge */}
                  <div className="absolute top-3 right-3 bg-white/90 p-2 md:p-3 rounded-full text-lg md:text-xl shadow-lg backdrop-blur-sm">
                    {stall.icon}
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-4 md:p-5">
                  <h3 className="font-semibold mb-2 text-black text-base md:text-lg group-hover:text-gold transition-colors duration-300">
                    {stall.name}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base font-light leading-relaxed">
                    {stall.description}
                  </p>
                  
                  {/* Decorative divider */}
                  <div className="w-10 h-0.5 bg-gradient-to-r from-gold to-gold-dark my-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <button className="text-gold text-sm font-medium hover:underline flex items-center gap-1 group/btn">
                    <span>Explore</span>
                    <span className="transform group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          /* Mobile Carousel */
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative overflow-hidden"
          >
            <div 
              className="flex transition-transform duration-300 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              {stalls.map((stall, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex-shrink-0 w-full px-2"
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 relative">
                    {/* Image Container */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={stall.image}
                        alt={stall.name}
                        fill
                        className="object-cover"
                      />
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                        <span className="text-white text-lg font-medium">{stall.name}</span>
                      </div>
                      
                      {/* Icon Badge */}
                      <div className="absolute top-3 right-3 bg-white/90 p-3 rounded-full text-xl shadow-lg backdrop-blur-sm">
                        {stall.icon}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-4">
                      <h3 className="font-semibold mb-2 text-black text-lg">
                        {stall.name}
                      </h3>
                      <p className="text-gray-600 text-base font-light leading-relaxed">
                        {stall.description}
                      </p>
                      
                      <button className="text-gold text-sm font-medium mt-3 hover:underline flex items-center gap-1">
                        <span>Explore Stall</span>
                        <span>→</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Mobile pagination dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {stalls.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-gold scale-125' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to stall ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        )}

        {/* CTA Button */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10 md:mt-14"
        >
          <motion.button
            whileHover={{ scale: isMobile ? 1 : 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-gradient-to-r from-gold to-gold-dark text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 text-base md:text-lg"
          >
            Book Our Stalls
          </motion.button>
          
          <p className="text-gray-600 text-sm md:text-base mt-3 md:mt-4">
            Add these fun options to make your event unforgettable
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Stalls;