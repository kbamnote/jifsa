import React, { useState } from 'react';
import { Mail, Phone, User, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
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
    <div className="flex min-h-screen bg-gray-100">
      {/* Left Panel */}
      <div className="w-1/3 relative hidden md:block">
        <img 
          src={leftImage} 
          alt="Contact" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        <div className="relative h-full flex flex-col justify-end items-center p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-2">Get In Touch</h2>
          <p className="text-sm md:text-base">We’d love to hear from you. Let’s build something great together!</p>
        </div>
      </div>

      {/* Right Panel */}
      <div className="flex-1 flex items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-2xl bg-white p-10 rounded-3xl shadow-xl"
        >
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Don't Hesitate</h2>
            <p className="text-gray-600">to send your message to us</p>
          </div>

          <form className="space-y-6">
            {/* Full Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition"
              />
              <motion.input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition"
              />
            </div>

            {/* Phone */}
            <motion.input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition"
            />

            {/* Message */}
            <motion.textarea
              name="message"
              placeholder="Message goes here"
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition resize-vertical"
            ></motion.textarea>

            {/* reCAPTCHA */}
            <div className="flex items-center space-x-3 p-4 border border-gray-300 rounded-xl bg-gray-50">
              <input
                type="checkbox"
                id="recaptcha"
                checked={isVerified}
                onChange={(e) => setIsVerified(e.target.checked)}
                className="w-5 h-5 text-red-500 border-2 border-gray-300 rounded focus:ring-red-500"
              />
              <label htmlFor="recaptcha" className="text-sm text-gray-700">
                I'm not a robot
              </label>
              <div className="ml-auto text-xs text-gray-500">
                reCAPTCHA
                <div className="">Privacy - Terms</div>
              </div>
            </div>

            {/* Submit */}
            <motion.button
              type="button"
              onClick={handleSubmit}
              whileHover={{ scale: 1.05 }}
              className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-3 rounded-xl transition duration-200 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 outline-none"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

export default ContactForm;
