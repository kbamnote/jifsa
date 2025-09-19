import React, { useState, useEffect } from "react";
import { Mail, Phone, Menu } from "lucide-react";
import logo1 from "../../assets/logo.png"; 
import logo2 from "../../assets/logoDishpng.png"; 
import logo3 from "../../assets/riu.png"; 
import logo4 from "../../assets/DGMS_h_Logo.jpg"; 

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbarHeight = 80;
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > navbarHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Static Header */}
      <header className="w-full bg-white shadow-sm relative z-10">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between py-3 px-6">
          
          {/* Left Section - Logos */}
          <div className="flex items-center gap-3 flex-wrap">
            {/* Always visible logo */}
            <img src={logo1} alt="logo1" className="h-12 sm:h-14 object-contain" />

            {/* Other logos only on large screens */}
            <img src={logo2} alt="logo2" className="h-12 sm:h-14 object-contain hidden lg:block" />
            <img src={logo3} alt="logo3" className="h-12 sm:h-14 object-contain hidden lg:block" />
            <img src={logo4} alt="logo4" className="h-12 sm:h-14 object-contain hidden lg:block" />
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-3">
            {/* Desktop: Full buttons */}
            <button className="hidden lg:flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition">
              <Mail size={18} /> Email Us
            </button>
            <button className="hidden lg:flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition">
              <Phone size={18} /> 8955776603
            </button>

            {/* Mobile/Tablet: Icon buttons */}
            <button className="lg:hidden flex items-center justify-center bg-red-500 text-white p-2 rounded-md hover:bg-red-600 transition">
              <Mail size={18} />
            </button>
            <button className="lg:hidden flex items-center justify-center bg-red-500 text-white p-2 rounded-md hover:bg-red-600 transition">
              <Phone size={18} />
            </button>

            {/* Hamburger menu always visible */}
            <button className="p-2 rounded-md text-red-500 hover:bg-red-100 transition">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

    {/* Floating Header - On scroll */}
{/* Floating Header - On scroll */}
<header
  className={`fixed top-0 left-0 right-0 bg-white shadow-lg z-50 transition-all duration-500 ease-in-out ${
    isScrolled ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
  }`}
>
  <div className="max-w-[1440px] mx-auto flex items-center justify-between py-3 px-6">
    
    {/* Logos */}
    <div className="flex items-center gap-3 flex-wrap">
      <img src={logo1} alt="logo1" className="h-12 sm:h-14 object-contain" />
      <img src={logo2} alt="logo2" className="h-12 sm:h-14 object-contain hidden lg:block" />
      <img src={logo3} alt="logo3" className="h-12 sm:h-14 object-contain hidden lg:block" />
      <img src={logo4} alt="logo4" className="h-12 sm:h-14 object-contain hidden lg:block" />
    </div>

    {/* Right Section */}
    <div className="flex items-center gap-3">
      <button className="hidden lg:flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition text-sm">
        <Mail size={16} /> Email Us
      </button>
      <button className="hidden lg:flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition text-sm">
        <Phone size={16} /> 8955776603
      </button>

      <button className="lg:hidden flex items-center justify-center bg-red-500 text-white p-2 rounded-md hover:bg-red-600 transition">
        <Mail size={16} />
      </button>
      <button className="lg:hidden flex items-center justify-center bg-red-500 text-white p-2 rounded-md hover:bg-red-600 transition">
        <Phone size={16} />
      </button>

      <button className="p-2 rounded-md text-red-500 hover:bg-red-100 transition">
        <Menu size={20} />
      </button>
    </div>
  </div>
</header>






    </>
  );
};

export default Header;
