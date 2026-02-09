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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `Hello! I'm interested in your pet care services.

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Pet Type: ${formData.petType}
Service: ${formData.service}
Message: ${formData.message}`;

    const whatsappUrl = `https://wa.me/919534413619?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleMapClick = () => {
    const address = "Tiwari tola opp tiwari transport, Saharsa, Bihar";
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(googleMapsUrl, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-stone-50 via-amber-50/20 to-white relative overflow-hidden">
      {/* Subtle Professional Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-stone-400/5 rounded-full blur-3xl"></div>
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
            className="text-5xl md:text-7xl font-bold text-stone-800 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-amber-600 via-amber-500 to-stone-600 bg-clip-text text-transparent">
              Get in Touch
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed"
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
              className="bg-white rounded-2xl shadow-xl border border-stone-100 overflow-hidden"
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mr-4">
                    <div className="w-6 h-6 border-2 border-white rounded-full relative">
                      <div className="absolute inset-1 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-stone-800">Visit Our Facility</h3>
                </div>
                
                <div className="bg-gradient-to-r from-amber-50 to-stone-50 rounded-xl p-6 mb-6">
                  <p className="text-stone-700 leading-relaxed">
                    <span className="font-semibold text-stone-800">Tiwari tola opp tiwari transport</span><br />
                    <span className="text-amber-700 font-medium">Saharsa, Bihar</span><br />
                    <span className="text-stone-600">sanjutiwarishw@gmail.com</span>
                  </p>
                </div>
                
                <button
                  onClick={handleMapClick}
                  className="w-full bg-gradient-to-r from-amber-600 to-amber-500 text-white font-semibold py-3 px-6 rounded-xl hover:from-amber-700 hover:to-amber-600 transition-all duration-300 shadow-lg hover:shadow-xl"
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
                className="bg-white rounded-xl shadow-lg border border-stone-100 p-6 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                    <div className="w-5 h-5 border-2 border-white rounded-sm">
                      <div className="w-1 h-1 bg-white rounded-full mt-1 ml-1"></div>
                    </div>
                  </div>
                  <h4 className="font-bold text-stone-800 text-lg">Call Us</h4>
                </div>
                <p className="text-green-600 font-bold text-xl mb-1">+91 9534413619</p>
                <p className="text-stone-600 text-sm">Available 24/7 for emergencies</p>
              </motion.a>

              <motion.a 
                href="mailto:sanjutiwarishw@gmail.com"
                initial={{ opacity: 0, x: -40 }}
                animate={hasAnimated ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="bg-white rounded-xl shadow-lg border border-stone-100 p-6 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                    <div className="w-5 h-3 bg-white rounded-sm relative">
                      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-b-2 border-transparent border-b-blue-500"></div>
                    </div>
                  </div>
                  <h4 className="font-bold text-stone-800 text-lg">Email Us</h4>
                </div>
                <p className="text-blue-600 font-bold text-lg mb-1">sanjutiwarishw@gmail.com</p>
                <p className="text-stone-600 text-sm">Professional inquiries welcome</p>
              </motion.a>
            </div>

            {/* Social Media */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              animate={hasAnimated ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="bg-gradient-to-r from-amber-600 to-amber-500 rounded-2xl p-8 text-white shadow-xl"
            >
              <h3 className="text-2xl font-bold mb-4 text-center">Stay Connected</h3>
              <p className="text-center mb-6 text-amber-100">Follow our journey and get updates</p>
              
              <div className="space-y-4">
                <a 
                  href="https://wa.me/919534413619" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-3 bg-white/20 rounded-xl p-4 hover:bg-white/30 transition-all duration-300"
                >
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <span className="font-semibold">WhatsApp</span>
                </a>

                <div className="grid grid-cols-2 gap-4">
                  <a 
                    href="https://www.instagram.com/the.petsgarden/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 bg-white/20 rounded-lg p-3 hover:bg-white/30 transition-all duration-300"
                  >
                    <div className="w-5 h-5 border-2 border-white rounded-lg relative">
                      <div className="absolute top-1 right-1 w-1 h-1 bg-white rounded-full"></div>
                      <div className="absolute inset-2 border border-white rounded-full"></div>
                    </div>
                    <span className="font-medium">Instagram</span>
                  </a>

                  <a 
                    href="https://www.facebook.com/sanjutiwarishw/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 bg-white/20 rounded-lg p-3 hover:bg-white/30 transition-all duration-300"
                  >
                    <div className="w-5 h-5 bg-white rounded flex items-center justify-center">
                      <div className="w-3 h-3 bg-blue-600 rounded-sm"></div>
                    </div>
                    <span className="font-medium">Facebook</span>
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
            className="bg-white rounded-2xl shadow-2xl border border-stone-100 overflow-hidden"
          >
            <div className="bg-gradient-to-r from-amber-600 to-amber-500 p-8 text-white">
              <h3 className="text-3xl font-bold mb-2">Send a Message</h3>
              <p className="text-amber-100">We'll get back to you within 24 hours</p>
            </div>
            
            <div className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-stone-700 font-semibold mb-2">
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
                      className={`w-full px-4 py-3 border-2 rounded-lg text-stone-800 transition-all duration-300 ${
                        focusedField === 'name' 
                          ? 'border-amber-400 ring-4 ring-amber-100' 
                          : 'border-stone-200 focus:border-amber-400'
                      }`}
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-stone-700 font-semibold mb-2">
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
                      className={`w-full px-4 py-3 border-2 rounded-lg text-stone-800 transition-all duration-300 ${
                        focusedField === 'email' 
                          ? 'border-amber-400 ring-4 ring-amber-100' 
                          : 'border-stone-200 focus:border-amber-400'
                      }`}
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-stone-700 font-semibold mb-2">
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
                      className={`w-full px-4 py-3 border-2 rounded-lg text-stone-800 transition-all duration-300 ${
                        focusedField === 'phone' 
                          ? 'border-amber-400 ring-4 ring-amber-100' 
                          : 'border-stone-200 focus:border-amber-400'
                      }`}
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="petType" className="block text-stone-700 font-semibold mb-2">
                      Pet Type
                    </label>
                    <select
                      id="petType"
                      name="petType"
                      value={formData.petType}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('petType')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-4 py-3 border-2 rounded-lg text-stone-800 transition-all duration-300 ${
                        focusedField === 'petType' 
                          ? 'border-amber-400 ring-4 ring-amber-100' 
                          : 'border-stone-200 focus:border-amber-400'
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
                  <label htmlFor="service" className="block text-stone-700 font-semibold mb-2">
                    Service Required
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('service')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-3 border-2 rounded-lg text-stone-800 transition-all duration-300 ${
                      focusedField === 'service' 
                        ? 'border-amber-400 ring-4 ring-amber-100' 
                        : 'border-stone-200 focus:border-amber-400'
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
                  <label htmlFor="message" className="block text-stone-700 font-semibold mb-2">
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
                    className={`w-full px-4 py-3 border-2 rounded-lg text-stone-800 transition-all duration-300 resize-none ${
                      focusedField === 'message' 
                        ? 'border-amber-400 ring-4 ring-amber-100' 
                        : 'border-stone-200 focus:border-amber-400'
                    }`}
                    placeholder="Please describe your pet's needs and any specific requirements..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-600 to-amber-500 text-white text-lg font-semibold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl hover:from-amber-700 hover:to-amber-600 transition-all duration-300"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message via WhatsApp
                </motion.button>

                <p className="text-center text-stone-600 text-sm">
                  By submitting this form, you'll be redirected to WhatsApp to complete your message.
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