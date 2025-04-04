
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';

const Services = () => {
  // Services data
  const servicesData = [
    {
      title: "Swedish Massage",
      description: "A classic relaxation massage designed to relieve stress, improve circulation, and promote overall well-being.",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      price: "₦15,000",
      homePrice: "₦30,000",
      slug: "swedish-massage"
    },
    {
      title: "Deep Tissue Massage",
      description: "A massage technique that targets deep muscle layers and connective tissues to relieve chronic pain and muscle tension.",
      image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      price: "₦20,000",
      homePrice: "₦30,000",
      slug: "deep-tissue-massage"
    },
    {
      title: "Four Hands Swedish Massage",
      description: "A luxury experience where two therapists work simultaneously to provide a synchronized relaxation massage.",
      image: "https://images.unsplash.com/photo-1519824145371-296894a0daa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      price: "₦35,000",
      homePrice: "₦50,000",
      slug: "four-hands-swedish-massage"
    },
    {
      title: "Erotic Massage",
      description: "A sensual massage where the therapist wears pant and bra, offering either a Swedish or deep tissue massage, which includes a hand job.",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      price: "₦25,000",
      homePrice: "₦40,000",
      slug: "erotic-massage"
    },
    {
      title: "Nuru Massage",
      description: "A body-to-body massage where both the therapist and the client are naked. The therapist uses her body to massage the client, and it includes a hand job.",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      price: "₦30,000",
      homePrice: "₦50,000",
      slug: "nuru-massage"
    },
    {
      title: "Four Hands Erotic Massage",
      description: "Two therapists performing an erotic massage at the same time, enhancing the experience for the client.",
      image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      price: "₦45,000",
      homePrice: "₦65,000",
      slug: "four-hands-erotic-massage"
    },
    {
      title: "King's Massage",
      description: "A premium nuru massage performed by two therapists at the same time, providing maximum relaxation and pleasure.",
      image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      price: "₦55,000",
      homePrice: "₦75,000",
      slug: "kings-massage"
    },
    {
      title: "Facials",
      description: "A professional skincare treatment that includes cleansing, exfoliation, and moisturizing for a refreshed look.",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      price: "₦7,500",
      homePrice: "₦10,000",
      slug: "facials"
    },
    {
      title: "Pedicure",
      description: "A complete foot care treatment, including nail trimming, scrubbing, and moisturizing.",
      image: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      price: "₦7,500",
      homePrice: "₦10,000",
      slug: "pedicure"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Page Header */}
      <section 
        className="pt-32 pb-20 relative"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="spa-container text-center text-white">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">Our Services & Pricing</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Discover our range of premium massage and wellness treatments designed 
            to relax, rejuvenate, and revitalize your body and mind.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24">
        <div className="spa-container">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Premium Services</h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-8">
              At Aglint Place Spa, we offer a wide range of massage and wellness services 
              to cater to your specific needs and preferences. Whether you're looking for 
              relaxation, pain relief, or a sensual experience, we have the perfect treatment for you.
            </p>
            <div className="bg-spa-primary bg-opacity-10 p-4 rounded-lg inline-flex items-center">
              <MapPin className="text-spa-primary h-5 w-5 mr-2" />
              <p className="text-spa-secondary">
                <span className="font-medium">Note:</span> Home service attracts extra charges based on location.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                image={service.image}
                price={service.price}
                homePrice={service.homePrice}
                slug={service.slug}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="spa-container text-center">
          <h2 className="section-title">Ready to Book Your Treatment?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Experience the ultimate in relaxation and wellness with our professional massage services. 
            Book your appointment today and let us take care of your well-being.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="btn-primary">
              Book Appointment
            </Link>
            <a 
              href="https://wa.me/2347031070502" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
