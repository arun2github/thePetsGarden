'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const FeaturedPetsSection = () => {
  const [hasAnimated, setHasAnimated] = useState(false);

  const shouldAnimate = () => {
    return !hasAnimated;
  };

  const markAsAnimated = () => {
    if (!hasAnimated) {
      setHasAnimated(true);
    }
  };

  const petCategories = [
    {
      id: 1,
      name: "Dogs",
      emoji: "🐶",
      description: "Loyal companions with endless love and energy. Perfect for families seeking faithful friends who bring joy and protection to your home.",
      startingPrice: "₹5,000",
      image: "/images/featured_dog.png",
      features: ["Loyal Companions", "Family Friendly", "Active & Playful", "Great Protectors"]
    },
    {
      id: 2,
      name: "Cats",
      emoji: "🐱",
      description: "Independent and affectionate feline friends who bring calm and comfort. Ideal companions for those who appreciate grace and charm.",
      startingPrice: "₹5,000",
      image: "/images/featured_cat.png",
      features: ["Independent Nature", "Calm & Gentle", "Low Maintenance", "Great Companions"]
    },
    {
      id: 3,
      name: "Fish",
      emoji: "🐠",
      description: "Beautiful aquatic pets that create peaceful environments. Perfect for adding tranquility and vibrant colors to your living space.",
      startingPrice: "₹100",
      image: "/images/featured_fish.png",
      features: ["Peaceful Environment", "Colorful Display", "Low Maintenance", "Relaxing Presence"]
    }
  ];

  return (
    <section id="pets" className="py-20 bg-gradient-to-br from-stone-50/50 via-white to-amber-50/30">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          onViewportEnter={() => markAsAnimated()}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={hasAnimated ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative inline-block"
          >
            <h2 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-stone-600 via-amber-600 to-stone-600 bg-clip-text text-transparent">
                Featured Pets
              </span>
            </h2>
            <motion.div
              className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"
              initial={{ width: 0 }}
              animate={hasAnimated ? { width: 96 } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </motion.div>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed mt-2">
            Discover your perfect companion from our curated selection of healthy, happy pets with transparent pricing.
          </p>
        </motion.div>

        {/* Pet Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {petCategories.map((category, index) => (
            <motion.div 
              key={category.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={hasAnimated ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ duration: 0.7, delay: 0.8 + index * 0.2, type: "spring", stiffness: 100 }}
              whileHover={{ 
                y: -20, 
                scale: 1.03,
                rotateX: 5,
                transition: { duration: 0.4, type: "spring", stiffness: 300 }
              }}
              className="group relative h-full perspective-1000"
            >
              {/* Enhanced Premium Pet Card with Luxury Border */}
              <div className="relative bg-gradient-to-br from-white via-amber-50/20 to-stone-50/30 w-full h-full rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-700 overflow-hidden flex flex-col transform-gpu">
                
                {/* Premium Multi-Layer Border System */}
                {/* Outer Glow Border */}
                <div className="absolute -inset-1 bg-gradient-to-br from-amber-400/20 via-amber-300/15 to-stone-400/10 rounded-[28px] blur-sm opacity-60 group-hover:opacity-80 group-hover:from-amber-500/30 group-hover:via-amber-400/25 group-hover:to-stone-500/15 transition-all duration-700" />
                
                {/* Main Border with Animated Gradient */}
                <motion.div 
                  className="absolute -inset-0.5 rounded-[26px] p-[3px] bg-gradient-to-br opacity-90 group-hover:opacity-100 transition-opacity duration-700"
                  style={{
                    background: `conic-gradient(from 0deg, 
                      #f59e0b 0%, 
                      #d97706 25%, 
                      #92400e 50%, 
                      #78716c 75%, 
                      #f59e0b 100%
                    )`
                  }}
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  {/* Inner Border Mask */}
                  <div className="w-full h-full bg-gradient-to-br from-white via-amber-50/20 to-stone-50/30 rounded-3xl" />
                </motion.div>
                
                {/* Luxury Accent Corners */}
                <div className="absolute top-3 left-3 w-6 h-6 border-l-3 border-t-3 border-amber-400/70 rounded-tl-2xl group-hover:border-amber-500/80 transition-colors duration-500" />
                <div className="absolute top-3 right-3 w-6 h-6 border-r-3 border-t-3 border-amber-400/70 rounded-tr-2xl group-hover:border-amber-500/80 transition-colors duration-500" />
                <div className="absolute bottom-3 left-3 w-6 h-6 border-l-3 border-b-3 border-amber-400/70 rounded-bl-2xl group-hover:border-amber-500/80 transition-colors duration-500" />
                <div className="absolute bottom-3 right-3 w-6 h-6 border-r-3 border-b-3 border-amber-400/70 rounded-br-2xl group-hover:border-amber-500/80 transition-colors duration-500" />
                
                {/* Luxury Inner Glow */}
                <div className="absolute inset-2 rounded-2xl border border-amber-200/30 group-hover:border-amber-300/50 transition-colors duration-700 pointer-events-none" />
                
                {/* Premium Shine Effect */}
                <motion.div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"
                  style={{
                    background: `linear-gradient(135deg, 
                      transparent 0%, 
                      rgba(245, 158, 11, 0.08) 30%, 
                      rgba(245, 158, 11, 0.12) 50%, 
                      rgba(245, 158, 11, 0.08) 70%, 
                      transparent 100%
                    )`
                  }}
                />
                
                {/* Magical Background Effects */}
                <div className="absolute inset-0 overflow-hidden">
                  <motion.div
                    className="absolute -top-12 -right-12 w-40 h-40 bg-gradient-to-br from-amber-400/15 to-amber-300/10 rounded-full blur-3xl"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.2, 0.4, 0.2],
                      rotate: [0, 180, 360],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.div
                    className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-stone-400/12 to-amber-400/15 rounded-full blur-2xl"
                    animate={{
                      scale: [1.2, 1, 1.2],
                      opacity: [0.15, 0.35, 0.15],
                      rotate: [360, 180, 0],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                  />
                  
                  {/* Sparkle Effects */}
                  <motion.div
                    className="absolute top-20 right-20 w-2 h-2 bg-amber-400 rounded-full opacity-0"
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                    }}
                    transition={{ duration: 3, repeat: Infinity, delay: 2 }}
                  />
                  <motion.div
                    className="absolute bottom-32 left-16 w-1.5 h-1.5 bg-stone-400 rounded-full opacity-0"
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                    }}
                    transition={{ duration: 4, repeat: Infinity, delay: 4 }}
                  />
                </div>
                
                {/* Enhanced Image Header */}
                <div className="relative h-64 overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="h-full relative"
                  >
                    <Image
                      src={category.image}
                      alt={category.name}
                      width={400}
                      height={256}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Image Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                    
                    {/* Shimmer Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 opacity-0"
                      whileHover={{
                        x: ["-100%", "200%"],
                        opacity: [0, 1, 0],
                      }}
                      transition={{ duration: 1.2 }}
                    />
                  </motion.div>
                  
                  {/* Enhanced Floating Emoji with Pulse */}
                  <motion.div 
                    className="absolute top-6 right-6 w-18 h-18 bg-white/95 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-2xl border-2 border-amber-200/60 group-hover:border-amber-300/80 transition-colors duration-500"
                    whileHover={{ 
                      scale: 1.15, 
                      rotate: [0, -15, 15, 0],
                      boxShadow: "0 20px 40px rgba(245, 158, 11, 0.4)",
                      transition: { duration: 0.6, type: "spring", stiffness: 300 }
                    }}
                    animate={{
                      y: [0, -3, 0],
                    }}
                    transition={{
                      y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                    }}
                  >
                    <motion.span 
                      className="text-4xl"
                      whileHover={{ 
                        scale: 1.2,
                        transition: { duration: 0.3 }
                      }}
                    >
                      {category.emoji}
                    </motion.span>
                    
                    {/* Pulsing Ring */}
                    <motion.div
                      className="absolute inset-0 border-2 border-amber-400/0 rounded-2xl"
                      animate={{
                        borderColor: ["rgba(245, 158, 11, 0)", "rgba(245, 158, 11, 0.6)", "rgba(245, 158, 11, 0)"],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.div>
                  
                  {/* Premium Badge */}
                  <motion.div
                    className="absolute top-6 left-6 bg-gradient-to-r from-amber-600 to-amber-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg border border-amber-400/50"
                    whileHover={{ scale: 1.05 }}
                    animate={{
                      boxShadow: ["0 10px 20px rgba(245, 158, 11, 0.3)", "0 15px 30px rgba(245, 158, 11, 0.4)", "0 10px 20px rgba(245, 158, 11, 0.3)"],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    ✨ Premium
                  </motion.div>
                </div>

                {/* Enhanced Content Section */}
                <div className="relative p-8 flex-grow flex flex-col z-10">
                  {/* Title and Price with Enhanced Animation */}
                  <div className="flex justify-between items-start mb-6">
                    <motion.h3 
                      className="text-3xl font-bold text-stone-800 group-hover:text-amber-700 transition-colors duration-500"
                      whileHover={{ 
                        x: 5,
                        scale: 1.02,
                        transition: { duration: 0.3, type: "spring", stiffness: 400 }
                      }}
                    >
                      {category.name}
                    </motion.h3>
                    <div className="text-right">
                      <motion.div 
                        className="text-sm text-stone-500 mb-1 group-hover:text-amber-600 transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                      >
                        Starts from
                      </motion.div>
                      <motion.span 
                        className="text-3xl font-bold bg-gradient-to-r from-amber-800 via-amber-700 to-orange-600 bg-clip-text text-transparent"
                        whileHover={{ 
                          scale: 1.15,
                          transition: { duration: 0.3, type: "spring", stiffness: 500 }
                        }}
                        animate={{
                          textShadow: ["0 0 0px rgba(146, 64, 14, 0)", "0 0 20px rgba(146, 64, 14, 0.6)", "0 0 0px rgba(146, 64, 14, 0)"],
                        }}
                        transition={{ duration: 4, repeat: Infinity }}
                      >
                        {category.startingPrice}
                      </motion.span>
                    </div>
                  </div>
                  
                  {/* Enhanced Description */}
                  <motion.p 
                    className="text-stone-600 mb-6 leading-relaxed flex-grow group-hover:text-stone-700 transition-colors duration-300"
                    whileHover={{ 
                      x: 3,
                      transition: { duration: 0.3 }
                    }}
                  >
                    {category.description}
                  </motion.p>

                  {/* Premium Feature Tags with Enhanced Effects */}
                  <motion.div 
                    className="bg-gradient-to-br from-stone-50/80 via-amber-50/60 to-stone-50/80 border-2 border-amber-100/60 rounded-2xl p-6 mb-6 group-hover:border-amber-200/80 group-hover:bg-gradient-to-br group-hover:from-amber-50/40 group-hover:via-white group-hover:to-amber-50/40 transition-all duration-700 relative overflow-hidden"
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 10px 30px rgba(245, 158, 11, 0.15)",
                      transition: { duration: 0.3 }
                    }}
                  >
                    {/* Feature Tag Background Animation */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-amber-400/0 via-amber-200/5 to-amber-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    />
                    
                    <div className="flex flex-wrap gap-3 relative z-10">
                      {category.features.map((feature, idx) => (
                        <motion.span 
                          key={idx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.1 * idx, type: "spring", stiffness: 300 }}
                          whileHover={{ 
                            scale: 1.08,
                            y: -3,
                            boxShadow: "0 12px 35px rgba(245, 158, 11, 0.3)",
                            transition: { duration: 0.3, type: "spring", stiffness: 400 }
                          }}
                          className="inline-flex items-center bg-gradient-to-br from-white via-amber-50/30 to-white/95 border-2 border-amber-300/60 text-stone-800 text-sm font-bold px-5 py-3 rounded-2xl shadow-lg hover:shadow-xl hover:bg-gradient-to-br hover:from-amber-100/40 hover:via-yellow-50/50 hover:to-white hover:border-yellow-400/70 hover:text-amber-900 transition-all duration-500 cursor-pointer backdrop-blur-sm"
                        >
                          <motion.div 
                            className="flex items-center justify-center w-5 h-5 bg-gradient-to-br from-yellow-400 via-amber-400 to-amber-500 rounded-lg mr-3 shadow-md"
                            whileHover={{ 
                              scale: 1.2,
                              rotate: 180,
                              boxShadow: "0 0 15px rgba(245, 158, 11, 0.7)",
                            }}
                            transition={{ duration: 0.4 }}
                          >
                            <motion.div 
                              className="w-2 h-2 bg-white rounded-sm shadow-inner"
                              whileHover={{ scale: 1.1 }}
                            />
                          </motion.div>
                          {feature}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>

                  {/* Enhanced CTA Button */}
                  <motion.button 
                    className="w-full relative overflow-hidden py-5 px-6 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-white rounded-2xl font-bold shadow-2xl group/btn mt-auto bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all duration-500"
                    whileHover={{ 
                      scale: 1.03,
                      boxShadow: "0 20px 50px rgba(245, 158, 11, 0.4)",
                      transition: { duration: 0.3, type: "spring", stiffness: 300 }
                    }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {/* Button Gradient Animation */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-amber-500 via-amber-600 to-amber-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"
                    />
                    
                    {/* Button Shimmer */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 opacity-0"
                      whileHover={{
                        x: ["-100%", "200%"],
                        opacity: [0, 1, 0],
                      }}
                      transition={{ duration: 0.8 }}
                    />
                    
                    <span className="relative z-10 flex items-center justify-center gap-3 text-lg">
                      <motion.span
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        View {category.name}
                      </motion.span>
                      <motion.svg 
                        className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300"
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        whileHover={{ rotate: 45, scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </motion.svg>
                    </span>
                  </motion.button>
                </div>

                {/* Enhanced Premium Accent with Glow */}
                <motion.div 
                  className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left"
                  whileHover={{
                    height: 8,
                    boxShadow: "0 0 30px rgba(245, 158, 11, 0.6)",
                  }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Card Glow Effect */}
                <motion.div 
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{
                    boxShadow: "inset 0 0 80px rgba(245, 158, 11, 0.08)"
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default FeaturedPetsSection;