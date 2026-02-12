'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const ServicesSection = () => {
  const [hasAnimated, setHasAnimated] = useState(false);

  const shouldAnimate = () => {
    return !hasAnimated;
  };

  const markAsAnimated = () => {
    if (!hasAnimated) {
      setHasAnimated(true);
    }
  };

  // Helper function to get image positioning for each service
  const getImagePosition = (serviceId: number) => {
    switch (serviceId) {
      case 1: // Hostel Facility
        return 'object-center';
      case 2: // Supplement + Medicine
        return 'object-center';
      case 3: // Hair Grooming + Cleaning
        return 'object-center';
      case 4: // Care Taker
        return 'object-center';
      case 5: // Fish
        return 'object-center';
      case 6: // Dog
        return 'object-top';
      case 7: // Cat
        return 'object-center';
      case 8: // Training for Dog
        return 'object-center';
      case 9: // Bird Care
        return 'object-center';
      default:
        return 'object-center';
    }
  };

  const services = [
    {
      id: 1,
      title: "Hostel Facility",
      description: "Safe, comfortable boarding that feels like a second home with round-the-clock care and supervision for your beloved pets.",
      image: "/images/hostel.png",
      features: ["24/7 Supervision", "Comfort Suites", "Play Areas", "Daily Updates"]
    },
    {
      id: 2,
      title: "Supplement + Medicine",
      description: "Natural supplements and expert veterinary care to ensure your pet's lifelong health and vitality with premium products.",
      image: "/images/suppliments_medicine.png",
      features: ["Health Checkups", "Natural Supplements", "Preventive Care", "Emergency Services"]
    },
    {
      id: 3,
      title: "Hair Grooming + Cleaning",
      description: "Professional grooming services with spa-level treatments in a calm, caring environment designed for your pet's comfort.",
      image: "/images/hair_gromming.png",
      features: ["Professional Styling", "Hair Cleaning", "Nail Care", "Premium Products"]
    },
    {
      id: 4,
      title: "Care Taker",
      description: "Dedicated professional caretakers providing personalized attention and loving care for your pets when you're away.",
      image: "/images/petCare.png",
      features: ["Personal Attention", "Daily Activities", "Health Monitoring", "Love & Care"]
    },
    {
      id: 5,
      title: "Fish Care & Sales",
      description: "Premium aquatic pets for sale plus specialized care services including proper feeding, tank maintenance and health monitoring.",
      image: "/images/fish_Auwatic care.png",
      features: ["Premium Fish Sales", "Tank Maintenance", "Feeding Schedule", "Health Check"]
    },
    {
      id: 6,
      title: "Dog Care & Sales",
      description: "Quality dog breeds for sale along with comprehensive care services including grooming, training, and health maintenance.",
      image: "/images/DogCare.png",
      features: ["Purebred Sales", "Dog Care", "Exercise Plans", "Health Support"]
    },
    {
      id: 7,
      title: "Cat Care & Sales", 
      description: "Beautiful cat breeds available for purchase plus specialized feline care services tailored to meet your cat's unique needs.",
      image: "/images/catCare.png",
      features: ["Quality Breeds", "Cat Care", "Play Sessions", "Health Monitoring"]
    },
    {
      id: 8,
      title: "Training for Dog",
      description: "Comprehensive training programs that build trust, confidence, and create well-behaved, happy dog companions.",
      image: "/images/dog_tarining.png",
      features: ["Obedience Training", "Behavioral Therapy", "Socialization", "Advanced Commands"]
    },
    {
      id: 9,
      title: "Bird Care & Sales",
      description: "Exotic and domestic birds for sale plus expert avian care services including nutrition, cage maintenance, and health monitoring.",
      image: "/images/service_bird.png",
      features: ["Exotic Birds Sales", "Cage Cleaning", "Nutrition Planning", "Health Monitoring"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-amber-50/50 via-white to-stone-50/50">
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
              <span className="bg-gradient-to-r from-amber-600 via-amber-500 to-stone-600 bg-clip-text text-transparent">
                Premium Services
              </span>
            </h2>
            <motion.div
              className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full "
              initial={{ width: 0 }}
              animate={hasAnimated ? { width: 96 } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </motion.div>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed  ">
            Comprehensive pet care services designed with love, expertise, and dedication to your beloved companion's happiness and wellbeing.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative h-full"
            >
              {/* Dark Card Structure */}
              <div className="bg-gradient-to-br from-stone-800 to-stone-900 w-full h-full rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col">
                
                {/* Image */}
                <div className="relative overflow-hidden h-48 flex-shrink-0">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={400}
                      height={200}
                      className={`w-full h-full object-cover ${getImagePosition(service.id)}`}
                    />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col">
                  {/* Title */}
                  <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-amber-300 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-stone-300 mb-6 leading-relaxed flex-grow">
                    {service.description}
                  </p>

                  {/* Feature Tags in Bordered Container */}
                  <div className="border border-stone-600 rounded-xl p-4 bg-stone-800/50 mt-auto">
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, idx) => (
                        <motion.span 
                          key={idx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={hasAnimated ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                          transition={{ delay: 1.5 + (index * 0.1) + (0.1 * idx) }}
                          whileHover={{ scale: 1.05 }}
                          className="inline-flex items-center bg-stone-700/80 border border-stone-600 text-stone-200 text-sm font-medium px-3 py-1.5 rounded-full hover:bg-amber-900/30 hover:border-amber-600/50 hover:text-amber-200 transition-all duration-300"
                        >
                          {feature}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Premium CTA Section */}
       
      </div>
    </section>
  );
};
export default ServicesSection;