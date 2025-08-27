'use client'
import { 
  Instagram, 
  Facebook, 
  Youtube,

} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-gold">V.I.P Function Planners</h3>
            <p className="text-gray-400">Turning moments into memories, beautifully.</p>
          </div>
          
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-gold transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-gold transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-gold transition-colors">
              <Youtube size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} V.I.P Function Planners. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;