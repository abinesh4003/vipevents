// components/Stalls.jsx
'use client';
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Stalls = () => {
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
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="stalls" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-black"
        >
          Stalls & <span className="text-gold">Fun Options</span>
        </motion.h2>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stalls.map((stall, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:shadow-gold/20 transition-all duration-500"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={stall.image}
                  alt={stall.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                  <span className="text-white text-lg font-medium">{stall.name}</span>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full text-xl">
                  {stall.icon}
                </div>
              </div>
              
              <div className="p-5">
                <h3 className="font-semibold mb-2 text-black group-hover:text-gold transition-colors duration-300">
                  {stall.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {stall.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-center mt-12 text-gray-700 max-w-3xl mx-auto text-lg"
        >
          From colorful balloon setups to mouth-watering food stalls, we ensure your celebration has the best entertainment and catering in Nagercoil and Kanyakumari, tailored to your style.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-center mt-10"
        >
          <button className="bg-gold text-white px-8 py-3 rounded-full font-medium hover:bg-gold/90 transition-colors duration-300">
            Book Our Stalls
          </button>
        </motion.div>
      </div>
    </section>
  );
};
export default Stalls;