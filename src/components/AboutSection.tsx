'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const AboutSection = () => {
  const [hasAnimated, setHasAnimated] = useState(false);

  const markAsAnimated = () => {
    if (!hasAnimated) {
      setHasAnimated(true);
    }
  };

  const teamMembers = [
    {
      name: "Sanju Tiwari",
      role: "Founder & Pet Specialist",
      description: "Expert in pet breeding, selection, and care with years of experience connecting families with their perfect companions.",
      image: "🐕"
    },
    {
      name: "Breeding Specialists",
      role: "Pet Selection Team",
      description: "Certified professionals ensuring healthy breeding practices and proper pet socialization for the best family matches.",
      image: "🏆"
    },
    {
      name: "Care Specialists",
      role: "Pet Care Team",
      description: "Dedicated veterinarians and caregivers providing comprehensive health, grooming, and boarding services.",
      image: "⚕️"
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-slate-900 via-stone-900 to-slate-900 relative overflow-hidden">
      {/* Modern Professional Background */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-amber-500/15 via-orange-400/10 to-yellow-500/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-blue-500/10 via-purple-500/12 to-amber-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-gradient-to-r from-emerald-400/8 to-teal-500/12 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.03)_1px,transparent_0)] bg-[size:50px_50px]"></div>
        
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-slate-900/60"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          onViewportEnter={() => markAsAnimated()}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
              About Us
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Where love meets premium care! Discover our passion for providing exceptional pet care services.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Our Story */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={hasAnimated ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-500"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                <span className="text-white text-xl">📖</span>
              </div>
              <h3 className="text-3xl font-bold text-white">Our Story</h3>
            </div>
            
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                <span className="text-amber-400 font-semibold">The Pets Garden</span> was born from a simple belief: 
                every pet deserves love, care, and the perfect family match. Located in the heart of Saharsa, Bihar, 
                we've been dedicated to connecting loving families with healthy, well-bred pets while providing 
                comprehensive care services.
              </p>
              <p>
                Our journey began with a passion for animals and a commitment to ethical pet breeding and sales. 
                We carefully select and breed premium pets, ensuring each one is healthy, well-socialized, and ready 
                to become a cherished family member. From adorable puppies to beautiful cats and exotic birds, we 
                offer a curated selection of pets.
              </p>
              <p>
                Today, we're proud to be a complete pet destination - offering premium pets for sale alongside 
                comprehensive care services including boarding, grooming, healthcare, training, and emergency care. 
                Whether you're looking for your new best friend or need expert care for your current companion, 
                we're here to help.
              </p>
            </div>
          </motion.div>

          {/* Our Mission */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={hasAnimated ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-500"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                <span className="text-white text-xl">🎯</span>
              </div>
              <h3 className="text-3xl font-bold text-white">Our Mission</h3>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30">
                <h4 className="text-xl font-bold text-white mb-3">🐾 Perfect Pet Matching</h4>
                <p className="text-slate-300">
                  Connecting loving families with healthy, well-bred pets through ethical breeding practices and careful selection processes.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-amber-500/20 to-yellow-500/20 backdrop-blur-sm rounded-xl p-6 border border-amber-400/30">
                <h4 className="text-xl font-bold text-white mb-3">❤️ Complete Pet Care</h4>
                <p className="text-slate-300">
                  Providing exceptional care services including boarding, grooming, healthcare, training, and emergency support for all pets.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-xl p-6 border border-blue-400/30">
                <h4 className="text-xl font-bold text-white mb-3">🏆 Lifetime Support</h4>
                <p className="text-slate-300">
                  Building lasting relationships with pet families through ongoing guidance, health consultations, and 24/7 emergency assistance.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center mb-12"
        >
          <h3 className="text-4xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
              Meet Our Team
            </span>
          </h3>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Passionate professionals dedicated to your pet's wellbeing
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 1.6 + index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-500 text-center"
            >
              <div className="text-6xl mb-6">{member.image}</div>
              <h4 className="text-2xl font-bold text-white mb-2">{member.name}</h4>
              <p className="text-amber-400 font-semibold mb-4">{member.role}</p>
              <p className="text-slate-300 leading-relaxed">{member.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;