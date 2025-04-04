
import React, { useState } from 'react';
import { Calendar, Clock } from 'lucide-react';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    location: 'spa',
    date: '',
    time: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to a server
    console.log('Form submitted:', formData);
    
    // Show success message
    alert('Thank you for your booking request! We will contact you shortly to confirm your appointment.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      location: 'spa',
      date: '',
      time: '',
      message: ''
    });
  };

  return (
    <div className="spa-card">
      <h3 className="section-subtitle mb-6 text-center">Book Your Appointment</h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-spa-dark mb-1">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-spa-primary"
              placeholder="Your full name"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-spa-dark mb-1">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-spa-primary"
              placeholder="Your email"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-spa-dark mb-1">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-spa-primary"
            placeholder="Your phone number"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="service" className="block text-sm font-medium text-spa-dark mb-1">Select Service</label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-spa-primary"
            >
              <option value="">Choose a service</option>
              <option value="Swedish Massage">Swedish Massage</option>
              <option value="Deep Tissue Massage">Deep Tissue Massage</option>
              <option value="Four Hands Swedish Massage">Four Hands Swedish Massage</option>
              <option value="Erotic Massage">Erotic Massage</option>
              <option value="Nuru Massage">Nuru Massage</option>
              <option value="Four Hands Erotic Massage">Four Hands Erotic Massage</option>
              <option value="King's Massage">King's Massage</option>
              <option value="Facials">Facials</option>
              <option value="Pedicure">Pedicure</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-spa-dark mb-1">Location</label>
            <select
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-spa-primary"
            >
              <option value="spa">At Aglint Place Spa</option>
              <option value="home">Home/Hotel Service</option>
            </select>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <label htmlFor="date" className="block text-sm font-medium text-spa-dark mb-1">Preferred Date</label>
            <div className="relative">
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-spa-primary"
              />
              <Calendar size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
          </div>
          
          <div className="relative">
            <label htmlFor="time" className="block text-sm font-medium text-spa-dark mb-1">Preferred Time</label>
            <div className="relative">
              <input
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-spa-primary"
              />
              <Clock size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-spa-dark mb-1">Special Requests (Optional)</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-spa-primary"
            placeholder="Any special requests or questions?"
          ></textarea>
        </div>
        
        <div className="text-center">
          <button type="submit" className="btn-primary w-full sm:w-auto">
            Book Appointment
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
