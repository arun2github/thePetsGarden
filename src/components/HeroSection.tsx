'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/images/pet_care.png',
      title: 'Premium Pet Care',
      subtitle: 'Luxury boarding & wellness services'
    },
    {
      image: '/images/pet_gromming.png', 
      title: 'Professional Grooming',
      subtitle: 'Spa treatments & styling'
    },
    {
      image: '/images/dog_training.png',
      title: 'Expert Training',
      subtitle: 'Professional behavioral coaching'
    },
    {
      image: '/images/pet_medicine.png',
      title: 'Health & Medicine',
      subtitle: 'Complete veterinary care'
    },
    {
      image: '/images/pet_home.png',
      title: 'Luxury Pet Hotel',
      subtitle: '24/7 premium accommodation'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Carousel Background */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ 
              opacity: index === currentSlide ? 1 : 0,
              scale: index === currentSlide ? 1 : 1.1
            }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </motion.div>
        ))}
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Bottom Center Content Overlay */}
      <div className="absolute inset-0 z-20 flex items-end justify-center p-8 md:p-12 pb-16 md:pb-20">
        <div className="text-center max-w-4xl">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: -50, y: 30 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-6"
        >
          {/* Dynamic Title */}
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {slides[currentSlide].title}
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl text-white/90 font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            {slides[currentSlide].subtitle}
          </motion.p>

          {/* Call-to-Action Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 pt-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <motion.a 
              href="https://wa.me/919876543210" 
              target="_blank"
              className="group px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-500 text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-3">
                📞 Book Now
                <motion.span
                  className="group-hover:translate-x-1 transition-transform duration-300"
                >
                  →
                </motion.span>
              </span>
            </motion.a>

            <motion.a 
              href="#services"
              className="group px-8 py-4 border-2 border-white/80 text-white hover:bg-white/10 font-semibold text-lg rounded-full backdrop-blur-sm transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-3">
                ✨ Our Services
                <motion.span
                  className="group-hover:translate-x-1 transition-transform duration-300"
                >
                  →
                </motion.span>
              </span>
            </motion.a>
          </motion.div>
        </motion.div>        </div>      </div>
    </section>
  );
};

export default HeroSection;