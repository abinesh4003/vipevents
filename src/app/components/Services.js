'use client';
import React, { useState } from "react";
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
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const Services = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [expandedService, setExpandedService] = useState(null);

  // Group services into categories
  const serviceCategories = [
    {
      id: "styling",
      name: "🎨 Event Styling",
      description: "Transform your venue with our exquisite design expertise"
    },
    {
      id: "hospitality",
      name: "🍽️ Hospitality",
      description: "Culinary excellence and impeccable guest service"
    },
    {
      id: "entertainment",
      name: "🎶 Entertainment",
      description: "Memorable experiences that keep your guests engaged"
    }
  ];

  const services = [
    { 
      icon: <Palette size={32} />, 
      title: "Stage Decoration", 
      description: "Transform your venue into a breathtaking setting with our custom-designed stages and luxury floral arrangements.",
      detailedDescription: "Our expert designers create stunning backdrops, elegant mandaps, and thematic decorations that reflect your personality. We specialize in floral arrangements, lighting design, and custom props to make your event visually spectacular.",
      category: "styling",
      image: "/services/stage.jpg",
      highlights: ["Custom Thematic Designs", "Premium Floral Arrangements", "Elegant Backdrops", "Lighting Design"]
    },
    { 
      icon: <Utensils size={32} />, 
      title: "Catering Services", 
      description: "Veg and non-veg wedding catering with authentic taste, freshness, and impeccable presentation.",
      detailedDescription: "Our culinary team prepares exquisite menus with the freshest ingredients. We offer live counters, international cuisines, and traditional specialties with attention to dietary preferences and presentation.",
      category: "hospitality",
      image: "/services/catering.jpg",
      highlights: ["Veg & Non-Veg Options", "100+ Dish Selection", "Live Counters", "International Cuisines"]
    },
    { 
      icon: <Users size={32} />, 
      title: "Wedding Catering & Buffet", 
      description: "Complete catering solutions for weddings with traditional feasts and variety menus.",
      detailedDescription: "From elaborate wedding feasts to sophisticated buffet setups, we manage everything with precision. Our services include menu planning, food stations, serving staff, and cleanup.",
      category: "hospitality",
      image: "/services/buffet.jpg",
      highlights: ["Traditional Wedding Feasts", "Multiple Cuisine Options", "Professional Serving Staff", "Hygienic Food Handling"]
    },
    { 
      icon: <Music size={32} />, 
      title: "DJ Music", 
      description: "Professional DJ services to set the mood and keep your celebration energized.",
      detailedDescription: "Our experienced DJs curate playlists that match your event's vibe. We provide high-quality sound systems, lighting effects, and MC services to keep the energy high throughout your celebration.",
      category: "entertainment",
      image: "/services/dj.jpg",
      highlights: ["Curated Playlists", "High-Quality Sound Systems", "Lighting Effects", "MC Services"]
    },
    { 
      icon: <Sparkles size={32} />, 
      title: "Welcome Dolls & Girls", 
      description: "Elegant welcome arrangements to greet your guests in style.",
      detailedDescription: "Make a grand first impression with our traditional welcome services. We provide professionally trained staff in traditional attire, flower garlands, and ceremonial welcome items.",
      category: "hospitality",
      image: "/services/wellcomedoll.jpg",
      highlights: ["Traditional Attire", "Floral Arrangements", "Professional Staff", "Custom Welcome Rituals"]
    },
    { 
      icon: <Gift size={32} />, 
      title: "Fun Games & Return Gifts", 
      description: "Entertainment activities and thoughtfully curated return gifts for your guests.",
      detailedDescription: "We organize engaging games and activities suitable for all age groups. Our return gift selection includes customized options that your guests will cherish as mementos of your special day.",
      category: "entertainment",
      image: "/services/games.jpg",
      highlights: ["Age-Appropriate Activities", "Customized Return Gifts", "Professional Hosts", "Prizes & Awards"]
    },
    { 
      icon: <Camera size={32} />, 
      title: "Photography & Videography", 
      description: "Cinematic coverage to capture every magical moment of your special day.",
      detailedDescription: "Our professional photographers and videographers use state-of-the-art equipment to capture your event from every angle. We offer pre-wedding shoots, candid coverage, and beautifully edited albums and films.",
      category: "entertainment",
      image: "/services/photo.jpg",
      highlights: ["Pre-Wedding Shoots", "Candid Coverage", "Drone Photography", "Custom Albums & Films"]
    },
  ];

  const filteredServices = activeCategory === "all" 
    ? services 
    : services.filter(service => service.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  const toggleServiceExpand = (index) => {
    setExpandedService(expandedService === index ? null : index);
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-5 left-2 md:top-10 md:left-5 text-gold/5 text-5xl md:text-8xl rotate-12">✦</div>
      <div className="absolute bottom-5 right-2 md:bottom-10 md:right-5 text-gold/5 text-5xl md:text-8xl -rotate-12">✦</div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-3 md:mb-4">
            Our <span className="text-gold">Premium</span> Services
          </h2>
          
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-4 md:mb-6 max-w-md"
          />
          
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto font-light px-2">
            Exquisite event services crafted to perfection for your most special moments
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-10 md:mb-12 px-2"
        >
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded-full text-sm md:text-base transition-all duration-300 ${
              activeCategory === "all" 
                ? "bg-gold text-white shadow-md" 
                : "bg-white text-gray-700 border border-gold/30 hover:bg-gold/5"
            }`}
          >
            All Services
          </button>
          
          {serviceCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm md:text-base transition-all duration-300 ${
                activeCategory === category.id 
                  ? "bg-gold text-white shadow-md" 
                  : "bg-white text-gray-700 border border-gold/30 hover:bg-gold/5"
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>
        
        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
        >
          {filteredServices.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100"
            >
              {/* Image Container */}
              <div className="relative h-48 md:h-60 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  {serviceCategories.find(cat => cat.id === service.category)?.name}
                </div>
                
                {/* Service Icon */}
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="absolute top-3 right-3 bg-gradient-to-br from-gold to-gold-dark text-white p-2 md:p-3 rounded-full shadow-lg"
                >
                  {service.icon}
                </motion.div>
                
                {/* Service Title */}
                <h3 className="absolute bottom-3 left-3 text-white font-bold text-lg md:text-xl">
                  {service.title}
                </h3>
              </div>
              
              {/* Content */}
              <div className="p-4 md:p-5">
                <p className="text-gray-600 text-sm md:text-base mb-3 md:mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Service Highlights */}
                <div className="mb-4">
                  <h4 className="text-black font-semibold text-sm md:text-base mb-2">Service Includes:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {service.highlights.slice(0, 4).map((highlight, i) => (
                      <div key={i} className="flex items-start">
                        <span className="text-gold mr-1 text-xs">✓</span>
                        <span className="text-gray-700 text-xs">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Expand/Collapse Button */}
                <button 
                  onClick={() => toggleServiceExpand(index)}
                  className="flex items-center text-gold font-medium text-sm md:text-base w-full justify-between py-2"
                >
                  <span>{expandedService === index ? "Show Less" : "Learn More"}</span>
                  {expandedService === index ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>
                
                {/* Expanded Content */}
                {expandedService === index && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-3 pt-3 border-t border-gold/20"
                  >
                    <p className="text-gray-600 text-sm mb-3">{service.detailedDescription}</p>
                    <button className="bg-gold text-white text-sm px-4 py-2 rounded-full font-medium hover:bg-gold-dark transition-colors">
                      Inquire About This Service
                    </button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12 md:mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-gold to-gold-dark text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Plan Your Event With Us
          </motion.button>
          
          <p className="text-gray-600 text-sm md:text-base mt-4">
            Custom packages available for all event sizes and requirements
          </p>
        </motion.div>
      </div>
    </section>
  );
};
export default Services;