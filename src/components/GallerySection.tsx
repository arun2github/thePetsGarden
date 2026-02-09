'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ImageMedia {
  type: 'image';
  src: string;
  alt: string;
}

interface VideoMedia {
  type: 'video';
  src: string;
  poster: string;
}

type MediaItem = ImageMedia | VideoMedia;

const GallerySection = () => {
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const markAsAnimated = () => {
    if (!hasAnimated) {
      setHasAnimated(true);
    }
  };

  // All media files from the gallery folder
  const galleryMedia: MediaItem[] = [
    { type: 'image', src: '/images/gallery/Dog14.jpeg', alt: 'Beautiful Dog' },
    { type: 'image', src: '/images/gallery/bird.jpeg', alt: 'Colorful Bird' },
    { type: 'image', src: '/images/gallery/bird2.jpeg', alt: 'Bird Portrait' },
    { type: 'image', src: '/images/gallery/cat.jpeg', alt: 'Lovely Cat' },
    { type: 'video', src: '/images/gallery/dog.mp4', poster: '/images/gallery/dog3.jpeg' },
    { type: 'video', src: '/images/gallery/dog1.mp4', poster: '/images/gallery/dog4.jpeg' },
    { type: 'image', src: '/images/gallery/dog10.jpeg', alt: 'Playful Dog' },
    { type: 'image', src: '/images/gallery/dog11.jpeg', alt: 'Happy Dog' },
    { type: 'image', src: '/images/gallery/dog12.jpeg', alt: 'Dog Portrait' },
    { type: 'image', src: '/images/gallery/dog13.jpeg', alt: 'Cute Dog' },
    { type: 'image', src: '/images/gallery/dog15.jpeg', alt: 'Dog Playing' },
    { type: 'image', src: '/images/gallery/dog16.jpeg', alt: 'Beautiful Dog' },
    { type: 'video', src: '/images/gallery/dog17.mp4', poster: '/images/gallery/dog5.jpeg' },
    { type: 'video', src: '/images/gallery/dog18.mp4', poster: '/images/gallery/dog6.jpeg' },
    { type: 'video', src: '/images/gallery/dog2.mp4', poster: '/images/gallery/dog8.jpeg' },
    { type: 'video', src: '/images/gallery/dog20.mp4', poster: '/images/gallery/dog9.jpeg' },
    { type: 'video', src: '/images/gallery/dog21.mp4', poster: '/images/gallery/dog22.jpeg' },
    { type: 'image', src: '/images/gallery/dog22.jpeg', alt: 'Adorable Dog' },
    { type: 'video', src: '/images/gallery/dog22.mp4', poster: '/images/gallery/dog3.jpeg' },
    { type: 'video', src: '/images/gallery/dog23.mp4', poster: '/images/gallery/dog4.jpeg' },
    { type: 'video', src: '/images/gallery/dog24.mp4', poster: '/images/gallery/dog5.jpeg' },
    { type: 'video', src: '/images/gallery/dog25.mp4', poster: '/images/gallery/dog6.jpeg' },
    { type: 'video', src: '/images/gallery/dog26.mp4', poster: '/images/gallery/dog8.jpeg' },
    { type: 'image', src: '/images/gallery/dog3.jpeg', alt: 'Sweet Dog' },
    { type: 'image', src: '/images/gallery/dog4.jpeg', alt: 'Dog Friend' },
    { type: 'image', src: '/images/gallery/dog5.jpeg', alt: 'Happy Pup' },
    { type: 'image', src: '/images/gallery/dog6.jpeg', alt: 'Playful Pup' },
    { type: 'video', src: '/images/gallery/dog7.mp4', poster: '/images/gallery/dog9.jpeg' },
    { type: 'image', src: '/images/gallery/dog8.jpeg', alt: 'Cute Puppy' },
    { type: 'image', src: '/images/gallery/dog9.jpeg', alt: 'Dog Portrait' },
    { type: 'video', src: '/images/gallery/dog_vedio.mp4', poster: '/images/gallery/puppy1.jpeg' },
    { type: 'image', src: '/images/gallery/parrot.jpeg', alt: 'Beautiful Parrot' },
    { type: 'image', src: '/images/gallery/persiancat.jpeg', alt: 'Persian Cat' },
    { type: 'image', src: '/images/gallery/pigeon.jpeg', alt: 'Peaceful Pigeon' },
    { type: 'image', src: '/images/gallery/puppy1.jpeg', alt: 'Adorable Puppy' }
  ];

  // Separate images and videos
  const images = galleryMedia.filter((media): media is ImageMedia => media.type === 'image');
  const videos = galleryMedia.filter((media): media is VideoMedia => media.type === 'video');

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-amber-50/50 via-white to-stone-50/50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          onViewportEnter={() => markAsAnimated()}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-5xl md:text-7xl font-bold text-stone-800 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-amber-600 via-amber-500 to-stone-600 bg-clip-text text-transparent">
              📸 Our Pet Gallery
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl text-stone-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Experience the joy and love through our collection of precious moments with our beloved pets
          </motion.p>
        </motion.div>

        {/* Images Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center text-stone-800 mb-12">
            <span className="bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent">
              🖼️ Photo Gallery
            </span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {images.map((media, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={hasAnimated ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.9 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.05 }}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                onClick={() => setSelectedMedia(media)}
              >
                <div className="relative aspect-square">
                  <Image
                    src={media.src}
                    alt={media.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-amber-600/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-4">
                  <div className="text-white">
                    <p className="font-semibold text-sm">
                      📷 View Full Size
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Videos Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center text-stone-800 mb-12">
            <span className="bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent">
              🎬 Video Gallery
            </span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {videos.map((media, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={hasAnimated ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.9 }}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                onClick={() => setSelectedMedia(media)}
              >
                <div className="relative aspect-video">
                  <video
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    poster={media.poster}
                    muted
                    onMouseEnter={(e) => (e.target as HTMLVideoElement).play()}
                    onMouseLeave={(e) => {
                      const video = e.target as HTMLVideoElement;
                      video.pause();
                      video.currentTime = 0;
                    }}
                  >
                    <source src={media.src} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                      <span className="text-amber-600 text-2xl">▶</span>
                    </div>
                  </div>
                  <div className="absolute top-3 right-3 bg-amber-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                    VIDEO
                  </div>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-amber-600/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-4">
                  <div className="text-white">
                    <p className="font-semibold text-sm">
                      🎬 Play Video
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 2.5 }}
          className="text-center mt-16"
        >
          <motion.a 
            href="https://wa.me/919876543210" 
            target="_blank"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-600 to-amber-500 text-white font-semibold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            📱 Share Your Pet's Moment
          </motion.a>
          <motion.p 
            className="text-stone-600 mt-4 text-lg"
            initial={{ opacity: 0 }}
            animate={hasAnimated ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 2.7 }}
          >
            Have beautiful moments to share? We'd love to feature your pet!
          </motion.p>
        </motion.div>
      </div>

      {/* Modal for viewing selected media */}
      {selectedMedia && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedMedia(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <button 
              onClick={() => setSelectedMedia(null)}
              className="absolute -top-12 right-0 text-white text-2xl hover:text-amber-400 transition-colors"
            >
              ✕
            </button>
            {selectedMedia.type === 'image' ? (
              <Image
                src={selectedMedia.src}
                alt={(selectedMedia as ImageMedia).alt}
                width={800}
                height={600}
                className="max-w-full max-h-full object-contain rounded-xl"
              />
            ) : (
              <video
                className="max-w-full max-h-full rounded-xl"
                controls
                autoPlay
              >
                <source src={selectedMedia.src} type="video/mp4" />
              </video>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;