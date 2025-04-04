
import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  image: string;
  rating: number;
  testimonial: string;
  service: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  image,
  rating,
  testimonial,
  service
}) => {
  return (
    <div className="spa-card">
      <div className="flex items-center mb-4">
        <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
          <img 
            src={image} 
            alt={`${name}'s profile`} 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div>
          <h4 className="font-medium text-spa-secondary">{name}</h4>
          <p className="text-sm text-gray-500">{service}</p>
        </div>
      </div>
      
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={16} 
            className={i < rating ? "text-spa-accent fill-spa-accent" : "text-gray-300"} 
          />
        ))}
      </div>
      
      <p className="text-gray-600 italic">"{testimonial}"</p>
    </div>
  );
};

export default TestimonialCard;
