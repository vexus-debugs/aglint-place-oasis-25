
import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-spa-secondary text-white">
      <div className="spa-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-playfair font-bold mb-4">
              Aglint <span className="text-spa-accent">Place</span>
            </h3>
            <p className="mb-4 text-gray-200">
              Experience luxury massage and wellness services in the heart of Lagos. 
              Our professional therapists are dedicated to your relaxation and well-being.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-spa-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-spa-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-playfair font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-200 hover:text-spa-accent transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-200 hover:text-spa-accent transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-200 hover:text-spa-accent transition-colors">Our Services</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-200 hover:text-spa-accent transition-colors">Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-200 hover:text-spa-accent transition-colors">Book Appointment</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-playfair font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0" />
                <span>16 Ibiyemi Palmgrove, Somolu, Lagos</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:07031070502" className="hover:text-spa-accent transition-colors">07031070502</a>
                  <a href="tel:08027658342" className="hover:text-spa-accent transition-colors">08027658342</a>
                </div>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0" />
                <a href="mailto:Aglintplacespa@gmail.com" className="hover:text-spa-accent transition-colors">
                  Aglintplacespa@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-300">
          <p>&copy; {currentYear} Aglint Place Spa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
