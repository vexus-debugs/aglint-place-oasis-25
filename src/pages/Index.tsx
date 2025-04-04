import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Mail, MapPin, Star, Clock, Calendar, MessageCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import BookingForm from '@/components/BookingForm';

const Index = () => {
  // Featured services
  const featuredServices = [
    {
      title: "Swedish Massage",
      description: "A classic relaxation massage designed to relieve stress, improve circulation, and promote overall well-being.",
      image: "https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      price: "₦15,000",
      homePrice: "₦30,000",
      slug: "swedish-massage"
    },
    {
      title: "Deep Tissue Massage",
      description: "A massage technique that targets deep muscle layers and connective tissues to relieve chronic pain and muscle tension.",
      image: "https://images.unsplash.com/photo-1611073615830-9f76903ee5e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      price: "₦20,000",
      homePrice: "₦30,000",
      slug: "deep-tissue-massage"
    },
    {
      title: "Nuru Massage",
      description: "A body-to-body massage where both the therapist and the client are naked. The therapist uses her body to massage the client.",
      image: "https://images.unsplash.com/photo-1607524215784-7e3f954d3f6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      price: "₦30,000",
      homePrice: "₦50,000",
      slug: "nuru-massage"
    }
  ];

  // Testimonials
  const testimonials = [
    {
      name: "Alex Johnson",
      image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      rating: 5,
      testimonial: "The deep tissue massage was exactly what I needed. The therapist was professional and addressed all my problem areas. Highly recommended!",
      service: "Deep Tissue Massage"
    },
    {
      name: "Sarah Williams",
      image: "https://images.unsplash.com/photo-1542596594-649edbc13630?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      rating: 5,
      testimonial: "I've been to many spas in Lagos, but Aglint Place Spa offers the most relaxing Swedish massage I've ever experienced. The ambiance is so peaceful!",
      service: "Swedish Massage"
    },
    {
      name: "David Chen",
      image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      rating: 4,
      testimonial: "The King's Massage was truly a royal treatment. Two therapists working simultaneously created an unforgettable experience. Worth every penny!",
      service: "King's Massage"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section 
        className="pt-32 pb-20 md:pt-48 md:pb-32 relative"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="spa-container text-center text-white">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6 animate-fade-in">
            Experience Luxury <br /> Relaxation & Wellness
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-100 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Indulge in premium massage therapy and spa treatments at Aglint Place Spa, 
            Lagos' premier wellness destination.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Link to="/contact" className="btn-primary">
              Book Appointment
            </Link>
            <a 
              href="https://wa.me/2347031070502" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary flex items-center justify-center"
            >
              <MessageCircle size={18} className="mr-2" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="spa-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              <h2 className="section-title">Welcome to Aglint Place Spa</h2>
              <p className="text-gray-600 mb-6">
                At Aglint Place Spa, we believe in the transformative power of touch. 
                Our luxurious wellness center in Lagos offers a sanctuary where you can escape 
                the stresses of everyday life and indulge in premium massage and spa treatments.
              </p>
              <p className="text-gray-600 mb-6">
                Our team of skilled therapists is dedicated to providing personalized 
                services that cater to your unique needs, whether you seek relaxation, 
                pain relief, or a sensual experience.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-spa-primary bg-opacity-10 p-2 rounded-full mr-3">
                    <Star className="text-spa-primary h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-spa-secondary mb-1">Premium Quality</h4>
                    <p className="text-sm text-gray-500">Luxury experience with top-tier service</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-spa-primary bg-opacity-10 p-2 rounded-full mr-3">
                    <Clock className="text-spa-primary h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-spa-secondary mb-1">Flexible Hours</h4>
                    <p className="text-sm text-gray-500">Appointments that fit your schedule</p>
                  </div>
                </div>
              </div>
              <Link to="/about" className="btn-outline">
                Learn More About Us
              </Link>
            </div>
            <div className="order-1 md:order-2 relative">
              <img 
                src="https://images.unsplash.com/photo-1597289124955-e2d1a7a7f0c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80" 
                alt="Aglint Place Spa Interior" 
                className="rounded-lg shadow-lg object-cover h-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg hidden md:block">
                <div className="flex items-center">
                  <div className="bg-spa-primary rounded-full p-3 mr-3">
                    <Calendar className="text-white h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-medium text-spa-secondary">Book Today</h4>
                    <p className="text-sm text-gray-500">Experience the difference</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="spa-container">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Premium Services</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Discover our range of luxury massage and wellness treatments designed 
              to relax your body, rejuvenate your spirit, and enhance your well-being.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
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
          
          <div className="text-center mt-12">
            <Link to="/services" className="btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="spa-container">
          <div className="text-center mb-12">
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We take pride in providing exceptional service to our clients. 
              Here's what some of them have to say about their experience at Aglint Place Spa.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                image={testimonial.image}
                rating={testimonial.rating}
                testimonial={testimonial.testimonial}
                service={testimonial.service}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-16 md:py-24">
        <div className="spa-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Book Your Relaxation Experience</h2>
              <p className="text-gray-600 mb-6">
                Ready to experience the ultimate in relaxation and wellness? 
                Book your appointment at Aglint Place Spa today. We offer both in-spa 
                services and home/hotel visits for your convenience.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-spa-primary bg-opacity-10 p-2 rounded-full mr-3 mt-1">
                    <MapPin className="text-spa-primary h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-spa-secondary">Our Location</h4>
                    <p className="text-gray-600">16 Ibiyemi Palmgrove, Somolu, Lagos</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-spa-primary bg-opacity-10 p-2 rounded-full mr-3 mt-1">
                    <Phone className="text-spa-primary h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-spa-secondary">Contact Us</h4>
                    <p className="text-gray-600">07031070502, 08027658342</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-spa-primary bg-opacity-10 p-2 rounded-full mr-3 mt-1">
                    <Mail className="text-spa-primary h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-spa-secondary">Email Us</h4>
                    <p className="text-gray-600">Aglintplacespa@gmail.com</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-spa-primary bg-opacity-10 p-6 rounded-lg">
                <h4 className="font-playfair font-medium text-spa-secondary mb-3">Get Directions</h4>
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.3386673153404!2d3.3761656!3d6.5429056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d73a658782b%3A0x7a1808db1c714e19!2s16%20Ibiyemi%20St%2C%20Palmgrove%20101241%2C%20Lagos!5e0!3m2!1sen!2sng!4v1650456789012!5m2!1sen!2sng" 
                    width="100%" 
                    height="250" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Aglint Place Spa Location"
                  ></iframe>
                </div>
              </div>
            </div>
            
            <div>
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
