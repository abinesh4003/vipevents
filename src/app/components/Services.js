// components/Services.jsx
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
      icon: <Palette size={40} />, 
      title: "Stage Decoration", 
      description: "Transform your venue into a breathtaking setting with our custom-designed stages and luxury floral arrangements.",
      image: "/services/stage.jpg"
    },
    { 
      icon: <Utensils size={40} />, 
      title: "Catering Services", 
      description: "Veg and non-veg wedding catering with authentic taste, freshness, and impeccable presentation.",
      image: "/services/catering.jpg"
    },
    { 
      icon: <Users size={40} />, 
      title: "Wedding Catering & Buffet", 
      description: "Complete catering solutions for weddings with traditional feasts and variety menus.",
      image: "/services/buffet.jpg"
    },
    { 
      icon: <Music size={40} />, 
      title: "DJ Music", 
      description: "Professional DJ services to set the mood and keep your celebration energized.",
      image: "/services/dj.jpg"
    },
    { 
      icon: <Sparkles size={40} />, 
      title: "Welcome Dolls & Girls", 
      description: "Elegant welcome arrangements to greet your guests in style.",
      image: "/services/wellcomedoll.jpg"
    },
    { 
      icon: <Gift size={40} />, 
      title: "Fun Games & Return Gifts", 
      description: "Entertainment activities and thoughtfully curated return gifts for your guests.",
      image: "/services/games.jpg"
    },
    { 
      icon: <Camera size={40} />, 
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-black"
        >
          Our <span className="text-gold">Premium Services</span>
        </motion.h2>
        
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
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:shadow-gold/20 transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4 bg-gold/90 text-white p-2 rounded-full">
                  {service.icon}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-black group-hover:text-gold transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mt-4">
                  <button className="text-gold font-medium hover:underline flex items-center gap-2">
                    Learn more
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
export default Services;