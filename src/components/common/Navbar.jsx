import React from "react";
import Marquee from "react-fast-marquee";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  return (
    <div className="w-full top-0 z-50 shadow-md">
      {/* Top Offer Strip (always visible) */}
      <div className="bg-amber-500 text-black text-sm py-1">
        <Marquee pauseOnHover={true} gradient={false} speed={60}>
          🚀 New Franchisee Offer Available! Please{" "}
          <a href="#" className="text-blue-700 underline mx-1 font-semibold">
            Click here
          </a>
          to Know More.
        </Marquee>
      </div>

      {/* Main Navigation (hidden on tablet and mobile) */}
      <nav className="bg-gradient-to-r from-red-600 to-orange-500 text-white hidden lg:flex">
        <div className="max-w-[1440px] mx-auto flex items-center justify-center gap-6 md:gap-8 py-3 px-4 text-lg font-medium transition-all">
          {[
            { title: "About Jifsa", dropdown: true },
            { title: "Courses", dropdown: true },
            { title: "Residential" },
            { title: "Gallery" },
            { title: "Placements", dropdown: true },
            { title: "Logins", dropdown: true },
            { title: "Careers" },
            { title: "Students Corner" },
            { title: "Contact Us", dropdown: true },
          ].map((item, idx) => (
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
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
