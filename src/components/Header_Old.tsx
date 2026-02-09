'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  
  const headerY = useTransform(scrollY, [0, 100], [0, -2]);
  const logoScale = useTransform(scrollY, [0, 100], [1, 0.9]);
  const bgOpacity = useTransform(scrollY, [0, 50], [0, 0.98]);

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
      className="fixed top-0 left-0 right-0 z-50 overflow-hidden"
    >
      {/* Ultra-Modern Morphing Background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-white/95 via-gray-50/95 to-white/95"
        style={{ opacity: bgOpacity }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5" />
      </motion.div>
      
      {/* Dynamic Particle System */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-2 h-2 rounded-full bg-gradient-to-r ${
              ['from-blue-400/30 to-cyan-300/30', 'from-purple-400/30 to-pink-300/30', 'from-green-400/30 to-emerald-300/30'][i % 3]
            } blur-sm`}
            style={{
              left: `${8 + (i * 8)}%`,
              top: `${20 + Math.sin(i) * 30}%`,
            }}
            animate={{
              y: [0, -25, 0],
              x: [0, Math.sin(i * 0.5) * 15, 0],
              scale: [0.8, 1.4, 0.8],
              opacity: [0.3, 0.8, 0.3],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 4 + (i * 0.3),
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Glowing Border Effect */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"
        style={{ opacity: glowIntensity }}
      />

      <div className="relative max-w-7xl mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between py-3">
          
          {/* Revolutionary Logo Section */}
          <motion.div 
            className="flex items-center"
            style={{ scale: logoScale }}
          >
            <div className="relative group">
              {/* Main Logo with Multiple Effects */}
              <motion.div 
                className="relative w-24 h-24 lg:w-32 lg:h-32 z-10"
                whileHover={{ 
                  scale: 1.15,
                  rotateY: 5,
                  rotateX: 5,
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Image
                  src="/images/thePetsGarden_logo.png"
                  alt="The Pets Garden"
                  fill
                  className="object-contain relative z-10"
                />
                
                {/* Holographic Glow Ring */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 scale-110"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Pulsing Aura */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 blur-lg scale-150 opacity-0 group-hover:opacity-100"
                  animate={{ scale: [1.5, 1.8, 1.5], opacity: [0.2, 0.4, 0.2] }}
                  transition={{ duration: 2, repeat: Infinity, type: "tween" }}
                />
              </motion.div>
              
              {/* 3D Brand Text with Morphing Effects */}
              <div className="ml-4 hidden sm:block">
                <motion.div
                  className={`text-lg lg:text-xl font-black tracking-wider transition-all duration-700 ${
                    isScrolled 
                      ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600' 
                      : 'text-white drop-shadow-2xl'
                  }`}
                  animate={{
                    backgroundPosition: ['0%', '100%', '0%'],
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  THE PETS GARDEN
                </motion.div>
                
                {/* Animated Magic Particles Subtitle */}
                <motion.div 
                  className={`text-xs tracking-[0.25em] font-medium transition-all duration-700 flex items-center gap-1 ${
                    isScrolled ? 'text-gray-600' : 'text-white/90'
                  }`}
                >
                  <motion.span
                    animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0, type: "tween" }}
                  >✨</motion.span>
                  <span>PREMIUM PET PARADISE</span>
                  <motion.span
                    animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1, type: "tween" }}
                  >✨</motion.span>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Futuristic Floating Navigation Capsule */}
          <nav className="hidden lg:flex items-center">
            <motion.div 
              className={`flex items-center space-x-1 p-2 rounded-full border-2 transition-all duration-700 backdrop-blur-2xl ${
                isScrolled 
                  ? 'bg-white/90 border-purple-200/50 shadow-2xl shadow-purple-500/20' 
                  : 'bg-black/20 border-white/30 shadow-lg'
              }`}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
            >
              {navigationItems.map((item, index) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`relative group flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-bold transition-all duration-500 ${
                    activeSection === item.id
                      ? `bg-gradient-to-r ${item.color} text-white shadow-lg`
                      : isScrolled 
                        ? 'text-gray-700 hover:text-white' 
                        : 'text-white/90 hover:text-white'
                  }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index + 0.5, duration: 0.6, type: "spring" }}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -2,
                    boxShadow: activeSection !== item.id ? `0 10px 30px ${item.color.includes('blue') ? 'rgba(59,130,246,0.4)' : item.color.includes('purple') ? 'rgba(147,51,234,0.4)' : item.color.includes('green') ? 'rgba(34,197,94,0.4)' : item.color.includes('orange') ? 'rgba(251,146,60,0.4)' : 'rgba(236,72,153,0.4)'}` : undefined
                  }}
                  whileTap={{ scale: 0.95 }}
                  onHoverStart={() => setActiveSection(item.id)}
                >
                  <span className="block">{item.name}</span>
                  
                  {/* Gradient Hover Background */}
                  {activeSection !== item.id && (
                    <motion.div
                      className={`absolute inset-0 rounded-full bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 -z-10`}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  
                  {/* Magic Sparkle Effect */}
                  <AnimatePresence>
                    {activeSection === item.id && (
                      <motion.div
                        className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full"
                        initial={{ scale: 0, rotate: 0 }}
                        animate={{ scale: 1, rotate: 360 }}
                        exit={{ scale: 0, rotate: 180 }}
                        transition={{ duration: 0.5 }}
                      >
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.a>
              ))}
            </motion.div>
          </nav>

          {/* Ultra-Premium CTA & Mobile Section */}
          <div className="flex items-center space-x-4">
            {/* Cosmic CTA Button */}
            <motion.a
              href="https://wa.me/919876543210"
              target="_blank"
              className="relative group flex items-center gap-3 px-6 py-3.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-full font-black text-sm tracking-wide overflow-hidden shadow-2xl"
              whileHover={{ 
                scale: 1.08,
                rotateY: 5,
                boxShadow: "0 25px 50px rgba(147,51,234,0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.7, rotateX: -90 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              transition={{ delay: 0.8, duration: 0.8, type: "spring" }}
            >
              {/* Animated Background Layers */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.6 }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 opacity-0 group-hover:opacity-20"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
              
              <span className="relative z-10">BOOK PARADISE</span>
              
              {/* Orbiting Particles */}
              <motion.div
                className="absolute w-1 h-1 bg-white rounded-full"
                animate={{
                  rotate: 360,
                  x: [0, 15, 0, -15, 0],
                  y: [0, -15, 0, 15, 0],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{ top: '50%', left: '50%', transformOrigin: '0 0' }}
              />
            </motion.a>

            {/* Futuristic Mobile Menu Button */}
            <motion.button
              className={`lg:hidden relative w-12 h-12 rounded-2xl border-2 transition-all duration-500 overflow-hidden ${
                isScrolled 
                  ? 'bg-white/90 border-purple-200 text-gray-700' 
                  : 'bg-black/20 border-white/30 text-white backdrop-blur-xl'
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileHover={{ 
                scale: 1.1, 
                rotateY: 10,
                boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
              }}
              whileTap={{ scale: 0.9 }}
            >
              {/* Morphing Menu Icon */}
              <motion.div className="absolute inset-0 flex flex-col items-center justify-center">
                <motion.div
                  className="w-5 h-0.5 bg-current mb-1 rounded-full"
                  animate={isMobileMenuOpen ? { 
                    rotate: 45, 
                    y: 6, 
                    backgroundColor: '#ef4444' 
                  } : { 
                    rotate: 0, 
                    y: 0 
                  }}
                  transition={{ duration: 0.3, type: "spring" }}
                />
                <motion.div
                  className="w-5 h-0.5 bg-current mb-1 rounded-full"
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
                    backgroundColor: '#ef4444' 
                  } : { 
                    rotate: 0, 
                    y: 0 
                  }}
                  transition={{ duration: 0.3, type: "spring" }}
                />
              </motion.div>
              
              {/* Glowing Ring Effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-purple-400/0 group-hover:border-purple-400/50"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
            </motion.button>
          </div>
        </div>

        {/* Revolutionary Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="lg:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <motion.div 
                className={`my-4 p-6 rounded-3xl border-2 backdrop-blur-2xl ${
                  isScrolled 
                    ? 'bg-white/95 border-purple-200/50 shadow-2xl' 
                    : 'bg-black/30 border-white/20'
                }`}
                initial={{ scale: 0.9, rotateX: -10 }}
                animate={{ scale: 1, rotateX: 0 }}
                transition={{ delay: 0.1, duration: 0.4 }}
              >
                {/* Mobile Navigation Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {navigationItems.map((item, index) => (
                    <motion.a
                      key={item.id}
                      href={`#${item.id}`}
                      className={`relative group flex flex-col items-center p-4 rounded-2xl border-2 transition-all duration-500 overflow-hidden ${
                        isScrolled 
                          ? 'text-gray-700 border-gray-200/50 hover:border-purple-300' 
                          : 'text-white border-white/20 hover:border-white/40'
                      }`}
                      initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
                      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                      transition={{ delay: 0.1 * index + 0.2, duration: 0.5, type: "spring" }}
                      onClick={() => setIsMobileMenuOpen(false)}
                      whileHover={{ 
                        scale: 1.05, 
                        y: -5,
                        rotateY: 5 
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {/* Gradient Background */}
                      <motion.div
                        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-20`}
                        transition={{ duration: 0.3 }}
                      />
                      
                      <span className="text-lg font-bold relative z-10">{item.name}</span>
                      

                    </motion.a>
                  ))}
                </div>
                
                {/* Premium Mobile CTA */}
                <motion.a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  className="relative group w-full flex items-center justify-center gap-3 p-5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-2xl font-black shadow-2xl overflow-hidden"
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.5, type: "spring" }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.5 }}
                  />
                  
                  <span className="relative z-10 text-lg">BOOK YOUR PET'S PARADISE</span>
                  
                  {/* Shooting Stars */}
                  <motion.div
                    className="absolute w-1 h-1 bg-white rounded-full"
                    animate={{
                      x: [-20, 100],
                      opacity: [0, 1, 0]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  />
                </motion.a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;