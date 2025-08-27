'use client'
import { motion } from "framer-motion";

import { 
  Users,
  Sparkles,
  Star
} from 'lucide-react';

const WhyChooseUsSection = () => {
  const reasons = [
    { icon: <Star size={24} />, text: "One-stop event solution – décor, catering, entertainment, photography & more" },
    { icon: <Sparkles size={24} />, text: "Creative designs tailored to your theme" },
    { icon: <Star size={24} />, text: "Affordable packages for every budget" },
    { icon: <Users size={24} />, text: "Highly experienced and professional team" },
    { icon: <Star size={24} />, text: "5-star rated event management in Nagercoil" },
    { icon: <Star size={24} />, text: "Guaranteed 100% guest satisfaction" },
  ];

  return (
    <section id="whyus" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-black"
        >
          Why We Are the <span className="text-gold">Best in Nagercoil</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-4"
            >
              <div className="text-gold mt-1">{reason.icon}</div>
              <p className="text-gray-700">{reason.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default WhyChooseUsSection;