import React, { useState, useEffect, useCallback, memo } from "react";
import { Mail, Phone, Menu } from "lucide-react";
import logo1 from "../../assets/logo.png";
import logo2 from "../../assets/logoDishpng.png";
import logo3 from "../../assets/riu.png";
import logo4 from "../../assets/DGMS_h_Logo.jpg";
import { Link } from "react-router-dom";
import { throttle } from "../../utils/performance";
import { optimizeImageURL } from "../../utils/imageOptimizer";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Throttled scroll handler for better performance
  const handleScroll = useCallback(throttle(() => {
    const navbarHeight = 80;
    const scrollPosition = window.scrollY;
    setIsScrolled(scrollPosition > navbarHeight);
  }, 16), []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

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
                src={optimizeImageURL(logo1, { width: 100, quality: 80 })}
                alt="JIFSA Logo"
                className="h-12 sm:h-14 object-contain"
                loading="eager"
              />
            </Link>
            <img
              src={optimizeImageURL(logo2, { width: 100, quality: 80 })}
              alt="Partner Logo 1"
              className="h-12 sm:h-14 object-contain hidden lg:block"
              loading="lazy"
            />
            <img
              src={optimizeImageURL(logo3, { width: 100, quality: 80 })}
              alt="Partner Logo 2"
              className="h-12 sm:h-14 object-contain hidden lg:block"
              loading="lazy"
            />
            <img
              src={optimizeImageURL(logo4, { width: 100, quality: 80 })}
              alt="Partner Logo 3"
              className="h-12 sm:h-14 object-contain hidden lg:block"
              loading="lazy"
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
              <Mail size={18} aria-hidden="true" /> Email Us
            </a>
            <a href="tel:9860111868" className={buttonClass}>
              <Phone size={18} aria-hidden="true" /> 8855885807
            </a>

            {/* Mobile/Tablet: Icon buttons */}
            <a
              href="jifsacareers@gmail.com"
              className="lg:hidden flex items-center justify-center bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition"
              aria-label="Email us"
            >
              <Mail size={18} aria-hidden="true" />
            </a>
            <a
              href="tel:8855885807"
              className="lg:hidden flex items-center justify-center bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition"
              aria-label="Call us"
            >
              <Phone size={18} aria-hidden="true" />
            </a>

            {/* Hamburger menu only for tablet & mobile */}
            <button className="p-2 rounded-md text-blue-600 hover:bg-blue-100 transition lg:hidden" aria-label="Toggle menu">
              <Menu size={24} aria-hidden="true" />
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
              src={optimizeImageURL(logo1, { width: 100, quality: 80 })}
              alt="JIFSA Logo"
              className="h-12 sm:h-14 object-contain"
              loading="eager"
            />
            <img
              src={optimizeImageURL(logo2, { width: 100, quality: 80 })}
              alt="Partner Logo 1"
              className="h-12 sm:h-14 object-contain hidden lg:block"
              loading="lazy"
            />
            <img
              src={optimizeImageURL(logo3, { width: 100, quality: 80 })}
              alt="Partner Logo 2"
              className="h-12 sm:h-14 object-contain hidden lg:block"
              loading="lazy"
            />
            <img
              src={optimizeImageURL(logo4, { width: 100, quality: 80 })}
              alt="Partner Logo 3"
              className="h-12 sm:h-14 object-contain hidden lg:block"
              loading="lazy"
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
              <Mail size={16} aria-hidden="true" /> Email Us
            </a>

            <a href="tel:8855885807" className={buttonClass}>
              <Phone size={16} aria-hidden="true" /> 8855885807
            </a>

            <a
              href="mailto:example@mail.com"
              className="lg:hidden flex items-center justify-center bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition"
              aria-label="Email us"
            >
              <Mail size={16} aria-hidden="true" />
            </a>
            <a
              href="tel:9860111868"
              className="lg:hidden flex items-center justify-center bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition"
              aria-label="Call us"
            >
              <Phone size={16} aria-hidden="true" />
            </a>

            {/* Hamburger menu only for tablet & mobile */}
            <button className="p-2 rounded-md text-blue-600 hover:bg-blue-100 transition lg:hidden" aria-label="Toggle menu">
              <Menu size={20} aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default memo(Header);