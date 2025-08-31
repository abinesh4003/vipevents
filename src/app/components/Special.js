'use client';
import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const SpecialHighlightsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const highlights = [
    {
      title: "Stunning Stage Decoration in Nagercoil",
      description: "Our stage décor in Nagercoil service transforms your venue into a breathtaking setting. Whether it's birthday theme décor, elegant wedding décor, luxury floral arrangements, or custom-designed stages, we deliver perfection every time.",
      images: [
        "/images/stage-highlight.jpg",
        "/images/stage-highlight-2.jpg",
        "/images/stage-highlight-3.jpg"
      ],
      alignment: "left"
    },
    {
      title: "Best Catering Services in Nagercoil",
      description: "Food is the heart of every celebration, and we bring flavors your guests will never forget. Our catering services in Nagercoil include veg and non-veg wedding catering, buffet catering, and special menus with authentic taste, freshness, and presentation.",
      images: [
        "/images/catering-highlight.jpg",
        "/images/catering-highlight-2.jpg",
        "/images/catering-highlight-3.jpg"
      ],
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
      images: [
        "/images/entertainment-highlight.jpg",
        "/images/entertainment-highlight-2.jpg",
        "/images/entertainment-highlight-3.jpg"
      ],
      alignment: "left"
    },
    {
      title: "Capture the Magic – Photography & Videography",
      description: "Relive your special day with our cinematic photography and videography. From candid emotions to stunning highlights, we capture every magical moment in style.",
      images: [
        "/images/photography-highlight.jpg",
        "/images/photography-highlight-2.jpg",
        "/images/photography-highlight-3.jpg"
      ],
      alignment: "right"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  return (
    <section ref={ref} className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 text-gold/5 text-8xl">✦</div>
      <div className="absolute bottom-20 right-10 text-gold/5 text-8xl">✦</div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-playfair font-bold text-black mb-6">
            Special <span className="text-gold">Highlights</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold to-gold-dark mx-auto mb-6" />
          <p className="text-gray-600 text-lg max-w-2xl mx-auto font-light">
            Discover our premium services that make every event extraordinary
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-20 md:space-y-32"
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`flex flex-col ${highlight.alignment === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 md:gap-12 items-center`}
            >
              {/* Image Carousel Section */}
              <div className="w-full lg:w-1/2 relative group">
                <motion.div
                  variants={imageVariants}
                  className="rounded-2xl md:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl relative"
                >
                  <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    navigation={!isMobile} // Disable navigation on mobile
                    pagination={{ 
                      clickable: true,
                      dynamicBullets: true
                    }}
                    autoplay={{ 
                      delay: 4000, 
                      disableOnInteraction: false 
                    }}
                    loop={true}
                    slidesPerView={1}
                    className="luxury-swiper w-full"
                  >
                    {highlight.images.map((image, idx) => (
                      <SwiperSlide key={idx}>
                        <div className="relative h-64 sm:h-80 md:h-[500px] w-full">
                          <Image
                            src={image}
                            alt={`${highlight.title} ${idx + 1}`}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            priority={idx === 0}
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  
                  {/* Gold decorative border */}
                  <div className="absolute inset-0 rounded-2xl md:rounded-3xl border-2 border-gold/20 pointer-events-none" />
                </motion.div>
                
                {/* Floating decorative elements */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.3 + 0.5 }}
                  className="absolute -top-2 -left-2 w-5 h-5 md:-top-3 md:-left-3 md:w-6 md:h-6 bg-gold rounded-full shadow-lg"
                />
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.3 + 0.7 }}
                  className="absolute -bottom-2 -right-2 w-4 h-4 md:-bottom-3 md:-right-3 md:w-4 md:h-4 bg-black rounded-full shadow-lg"
                />
              </div>
              
              {/* Content Section */}
              <div className="w-full lg:w-1/2">
                <div className="relative">
                  <motion.h3 
                    initial={{ opacity: 0, x: highlight.alignment === 'right' ? -30 : 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.7, delay: index * 0.2 + 0.3 }}
                    className="text-xl md:text-3xl font-playfair font-bold mb-4 md:mb-6 text-black"
                  >
                    {highlight.title.includes("Stage Decoration") ? (
                      <>Stunning <span className="text-gold">Stage Decoration</span> in Nagercoil</>
                    ) : highlight.title.includes("Catering Services") ? (
                      <>Best <span className="text-gold">Catering Services</span> in Nagercoil</>
                    ) : highlight.title.includes("Entertainment") ? (
                      <>Entertainment & <span className="text-gold">Special Arrivals</span></>
                    ) : (
                      <>Capture the Magic – <span className="text-gold">Photography & Videography</span></>
                    )}
                  </motion.h3>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: index * 0.2 + 0.4 }}
                    className="w-16 h-0.5 bg-gradient-to-r from-gold to-gold-dark mb-4 md:mb-6"
                  />
                  
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: index * 0.2 + 0.5 }}
                    className="text-gray-700 mb-6 md:mb-8 leading-relaxed font-light text-sm md:text-base"
                  >
                    {highlight.description}
                  </motion.p>
                  
                  {/* Catering specific content */}
                  {highlight.subItems && (
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.7, delay: index * 0.2 + 0.6 }}
                      className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-6 md:mt-8"
                    >
                      {highlight.subItems.map((item, idx) => (
                        <div 
                          key={idx}
                          className="bg-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-md md:shadow-lg border border-gold/10 hover:shadow-xl transition-all duration-500 group/item"
                        >
                          <h4 className="text-base md:text-lg font-semibold mb-2 md:mb-3 text-black group-hover/item:text-gold transition-colors duration-300">
                            {item.title}
                          </h4>
                          <p className="text-gray-700 mb-3 md:mb-4 text-xs md:text-sm font-light">{item.description}</p>
                          <ul className="space-y-1 md:space-y-2">
                            {item.items.map((listItem, i) => (
                              <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-gray-700">
                                <span className="text-gold mt-0.5 md:mt-1 text-xs">●</span>
                                <span className="font-light">{listItem}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </motion.div>
                  )}
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: index * 0.2 + 0.8 }}
                    className="mt-6 md:mt-10"
                  >
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-gold to-gold-dark text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group text-sm md:text-base"
                    >
                      <span className="relative z-10">Learn More</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-gold-dark to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style jsx global>{`
        .luxury-swiper {
          border-radius: 1rem;
        }
        @media (min-width: 768px) {
          .luxury-swiper {
            border-radius: 1.5rem;
          }
        }
        .luxury-swiper .swiper-button-next,
        .luxury-swiper .swiper-button-prev {
          color: #d4af37;
          background: rgba(255, 255, 255, 0.9);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
          transition: all 0.3s ease;
        }
        @media (min-width: 768px) {
          .luxury-swiper .swiper-button-next,
          .luxury-swiper .swiper-button-prev {
            width: 50px;
            height: 50px;
          }
        }
        .luxury-swiper .swiper-button-next:after,
        .luxury-swiper .swiper-button-prev:after {
          font-size: 16px;
          font-weight: bold;
        }
        @media (min-width: 768px) {
          .luxury-swiper .swiper-button-next:after,
          .luxury-swiper .swiper-button-prev:after {
            font-size: 20px;
          }
        }
        .luxury-swiper .swiper-button-next:hover,
        .luxury-swiper .swiper-button-prev:hover {
          background: #d4af37;
          color: white;
        }
        .luxury-swiper .swiper-pagination-bullet {
          background: white;
          opacity: 0.6;
          width: 8px;
          height: 8px;
        }
        .luxury-swiper .swiper-pagination-bullet-active {
          background: #d4af37;
          opacity: 1;
          width: 20px;
          border-radius: 8px;
        }
        @media (min-width: 768px) {
          .luxury-swiper .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
          }
          .luxury-swiper .swiper-pagination-bullet-active {
            width: 30px;
            border-radius: 10px;
          }
        }
      `}</style>
    </section>
  );
};

export default SpecialHighlightsSection;