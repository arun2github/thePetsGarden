'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const { scrollY } = useScroll();
  
  const headerY = useTransform(scrollY, [0, 100], [0, -3]);
  const logoScale = useTransform(scrollY, [0, 100], [1, 0.88]);
  const bgOpacity = useTransform(scrollY, [0, 50], [0, 0.98]);
  const logoRotate = useTransform(scrollY, [0, 300], [0, 360]);
  const brandTextX = useTransform(scrollY, [0, 100], [0, -10]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { id: 'home', name: 'Home' },
    { id: 'services', name: 'Services' },
    { id: 'gallery', name: 'Gallery' },
    { id: 'about', name: 'About' },
    { id: 'contact', name: 'Contact' }
  ];

  return (
    <motion.header
      style={{ y: headerY }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      {/* Creative Professional Background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-white/95 via-amber-50/95 to-white/95 backdrop-blur-xl border-b border-amber-200/30"
        style={{ opacity: bgOpacity }}
      />
      
      {/* Subtle Creative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-amber-400/10 to-amber-300/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-br from-gray-600/10 to-amber-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{ duration: 6, repeat: Infinity, delay: 2 }}
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-[100px]">
          
          {/* Creative Professional Logo Section */}
          <motion.div 
            className="flex items-center space-x-4"
          >
            <motion.div 
              className="relative w-24 h-28 lg:w-[250px] lg:h-[250px]"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src="/images/tpg_logo.png"
                alt="The Pets Garden"
                fill
                className="object-contain"
              />
            </motion.div>
{/*             
            <motion.div 
              className="hidden sm:block"
              style={{ x: brandTextX }}
            >
              <motion.h1 
                className={`text-2xl lg:text-3xl font-black tracking-wide transition-all duration-500 ${
                  isScrolled 
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-pink-600 to-purple-700' 
                    : 'text-white drop-shadow-2xl'
                }`}
                animate={{
                  backgroundPosition: isScrolled ? ['0%', '100%', '0%'] : '0%',
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                THE PETS GARDEN
              </motion.h1>
              <motion.p 
                className={`text-sm lg:text-base font-medium tracking-wider transition-colors duration-500 ${
                  isScrolled ? 'text-purple-600' : 'text-white/90'
                }`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Premium Pet Care Services
              </motion.p>
            </motion.div> */}
          </motion.div>

          {/* Creative Professional Navigation */}
          <nav className="hidden lg:flex items-center">
            <motion.div 
              className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-500 ${
                isScrolled 
                  ? 'bg-white/80 border border-amber-200/50 shadow-lg backdrop-blur-md' 
                  : 'bg-white/10 border border-white/20 backdrop-blur-md'
              }`}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {navigationItems.map((item, index) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`relative px-4 py-2 rounded-full text-base font-semibold transition-all duration-300 ${
                    isScrolled ? 'text-gray-700 hover:text-white' : 'text-white hover:text-white'
                  }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index + 0.3, duration: 0.4 }}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -3,
                    transition: { type: "spring", stiffness: 400 }
                  }}
                  onHoverStart={() => setHoveredItem(item.id)}
                  onHoverEnd={() => setHoveredItem(null)}
                >
                  {item.name}
                  
                  {/* Creative Hover Background */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-600 to-amber-500 -z-10"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: hoveredItem === item.id ? 1 : 0,
                      scale: hoveredItem === item.id ? 1 : 0.8
                    }}
                    transition={{ duration: 0.2 }}
                  />
                  
                  {/* Active Indicator */}
                  <motion.div
                    className="absolute -bottom-1 left-1/2 w-1 h-1 bg-amber-600 rounded-full"
                    initial={{ scale: 0, x: '-50%' }}
                    animate={{
                      scale: hoveredItem === item.id ? 1 : 0
                    }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.a>
              ))}
            </motion.div>
          </nav>

          {/* Creative Professional CTA */}
          <div className="flex items-center space-x-4">
            <motion.a
              href="https://wa.me/919876543210"
              target="_blank"
              className="relative group px-8 py-3.5 bg-gradient-to-r from-amber-600 to-amber-500 text-white rounded-full font-bold text-sm lg:text-base shadow-xl overflow-hidden"
              whileHover={{ 
                scale: 1.05, 
                y: -2,
                boxShadow: "0 20px 40px rgba(217,119,6,0.4)",
                backgroundPosition: "100% 50%"
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.8, rotateX: -20 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              transition={{ delay: 0.5, duration: 0.6, type: "spring" }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.4 }}
              />
              
              <span className="relative z-10">Book Appointment</span>
              
              {/* Creative shine effect */}
              <motion.div
                className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100"
                animate={{
                  x: ['-100%', '100%']
                }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  repeatDelay: 3
                }}
              />
            </motion.a>

            {/* Creative Mobile Menu Button */}
            <motion.button
              className={`lg:hidden relative w-12 h-12 rounded-full transition-all duration-500 overflow-hidden ${
                isScrolled 
                  ? 'bg-gradient-to-br from-amber-100 to-amber-50 text-amber-700 shadow-lg' 
                  : 'bg-white/15 text-white backdrop-blur-md border border-white/30'
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileHover={{ 
                scale: 1.1,
                rotate: isMobileMenuOpen ? 180 : 0,
                boxShadow: "0 10px 25px rgba(0,0,0,0.15)"
              }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div className="absolute inset-0 flex flex-col items-center justify-center">
                <motion.div
                  className="w-5 h-0.5 bg-current mb-1.5 rounded-full"
                  animate={isMobileMenuOpen ? { 
                    rotate: 45, 
                    y: 6,
                    backgroundColor: isScrolled ? '#dc2626' : '#ef4444'
                  } : { 
                    rotate: 0, 
                    y: 0 
                  }}
                  transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                />
                <motion.div
                  className="w-5 h-0.5 bg-current mb-1.5 rounded-full"
                  animate={isMobileMenuOpen ? { 
                    opacity: 0,
                    scale: 0
                  } : { 
                    opacity: 1,
                    scale: 1
                  }}
                  transition={{ duration: 0.2 }}
                />
                <motion.div
                  className="w-5 h-0.5 bg-current rounded-full"
                  animate={isMobileMenuOpen ? { 
                    rotate: -45, 
                    y: -6,
                    backgroundColor: isScrolled ? '#dc2626' : '#ef4444'
                  } : { 
                    rotate: 0, 
                    y: 0 
                  }}
                  transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                />
              </motion.div>
              
              {/* Ripple effect */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-amber-400/0"
                animate={isMobileMenuOpen ? {
                  scale: [1, 1.2, 1],
                  borderColor: ['rgba(251,191,36,0)', 'rgba(251,191,36,0.5)', 'rgba(251,191,36,0)']
                } : {}}
                transition={{ duration: 0.6 }}
              />
            </motion.button>
          </div>
        </div>

        {/* Creative Professional Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="lg:hidden"
              initial={{ opacity: 0, height: 0, rotateX: -15 }}
              animate={{ opacity: 1, height: "auto", rotateX: 0 }}
              exit={{ opacity: 0, height: 0, rotateX: -15 }}
              transition={{ duration: 0.4, type: "spring" }}
            >
              <motion.div className={`py-6 mx-4 my-4 rounded-2xl ${
                isScrolled 
                  ? 'bg-gradient-to-br from-white/95 via-amber-50/95 to-white/95 backdrop-blur-xl border border-amber-200/50 shadow-2xl' 
                  : 'bg-gradient-to-br from-white/15 via-white/10 to-white/15 backdrop-blur-xl border border-white/30'
              }`}>
                <div className="px-6 space-y-2">
                  {navigationItems.map((item, index) => (
                    <motion.a
                      key={item.id}
                      href={`#${item.id}`}
                      className={`relative group block py-4 px-6 rounded-xl font-semibold transition-all duration-300 overflow-hidden ${
                        isScrolled 
                          ? 'text-gray-700 hover:text-white' 
                          : 'text-white hover:text-white'
                      }`}
                      initial={{ opacity: 0, x: -30, rotateY: -10 }}
                      animate={{ opacity: 1, x: 0, rotateY: 0 }}
                      transition={{ delay: 0.1 * index + 0.1, duration: 0.4, type: "spring" }}
                      onClick={() => setIsMobileMenuOpen(false)}
                      whileHover={{ 
                        scale: 1.02, 
                        x: 5,
                        transition: { type: "spring", stiffness: 400 }
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <motion.div
                        className="absolute inset-0 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 opacity-0 group-hover:opacity-100"
                        transition={{ duration: 0.3 }}
                      />
                      
                      <span className="relative z-10">{item.name}</span>
                      
                      {/* Creative arrow */}
                      <motion.div
                        className="absolute right-4 top-1/2 w-2 h-2 border-r-2 border-b-2 border-current transform rotate-[-45deg] -translate-y-1/2 opacity-0 group-hover:opacity-100"
                        initial={{ x: -10 }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.2 }}
                      />
                    </motion.a>
                  ))}
                </div>
                
                <div className="px-6 pt-6 mt-6 border-t border-current/10">
                  <motion.a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    className="relative group w-full flex items-center justify-center py-4 bg-gradient-to-r from-amber-600 to-amber-500 text-white rounded-xl font-bold shadow-xl overflow-hidden"
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.5, type: "spring" }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    whileHover={{ 
                      scale: 1.02, 
                      y: -2,
                      boxShadow: "0 15px 35px rgba(217,119,6,0.4)"
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.4 }}
                    />
                    
                    <span className="relative z-10">Book Appointment</span>
                    
                    {/* Pulse effect */}
                    <motion.div
                      className="absolute inset-0 rounded-xl bg-white/20"
                      animate={{
                        scale: [1, 1.05, 1],
                        opacity: [0, 0.3, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;