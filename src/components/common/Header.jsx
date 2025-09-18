import React, { useState, useEffect } from "react";
import { Mail, Phone, Menu } from "lucide-react";
import logo1 from "../../assets/logo.png"; 
import logo2 from "../../assets/logoDishpng.png"; 
import logo3 from "../../assets/riu.png"; 
import logo4 from "../../assets//DGMS_h_Logo.jpg"; 

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Adjust this value based on your navbar height
      const navbarHeight = 80; // Change this to match your navbar height
      const scrollPosition = window.scrollY;
      
      setIsScrolled(scrollPosition > navbarHeight);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Static Header - Always at top */}
      <header className="w-full bg-white shadow-sm relative z-10">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between py-3 px-6">
          
          {/* Left Section - Logos */}
          <div className="flex items-center gap-3 flex-wrap">
            <img src={logo1} alt="logo1" className="h-14 object-contain" />
            <img src={logo2} alt="logo2" className="h-14 object-contain" />
            <img src={logo3} alt="logo3" className="h-14 object-contain" />
            <img src={logo4} alt="logo4" className="h-14 object-contain" />
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition">
              <Mail size={18} /> Email Us
            </button>
            <button className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition">
              <Phone size={18} /> 8955776603
            </button>
            <button className="p-2 rounded-md text-red-500 hover:bg-red-100 transition">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Floating Header - Appears on scroll */}
      <header 
        className={`fixed top-0 left-0 right-0 w-full bg-white shadow-lg z-50 transition-all duration-600 ease-in-out ${
          isScrolled 
            ? 'transform translate-y-0 opacity-100' 
            : 'transform -translate-y-full opacity-0'
        }`}
      >
        <div className="max-w-[1440px] mx-auto flex items-center justify-between py-2 px-6">
          
          {/* Left Section - Logos (smaller on scroll) */}
          <div className="flex items-center gap-2 flex-wrap">
            <img src={logo1} alt="logo1" className="h-14 object-contain" />
            <img src={logo2} alt="logo2" className="h-14 object-contain" />
            <img src={logo3} alt="logo3" className="h-14 object-contain" />
            <img src={logo4} alt="logo4" className="h-14 object-contain" />
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 bg-red-500 text-white px-3 py-1.5 rounded-md hover:bg-red-600 transition text-sm">
              <Mail size={16} /> Email Us
            </button>
            <button className="flex items-center gap-2 bg-red-500 text-white px-3 py-1.5 rounded-md hover:bg-red-600 transition text-sm">
              <Phone size={16} /> 8955776603
            </button>
            <button className="p-1.5 rounded-md text-red-500 hover:bg-red-100 transition">
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;