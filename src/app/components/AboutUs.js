'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

const AboutUs = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  // Image gallery for visual storytelling
  const imageGallery = [
    "/about.jpg",
    "/about-2.jpg",
    "/about-3.jpg"
  ];

  // Why choose us points
  const whyChooseUs = [
    {
      icon: "🌟",
      title: "12+ Years Experience",
      description: "Over a decade of creating unforgettable events"
    },
    {
      icon: "🎉",
      title: "500+ Events",
      description: "Successful weddings and celebrations"
    },
    {
      icon: "🥂",
      title: "Luxury Décor Experts",
      description: "Premium stage designs and exquisite catering"
    },
    {
      icon: "❤️",
      title: "100% Satisfaction",
      description: "Dedicated to making your celebration perfect"
    }
  ];

  // Testimonials
  const testimonials = [
    {
      quote: "They transformed our wedding into a fairy tale. Every detail was perfect!",
      author: "Priya & Karthik, Chennai",
      event: "Wedding Celebration"
    },
    {
      quote: "Professional, creative, and absolutely reliable. Our corporate event was a huge success!",
      author: "Rajesh Kumar, Coimbatore",
      event: "Corporate Event"
    }
  ];

  return (
    <section id="about" className="py-12 md:py-20 bg-white relative overflow-hidden">
      {/* Background decorative elements - smaller for mobile */}
      <div className="absolute top-0 left-0 w-48 h-48 md:w-72 md:h-72 bg-gold/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-black/5 rounded-full translate-x-1/3 translate-y-1/3" />
      
      {/* Gold flourishes - smaller for mobile */}
      <div className="absolute top-10 left-2 text-gold text-4xl md:text-7xl opacity-10 rotate-12">
        ✦
      </div>
      <div className="absolute bottom-10 right-2 text-gold text-4xl md:text-7xl opacity-10 -rotate-12">
        ✦
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="text-center mb-12 md:mb-16"
        >
          <div className="relative inline-block">
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-4 md:mb-6">
              <span className="text-gold">About</span> V.I.P
            </h2>
            <p className="text-xl md:text-2xl italic font-light text-gold-dark mb-4">
              Function Planners
            </p>
            
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto max-w-xs"
            />
          </div>
          
          <motion.p
            variants={itemVariants}
            className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto mt-4 font-light"
          >
            Crafting unforgettable experiences with precision and elegance
          </motion.p>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-16">
          {/* Visual Content - Top on mobile, left on desktop */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={imageVariants}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-2xl group">
              {/* Main image */}
              <div className="w-full h-64 md:h-96 relative">
                <Image 
                  src={imageGallery[activeImage]} 
                  alt="Luxury event planning by V.I.P Function Planners" 
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-1000" 
                  priority
                />
              </div>
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-gold/5 z-10" />
              
              {/* Image navigation */}
              <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                {imageGallery.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                      index === activeImage ? 'bg-gold scale-125' : 'bg-white/70'
                    }`}
                    aria-label={`View image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            
            {/* Thumbnail gallery - hidden on mobile to save space */}
            <div className="hidden md:flex mt-4 space-x-3 justify-center">
              {imageGallery.map((img, index) => (
                <div 
                  key={index}
                  className={`relative w-16 h-16 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${
                    index === activeImage ? 'ring-2 ring-gold scale-110' : 'opacity-70'
                  }`}
                  onClick={() => setActiveImage(index)}
                >
                  <Image 
                    src={img} 
                    alt={`Event image ${index + 1}`} 
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            
            {/* Experience badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 bg-black text-gold px-4 py-2 md:px-5 md:py-2.5 rounded-lg md:rounded-xl shadow-lg z-30 border border-gold/20"
            >
              <span className="text-xs md:text-sm font-semibold tracking-widest">SINCE 2010</span>
            </motion.div>
          </motion.div>
          
          {/* Text Content - Bottom on mobile, right on desktop */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
            className="w-full lg:w-1/2"
          >
            <div className="space-y-4 md:space-y-6">
              <motion.p 
                variants={itemVariants}
                className="text-gray-700 text-base md:text-lg leading-relaxed"
              >
                At <span className="text-gold font-medium">V.I.P Function Planners</span>, we dont just organize events — we craft memories. From your first consultation to the final guest departure, our mission is to make your celebration stress-free, elegant, and unforgettable.
              </motion.p>
              
              <motion.p 
                variants={itemVariants}
                className="text-gray-700 text-base md:text-lg leading-relaxed"
              >
                Our philosophy is built on meticulous attention to detail, creative excellence, and unwavering dedication to making each celebration uniquely memorable.
              </motion.p>
              
              <motion.p 
                variants={itemVariants}
                className="text-gray-700 text-base md:text-lg leading-relaxed"
              >
                Whether an intimate gathering or a grand wedding, we infuse each event with luxury, elegance, and that distinctive V.I.P touch.
              </motion.p>
            </div>
            
            {/* Why Choose Us Section */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="mt-8 md:mt-10"
            >
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-4 md:mb-6">
                Why Choose <span className="text-gold">V.I.P</span>
              </h3>
              
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {whyChooseUs.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-white p-3 md:p-4 rounded-lg border border-gold/10 shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex flex-col items-center text-center">
                      <span className="text-2xl md:text-3xl mb-2">{item.icon}</span>
                      <h4 className="font-semibold text-black text-sm md:text-base mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-xs md:text-sm">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Stats section - simplified for mobile */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="grid grid-cols-3 gap-3 md:gap-4 mt-8"
            >
              {[
                { number: "500+", label: "Events" },
                { number: "12+", label: "Years" },
                { number: "100%", label: "Satisfaction" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center p-3 md:p-4 bg-white rounded-lg shadow border border-gold/10"
                >
                  <div className="text-xl md:text-2xl font-bold text-gold mb-1">{stat.number}</div>
                  <div className="text-gray-600 text-xs md:text-sm font-medium uppercase">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Testimonial Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 p-4 md:p-6 bg-gradient-to-r from-gold/5 to-gold/10 rounded-xl border-l-4 border-gold relative overflow-hidden"
            >
              <div className="absolute -top-3 -right-3 text-4xl md:text-5xl text-gold/10">&quot;</div>
              <div className="text-gold-dark text-lg md:text-xl italic mb-2 relative z-10">
                &quot;They transformed our wedding into a fairy tale. Every detail was perfect!&quot;
              </div>
              <div className="text-black font-semibold text-sm md:text-base">— Priya & Karthik, Chennai</div>
              <div className="text-gray-600 text-xs md:text-sm">Wedding Celebration</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Additional Testimonials Carousel for Mobile */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16"
        >
          <h3 className="text-xl md:text-2xl font-semibold text-black mb-6 text-center">
            Happy <span className="text-gold">Clients</span>
          </h3>
          
          <div className="overflow-x-auto pb-2 hide-scrollbar">
            <div className="flex space-x-4 min-w-max px-2">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-64 bg-white p-4 rounded-xl shadow border border-gold/10">
                  <div className="text-gold text-2xl mb-1">&quot;</div>
                  <p className="text-gray-700 text-sm italic mb-3 leading-tight">{testimonial.quote}</p>
                  <div className="text-black font-semibold text-sm">{testimonial.author}</div>
                  <div className="text-gold text-xs">{testimonial.event}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default AboutUs;