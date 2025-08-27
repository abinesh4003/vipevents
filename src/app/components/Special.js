// components/SpecialHighlightsSection.jsx
'use client';
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const SpecialHighlightsSection = () => {
  const highlights = [
    {
      title: "Stunning Stage Decoration in Nagercoil",
      description: "Our stage décor in Nagercoil service transforms your venue into a breathtaking setting. Whether it's birthday theme décor, elegant wedding décor, luxury floral arrangements, or custom-designed stages, we deliver perfection every time.",
      image: "/images/stage-highlight.jpg",
      alignment: "left"
    },
    {
      title: "Best Catering Services in Nagercoil",
      description: "Food is the heart of every celebration, and we bring flavors your guests will never forget. Our catering services in Nagercoil include veg and non-veg wedding catering, buffet catering, and special menus with authentic taste, freshness, and presentation.",
      image: "/images/catering-highlight.jpg",
      alignment: "right",
      subItems: [
        {
          title: "Veg Catering",
          description: "Traditional feasts with 11 kootu, 5 curry, and 3 payasam, plus variety rice, sweets, and snacks.",
          items: [
            "Traditional feasts with 11 kootu",
            "5 curry varieties",
            "3 types of payasam",
            "Variety rice options",
            "Sweets and snacks"
          ]
        },
        {
          title: "Non-Veg Catering",
          description: "Delicious biryanis, chicken & mutton curries, seafood specialties, grills, and festive starters.",
          items: [
            "Flavorful biryanis",
            "Chicken & mutton curries",
            "Seafood specialties",
            "Grills and barbecues",
            "Festive starters"
          ]
        }
      ]
    },
    {
      title: "Entertainment & Special Arrivals",
      description: "Set the mood with our professional DJ music in Nagercoil, live games, and entertainment that keeps the crowd energized. Make a grand statement with our couple entry concepts like snow fog, fire shot, floral pathway, or royal-themed arrivals.",
      image: "/images/entertainment-highlight.jpg",
      alignment: "left"
    },
    {
      title: "Capture the Magic – Photography & Videography",
      description: "Relive your special day with our cinematic photography and videography. From candid emotions to stunning highlights, we capture every magical moment in style.",
      image: "/images/photography-highlight.jpg",
      alignment: "right"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-black"
        >
          Special <span className="text-gold">Highlights</span>
        </motion.h2>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-28"
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`flex flex-col ${highlight.alignment === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} gap-10 items-center`}
            >
              {/* Image Section */}
              <div className="md:w-1/2 relative group">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={highlight.image}
                    alt={highlight.title}
                    width={600}
                    height={400}
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute -inset-4 bg-gold/20 rounded-2xl -z-10 group-hover:bg-gold/30 transition-all duration-500"></div>
              </div>
              
              {/* Content Section */}
              <div className="md:w-1/2">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-black">
                  {highlight.title.includes("Stage Decoration") ? (
                    <>Stunning <span className="text-gold">Stage Decoration</span> in Nagercoil</>
                  ) : highlight.title.includes("Catering Services") ? (
                    <>Best <span className="text-gold">Catering Services</span> in Nagercoil</>
                  ) : highlight.title.includes("Entertainment") ? (
                    <>Entertainment & <span className="text-gold">Special Arrivals</span></>
                  ) : (
                    <>Capture the Magic – <span className="text-gold">Photography & Videography</span></>
                  )}
                </h3>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {highlight.description}
                </p>
                
                {/* Catering specific content */}
                {highlight.subItems && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    {highlight.subItems.map((item, idx) => (
                      <motion.div 
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="bg-gold/5 p-6 rounded-xl border border-gold/20"
                      >
                        <h4 className="text-lg font-semibold mb-3 text-black">{item.title}</h4>
                        <p className="text-gray-700 mb-4 text-sm">{item.description}</p>
                        <ul className="space-y-2">
                          {item.items.map((listItem, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                              <span className="text-gold mt-1">•</span>
                              {listItem}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                )}
                
                <button className="mt-6 bg-gold text-white px-6 py-3 rounded-full font-medium hover:bg-gold/90 transition-colors duration-300">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
export default SpecialHighlightsSection;