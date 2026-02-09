'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-stone-900 to-slate-900 text-white relative overflow-hidden">
      {/* Modern Professional Background */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-r from-amber-500/15 via-orange-400/10 to-yellow-500/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-500/10 via-purple-500/12 to-amber-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-emerald-400/8 to-teal-500/12 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.03)_1px,transparent_0)] bg-[size:50px_50px]"></div>
        
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-slate-900/60"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Main footer content */}
        <div className="py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full flex items-center justify-center shadow-2xl relative">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full animate-pulse opacity-75"></div>
                <span className="text-white font-bold text-2xl relative z-10">T</span>
              </div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
                The Pets Garden
              </h3>
            </div>
            
            <p className="text-slate-300 mb-8 text-lg leading-relaxed max-w-md">
              Where love meets premium care! We're dedicated to providing exceptional pet care services with creativity, compassion, and endless love for your furry family members.
            </p>
            
            <div className="flex space-x-4">
              <motion.a 
                href="https://www.facebook.com/sanjutiwarishw/" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center hover:bg-blue-500/20 transition-all duration-300 border border-white/20 shadow-lg"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </motion.a>
              
              <motion.a 
                href="https://www.instagram.com/the.petsgarden/" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center hover:bg-pink-500/20 transition-all duration-300 border border-white/20 shadow-lg"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </motion.a>
              
              <motion.a 
                href="mailto:sanjutiwarishw@gmail.com" 
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center hover:bg-red-500/20 transition-all duration-300 border border-white/20 shadow-lg"
                aria-label="Gmail"
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
                </svg>
              </motion.a>
              
              <motion.a 
                href="https://wa.me/919534413619" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center hover:from-green-400 hover:to-emerald-400 transition-all duration-300 shadow-lg"
                aria-label="WhatsApp"
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.89 3.488"/>
                </svg>
              </motion.a>
            </div>
          </motion.div>
          
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="text-2xl font-bold mb-8 bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {[
                { href: "#services", text: "Our Services" },
                { href: "#pets", text: "Available Pets" },
                { href: "#gallery", text: "Gallery" },
                { href: "#contact", text: "Contact Us" },
                { href: "#", text: "About Us" },
                { href: "#", text: "Careers" }
              ].map((link, index) => (
                <li key={index}>
                  <motion.a 
                    href={link.href} 
                    whileHover={{ x: 8 }}
                    className="text-slate-300 hover:text-amber-400 transition-all duration-300 text-lg flex items-center group"
                  >
                    <div className="w-2 h-2 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-3"></div>
                    {link.text}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h4 className="text-2xl font-bold mb-8 bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
              Our Services
            </h4>
            <ul className="space-y-4">
              {[
                "Pet Hotel & Boarding",
                "Grooming Spa",
                "Healthcare & Medicine",
                "Care Taker Services",
                "Pet Training",
                "Emergency Care"
              ].map((service, index) => (
                <li key={index}>
                  <motion.a 
                    href="#" 
                    whileHover={{ x: 8 }}
                    className="text-slate-300 hover:text-amber-400 transition-all duration-300 text-lg flex items-center group"
                  >
                    <div className="w-2 h-2 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-3"></div>
                    {service}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
        
        {/* Creative Professional Developer Credit */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="py-6 border-t border-white/10 relative"
        >
          <div className="text-center relative">
            {/* Floating background elements */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 bg-gradient-to-r from-amber-400/10 to-purple-500/10 rounded-full blur-2xl animate-pulse"></div>
            </div>
            
            <motion.div 
              whileHover={{ scale: 1.02, y: -2 }}
              className="relative inline-flex items-center justify-center space-x-4 bg-gradient-to-r from-white/10 via-white/5 to-white/10 backdrop-blur-xl rounded-2xl px-6 py-3 border border-gradient-to-r border-amber-400/20 shadow-xl hover:shadow-2xl transition-all duration-500 group"
            >
              {/* Animated background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 via-purple-500/10 to-blue-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              
              <div className="relative flex items-center space-x-3">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="relative w-8 h-8 bg-gradient-to-br from-amber-400 via-orange-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-purple-600 rounded-full animate-ping opacity-20"></div>
                  <span className="text-white text-xs font-bold relative z-10">AK</span>
                </motion.div>
                
                <div className="flex items-center space-x-2">
                  <span className="text-slate-300 text-sm">Crafted with</span>
                  <motion.span
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="text-red-400"
                  >
                    ❤️
                  </motion.span>
                  <span className="text-slate-300 text-sm">by</span>
                  <motion.span 
                    className="bg-gradient-to-r from-amber-400 via-orange-500 to-purple-500 bg-clip-text text-transparent font-bold text-sm"
                    animate={{
                      backgroundPosition: ['0%', '100%', '0%'],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    Arun Kumar
                  </motion.span>
                </div>
              </div>
              
              <div className="h-6 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
              
              <div className="flex items-center gap-2">
                <motion.a
                  href="http://arundevfolio.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white text-xs font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl group/btn overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 flex items-center">
                    Portfolio
                    <motion.svg 
                      className="ml-1 w-3 h-3" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      whileHover={{ x: 2 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </motion.svg>
                  </span>
                </motion.a>
                
                <motion.a
                  href="https://wa.me/918882726711?text=Hi Arun! I saw your amazing work on The Pets Garden website. I'd love to discuss a project with you!"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white text-xs font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl group/btn overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full shadow-lg"
                  ></motion.div>
                  <span className="relative z-10 flex items-center">
                    💬 Let's Talk
                  </span>
                </motion.a>
              </div>
            </motion.div>
            
            {/* Subtle tagline */}
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-slate-500 text-xs mt-2"
            >
              Full Stack Developer • Modern Web Solutions
            </motion.p>
          </div>
        </motion.div>
        
        {/* Enhanced Copyright Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="py-8 border-t border-white/10"
        >
          <div className="bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-sm">T</span>
                </div>
                <div className="text-slate-300 text-lg">
                  © {currentYear} <span className="font-semibold text-white">The Pets Garden</span>. All rights reserved.
                </div>
              </div>
              
              <div className="flex items-center space-x-6 text-sm">
                <motion.div whileHover={{ y: -2 }}>
                  <Link 
                    href="/privacy-policy"
                    className="text-slate-400 hover:text-amber-400 transition-all duration-300 flex items-center space-x-1"
                  >
                    <span>🔒</span>
                    <span>Privacy</span>
                  </Link>
                </motion.div>
                <motion.div whileHover={{ y: -2 }}>
                  <Link 
                    href="/terms-and-conditions"
                    className="text-slate-400 hover:text-amber-400 transition-all duration-300 flex items-center space-x-1"
                  >
                    <span>📋</span>
                    <span>Terms</span>
                  </Link>
                </motion.div>
                <motion.a 
                  href="#" 
                  whileHover={{ y: -2, color: "#fbbf24" }}
                  className="text-slate-400 hover:text-amber-400 transition-all duration-300 flex items-center space-x-1"
                >
                  <span>🍪</span>
                  <span>Cookies</span>
                </motion.a>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-white/10 text-center">
              <p className="text-slate-400 text-sm flex items-center justify-center space-x-2">
                <span>Made with</span>
                <span className="text-red-400 animate-pulse">❤️</span>
                <span>for pets and their amazing families</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;