import React, { useState, useEffect } from "react";
import { Mail, Phone, Menu } from "lucide-react";
import logo1 from "../../assets/logo.png";
import logo2 from "../../assets/logoDishpng.png";
import logo3 from "../../assets/riu.png";
import logo4 from "../../assets/DGMS_h_Logo.jpg";
import { Link } from "react-router-dom";

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

  const buttonClass =
    "px-4 py-2 sm:px-5 sm:py-2.5 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition text-sm sm:text-base flex items-center gap-2";

  return (
    <>
      {/* Static Header */}
      <header className="w-full bg-white shadow-sm relative z-10">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between py-3 px-6">
          {/* Left Section - Logos */}
          <div className="flex items-center gap-3 flex-wrap">
            <Link to="/">
              <img
                src={logo1}
                alt="logo1"
                className="h-12 sm:h-14 object-contain"
              />
            </Link>
            <img
              src={logo2}
              alt="logo2"
              className="h-12 sm:h-14 object-contain hidden lg:block"
            />
            <img
              src={logo3}
              alt="logo3"
              className="h-12 sm:h-14 object-contain hidden lg:block"
            />
            <img
              src={logo4}
              alt="logo4"
              className="h-12 sm:h-14 object-contain hidden lg:block"
            />
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-3">
            {/* Desktop: Anchor tags with blue background */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=jifsacareers@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClass}
            >
              <Mail size={18} /> Email Us
            </a>
            <a href="tel:9860111868" className={buttonClass}>
              <Phone size={18} /> 8855885807
            </a>

            {/* Mobile/Tablet: Icon buttons */}
            <a
              href="jifsacareers@gmail.com"
              className="lg:hidden flex items-center justify-center bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition"
            >
              <Mail size={18} />
            </a>
            <a
              href="tel:8855885807"
              className="lg:hidden flex items-center justify-center bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition"
            >
              <Phone size={18} />
            </a>

            {/* Hamburger menu only for tablet & mobile */}
            <button className="p-2 rounded-md text-blue-600 hover:bg-blue-100 transition lg:hidden">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Floating Header */}
      <header
        className={`fixed top-0 left-0 right-0 bg-white shadow-lg z-50 transition-all duration-500 ease-in-out ${
          isScrolled
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        <div className="max-w-[1440px] mx-auto flex items-center justify-between py-3 px-6">
          {/* Logos */}
          <div className="flex items-center gap-3 flex-wrap">
            <img
              src={logo1}
              alt="logo1"
              className="h-12 sm:h-14 object-contain"
            />
            <img
              src={logo2}
              alt="logo2"
              className="h-12 sm:h-14 object-contain hidden lg:block"
            />
            <img
              src={logo3}
              alt="logo3"
              className="h-12 sm:h-14 object-contain hidden lg:block"
            />
            <img
              src={logo4}
              alt="logo4"
              className="h-12 sm:h-14 object-contain hidden lg:block"
            />
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-3">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=jifsacareers@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClass}
            >
              <Mail size={16} /> Email Us
            </a>

            <a href="tel:8855885807" className={buttonClass}>
              <Phone size={16} /> 8855885807
            </a>

            <a
              href="mailto:example@mail.com"
              className="lg:hidden flex items-center justify-center bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition"
            >
              <Mail size={16} />
            </a>
            <a
              href="tel:9860111868"
              className="lg:hidden flex items-center justify-center bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition"
            >
              <Phone size={16} />
            </a>

            {/* Hamburger menu only for tablet & mobile */}
            <button className="p-2 rounded-md text-blue-600 hover:bg-blue-100 transition lg:hidden">
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
