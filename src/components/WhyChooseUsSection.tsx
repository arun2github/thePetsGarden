'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const WhyChooseUsSection = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Global animation control
  const markAsAnimated = () => {
    if (!hasAnimated) {
      setHasAnimated(true);
    }
  };

  // Check if animations should run (only once on first load)
  const shouldAnimate = () => {
    return !hasAnimated;
  };

  const reasons = [
    {
      id: 1,
      icon: "🏆",
      title: "Premium Pet Selection",
      description: "Carefully curated collection of healthy, well-socialized pets from certified breeders. Every pet comes with complete health records and genetic screening.",
      premium: "Quality Assured"
    },
    {
      id: 2,
      icon: "🛍️",
      title: "Complete Pet Solutions",
      description: "Everything you need in one place - from premium pets to food, accessories, grooming, training, and ongoing veterinary support.",
      premium: "One-Stop Shop"
    },
    {
      id: 3,
      icon: "💎",
      title: "Luxury Experience",
      description: "Premium service experience with personalized consultations, home delivery, and lifetime support for you and your new family member.",
      premium: "VIP Treatment"
    },
    {
      id: 4,
      icon: "🤝",
      title: "Lifetime Partnership",
      description: "We don't just sell pets - we build relationships. Ongoing support, training guidance, health consultations, and emergency assistance.",
      premium: "Forever Support"
    }
  ];

  const stats = [
    { number: "1,500+", label: "Pets Sold & Delivered", icon: "🐾", color: "from-amber-400 to-amber-600" },
    { number: "850+", label: "Happy Pet Families", icon: "❤️", color: "from-rose-400 to-rose-600" },
    { number: "8+", label: "Years in Business", icon: "⭐", color: "from-yellow-400 to-yellow-600" },
    { number: "24/7", label: "Support & Services", icon: "🚨", color: "from-emerald-400 to-emerald-600" }
  ];

  const reviews = [
    {
      id: 1,
      name: "Priya Sharma",
      location: "Mumbai",
      petType: "Golden Retriever - Bruno",
      rating: 5,
      review: "Bruno has been the perfect addition to our family! The Pets Garden's professional care and attention to detail exceeded all expectations. Bruno arrived healthy, well-socialized, and absolutely gorgeous. The team's expertise in matching pets to families is remarkable.",
      image: "👩‍💼",
      verified: true,
      petEmoji: "🐕"
    },
    {
      id: 2,
      name: "Rajesh Patel",
      location: "Delhi",
      petType: "Persian Cat - Princess",
      rating: 5,
      review: "Princess is absolutely stunning! The Pets Garden's premium breeding program and health guarantees gave us complete confidence. Their aftercare support has been exceptional, and Princess has brought so much joy to our home. Worth every penny!",
      image: "👨‍💼",
      verified: true,
      petEmoji: "🐱"
    },
    {
      id: 3,
      name: "Anita Krishnan",
      location: "Bangalore",
      petType: "Labrador - Charlie",
      rating: 5,
      review: "Charlie's temperament and training were outstanding from day one. The Pets Garden's comprehensive health screening and vaccination records were impeccable. The team's knowledge about pet behavior and care guidance has been invaluable.",
      image: "👩",
      verified: true,
      petEmoji: "🐕"
    },
    {
      id: 4,
      name: "Vikram Singh",
      location: "Pune",
      petType: "Maine Coon - Tiger",
      rating: 5,
      review: "Tiger is magnificent! The luxury facilities at The Pets Garden are impressive, and their breeding standards are clearly top-tier. Tiger's health certificate and lineage documentation were thorough. Exceptional service throughout!",
      image: "👨",
      verified: true,
      petEmoji: "🐱"
    },
    {
      id: 5,
      name: "Meera Gupta",
      location: "Chennai",
      petType: "German Shepherd - Rocky",
      rating: 5,
      review: "Rocky has the most wonderful temperament and intelligence. The Pets Garden's training foundation was excellent, making our transition smooth. Their commitment to ethical breeding and health transparency is commendable.",
      image: "👩‍🦱",
      verified: true,
      petEmoji: "🐕"
    },
    {
      id: 6,
      name: "Arjun Malhotra",
      location: "Hyderabad",
      petType: "British Shorthair - Luna",
      rating: 5,
      review: "Luna is absolutely perfect! The premium care and socialization she received at The Pets Garden shows in her confident, loving nature. The health guarantees and ongoing support demonstrate their commitment to excellence.",
      image: "👨‍💻",
      verified: true,
      petEmoji: "🐱"
    },
    {
      id: 7,
      name: "Sneha Reddy",
      location: "Kolkata",
      petType: "Beagle - Milo",
      rating: 5,
      review: "Milo's playful yet well-behaved nature is a testament to The Pets Garden's excellent breeding and early training. The detailed health records and genetic screening gave us complete peace of mind. Highly recommended!",
      image: "👩‍💼",
      verified: true,
      petEmoji: "🐕"
    },
    {
      id: 8,
      name: "Karthik Nair",
      location: "Kochi",
      petType: "Ragdoll - Bella",
      rating: 5,
      review: "Bella's gentle nature and stunning beauty reflect The Pets Garden's premium breeding standards. Their transparent process, health guarantees, and exceptional customer service made this experience truly special.",
      image: "👨‍🔬",
      verified: true,
      petEmoji: "🐱"
    },
    {
      id: 9,
      name: "Ravi Kumar",
      location: "Jaipur",
      petType: "Rottweiler - Max",
      rating: 5,
      review: "Max came with complete vaccination records and perfect health certificates. The buying process was transparent with fair pricing. The team helped us understand Max's dietary needs and training requirements. Outstanding customer service!",
      image: "👨‍🏭",
      verified: true,
      petEmoji: "🐕"
    },
    {
      id: 10,
      name: "Deepika Agarwal",
      location: "Indore",
      petType: "Siamese Cat - Coco",
      rating: 5,
      review: "Coco's pedigree documentation was impressive! The Pets Garden provided detailed lineage information and genetic health clearances. Their post-purchase support with feeding schedules and vet recommendations was invaluable. Highly professional!",
      image: "👩‍🎓",
      verified: true,
      petEmoji: "🐱"
    },
    {
      id: 11,
      name: "Amit Joshi",
      location: "Nashik",
      petType: "Pomeranian - Fluffy",
      rating: 5,
      review: "Fluffy arrived exactly as described with all promised accessories. The home delivery service was punctual and professional. The breeder consultation before purchase helped us choose the perfect temperament match for our family.",
      image: "👨‍🔧",
      verified: true,
      petEmoji: "🐕"
    },
    {
      id: 12,
      name: "Kavya Menon",
      location: "Trivandrum",
      petType: "Scottish Fold - Whiskers",
      rating: 5,
      review: "Whiskers has the most amazing personality! The Pets Garden's breeding ethics are exemplary - no genetic issues and perfect health. Their lifetime support promise gives us confidence. Best pet purchase experience ever!",
      image: "👩‍🔬",
      verified: true,
      petEmoji: "🐱"
    },
    {
      id: 13,
      name: "Suresh Tiwari",
      location: "Lucknow",
      petType: "Boxer - Champion",
      rating: 5,
      review: "Champion's training foundation was exceptional! He knew basic commands and was house-trained when he arrived. The pricing was fair with no hidden costs. The team's expertise in matching pets to owners is unmatched in the industry.",
      image: "👨‍💼",
      verified: true,
      petEmoji: "🐕"
    },
    {
      id: 14,
      name: "Pooja Singh",
      location: "Kanpur",
      petType: "Bengal Cat - Simba",
      rating: 5,
      review: "Simba's exotic markings are stunning! The Pets Garden provided authentic breed certification and health guarantees. Their follow-up care instructions and 24/7 support hotline made the transition seamless. Premium quality service!",
      image: "👩‍⚕️",
      verified: true,
      petEmoji: "🐱"
    },
    {
      id: 15,
      name: "Manoj Yadav",
      location: "Bhopal",
      petType: "Husky - Storm",
      rating: 5,
      review: "Storm's energy level and beautiful coat exceeded expectations! The comprehensive puppy kit with food, toys, and care guides was fantastic. The breeder's consultation about climate adaptation for Huskies was incredibly helpful.",
      image: "👨‍🚀",
      verified: true,
      petEmoji: "🐕"
    }
  ];

  // Auto-advance reviews
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  return (
    <section className="py-24 bg-gradient-to-br from-stone-50 via-amber-50/30 to-white relative overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-amber-400/8 to-stone-400/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-stone-400/8 to-amber-400/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 15, repeat: Infinity, delay: 5 }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Premium Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          onViewportEnter={() => markAsAnimated()}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={hasAnimated ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-100 to-stone-100 px-8 py-4 rounded-full mb-8 border-2 border-amber-200/50"
          >
            <span className="text-stone-700 font-bold text-lg">Premium Pet Store & Complete Services</span>
          </motion.div>
          
          <motion.h2 
            className="text-5xl md:text-7xl font-bold text-stone-800 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Why Choose <span className="bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent">The Pets Garden</span>?
          </motion.h2>
          
          <motion.p 
            className="text-xl md:text-2xl text-stone-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Your trusted destination for premium pets and comprehensive pet services. From carefully selected healthy pets to complete care solutions - everything your furry family needs.
          </motion.p>
        </motion.div>

        {/* Premium Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {reasons.map((reason, index) => (
            <motion.div 
              key={reason.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={hasAnimated ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ duration: 0.7, delay: index * 0.15, type: "spring", stiffness: 100 }}
              className="group relative perspective-1000"
            >
              {/* Awesome Premium Card */}
              <div className="relative bg-gradient-to-br from-white via-amber-50/30 to-stone-50/20 rounded-3xl shadow-2xl transition-all duration-700 overflow-hidden transform-gpu">
                
                {/* Multi-Layer Glow Effect */}
                <div className="absolute -inset-2 bg-gradient-to-br from-amber-400/20 via-amber-300/15 to-stone-400/10 rounded-[32px] blur-xl opacity-0 transition-opacity duration-700" />
                <div className="absolute -inset-1 bg-gradient-to-br from-amber-500/15 via-amber-400/10 to-stone-500/8 rounded-[28px] blur-md opacity-60 transition-opacity duration-700" />
                
                {/* Enhanced Premium Border */}
                <motion.div 
                  className="absolute -inset-0.5 rounded-[26px] p-[3px] opacity-70 transition-opacity duration-700"
                  style={{
                    background: `linear-gradient(135deg, 
                      #f59e0b 0%, 
                      #d97706 20%, 
                      #92400e 40%, 
                      #78716c 60%, 
                      #d97706 80%, 
                      #f59e0b 100%
                    )`
                  }}
                >
                  <div className="w-full h-full bg-gradient-to-br from-white via-amber-50/30 to-stone-50/20 rounded-3xl" />
                </motion.div>

                {/* Awesome Background Effects */}
                <div className="absolute inset-0 overflow-hidden rounded-3xl">
                  <motion.div
                    className="absolute -top-16 -right-16 w-48 h-48 bg-gradient-to-br from-amber-400/12 to-amber-300/8 rounded-full blur-3xl"
                    animate={{
                      scale: [1, 1.4, 1],
                      opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.div
                    className="absolute -bottom-12 -left-12 w-40 h-40 bg-gradient-to-br from-stone-400/10 to-amber-400/12 rounded-full blur-2xl"
                    animate={{
                      scale: [1.3, 1, 1.3],
                      opacity: [0.15, 0.35, 0.15],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 4 }}
                  />
                  
                  {/* Premium Sparkles */}
                  <motion.div
                    className="absolute top-24 right-24 w-3 h-3 bg-amber-400 rounded-full opacity-0"
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0, 1.2, 0],
                    }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1, type: "tween" }}
                  />
                  <motion.div
                    className="absolute bottom-28 left-20 w-2 h-2 bg-stone-400 rounded-full opacity-0"
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                    }}
                    transition={{ duration: 4, repeat: Infinity, delay: 2.5, type: "tween" }}
                  />
                  <motion.div
                    className="absolute top-40 left-32 w-1.5 h-1.5 bg-yellow-400 rounded-full opacity-0"
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0, 1.3, 0],
                    }}
                    transition={{ duration: 3.5, repeat: Infinity, delay: 0.5, type: "tween" }}
                  />
                </div>

                {/* Luxury Corner Accents */}
                <div className="absolute top-4 left-4 w-8 h-8 border-l-4 border-t-4 border-amber-400/80 rounded-tl-3xl transition-all duration-500" />
                <div className="absolute top-4 right-4 w-8 h-8 border-r-4 border-t-4 border-amber-400/80 rounded-tr-3xl transition-all duration-500" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-l-4 border-b-4 border-amber-400/80 rounded-bl-3xl transition-all duration-500" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-r-4 border-b-4 border-amber-400/80 rounded-br-3xl transition-all duration-500" />

                {/* Content */}
                <div className="relative p-10">
                  <div className="flex flex-col">
                    <div className="flex-1">
                      {/* Enhanced Premium Badge */}
                      <motion.div
                        className="inline-flex items-center bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-white px-6 py-3 rounded-2xl text-sm font-bold mb-6 shadow-xl relative overflow-hidden"
                      >
                        <span className="relative z-10">{reason.premium}</span>
                      </motion.div>

                      <motion.h3 
                        className="text-4xl font-bold text-stone-800 mb-6 transition-colors duration-500"
                      >
                        {reason.title}
                      </motion.h3>
                      
                      <motion.p 
                        className="text-stone-600 leading-relaxed text-lg transition-colors duration-300"
                      >
                        {reason.description}
                      </motion.p>
                    </div>
                  </div>
                </div>

                {/* Awesome Premium Accent Bar */}
                <motion.div 
                  className="absolute bottom-0 left-0 w-full h-3 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 transform scale-x-0 transition-transform duration-1000 origin-left"
                  whileHover={{
                    height: 12,
                    boxShadow: "0 0 40px rgba(245, 158, 11, 0.7)",
                  }}
                  transition={{ duration: 0.4 }}
                />

                {/* Premium Inner Glow */}
                <motion.div 
                  className="absolute inset-3 rounded-2xl border-2 border-amber-200/30 transition-colors duration-700 pointer-events-none opacity-0"
                  style={{
                    boxShadow: "inset 0 0 60px rgba(245, 158, 11, 0.1)"
                  }}
                />

                {/* Card Overall Glow Effect */}
                <motion.div 
                  className="absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-1000 pointer-events-none"
                  style={{
                    boxShadow: "inset 0 0 120px rgba(245, 158, 11, 0.08), 0 0 60px rgba(245, 158, 11, 0.15)"
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Premium Statistics */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="bg-gradient-to-br from-white/80 via-amber-50/40 to-white/80 backdrop-blur-xl rounded-3xl p-12 mb-24 border-2 border-amber-100/60 shadow-2xl relative overflow-hidden"
        >
          {/* Background Animation */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-amber-400/5 via-transparent to-stone-400/5"
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear", type: "tween" }}
          />
          
          <div className="relative z-10">
            <motion.h3 
              className="text-4xl font-bold text-center text-stone-800 mb-12"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={hasAnimated ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 1.7 }}
            >
              Our <span className="bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent">Premium Track Record</span>
            </motion.h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={hasAnimated ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.8, delay: 1.9 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-stone-800/90 backdrop-blur-xl rounded-xl p-6 border border-amber-400/30 shadow-xl hover:bg-stone-800/95 hover:shadow-2xl transition-all duration-300 text-center group"
                >
                  <div className="text-3xl mb-3">{stat.icon}</div>
                  <div className={`text-3xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.number}
                  </div>
                  <div className="text-slate-300 font-semibold group-hover:text-white transition-colors duration-300">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Premium Reviews Slider */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 2.5 }}
          className="relative"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <motion.h3 
              className="text-4xl font-bold text-stone-800 mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={hasAnimated ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 2.7 }}
            >
               What Our <span className="bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent">Premium Families</span> Say
            </motion.h3>
            <p className="text-xl text-stone-600">Real experiences from our satisfied pet parents</p>
          </div>

          {/* Reviews Slider */}
          <div className="relative bg-gradient-to-br from-white/90 via-amber-50/30 to-white/90 backdrop-blur-xl rounded-3xl p-12 border-2 border-amber-100/60 shadow-2xl overflow-hidden min-h-[400px]">
            
            {/* Background Animation */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-amber-400/3 via-transparent to-stone-400/3"
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear", type: "tween" }}
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={currentReview}
                initial={{ opacity: 0, x: 50, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -50, scale: 0.95 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="relative z-10"
              >
                <div className="max-w-4xl mx-auto text-center">
                  {/* Review Text */}
                  <motion.p 
                    className="text-2xl md:text-3xl text-stone-700 mb-8 leading-relaxed font-medium italic"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    "{reviews[currentReview].review}"
                  </motion.p>

                  {/* Reviewer Info */}
                  <motion.div 
                    className="flex items-center justify-center gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <div className="w-20 h-20 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full flex items-center justify-center text-3xl shadow-lg">
                      {reviews[currentReview].image}
                    </div>
                    <div className="text-left">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-bold text-stone-800 text-xl">{reviews[currentReview].name}</span>
                        {reviews[currentReview].verified && (
                          <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">✓ Verified</span>
                        )}
                      </div>
                      <div className="text-stone-600 mb-1">{reviews[currentReview].location}</div>
                      <div className="flex items-center gap-2 text-amber-700 font-semibold">
                        <span>{reviews[currentReview].petEmoji}</span>
                        <span>{reviews[currentReview].petType}</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-3 mt-12">
              {reviews.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentReview(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentReview 
                      ? 'bg-amber-500 w-8' 
                      : 'bg-amber-200 hover:bg-amber-300'
                  }`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <motion.button
              onClick={() => setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg border-2 border-amber-200/60 transition-colors duration-300"
            >
              <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            <motion.button
              onClick={() => setCurrentReview((prev) => (prev + 1) % reviews.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg border-2 border-amber-200/60 transition-colors duration-300"
            >
              <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;