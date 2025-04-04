
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, MessageCircle, HelpCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingForm from '@/components/BookingForm';

const Contact = () => {
  const faqs = [
    {
      question: "What should I wear to my massage appointment?",
      answer: "You'll be properly draped during your massage. Undress to your comfort level. Some guests prefer to keep their underwear on, while others prefer to be completely undressed. The choice is entirely yours."
    },
    {
      question: "How early should I arrive for my appointment?",
      answer: "We recommend arriving 10-15 minutes before your scheduled appointment to complete any necessary paperwork and to relax before your treatment begins."
    },
    {
      question: "Do you offer home services?",
      answer: "Yes, we offer home and hotel services for all our treatments. Please note that home services attract additional charges based on your location."
    },
    {
      question: "How do I book an appointment?",
      answer: "You can book an appointment through our website booking form, by calling us at 07031070502 or 08027658342, or by sending us a WhatsApp message."
    },
    {
      question: "What forms of payment do you accept?",
      answer: "We accept cash, bank transfers, and card payments for your convenience."
    },
    {
      question: "Can I request a specific therapist?",
      answer: "Yes, you can request a specific therapist when making your appointment, subject to availability."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Page Header */}
      <section 
        className="pt-32 pb-20 relative"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1596178060671-7a58b4f25625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="spa-container text-center text-white">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">Contact & Booking</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Reach out to us to book your appointment or inquire about our services. 
            We're here to assist you with all your relaxation needs.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 md:py-24">
        <div className="spa-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="section-title">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Have questions or ready to book your appointment? Contact us using any of 
                the methods below, or fill out the booking form to schedule your visit.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-spa-primary bg-opacity-10 p-3 rounded-full mr-4">
                    <MapPin className="text-spa-primary h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-spa-secondary mb-1">Our Location</h4>
                    <p className="text-gray-600">16 Ibiyemi Palmgrove, Somolu, Lagos</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-spa-primary bg-opacity-10 p-3 rounded-full mr-4">
                    <Phone className="text-spa-primary h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-spa-secondary mb-1">Phone Numbers</h4>
                    <p className="text-gray-600">
                      <a href="tel:07031070502" className="hover:text-spa-primary transition-colors">07031070502</a>
                      <br />
                      <a href="tel:08027658342" className="hover:text-spa-primary transition-colors">08027658342</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-spa-primary bg-opacity-10 p-3 rounded-full mr-4">
                    <Mail className="text-spa-primary h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-spa-secondary mb-1">Email Address</h4>
                    <p className="text-gray-600">
                      <a href="mailto:Aglintplacespa@gmail.com" className="hover:text-spa-primary transition-colors">
                        Aglintplacespa@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-spa-primary bg-opacity-10 p-3 rounded-full mr-4">
                    <Clock className="text-spa-primary h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-spa-secondary mb-1">Business Hours</h4>
                    <p className="text-gray-600">
                      Monday - Sunday: 9:00 AM - 9:00 PM
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <a 
                  href="https://wa.me/2347031070502" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center w-fit"
                >
                  <MessageCircle size={18} className="mr-2" />
                  <span>Chat with Us on WhatsApp</span>
                </a>
              </div>
              
              <div className="bg-spa-primary bg-opacity-10 p-6 rounded-lg">
                <h4 className="font-playfair font-medium text-spa-secondary mb-3">Our Location</h4>
                <div className="rounded-lg overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.3386673153404!2d3.3761656!3d6.5429056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d73a658782b%3A0x7a1808db1c714e19!2s16%20Ibiyemi%20St%2C%20Palmgrove%20101241%2C%20Lagos!5e0!3m2!1sen!2sng!4v1650456789012!5m2!1sen!2sng" 
                    width="100%" 
                    height="300" 
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
              <h2 className="section-title">Book an Appointment</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below to schedule your appointment. 
                We'll contact you to confirm your booking.
              </p>
              
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="spa-container">
          <div className="text-center mb-12">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our services, booking process, and what to expect during your visit.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="spa-card">
                <div className="flex items-start">
                  <div className="bg-spa-primary bg-opacity-10 p-2 rounded-full mr-3 mt-1">
                    <HelpCircle className="text-spa-primary h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-spa-secondary mb-2">{faq.question}</h4>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Still have questions? Feel free to contact us directly.
            </p>
            <a 
              href="tel:07031070502" 
              className="btn-primary"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
