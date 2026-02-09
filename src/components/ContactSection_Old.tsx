'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    petType: '',
    service: '',
    message: ''
  });
  const [hasAnimated, setHasAnimated] = useState(false);

  const markAsAnimated = () => {
    if (!hasAnimated) {
      setHasAnimated(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleMapClick = () => {
    const address = "Tiwari tola opp tiwari transport saharsa";
    const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}`;
    window.open(mapUrl, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-stone-50 via-amber-50/30 to-white relative overflow-hidden">
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
            scale: [1.3, 1, 1.3],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 3 }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
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
            <div className="w-3 h-3 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full animate-pulse"></div>
            <span className="font-semibold text-stone-700 text-lg">Premium Pet Care Connection</span>
            <div className="w-3 h-3 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full animate-pulse"></div>
          </motion.div>

          <motion.h2 
            className="text-5xl md:text-7xl font-bold text-stone-800 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-amber-600 via-amber-500 to-stone-600 bg-clip-text text-transparent">
              Connect With Excellence
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl text-stone-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Experience the pinnacle of pet care excellence. Let's create an extraordinary journey for your beloved companion together.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Premium Contact Information */}
          <div className="space-y-12">
            {/* Luxury Location Card */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              animate={hasAnimated ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="group relative perspective-1000"
            >
              {/* Premium Card with Multi-Layer Effects */}
              <div className="relative bg-gradient-to-br from-white via-amber-50/30 to-stone-50/20 rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-700 overflow-hidden p-10">
                
                {/* Multi-Layer Glow Effect */}
                <div className="absolute -inset-2 bg-gradient-to-br from-amber-400/20 via-amber-300/15 to-stone-400/10 rounded-[32px] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute -inset-1 bg-gradient-to-br from-amber-500/15 via-amber-400/10 to-stone-500/8 rounded-[28px] blur-md opacity-60 group-hover:opacity-80 transition-opacity duration-700" />
                
                {/* Enhanced Premium Border */}
                <motion.div 
                  className="absolute -inset-0.5 rounded-[26px] p-[3px] opacity-70 group-hover:opacity-100 transition-opacity duration-700"
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

                {/* Luxury Accent Corners */}
                <div className="absolute top-4 left-4 w-8 h-8 border-l-3 border-t-3 border-amber-400/70 rounded-tl-2xl group-hover:border-amber-500/80 transition-colors duration-500" />
                <div className="absolute top-4 right-4 w-8 h-8 border-r-3 border-t-3 border-amber-400/70 rounded-tr-2xl group-hover:border-amber-500/80 transition-colors duration-500" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-l-3 border-b-3 border-amber-400/70 rounded-bl-2xl group-hover:border-amber-500/80 transition-colors duration-500" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-r-3 border-b-3 border-amber-400/70 rounded-br-2xl group-hover:border-amber-500/80 transition-colors duration-500" />
                
                {/* Luxury Inner Glow */}
                <div className="absolute inset-3 rounded-2xl border border-amber-200/30 group-hover:border-amber-300/50 transition-colors duration-700 pointer-events-none" />

                {/* Premium Background Effects */}
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
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold text-stone-800 mb-8 flex items-center gap-4">
                    <div className="w-4 h-10 bg-gradient-to-b from-amber-600 to-amber-500 rounded-full relative">
                      <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    </div>
                    Visit Our Luxury Facility
                  </h3>
                  
                  <div className="space-y-8">
                    {/* Premium Address Display */}
                    <div className="flex items-start space-x-6">
                      <div className="relative">
                        <div className="w-20 h-20 bg-gradient-to-r from-amber-100 to-amber-200 rounded-full flex items-center justify-center border-4 border-amber-300/50 group-hover:border-amber-400/70 transition-colors duration-500">
                          <div className="w-12 h-12 bg-gradient-to-r from-amber-600 to-amber-700 rounded-full flex items-center justify-center relative">
                            <div className="w-4 h-4 bg-white rounded-full animate-pulse"></div>
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
                          </div>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-stone-800 mb-3 text-xl">Our Premium Location</h4>
                        <div className="bg-gradient-to-r from-amber-50/50 to-stone-50/50 rounded-2xl p-4 border border-amber-200/30">
                          <p className="text-stone-700 leading-relaxed text-lg font-medium">
                            Tiwari tola opp tiwari transport<br />
                            <span className="text-amber-700 font-semibold">Saharsa, Bihar</span><br />
                            <span className="text-stone-600">sanjutiwarishw@gmail.com</span>
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Premium Interactive Map */}
                    <div 
                      onClick={handleMapClick}
                      className="relative bg-gradient-to-br from-amber-50/80 to-stone-50/80 rounded-3xl p-8 border-2 border-amber-200/50 cursor-pointer hover:border-amber-400/70 transition-all duration-500 group overflow-hidden"
                    >
                      {/* Premium Map Background Effects */}
                      <motion.div
                        className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-amber-400/20 to-amber-300/10 rounded-full blur-xl"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 0.8, 0.5],
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                      />
                      
                      <div className="flex items-center justify-center space-x-6">
                        <div className="relative">
                          <div className="w-24 h-24 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl relative">
                            <motion.div 
                              className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center"
                              animate={{
                                rotateY: [0, 180, 360],
                              }}
                              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            >
                              <div className="w-8 h-8 border-3 border-white border-dashed rounded-lg animate-spin" style={{ animationDuration: '3s' }}></div>
                            </motion.div>
                            <div className="absolute -top-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                              <div className="w-3 h-3 bg-amber-500 rounded-full animate-pulse"></div>
                            </div>
                          </div>
                        </div>
                        <div className="text-center">
                          <h4 className="font-bold text-stone-800 text-xl group-hover:text-amber-700 transition-colors mb-2">
                            Navigate to Our Facility
                          </h4>
                          <p className="text-stone-600 font-medium">
                            Experience premium pet care in person
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Premium Contact Links */}
                    <div className="grid grid-cols-1 gap-6">
                      <a 
                        href="tel:+919534413619"
                        className="group relative overflow-hidden bg-gradient-to-r from-green-50/80 to-green-100/80 rounded-3xl p-6 border-2 border-green-200/50 hover:border-green-400/70 transition-all duration-500"
                      >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        />
                        <div className="relative flex items-center space-x-4">
                          <div className="relative">
                            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl">
                              <motion.div 
                                className="w-8 h-8 bg-white rounded border-3 border-green-500 relative"
                                animate={{
                                  scale: [1, 1.1, 1],
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                              >
                                <div className="absolute inset-1 bg-green-500 rounded-sm"></div>
                              </motion.div>
                            </div>
                            <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-400 rounded-full animate-ping"></div>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-stone-800 text-lg mb-1">Direct Contact</h4>
                            <p className="text-green-700 font-bold text-xl">+91 9534413619</p>
                            <p className="text-stone-600 text-sm">Available 24/7 for emergencies</p>
                          </div>
                        </div>
                      </a>

                      <a 
                        href="mailto:sanjutiwarishw@gmail.com"
                        className="group relative overflow-hidden bg-gradient-to-r from-blue-50/80 to-blue-100/80 rounded-3xl p-6 border-2 border-blue-200/50 hover:border-blue-400/70 transition-all duration-500"
                      >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        />
                        <div className="relative flex items-center space-x-4">
                          <div className="relative">
                            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl">
                              <motion.div 
                                className="w-8 h-5 bg-white rounded-sm border border-blue-500 relative"
                                animate={{
                                  rotateX: [0, 15, 0],
                                }}
                                transition={{ duration: 3, repeat: Infinity }}
                              >
                                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-3 border-r-3 border-b-3 border-transparent border-b-blue-500"></div>
                              </motion.div>
                            </div>
                            <div className="absolute -top-1 -right-1 w-5 h-5 bg-blue-400 rounded-full animate-ping"></div>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-stone-800 text-lg mb-1">Email Support</h4>
                            <p className="text-blue-700 font-bold text-lg">sanjutiwarishw@gmail.com</p>
                            <p className="text-stone-600 text-sm">Professional inquiries welcome</p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Social Media & WhatsApp */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              animate={hasAnimated ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-gradient-to-r from-amber-400 to-amber-500 rounded-3xl p-8 text-white shadow-2xl"
            >
              <h3 className="text-3xl font-bold mb-6 text-center">
                Connect With Us
              </h3>
              <p className="text-center mb-8 text-lg text-amber-100">
                Follow our journey and get instant updates about your pets
              </p>
              
              <div className="grid grid-cols-1 gap-4">
                <a 
                  href="https://wa.me/919534413619" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-3 bg-white/20 backdrop-blur rounded-2xl p-4 hover:bg-white/30 transition-all duration-300 group border border-white/30"
                >
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="font-bold text-lg">WhatsApp Chat</span>
                  <div className="w-6 h-6 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                    <div className="w-0 h-0 border-l-4 border-y-2 border-l-white border-y-transparent"></div>
                  </div>
                </a>

                <div className="grid grid-cols-2 gap-4">
                  <a 
                    href="https://www.instagram.com/the.petsgarden/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur rounded-2xl p-4 hover:from-pink-500/30 hover:to-purple-500/30 transition-all duration-300 group border border-white/30"
                  >
                    <div className="w-5 h-5 border-2 border-white rounded-lg relative">
                      <div className="absolute top-1 right-1 w-1 h-1 bg-white rounded-full"></div>
                      <div className="absolute inset-2 border border-white rounded-full"></div>
                    </div>
                    <span className="font-semibold">Instagram</span>
                  </a>

                  <a 
                    href="https://www.facebook.com/sanjutiwarishw/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 bg-blue-500/20 backdrop-blur rounded-2xl p-4 hover:bg-blue-500/30 transition-all duration-300 group border border-white/30"
                  >
                    <div className="w-5 h-5 bg-white rounded flex items-center justify-center">
                      <div className="w-3 h-3 bg-blue-600 rounded-sm"></div>
                    </div>
                    <span className="font-semibold">Facebook</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Premium Professional Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={hasAnimated ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="group relative perspective-1000"
          >
            {/* Premium Form Container with Multi-Layer Effects */}
            <div className="relative bg-gradient-to-br from-white via-amber-50/30 to-stone-50/20 rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-700 overflow-hidden p-10">
              
              {/* Multi-Layer Glow Effect */}
              <div className="absolute -inset-2 bg-gradient-to-br from-amber-400/20 via-amber-300/15 to-stone-400/10 rounded-[32px] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute -inset-1 bg-gradient-to-br from-amber-500/15 via-amber-400/10 to-stone-500/8 rounded-[28px] blur-md opacity-60 group-hover:opacity-80 transition-opacity duration-700" />
              
              {/* Enhanced Premium Border */}
              <motion.div 
                className="absolute -inset-0.5 rounded-[26px] p-[3px] opacity-70 group-hover:opacity-100 transition-opacity duration-700"
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

              {/* Luxury Accent Corners */}
              <div className="absolute top-4 left-4 w-8 h-8 border-l-3 border-t-3 border-amber-400/70 rounded-tl-2xl group-hover:border-amber-500/80 transition-colors duration-500" />
              <div className="absolute top-4 right-4 w-8 h-8 border-r-3 border-t-3 border-amber-400/70 rounded-tr-2xl group-hover:border-amber-500/80 transition-colors duration-500" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-l-3 border-b-3 border-amber-400/70 rounded-bl-2xl group-hover:border-amber-500/80 transition-colors duration-500" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-r-3 border-b-3 border-amber-400/70 rounded-br-2xl group-hover:border-amber-500/80 transition-colors duration-500" />
              
              {/* Luxury Inner Glow */}
              <div className="absolute inset-3 rounded-2xl border border-amber-200/30 group-hover:border-amber-300/50 transition-colors duration-700 pointer-events-none" />

              {/* Premium Background Effects */}
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
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-4xl font-bold text-stone-800 mb-10 flex items-center gap-4">
                  <div className="w-4 h-10 bg-gradient-to-b from-amber-600 to-amber-500 rounded-full relative">
                    <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  </div>
                  Professional Inquiry
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="group">
                      <label htmlFor="name" className="block text-stone-800 font-bold mb-4 text-lg">
                        Full Name
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-6 py-5 bg-gradient-to-r from-white/90 to-amber-50/50 backdrop-blur border-3 border-amber-300/60 rounded-2xl text-stone-800 placeholder-stone-500 focus:outline-none focus:ring-4 focus:ring-amber-400/50 focus:border-amber-500 transition-all duration-500 text-lg font-medium group-hover:border-amber-400/80"
                          placeholder="Enter your full name"
                        />
                        <div className="absolute top-3 right-4 w-3 h-3 bg-amber-400 rounded-full opacity-0 group-focus-within:opacity-100 animate-pulse transition-opacity duration-300"></div>
                      </div>
                    </div>
                    
                    <div className="group">
                      <label htmlFor="email" className="block text-stone-800 font-bold mb-4 text-lg">
                        Email Address
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-6 py-5 bg-gradient-to-r from-white/90 to-amber-50/50 backdrop-blur border-3 border-amber-300/60 rounded-2xl text-stone-800 placeholder-stone-500 focus:outline-none focus:ring-4 focus:ring-amber-400/50 focus:border-amber-500 transition-all duration-500 text-lg font-medium group-hover:border-amber-400/80"
                          placeholder="your.email@domain.com"
                        />
                        <div className="absolute top-3 right-4 w-3 h-3 bg-amber-400 rounded-full opacity-0 group-focus-within:opacity-100 animate-pulse transition-opacity duration-300"></div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="group">
                      <label htmlFor="phone" className="block text-stone-800 font-bold mb-4 text-lg">
                        Phone Number
                      </label>
                      <div className="relative">
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-6 py-5 bg-gradient-to-r from-white/90 to-amber-50/50 backdrop-blur border-3 border-amber-300/60 rounded-2xl text-stone-800 placeholder-stone-500 focus:outline-none focus:ring-4 focus:ring-amber-400/50 focus:border-amber-500 transition-all duration-500 text-lg font-medium group-hover:border-amber-400/80"
                          placeholder="+91 XXXXX XXXXX"
                        />
                        <div className="absolute top-3 right-4 w-3 h-3 bg-amber-400 rounded-full opacity-0 group-focus-within:opacity-100 animate-pulse transition-opacity duration-300"></div>
                      </div>
                    </div>
                    
                    <div className="group">
                      <label htmlFor="petType" className="block text-stone-800 font-bold mb-4 text-lg">
                        Pet Category
                      </label>
                      <div className="relative">
                        <select
                          id="petType"
                          name="petType"
                          value={formData.petType}
                          onChange={handleChange}
                          className="w-full px-6 py-5 bg-gradient-to-r from-white/90 to-amber-50/50 backdrop-blur border-3 border-amber-300/60 rounded-2xl text-stone-800 focus:outline-none focus:ring-4 focus:ring-amber-400/50 focus:border-amber-500 transition-all duration-500 text-lg font-medium group-hover:border-amber-400/80 cursor-pointer"
                        >
                          <option value="">Select pet category</option>
                          <option value="dog">Dog</option>
                          <option value="cat">Cat</option>
                          <option value="bird">Bird</option>
                          <option value="fish">Fish</option>
                          <option value="other">Other</option>
                        </select>
                        <div className="absolute top-3 right-4 w-3 h-3 bg-amber-400 rounded-full opacity-0 group-focus-within:opacity-100 animate-pulse transition-opacity duration-300"></div>
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <label htmlFor="service" className="block text-stone-800 font-bold mb-4 text-lg">
                      Professional Service Required
                    </label>
                    <div className="relative">
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-6 py-5 bg-gradient-to-r from-white/90 to-amber-50/50 backdrop-blur border-3 border-amber-300/60 rounded-2xl text-stone-800 focus:outline-none focus:ring-4 focus:ring-amber-400/50 focus:border-amber-500 transition-all duration-500 text-lg font-medium group-hover:border-amber-400/80 cursor-pointer"
                      >
                        <option value="">Choose professional service</option>
                        <option value="boarding">Premium Pet Boarding & Hostel</option>
                        <option value="grooming">Professional Hair Grooming & Cleaning</option>
                        <option value="healthcare">Healthcare - Supplements & Medicine</option>
                        <option value="caretaker">Dedicated Care Taker Services</option>
                        <option value="training">Professional Dog Training</option>
                        <option value="purchase">Premium Pet Purchase</option>
                        <option value="consultation">Expert Consultation</option>
                      </select>
                      <div className="absolute top-3 right-4 w-3 h-3 bg-amber-400 rounded-full opacity-0 group-focus-within:opacity-100 animate-pulse transition-opacity duration-300"></div>
                    </div>
                  </div>

                  <div className="group">
                    <label htmlFor="message" className="block text-stone-800 font-bold mb-4 text-lg">
                      Professional Inquiry Details
                    </label>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full px-6 py-5 bg-gradient-to-r from-white/90 to-amber-50/50 backdrop-blur border-3 border-amber-300/60 rounded-2xl text-stone-800 placeholder-stone-500 focus:outline-none focus:ring-4 focus:ring-amber-400/50 focus:border-amber-500 transition-all duration-500 resize-none text-lg font-medium leading-relaxed group-hover:border-amber-400/80"
                        placeholder="Please provide detailed information about your pet care requirements, specific needs, timeline, and any special considerations..."
                      ></textarea>
                      <div className="absolute top-3 right-4 w-3 h-3 bg-amber-400 rounded-full opacity-0 group-focus-within:opacity-100 animate-pulse transition-opacity duration-300"></div>
                    </div>
                  </div>

                  {/* Premium Submit Button */}
                  <div className="relative pt-4">
                    <motion.button
                      type="submit"
                      className="group relative w-full overflow-hidden bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-white text-xl px-8 py-6 rounded-2xl font-bold shadow-2xl hover:shadow-amber-400/60 transition-all duration-500"
                      whileHover={{ scale: 1.02, y: -3 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Premium Button Background Effects */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-amber-500/50 to-amber-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      />
                      <motion.div
                        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/60 to-transparent"
                        animate={{
                          x: ['-100%', '100%'],
                        }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      />
                      
                      <div className="relative flex items-center justify-center space-x-4">
                        <div className="w-6 h-6 border-2 border-white rounded-lg group-hover:rotate-45 transition-transform duration-500">
                          <div className="w-2 h-2 bg-white rounded-full m-auto mt-0.5 group-hover:scale-110 transition-transform duration-300"></div>
                        </div>
                        <span>Submit Professional Inquiry</span>
                        <div className="w-6 h-6 flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300">
                          <div className="w-0 h-0 border-l-4 border-y-2 border-l-white border-y-transparent"></div>
                        </div>
                      </div>
                    </motion.button>
                  </div>
                </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;