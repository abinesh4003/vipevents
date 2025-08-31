'use client';
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { 
  Camera,
  Music,
  Gift,
  Utensils,
  Palette,
  Users,
  Sparkles,
} from 'lucide-react';

const Services = () => {
  const services = [
    { 
      icon: <Palette size={32} />, 
      title: "Stage Decoration", 
      description: "Transform your venue into a breathtaking setting with our custom-designed stages and luxury floral arrangements.",
      image: "/services/stage.jpg"
    },
    { 
      icon: <Utensils size={32} />, 
      title: "Catering Services", 
      description: "Veg and non-veg wedding catering with authentic taste, freshness, and impeccable presentation.",
      image: "/services/catering.jpg"
    },
    { 
      icon: <Users size={32} />, 
      title: "Wedding Catering & Buffet", 
      description: "Complete catering solutions for weddings with traditional feasts and variety menus.",
      image: "/services/buffet.jpg"
    },
    { 
      icon: <Music size={32} />, 
      title: "DJ Music", 
      description: "Professional DJ services to set the mood and keep your celebration energized.",
      image: "/services/dj.jpg"
    },
    { 
      icon: <Sparkles size={32} />, 
      title: "Welcome Dolls & Girls", 
      description: "Elegant welcome arrangements to greet your guests in style.",
      image: "/services/wellcomedoll.jpg"
    },
    { 
      icon: <Gift size={32} />, 
      title: "Fun Games & Return Gifts", 
      description: "Entertainment activities and thoughtfully curated return gifts for your guests.",
      image: "/services/games.jpg"
    },
    { 
      icon: <Camera size={32} />, 
      title: "Photography & Videography", 
      description: "Cinematic coverage to capture every magical moment of your special day.",
      image: "/services/photo.jpg"
    },
  ];

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
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-5 text-gold/5 text-8xl rotate-12">✦</div>
      <div className="absolute bottom-10 right-5 text-gold/5 text-8xl -rotate-12">✦</div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-black mb-4">
              Our <span className="text-gold">Premium</span> Services
            </h2>
            
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6"
            />
            
            <motion.div
              animate={{ 
                backgroundPosition: ["0% 0%", "200% 0%"],
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute -inset-2 bg-gradient-to-r from-transparent via-gold/30 to-transparent bg-[length:200%_100%] opacity-70 blur-sm"
            />
          </div>
          
          <p className="text-gray-600 text-lg max-w-2xl mx-auto font-light">
            Exquisite event services crafted to perfection for your most special moments
          </p>
        </motion.div>
        
        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              {/* Card with elegant borders and glossy effect */}
              <div className="absolute inset-0.5 border border-gold/10 rounded-2xl pointer-events-none z-20" />
              <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
              
              {/* Image Container */}
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Animated Icon */}
                <motion.div 
                  variants={iconVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover="hover"
                  className="absolute top-5 right-5 bg-gradient-to-br from-gold to-gold-dark text-white p-3 rounded-full shadow-lg z-10"
                >
                  {service.icon}
                </motion.div>
                
                {/* Floating decorative elements */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="absolute -bottom-3 -left-3 w-6 h-6 bg-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
              </div>
              
              {/* Content */}
              <div className="p-6 relative z-10">
                <h3 className="text-xl font-bold mb-3 text-black group-hover:text-gold transition-colors duration-300 font-playfair">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-light mb-5">
                  {service.description}
                </p>
                
                {/* Animated CTA Button */}
                <motion.button 
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-2 text-gold font-medium group/btn"
                >
                  <span className="bg-gradient-to-r from-gold to-gold-dark bg-clip-text text-transparent">
                    Discover Service
                  </span>
                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    className="text-gold"
                  >
                    →
                  </motion.span>
                </motion.button>
              </div>
              
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
        
        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-r from-gold to-gold-dark text-white px-8 py-4 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
          >
            <span className="relative z-10">View All Services</span>
            <div className="absolute inset-0 bg-gradient-to-r from-gold-dark to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
export default Services;