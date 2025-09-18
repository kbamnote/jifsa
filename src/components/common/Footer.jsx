import React, { useEffect, useState } from 'react';
import bg from '../../assets/bg-23.jpg';
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button only when user scrolls down 200px (adjust as needed)
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="bg-[#0F4C81] text-white py-16 px-8 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <img src={bg} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="max-w-8xl mx-auto relative z-10">
        {/* Top Section - Department Contacts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Franchisee Department */}
          <div>
            <h3 className="text-xl font-bold mb-6 tracking-wide">FRANCHISEE DEPARTMENT</h3>
            <div className="space-y-3 text-gray-200">
              <p>Ms. Priya Malhotra</p>
              <p>Call Us : +91-9407939795</p>
              <p>Mail us : director@jifsa.in</p>
            </div>
          </div>

          {/* Counselling Department */}
          <div>
            <h3 className="text-xl font-bold mb-6 tracking-wide">COUNSELLING DEPARTMENT</h3>
            <div className="space-y-3 text-gray-200">
              <p>Mrs. Ratna Chakraborty</p>
              <p>Call Us : +91-7878842744</p>
              <p>Mail us : info@jifsa.in</p>
            </div>
          </div>

          {/* Admission Department */}
          <div>
            <h3 className="text-xl font-bold mb-6 tracking-wide">ADMISSION DEPARTMENT</h3>
            <div className="space-y-3 text-gray-200">
              <p>Ms. Priya Malhotra</p>
              <p>Call Us : +91-9407939795</p>
              <p>Mail us : info@jifsa.in</p>
            </div>
          </div>
        </div>

        {/* Regional Offices */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* East Region */}
          <div>
            <h3 className="text-xl font-bold mb-6">East Region</h3>
            <ul className="space-y-2 text-gray-200">
              <li>Kolkata</li>
              <li>Patna</li>
              <li>Darjeeling</li>
              <li>Ranchi</li>
              <li>Dhanbad</li>
              <li>Howrah</li>
            </ul>
          </div>

          {/* West Region */}
          <div>
            <h3 className="text-xl font-bold mb-6">West Region</h3>
            <ul className="space-y-2 text-gray-200">
              <li>Mumbai</li>
              <li>Pune</li>
              <li>Nagpur</li>
              <li>Jaipur</li>
              <li>Surat</li>
              <li>Ahmedabad</li>
            </ul>
          </div>

          {/* North Region */}
          <div>
            <h3 className="text-xl font-bold mb-6">North Region</h3>
            <ul className="space-y-2 text-gray-200">
              <li>Delhi</li>
              <li>Jaipur</li>
              <li>Kanpur</li>
              <li>Meerut</li>
              <li>Surat</li>
              <li>Agra</li>
            </ul>
          </div>

          {/* South Region */}
          <div>
            <h3 className="text-xl font-bold mb-6">South Region</h3>
            <ul className="space-y-2 text-gray-200">
              <li>Chennai</li>
              <li>Bangalore</li>
              <li>Hydrabad</li>
              <li>Visakhapatnam</li>
              <li>Mangalore</li>
              <li>Vellore</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-blue-600 pt-6">
          <p className="text-gray-300 text-sm">
            © 2025 , ALL RIGHTS RESERVED, DESIGNED BY JIFSA IT DEPARTMENT
          </p>
        </div>
      </div>

      {/* Scroll to top button */}
      {isVisible && (
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 bg-[#00008b] hover:bg-blue-700 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-colors duration-300"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </footer>
  );
};

export default Footer;
