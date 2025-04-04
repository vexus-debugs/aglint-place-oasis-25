
import React, { useState } from 'react';
import { X } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Gallery images
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Massage therapy session",
      category: "massage"
    },
    {
      src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Relaxing massage treatment",
      category: "massage"
    },
    {
      src: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Spa ambiance",
      category: "spa"
    },
    {
      src: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Deep tissue massage",
      category: "massage"
    },
    {
      src: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Luxury spa treatment",
      category: "spa"
    },
    {
      src: "https://images.unsplash.com/photo-1591343395082-e120087004b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Spa products",
      category: "products"
    },
    {
      src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Facial treatment",
      category: "facial"
    },
    {
      src: "https://images.unsplash.com/photo-1596178060671-7a58b4f25625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Relaxation area",
      category: "spa"
    },
    {
      src: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Pedicure treatment",
      category: "pedicure"
    },
    {
      src: "https://images.unsplash.com/photo-1620733723572-11c53f73a416?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Spa environment",
      category: "spa"
    },
    {
      src: "https://images.unsplash.com/photo-1583416750470-965b2707b355?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Natural spa products",
      category: "products"
    },
    {
      src: "https://images.unsplash.com/photo-1519824145371-296894a0daa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Massage therapy room",
      category: "massage"
    }
  ];

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Page Header */}
      <section 
        className="pt-32 pb-20 relative"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1583417319070-4a69db38a482?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="spa-container text-center text-white">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">Our Gallery</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Take a visual journey through our luxurious spa environment and 
            get a glimpse of the rejuvenating experiences that await you.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 md:py-24">
        <div className="spa-container">
          <div className="text-center mb-12">
            <h2 className="section-title">Explore Our Spa</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Browse through our gallery to see our elegant spa environment, 
              professional therapists in action, and the relaxing experiences we offer.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className="relative overflow-hidden rounded-lg cursor-pointer group"
                onClick={() => openModal(image.src)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white text-center p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="font-medium">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
          onClick={closeModal}
        >
          <button 
            className="absolute top-4 right-4 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition-colors"
            onClick={closeModal}
          >
            <X size={24} />
          </button>
          <img 
            src={selectedImage} 
            alt="Enlarged gallery image" 
            className="max-w-[90%] max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;
