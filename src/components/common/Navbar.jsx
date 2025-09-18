import React from "react";
import Marquee from "react-fast-marquee";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  return (
    <div className="w-full">
      {/* Top Offer Strip using react-fast-marquee */}
      <div className="bg-amber-500 text-black text-sm py-1">
        <Marquee pauseOnHover={true} gradient={false} speed={60}>
          New Franchisee Offer Available Please{" "}
          <a href="#" className="text-blue-600 underline mx-1">
            Click here
          </a>
          to Know More.
        </Marquee>
      </div>

      {/* Main Navigation */}
      <nav className="bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="max-w-[1440px] mx-auto flex items-center justify-center gap-8 py-3 px-4 text-lg font-medium">
          <a href="#" className="flex items-center gap-1 hover:text-gray-200">
            About Jifsa <ChevronDown size={14} />
          </a>
          <a href="#" className="flex items-center gap-1 hover:text-gray-200">
            Courses <ChevronDown size={14} />
          </a>
          <a href="#" className="hover:text-gray-200">
            Franchisee Us
          </a>
          <a href="#" className="hover:text-gray-200">
            Residential
          </a>
          <a href="#" className="hover:text-gray-200">
            Gallery
          </a>
          <a href="#" className="flex items-center gap-1 hover:text-gray-200">
            Placements <ChevronDown size={14} />
          </a>
          <a href="#" className="flex items-center gap-1 hover:text-gray-200">
            Logins <ChevronDown size={14} />
          </a>
          <a href="#" className="hover:text-gray-200">
            Careers
          </a>
          <a href="#" className="hover:text-gray-200">
            Students Corner
          </a>
          <a href="#" className="flex items-center gap-1 hover:text-gray-200">
            Contact Us <ChevronDown size={14} />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
