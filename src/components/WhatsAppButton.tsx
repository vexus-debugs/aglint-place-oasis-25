
import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <a 
      href="https://wa.me/2347031070502" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#128C7E] transition-colors z-50 flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <div className="absolute right-16 bg-white text-gray-800 py-2 px-4 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap">
        Chat with us
      </div>
      <MessageCircle size={28} fill="white" />
    </a>
  );
};

export default WhatsAppButton;
