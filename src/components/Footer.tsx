const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      <div className="container-max">
        {/* Main footer content */}
        <div className="py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center shadow-2xl">
                <span className="text-white font-playfair font-bold text-2xl">🐾</span>
              </div>
              <h3 className="text-3xl font-playfair font-bold">The Pets Garden</h3>
            </div>
            
            <p className="text-white/80 mb-8 text-lg leading-relaxed max-w-md">
              🌟 Where love meets premium care! We're dedicated to providing exceptional pet care services with creativity, compassion, and endless love for your furry family members.
            </p>
            
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-14 h-14 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-110 border border-white/20"
                aria-label="Facebook"
              >
                <span className="text-white text-xl">📘</span>
              </a>
              
              <a 
                href="#" 
                className="w-14 h-14 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-110 border border-white/20"
                aria-label="Instagram"
              >
                <span className="text-white text-xl">📷</span>
              </a>
              
              <a 
                href="#" 
                className="w-14 h-14 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-110 border border-white/20"
                aria-label="Twitter"
              >
                <span className="text-white text-xl">🐦</span>
              </a>
              
              <a 
                href="https://wa.me/919876543210" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center hover:from-green-400 hover:to-green-500 transition-all duration-300 transform hover:scale-110 shadow-lg"
                aria-label="WhatsApp"
              >
                <span className="text-white text-xl">💬</span>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-2xl font-playfair font-bold mb-8 text-yellow-300">🚀 Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <a href="#services" className="text-white/80 hover:text-yellow-300 transition-colors duration-300 text-lg hover:translate-x-2 transform transition-transform inline-block">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#pets" className="text-white/80 hover:text-yellow-300 transition-colors duration-300 text-lg hover:translate-x-2 transform transition-transform inline-block">
                  Available Pets
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-white/80 hover:text-yellow-300 transition-colors duration-300 text-lg hover:translate-x-2 transform transition-transform inline-block">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-yellow-300 transition-colors duration-300 text-lg hover:translate-x-2 transform transition-transform inline-block">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-yellow-300 transition-colors duration-300 text-lg hover:translate-x-2 transform transition-transform inline-block">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-yellow-300 transition-colors duration-300 text-lg hover:translate-x-2 transform transition-transform inline-block">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-2xl font-playfair font-bold mb-8 text-yellow-300">🌟 Our Services</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-white/80 hover:text-yellow-300 transition-colors duration-300 text-lg hover:translate-x-2 transform transition-transform inline-block">
                  🏨 Pet Hotel
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-yellow-300 transition-colors duration-300 text-lg hover:translate-x-2 transform transition-transform inline-block">
                  ✂️ Grooming Spa
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-yellow-300 transition-colors duration-300 text-lg hover:translate-x-2 transform transition-transform inline-block">
                  💊 Healthcare
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-yellow-300 transition-colors duration-300 text-lg hover:translate-x-2 transform transition-transform inline-block">
                  ❤️ Pet Care
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-yellow-300 transition-colors duration-300 text-lg hover:translate-x-2 transform transition-transform inline-block">
                  🎓 Pet Training
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-yellow-300 transition-colors duration-300 text-lg hover:translate-x-2 transform transition-transform inline-block">
                  🚨 Emergency Care
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Newsletter signup */}
        <div className="py-12 border-t border-white/20">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div>
                <h4 className="text-3xl font-playfair font-bold mb-4 text-yellow-300">📧 Stay in the Loop!</h4>
                <p className="text-white/80 text-lg">
                  Get updates about new services, pet care tips, and special offers straight to your inbox! 🌟
                </p>
              </div>
              
              <div className="flex w-full lg:w-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="flex-1 lg:w-80 px-6 py-4 rounded-l-full bg-white/20 backdrop-blur-lg border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <button className="bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-300 hover:to-orange-300 px-8 py-4 rounded-r-full font-bold transition-all duration-300 transform hover:scale-105 shadow-xl">
                  🚀 Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom footer */}
        <div className="py-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="text-white/80 text-lg">
              © {currentYear} The Pets Garden. All rights reserved. Made with 💖 for pets and their amazing families.
            </div>
            
            <div className="flex items-center space-x-8 text-lg">
              <a href="#" className="text-white/80 hover:text-yellow-300 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-white/80 hover:text-yellow-300 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-white/80 hover:text-yellow-300 transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;