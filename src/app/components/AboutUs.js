'use client'

import { motion } from "framer-motion";
import Image from "next/image";
const AboutUs= () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-black"
        >
          About Us – <span className="text-gold">V.I.P Function Planners</span>
        </motion.h2>
        
        <div className="flex flex-col md:flex-row items-center gap-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:w-1/2"
          >
            <div className="rounded-lg overflow-hidden shadow-2xl">
            <Image src="/about.jpg" alt="About Us" width={600} height={400} className="w-full h-full object-cover" />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="md:w-1/2"
          >
            <p className="text-gray-700 mb-4">
              At V.I.P Function Planners, we believe every event should be a beautiful story – and we make sure yours is unforgettable. Located in Nagercoil, we are your one-stop event solution, offering everything from luxury stage décor and customized themes to delicious wedding catering and world-class entertainment.
            </p>
            <p className="text-gray-700 mb-4">
              Our mission is simple – to create magical, stress-free celebrations that reflect your style and personality. With years of expertise, a passionate team, and a commitment to 100% guest satisfaction, we have earned our place as the best event management company in Nagercoil.
            </p>
            <p className="text-gray-700">
              From intimate gatherings to grand weddings, every detail is handled with care, creativity, and a touch of luxury. With us, your only job is to celebrate – we will take care of the rest.
            </p>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-8 text-gold text-xl italic"
            >
              ✨ V.I.P Function Planners – Turning moments into memories, beautifully.
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
export default AboutUs;