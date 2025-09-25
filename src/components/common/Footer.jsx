import React, { useEffect, useState } from 'react';
import bg from '../../assets/bg-23.jpg';
import { ArrowUp, Facebook, Instagram, Linkedin, Twitter, Phone, MessageCircle } from "lucide-react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
const handleCallbackRequest = () => {
  const phoneNumber = "+919860111868"; // Use the same number shown in Counselling dept.
  window.location.href = `tel:${phoneNumber}`;
};

  const handleWhatsAppChat = () => {
    // Replace with your actual WhatsApp business number
    const phoneNumber = "+918855885807"; // Remove + and spaces from the phone number
    const message = "Hi! I'd like to know more about your courses.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer className="bg-[#0F4C81] text-white py-16 px-8 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <img src={bg} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Departments */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Counselling Department */}
          <div>
            <h3 className="text-xl font-bold mb-6 tracking-wide">COUNSELLING DEPARTMENT</h3>
            <div className="space-y-3 text-gray-200">
              <p>Nityanjana Soni</p>
              <p>Call Us : +91-7276568807</p>
              <p>Mail us : jifsaadmissions@gmail.com</p>
              <p className="mt-4 text-sm text-gray-400">
                Our team helps students with course guidance, career counselling, and all your academic queries.
              </p>
            </div>
          </div>

          {/* Admission Department */}
          <div>
            <h3 className="text-xl font-bold mb-6 tracking-wide">ADMISSION DEPARTMENT</h3>
            <div className="space-y-3 text-gray-200">
              <p>Ms. Vaishali Bhandari</p>
              <p>Call Us : +91-8799959224</p>
              <p>Mail us : jifsaadmissions@gmail.com</p>
              <p className="mt-4 text-sm text-gray-400">
                Get assistance for enrollment, scholarship guidance, and course registration from our admission experts.
              </p>
            </div>
          </div>
        </div>

        {/* Quick Links & Social Media */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-2 text-gray-200">
              <li><a href="#" className="hover:text-blue-300 transition">Home</a></li>
              <li><a href="#" className="hover:text-blue-300 transition">About Us</a></li>
              <li><a href="#" className="hover:text-blue-300 transition">Courses</a></li>
              <li><a href="#" className="hover:text-blue-300 transition">Placement</a></li>
              <li><a href="#" className="hover:text-blue-300 transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Connect With Us</h3>
            <div className="flex space-x-4 text-gray-200">
              <a href="#" className="hover:text-blue-300 transition"><Facebook className="w-6 h-6" /></a>
              <a href="#" className="hover:text-blue-300 transition"><Instagram className="w-6 h-6" /></a>
              <a href="#" className="hover:text-blue-300 transition"><Linkedin className="w-6 h-6" /></a>
              <a href="#" className="hover:text-blue-300 transition"><Twitter className="w-6 h-6" /></a>
            </div>
            <p className="mt-4 text-gray-400 text-sm">
              Follow us for updates, news, and exclusive content.
            </p>
          </div>
        </div>

        {/* Tagline */}
        <div className="text-center mb-8 text-gray-300">
          <p className="italic">"Empowering students with skills for a safer tomorrow."</p>
        </div>

        {/* Copyright */}
        <div className="border-t border-blue-600 pt-6 text-center">
          <p className="text-gray-300 text-sm">
            © 2025 , ALL RIGHTS RESERVED, DESIGNED BY JIFSA IT DEPARTMENT
          </p>
        </div>
      </div>

      {/* Floating Action Buttons */}
      {isVisible && (
        <div className="fixed bottom-8 right-8 flex flex-col space-y-4 z-20">
          {/* WhatsApp Button */}
          <button 
            onClick={handleWhatsAppChat}
            className="bg-green-500 hover:bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-colors duration-300 group"
            aria-label="Chat on WhatsApp"
            title="Say Hi on WhatsApp"
          >
            <MessageCircle className="w-5 h-5" />
          </button>

          {/* Request Callback Button */}
          <button 
            onClick={handleCallbackRequest}
            className="bg-orange-500 hover:bg-orange-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-colors duration-300 group"
            aria-label="Request a callback"
            title="Request a Callback"
          >
            <Phone className="w-5 h-5" />
          </button>

          {/* Scroll to top button */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-[#00008b] hover:bg-blue-700 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-colors duration-300"
            aria-label="Scroll to top"
            title="Back to Top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      )}
    </footer>
  );
};

export default Footer;