
import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Users, ThumbsUp, Clock, Check } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Page Header */}
      <section 
        className="pt-32 pb-20 relative"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1620733723572-11c53f73a416?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="spa-container text-center text-white">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">About Us</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Discover the story behind Aglint Place Spa and our commitment to 
            providing exceptional massage and wellness services in Lagos.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="spa-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Aglint Place Spa was founded with a simple yet powerful vision: to create a 
                sanctuary where people could escape the stresses of everyday life and 
                experience the transformative power of touch.
              </p>
              <p className="text-gray-600 mb-6">
                Located in the heart of Lagos at Palmgrove, Somolu, our spa has quickly 
                established itself as a premier destination for those seeking relaxation, 
                rejuvenation, and wellness.
              </p>
              <p className="text-gray-600">
                We pride ourselves on offering a diverse range of services, from traditional 
                Swedish and deep tissue massages to more specialized treatments like nuru 
                and erotic massages, all delivered with the utmost professionalism and attention to detail.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80" 
                alt="Spa ambiance" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-lg shadow-xl hidden md:block">
                <div className="text-center">
                  <h3 className="text-3xl font-playfair font-bold text-spa-secondary">5+</h3>
                  <p className="text-gray-600">Years of Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="spa-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title">Our Mission & Values</h2>
            <p className="text-gray-600">
              At Aglint Place Spa, our mission is to provide exceptional massage and wellness 
              services that enhance the physical, mental, and emotional well-being of our clients. 
              We are guided by a set of core values that shape everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="spa-card text-center">
              <div className="bg-spa-primary bg-opacity-10 p-4 rounded-full inline-flex mb-6">
                <Award className="h-8 w-8 text-spa-primary" />
              </div>
              <h3 className="text-xl font-playfair font-medium text-spa-secondary mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every treatment we provide, 
                ensuring that each client receives the highest quality of service.
              </p>
            </div>

            <div className="spa-card text-center">
              <div className="bg-spa-primary bg-opacity-10 p-4 rounded-full inline-flex mb-6">
                <Users className="h-8 w-8 text-spa-primary" />
              </div>
              <h3 className="text-xl font-playfair font-medium text-spa-secondary mb-3">Client-Centered</h3>
              <p className="text-gray-600">
                Our clients are at the heart of everything we do. We listen 
                attentively to their needs and tailor our services accordingly.
              </p>
            </div>

            <div className="spa-card text-center">
              <div className="bg-spa-primary bg-opacity-10 p-4 rounded-full inline-flex mb-6">
                <ThumbsUp className="h-8 w-8 text-spa-primary" />
              </div>
              <h3 className="text-xl font-playfair font-medium text-spa-secondary mb-3">Integrity</h3>
              <p className="text-gray-600">
                We operate with honesty, transparency, and ethical standards 
                in all our interactions with clients and staff.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="spa-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Why Choose Aglint Place Spa?</h2>
              <p className="text-gray-600 mb-8">
                At Aglint Place Spa, we stand out from other wellness centers in Lagos 
                for several compelling reasons:
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-spa-primary bg-opacity-10 p-2 rounded-full mr-3 mt-1">
                    <Check className="text-spa-primary h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-spa-secondary mb-1">Skilled Therapists</h4>
                    <p className="text-gray-600">Our therapists are highly trained professionals with extensive experience.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-spa-primary bg-opacity-10 p-2 rounded-full mr-3 mt-1">
                    <Check className="text-spa-primary h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-spa-secondary mb-1">Luxurious Setting</h4>
                    <p className="text-gray-600">Our spa environment is designed to provide the ultimate relaxation experience.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-spa-primary bg-opacity-10 p-2 rounded-full mr-3 mt-1">
                    <Check className="text-spa-primary h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-spa-secondary mb-1">Personalized Service</h4>
                    <p className="text-gray-600">We tailor each treatment to meet the specific needs and preferences of our clients.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-spa-primary bg-opacity-10 p-2 rounded-full mr-3 mt-1">
                    <Check className="text-spa-primary h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-spa-secondary mb-1">Diverse Service Menu</h4>
                    <p className="text-gray-600">We offer a wide range of treatments to cater to different preferences and needs.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-spa-primary bg-opacity-10 p-2 rounded-full mr-3 mt-1">
                    <Check className="text-spa-primary h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-spa-secondary mb-1">Flexible Scheduling</h4>
                    <p className="text-gray-600">We offer convenient booking options, including home and hotel services.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link to="/services" className="btn-primary">
                  Explore Our Services
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
                alt="Massage therapy" 
                className="rounded-lg shadow-md h-auto object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1583416750470-965b2707b355?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
                alt="Spa products" 
                className="rounded-lg shadow-md mt-8 h-auto object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1596178060671-7a58b4f25625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
                alt="Spa ambiance" 
                className="rounded-lg shadow-md h-auto object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
                alt="Wellness treatment" 
                className="rounded-lg shadow-md mt-8 h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-16 md:py-24 relative"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="spa-container text-center text-white">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">Ready to Experience the Difference?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Book your appointment today and discover why Aglint Place Spa is 
            Lagos' premier destination for massage and wellness services.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="btn-primary">
              Book Appointment
            </Link>
            <Link to="/services" className="btn-secondary">
              View Our Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
