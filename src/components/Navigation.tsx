
import { useState, useEffect } from 'react';
import { Moon, Sun, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

interface NavigationProps {
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
}

const Navigation = ({ isDark, setIsDark }: NavigationProps) => {
  const handleCallUs = () => {
    window.open('tel:+918538945025', '_self');
  };

  const smoothBounceVariants = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const textUpDownVariants = {
    animate: {
      y: [0, -8, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border-b border-slate-200 dark:border-slate-700 transition-all duration-500"
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-xl font-bold"
        >
          <motion.span 
            className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent"
            variants={smoothBounceVariants}
            animate="animate"
          >
            Codelabs India
          </motion.span>
        </motion.div>
        
        <div className="hidden md:flex items-center space-x-8">
          {['Home', 'About', 'Technologies', 'Projects', 'Contact'].map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '')}`}
              className="hover:text-blue-600 transition-all duration-300 relative group"
              whileHover={{ y: -3, scale: 1.05 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <motion.span variants={textUpDownVariants} animate="animate">
                {item}
              </motion.span>
              <motion.div
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-500"
              />
            </motion.a>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <motion.div 
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(34, 197, 94, 0.3)" }} 
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <Button
              onClick={handleCallUs}
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-6 py-2 rounded-full transition-all duration-500 shadow-lg"
            >
              <Phone className="mr-2 h-4 w-4" />
              Call Us
            </Button>
          </motion.div>
          
          <motion.div 
            whileHover={{ rotate: 180, scale: 1.1 }} 
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
