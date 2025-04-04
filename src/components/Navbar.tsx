
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white shadow-md py-3" 
          : "bg-transparent py-5"
      )}
    >
      <div className="spa-container flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl font-playfair font-bold text-spa-secondary">
            Aglint <span className="text-spa-primary">Place</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-spa-dark hover:text-spa-primary transition-colors">Home</Link>
          <Link to="/about" className="text-spa-dark hover:text-spa-primary transition-colors">About</Link>
          <Link to="/services" className="text-spa-dark hover:text-spa-primary transition-colors">Services</Link>
          <Link to="/gallery" className="text-spa-dark hover:text-spa-primary transition-colors">Gallery</Link>
          <Link to="/contact" className="text-spa-dark hover:text-spa-primary transition-colors">Contact</Link>
        </nav>

        {/* Contact Quick Links */}
        <div className="hidden md:flex items-center space-x-4">
          <a 
            href="tel:07031070502" 
            className="flex items-center text-spa-dark hover:text-spa-primary"
          >
            <Phone size={18} className="mr-1" />
            <span className="text-sm">07031070502</span>
          </a>
          <a 
            href="https://wa.me/2347031070502" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary flex items-center"
          >
            <MessageCircle size={18} className="mr-2" />
            <span>Book Now</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-spa-dark hover:text-spa-primary"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={cn(
          "fixed inset-0 bg-white z-40 pt-20 transition-transform duration-300 md:hidden",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col items-center space-y-6 p-6">
          <Link to="/" onClick={closeMenu} className="text-xl text-spa-dark hover:text-spa-primary transition-colors">Home</Link>
          <Link to="/about" onClick={closeMenu} className="text-xl text-spa-dark hover:text-spa-primary transition-colors">About</Link>
          <Link to="/services" onClick={closeMenu} className="text-xl text-spa-dark hover:text-spa-primary transition-colors">Services</Link>
          <Link to="/gallery" onClick={closeMenu} className="text-xl text-spa-dark hover:text-spa-primary transition-colors">Gallery</Link>
          <Link to="/contact" onClick={closeMenu} className="text-xl text-spa-dark hover:text-spa-primary transition-colors">Contact</Link>
          
          <div className="flex flex-col items-center space-y-4 mt-6 pt-6 border-t border-gray-100 w-full">
            <a 
              href="tel:07031070502" 
              className="flex items-center text-spa-dark hover:text-spa-primary"
            >
              <Phone size={18} className="mr-2" />
              <span>07031070502</span>
            </a>
            <a 
              href="https://wa.me/2347031070502" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary flex items-center w-full justify-center"
            >
              <MessageCircle size={18} className="mr-2" />
              <span>Book Now</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
