import React from "react";
import Marquee from "react-fast-marquee";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full top-0 z-50 shadow-md">
      {/* Top Offer Strip */}
      <div className="bg-teal-800 text-white text-sm py-1">
        <Marquee pauseOnHover={true} gradient={false} speed={60}>
          🚀 New Franchisee Offer Available! Please{" "}
          <a href="#" className="text-teal-200 underline mx-1 font-semibold">
            Click here
          </a>
          to Know More.
        </Marquee>
      </div>

      {/* Main Navigation */}
      <nav className="bg-gradient-to-r from-blue-800 to-blue-600 text-white hidden lg:flex">
        <div className="max-w-[1440px] mx-auto flex items-center justify-center gap-6 md:gap-8 py-3 px-4 text-lg font-medium transition-all">
         {[
  { title: "About Jifsa", dropdown: true },
  { title: "Courses", dropdown: true },
  { title: "Residential" ,link: "/resedent" },
  { title: "Gallery", link: "/gallery" },
  { title: "Placements", dropdown: true },
  { title: "Logins", dropdown: true },
  { title: "Careers" },
  { title: "Students Corner" },
  { title: "Contact Us", link: "/contact" },
].map((item, idx) => 
  item.link ? ( // If the item has a link, use Link
    <Link
      to={item.link}
      key={idx}
      className="flex items-center gap-1 relative hover:text-gray-200 transition-colors duration-300 group"
    >
      {item.title}
      {item.dropdown && (
        <ChevronDown
          size={14}
          className="transform transition-transform duration-300 group-hover:rotate-180"
        />
      )}
    </Link>
  ) : (
    <a
      href="#"
      key={idx}
      className="flex items-center gap-1 relative hover:text-gray-200 transition-colors duration-300 group"
    >
      {item.title}
      {item.dropdown && (
        <ChevronDown
          size={14}
          className="transform transition-transform duration-300 group-hover:rotate-180"
        />
      )}
    </a>
  )
)}

        </div>
      </nav>
    </div>
  );
};

export default Navbar;
