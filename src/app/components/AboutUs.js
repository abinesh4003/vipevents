'use client'

import { motion } from "framer-motion";
import Image from "next/image";

const AboutUs = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, rotate: -2 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const floatingVariants = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const shimmerVariants = {
    initial: { backgroundPosition: "-200% 0" },
    animate: {
      backgroundPosition: ["0% 0%", "200% 0%"],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gold/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/5 rounded-full translate-x-1/3 translate-y-1/3" />
      
      {/* Gold flourishes */}
      <div className="absolute top-20 left-5 text-gold text-7xl opacity-10 rotate-12">
        ✦
      </div>
      <div className="absolute bottom-20 right-5 text-gold text-7xl opacity-10 -rotate-12">
        ✦
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-20"
        >
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-black mb-6 tracking-wide">
              <span className="text-gold">About</span> V.I.P
              <br />
              <span className="italic font-light">Function Planners</span>
            </h2>
            
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"
            />
            
            <motion.div
              variants={shimmerVariants}
              initial="initial"
              animate="animate"
              className="absolute -inset-2 bg-gradient-to-r from-transparent via-gold/30 to-transparent bg-[length:200%_100%] opacity-70 blur-sm"
            />
          </div>
          
          <motion.p
            variants={itemVariants}
            className="text-gray-600 text-lg max-w-2xl mx-auto mt-6 font-light"
          >
            Crafting unforgettable experiences with precision and elegance
          </motion.p>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={imageVariants}
            className="lg:w-1/2 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              {/* Image container with elegant borders */}
              <div className="absolute inset-0 border-[3px] border-gold/20 rounded-2xl z-20 pointer-events-none" />
              <div className="absolute inset-4 border border-gold/10 rounded-xl z-20 pointer-events-none" />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-gold/5 z-10" />
              
              <Image 
                src="/about.jpg" 
                alt="Luxury event planning by V.I.P Function Planners" 
                width={600} 
                height={700} 
                className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-1000" 
                priority
              />
              
              {/* Floating decorative elements */}
              <motion.div
                variants={floatingVariants}
                initial="initial"
                animate="animate"
                className="absolute -top-4 -left-4 w-8 h-8 bg-gold rounded-full shadow-lg z-30"
              />
              <motion.div
                variants={floatingVariants}
                initial="initial"
                animate="animate"
                transition={{ delay: 0.5 }}
                className="absolute -bottom-4 -right-4 w-6 h-6 bg-black rounded-full shadow-lg z-30"
              />
            </div>
            
            {/* Experience badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="absolute -bottom-6 -right-6 bg-black text-gold px-6 py-3 rounded-xl shadow-xl z-30 border border-gold/20"
            >
              <span className="text-sm font-semibold tracking-widest">SINCE 2010</span>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={textVariants}
            className="lg:w-1/2"
          >
            <motion.div
              variants={containerVariants}
              className="space-y-6"
            >
              <motion.p 
                variants={itemVariants}
                className="text-gray-700 text-lg leading-relaxed font-light"
              >
                At <span className="text-gold font-medium">V.I.P Function Planners</span>, we transform visions into extraordinary realities. Based in the heart of Nagercoil, we specialize in curating impeccable events that resonate with sophistication and style.
              </motion.p>
              
              <motion.p 
                variants={itemVariants}
                className="text-gray-700 text-lg leading-relaxed font-light"
              >
                Our philosophy is built on meticulous attention to detail, creative excellence, and unwavering dedication to making each celebration uniquely memorable. From concept to execution, we handle every element with precision.
              </motion.p>
              
              <motion.p 
                variants={itemVariants}
                className="text-gray-700 text-lg leading-relaxed font-light"
              >
                Whether an intimate gathering or a grand wedding, we infuse each event with luxury, elegance, and that distinctive V.I.P touch that sets us apart as Nagercoil's premier event planners.
              </motion.p>
            </motion.div>
            
            {/* Highlighted quote */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12 p-6 bg-gradient-to-r from-gold/5 to-gold/10 rounded-2xl border-l-4 border-gold relative overflow-hidden"
            >
              <div className="absolute -top-4 -right-4 text-6xl text-gold/10 font-playfair">"</div>
              <motion.div 
                animate={{ 
                  textShadow: ["0 0 8px rgba(212, 175, 55, 0.3)", "0 0 16px rgba(212, 175, 55, 0.4)", "0 0 8px rgba(212, 175, 55, 0.3)"]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="text-gold-dark text-xl italic font-playfair relative z-10"
              >
                "Where exquisite moments become timeless memories"
              </motion.div>
            </motion.div>

            {/* Stats section - modern card style */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-14"
            >
              {[
                { number: "500+", label: "Events Executed" },
                { number: "12+", label: "Years of Excellence" },
                { number: "100%", label: "Client Satisfaction" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center p-5 bg-white rounded-xl shadow-lg border border-gold/10 hover:shadow-xl transition-all duration-500 group hover:-translate-y-1"
                >
                  <div className="text-3xl font-bold text-gold mb-2 group-hover:scale-110 transition-transform duration-500">{stat.number}</div>
                  <div className="text-gray-600 text-sm tracking-widest font-medium uppercase">{stat.label}</div>
                  <div className="w-8 h-0.5 bg-gradient-to-r from-gold to-gold-dark mx-auto mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;