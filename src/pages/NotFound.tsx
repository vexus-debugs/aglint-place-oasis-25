
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center bg-gray-50 py-20">
        <div className="text-center px-4">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-spa-secondary mb-4">404</h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">Oops! Page not found</p>
          <p className="text-gray-600 max-w-md mx-auto mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Link to="/" className="btn-primary">
            Return to Home
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
