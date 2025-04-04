
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  price: string;
  homePrice?: string;
  slug: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  image, 
  price,
  homePrice,
  slug 
}) => {
  return (
    <div className="spa-card group overflow-hidden">
      <div className="relative h-48 mb-4 overflow-hidden rounded-md">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
      </div>
      
      <h3 className="text-xl font-playfair font-medium text-spa-secondary mb-2">{title}</h3>
      
      <p className="text-gray-600 mb-4">{description}</p>
      
      <div className="flex flex-col space-y-1 mb-4">
        <div className="flex justify-between">
          <span className="text-sm text-gray-600">At Spa:</span>
          <span className="font-medium text-spa-secondary">{price}</span>
        </div>
        
        {homePrice && (
          <div className="flex justify-between">
            <span className="text-sm text-gray-600">Home Service:</span>
            <span className="font-medium text-spa-secondary">{homePrice}</span>
          </div>
        )}
      </div>
      
      <Link to={`/services/${slug}`} className="flex items-center text-spa-primary hover:text-spa-secondary font-medium">
        <span>Learn more</span>
        <ArrowRight size={16} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </div>
  );
};

export default ServiceCard;
