import React, { useState } from 'react';
import { Mail, Phone, User, MessageSquare } from 'lucide-react';
import leftImage from '../../../assets/image-40.jpg';

function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isVerified, setIsVerified] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isVerified) {
      alert('Please complete the reCAPTCHA verification');
      return;
    }
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className="flex min-h-screen bg-gray-200">
      {/* Left Panel with Image */}
      <div className="w-1/3 relative overflow-hidden">
        <img 
          src={leftImage} 
          alt="Contact" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-opacity-40"></div>
        <div className="relative h-full flex flex-col justify-end items-center p-8">
        
        </div>
      </div>

      {/* Right Panel with Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-2xl">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Don't hesitate
            </h2>
            <p className="text-gray-600">
              to send your message to us
            </p>
            <div className="flex space-x-1 mt-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            </div>
          </div>

          <div className="space-y-6">
            {/* Full Name and Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
                  required
                />
              </div>
            </div>

            {/* Phone Number */}
            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
              />
            </div>

            {/* Message */}
            <div>
              <textarea
                name="message"
                placeholder="Message goes here"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors resize-vertical"
                required
              ></textarea>
            </div>

            {/* reCAPTCHA mockup */}
            <div className="flex items-center space-x-3 p-4 border border-gray-300 rounded-lg bg-gray-50">
              <input
                type="checkbox"
                id="recaptcha"
                checked={isVerified}
                onChange={(e) => setIsVerified(e.target.checked)}
                className="w-5 h-5 text-blue-600 border-2 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="recaptcha" className="text-sm text-gray-700">
                I'm not a robot
              </label>
              <div className="ml-auto">
                <div className="text-xs text-gray-500">
                  reCAPTCHA
                  <div className="text-xs">Privacy - Terms</div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="button"
                onClick={handleSubmit}
                className="bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 outline-none"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>

     
    </div>
  );
}

export default ContactForm;