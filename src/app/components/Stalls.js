'use client';
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Stalls = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <section ref={ref} id="stalls" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-5 text-gold/5 text-8xl">✦</div>
      <div className="absolute bottom-20 right-5 text-gold/5 text-8xl">✦</div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-black mb-4">
            Stalls & <span className="text-gold">Fun Options</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold to-gold-dark mx-auto mb-6" />
          <p className="text-gray-600 text-lg max-w-3xl mx-auto font-light">
            From colorful balloon setups to mouth-watering food stalls, we ensure your celebration has the best entertainment and catering in Nagercoil and Kanyakumari.
          </p>
        </motion.div>

        {/* Stalls Carousel */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            pagination={{ 
              clickable: true,
              el: '.swiper-pagination',
              renderBullet: (index, className) => {
                return `<span class="${className} bg-gold/30"></span>`;
              }
            }}
            autoplay={{ 
              delay: 4000, 
              disableOnInteraction: false 
            }}
            loop={true}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 25
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 30
              }
            }}
            className="luxury-stalls-swiper pb-16"
          >
            {stalls.map((stall, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 relative"
                >
                  {/* Card with elegant borders */}
                  <div className="absolute inset-0.5 border border-gold/10 rounded-3xl pointer-events-none z-20" />
                  
                  {/* Image Container */}
                  <div className="relative h-60 overflow-hidden">
                    <Image
                      src={stall.image}
                      alt={stall.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5">
                      <span className="text-white text-lg font-medium">{stall.name}</span>
                    </div>
                    
                    {/* Icon Badge */}
                    <div className="absolute top-4 right-4 bg-white/90 p-3 rounded-full text-xl shadow-lg backdrop-blur-sm">
                      {stall.icon}
                    </div>
                    
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-semibold mb-3 text-black group-hover:text-gold transition-colors duration-300 text-lg">
                      {stall.name}
                    </h3>
                    <p className="text-gray-600 text-sm font-light leading-relaxed">
                      {stall.description}
                    </p>
                    
                    {/* Decorative divider */}
                    <div className="w-12 h-0.5 bg-gradient-to-r from-gold to-gold-dark my-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <button className="text-gold text-sm font-medium hover:underline flex items-center gap-2 group/btn">
                      <span>Explore Stall</span>
                      <span className="transform group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                    </button>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation */}
          <div className="swiper-button-prev !text-gold !w-12 !h-12 !rounded-full !bg-white !shadow-lg hover:!bg-gold hover:!text-white transition-all duration-300"></div>
          <div className="swiper-button-next !text-gold !w-12 !h-12 !rounded-full !bg-white !shadow-lg hover:!bg-gold hover:!text-white transition-all duration-300"></div>
          
          {/* Custom Pagination */}
          <div className="swiper-pagination !bottom-0"></div>
        </motion.div>

        {/* CTA Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-gold to-gold-dark text-white px-8 py-4 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
          >
            <span className="relative z-10">Book Our Stalls</span>
            <div className="absolute inset-0 bg-gradient-to-r from-gold-dark to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
        </motion.div>
      </div>

      <style jsx global>{`
        .luxury-stalls-swiper {
          padding: 0 20px;
        }
        .luxury-stalls-swiper .swiper-button-next,
        .luxury-stalls-swiper .swiper-button-prev {
          color: #d4af37;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
          transition: all 0.3s ease;
        }
        .luxury-stalls-swiper .swiper-button-next:after,
        .luxury-stalls-swiper .swiper-button-prev:after {
          font-size: 18px;
          font-weight: bold;
        }
        .luxury-stalls-swiper .swiper-pagination-bullet {
          background: #d4af37;
          opacity: 0.4;
          width: 10px;
          height: 10px;
          transition: all 0.3s ease;
        }
        .luxury-stalls-swiper .swiper-pagination-bullet-active {
          background: #d4af37;
          opacity: 1;
          width: 30px;
          border-radius: 10px;
        }
        @media (max-width: 768px) {
          .luxury-stalls-swiper {
            padding: 0 10px;
          }
          .luxury-stalls-swiper .swiper-button-next,
          .luxury-stalls-swiper .swiper-button-prev {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Stalls;