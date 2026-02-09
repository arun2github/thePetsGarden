'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  petType: string;
  service: string;
  message: string;
}

const ContactSection = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const markAsAnimated = () => {
    if (!hasAnimated) {
      setHasAnimated(true);
    }
  };

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    petType: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Send to API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        // Also send to WhatsApp
        const whatsappMessage = `Hello! I'm interested in your pet care services.

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Pet Type: ${formData.petType}
Service: ${formData.service}
Message: ${formData.message}`;

        const whatsappUrl = `https://wa.me/919534413619?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappUrl, '_blank');
        
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          petType: '',
          service: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleMapClick = () => {
    const address = "Tiwari tola opp tiwari transport, Saharsa, Bihar";
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(googleMapsUrl, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-900 via-stone-800 to-slate-900 relative overflow-hidden">
      {/* Modern Professional Background */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-amber-500/20 via-orange-400/15 to-yellow-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-400/10 via-purple-500/15 to-amber-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-emerald-400/10 to-teal-500/15 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] bg-[size:40px_40px]"></div>
        
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Professional Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          onViewportEnter={() => markAsAnimated()}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Get in Touch
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Ready to provide exceptional care for your beloved companion? Let's discuss your pet's needs.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Professional Contact Information */}
          <div className="space-y-8">
            {/* Location Card */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              animate={hasAnimated ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden hover:bg-white/15 transition-all duration-500"
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                    <div className="w-6 h-6 border-2 border-white rounded-full relative">
                      <div className="absolute inset-1 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Visit Our Facility</h3>
                </div>
                
                <div className="bg-gradient-to-r from-amber-500/20 to-yellow-500/20 backdrop-blur-sm rounded-xl p-6 mb-6 border border-amber-400/30">
                  <p className="text-slate-200 leading-relaxed">
                    <span className="font-semibold text-white">Tiwari tola opp tiwari transport</span><br />
                    <span className="text-amber-300 font-medium">Saharsa, Bihar</span><br />
                    <span className="text-slate-300">sanjutiwarishw@gmail.com</span>
                  </p>
                </div>
                
                <button
                  onClick={handleMapClick}
                  className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 text-white font-semibold py-3 px-6 rounded-xl hover:from-amber-600 hover:to-yellow-600 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105"
                >
                  Get Directions
                </button>
              </div>
            </motion.div>

            {/* Contact Methods */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.a 
                href="tel:+919534413619"
                initial={{ opacity: 0, x: -40 }}
                animate={hasAnimated ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="bg-white/10 backdrop-blur-xl rounded-xl shadow-2xl border border-white/20 p-6 hover:bg-white/15 hover:shadow-2xl transition-all duration-500 group hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mr-3 shadow-lg">
                    <div className="w-5 h-5 border-2 border-white rounded-sm">
                      <div className="w-1 h-1 bg-white rounded-full mt-1 ml-1"></div>
                    </div>
                  </div>
                  <h4 className="font-bold text-white text-lg">Call Us</h4>
                </div>
                <p className="text-green-400 font-bold text-xl mb-1">+91 9534413619</p>
                <p className="text-slate-300 text-sm">Available 24/7 for emergencies</p>
              </motion.a>

              <motion.a 
                href="mailto:sanjutiwarishw@gmail.com"
                initial={{ opacity: 0, x: -40 }}
                animate={hasAnimated ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="bg-white/10 backdrop-blur-xl rounded-xl shadow-2xl border border-white/20 p-6 hover:bg-white/15 hover:shadow-2xl transition-all duration-500 group hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center mr-3 shadow-lg">
                    <div className="w-5 h-3 bg-white rounded-sm relative">
                      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-b-2 border-transparent border-b-cyan-500"></div>
                    </div>
                  </div>
                  <h4 className="font-bold text-white text-lg">Email Us</h4>
                </div>
                <p className="text-blue-400 font-bold text-lg mb-1">sanjutiwarishw@gmail.com</p>
                <p className="text-slate-300 text-sm">Professional inquiries welcome</p>
              </motion.a>
            </div>

            {/* Social Media */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              animate={hasAnimated ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="bg-gradient-to-r from-amber-500/20 to-yellow-500/20 backdrop-blur-xl rounded-2xl p-8 border border-amber-400/30 shadow-2xl"
            >
              <h3 className="text-2xl font-bold mb-4 text-center text-white">Stay Connected</h3>
              <p className="text-center mb-6 text-amber-200">Follow our journey and get updates</p>
              
              <div className="space-y-4">
                <a 
                  href="https://wa.me/919534413619" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-md">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <span className="font-semibold text-white">WhatsApp</span>
                </a>

                <div className="grid grid-cols-2 gap-4">
                  <a 
                    href="https://www.instagram.com/the.petsgarden/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg p-3 hover:bg-white/20 transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    <div className="w-5 h-5 border-2 border-white rounded-lg relative">
                      <div className="absolute top-1 right-1 w-1 h-1 bg-white rounded-full"></div>
                      <div className="absolute inset-2 border border-white rounded-full"></div>
                    </div>
                    <span className="font-medium text-white">Instagram</span>
                  </a>

                  <a 
                    href="https://www.facebook.com/sanjutiwarishw/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg p-3 hover:bg-white/20 transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    <div className="w-5 h-5 bg-white rounded flex items-center justify-center">
                      <div className="w-3 h-3 bg-blue-600 rounded-sm"></div>
                    </div>
                    <span className="font-medium text-white">Facebook</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Professional Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={hasAnimated ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden hover:bg-white/15 transition-all duration-500"
          >
            <div className="bg-gradient-to-r from-amber-500 to-yellow-500 p-8 text-white">
              <h3 className="text-3xl font-bold mb-2">Send a Message</h3>
              <p className="text-amber-100">We'll get back to you within 24 hours</p>
            </div>
            
            <div className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-semibold mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className={`w-full px-4 py-3 bg-white/10 backdrop-blur-sm border-2 rounded-lg text-white placeholder-slate-300 transition-all duration-300 ${
                        focusedField === 'name' 
                          ? 'border-amber-400 ring-4 ring-amber-400/30 bg-white/15' 
                          : 'border-white/30 focus:border-amber-400'
                      }`}
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-white font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className={`w-full px-4 py-3 bg-white/10 backdrop-blur-sm border-2 rounded-lg text-white placeholder-slate-300 transition-all duration-300 ${
                        focusedField === 'email' 
                          ? 'border-amber-400 ring-4 ring-amber-400/30 bg-white/15' 
                          : 'border-white/30 focus:border-amber-400'
                      }`}
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-white font-semibold mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-4 py-3 bg-white/10 backdrop-blur-sm border-2 rounded-lg text-white placeholder-slate-300 transition-all duration-300 ${
                        focusedField === 'phone' 
                          ? 'border-amber-400 ring-4 ring-amber-400/30 bg-white/15' 
                          : 'border-white/30 focus:border-amber-400'
                      }`}
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="petType" className="block text-white font-semibold mb-2">
                      Pet Type
                    </label>
                    <select
                      id="petType"
                      name="petType"
                      value={formData.petType}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('petType')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-4 py-3 bg-white/10 backdrop-blur-sm border-2 rounded-lg text-white transition-all duration-300 ${
                        focusedField === 'petType' 
                          ? 'border-amber-400 ring-4 ring-amber-400/30 bg-white/15' 
                          : 'border-white/30 focus:border-amber-400'
                      }`}
                    >
                      <option value="">Select your pet type</option>
                      <option value="dog">Dog</option>
                      <option value="cat">Cat</option>
                      <option value="bird">Bird</option>
                      <option value="fish">Fish</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-white font-semibold mb-2">
                    Service Required
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('service')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-3 bg-white/10 backdrop-blur-sm border-2 rounded-lg text-white transition-all duration-300 ${
                      focusedField === 'service' 
                        ? 'border-amber-400 ring-4 ring-amber-400/30 bg-white/15' 
                        : 'border-white/30 focus:border-amber-400'
                    }`}
                  >
                    <option value="">Select a service</option>
                    <option value="boarding">Pet Boarding & Hostel</option>
                    <option value="grooming">Hair Grooming & Cleaning</option>
                    <option value="healthcare">Supplements & Medicine</option>
                    <option value="caretaker">Care Taker Services</option>
                    <option value="training">Dog Training</option>
                    <option value="purchase">Pet Purchase</option>
                    <option value="consultation">Consultation</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    rows={5}
                    className={`w-full px-4 py-3 bg-white/10 backdrop-blur-sm border-2 rounded-lg text-white placeholder-slate-300 transition-all duration-300 resize-none ${
                      focusedField === 'message' 
                        ? 'border-amber-400 ring-4 ring-amber-400/30 bg-white/15' 
                        : 'border-white/30 focus:border-amber-400'
                    }`}
                    placeholder="Please describe your pet's needs and any specific requirements..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full text-white text-lg font-semibold py-4 px-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 ${
                    isSubmitting 
                      ? 'bg-gradient-to-r from-gray-500 to-gray-600 cursor-not-allowed' 
                      : submitStatus === 'success'
                      ? 'bg-gradient-to-r from-green-500 to-green-600'
                      : submitStatus === 'error'
                      ? 'bg-gradient-to-r from-red-500 to-red-600'
                      : 'bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600'
                  }`}
                  whileHover={!isSubmitting ? { y: -2 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : submitStatus === 'success' ? (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Message Sent!</span>
                    </>
                  ) : submitStatus === 'error' ? (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span>Try Again</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.89 3.488"/>
                      </svg>
                    </>
                  )}
                </motion.button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-500/20 border border-green-500/30 text-green-400 p-4 rounded-lg text-center"
                  >
                    <p className="font-semibold">Message sent successfully!</p>
                    <p className="text-sm mt-1">We'll get back to you soon. You'll also be redirected to WhatsApp.</p>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-500/20 border border-red-500/30 text-red-400 p-4 rounded-lg text-center"
                  >
                    <p className="font-semibold">Something went wrong</p>
                    <p className="text-sm mt-1">Please try again or contact us directly via WhatsApp.</p>
                  </motion.div>
                )}

                <p className="text-center text-slate-300 text-sm">
                  {submitStatus === 'success' 
                    ? "Your message has been sent via email and WhatsApp will open automatically." 
                    : "Your message will be sent via email and you'll also be redirected to WhatsApp."
                  }
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;