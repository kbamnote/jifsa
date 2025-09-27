import React, { memo } from "react";
import Marquee from "react-fast-marquee";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navItems = [
    {
      title: "About Jifsa",
      dropdown: true,
      submenu: [
        { title: "JIFSA Vision & Mission", link: "/vision-mission" },
        { title: "Membership & Accreditation", link: "/membership" },
        { title: "Advisory Board", link: "/advisory-board" },
        { title: "Chairman Message", link: "/chairman-message" },
        { title: "Directors Message", link: "/directors-message" },
      ],
    },
    {
      title: "Courses",
      dropdown: true,
      submenu: [
        { title: "Qualifications", link: "/qualifications" },
        { title: "Online Courses", link: "/online-courses" },
        { title: "Fire & Safety FAQs", link: "/fire-safety-faqs" },
      ],
    },
    {
      title: "Placements",
      dropdown: true,
      submenu: [
        { title: "Recruited Students", link: "/recruited-students" },
        { title: "Students Testimonials", link: "/student-testimonials" },
        { title: "Scope Of Fire & Safety", link: "/scope-fire-safety" },
        {
          title: "Demand & Supply Of Fire & Safety",
          link: "/demand-supply-fire-safety",
        },
        { title: "Future Prospects", link: "/future-prospects" },
        { title: "Safety Programmes & Career", link: "/safety-career" },
        { title: "Our Placement Cell", link: "/placement-cell" },
        { title: "Press Release", link: "/press-release" },
      ],
    },
    { title: "Residential", link: "/resedent" },
    { title: "Gallery", link: "/gallery" },
   
    { title: "Careers", link: "/careers" },
    {
      title: "Students Corner",
      dropdown: true,
      submenu: [
        { title: "Admission Form", link: "/admission-form" },
        {
          title: "Practical Training Forms",
          link: "/practical-training-forms",
        },
        { title: "Placement Forms", link: "/placement-forms" },
        { title: "Student Complaint", link: "/student-complaint" },
        {
          title: "Certificate Verification",
          link: "/certificate-verification",
        },
        { title: "Marksheet Correction", link: "/marksheet-correction" },
      ],
    },
    { title: "Contact Us", link: "/contact" },
  ];

  return (
    <div className="w-full top-0 z-50 shadow-md">
      {/* Top Strip */}
      <div className="bg-teal-800 text-white text-lg py-1">
        <Marquee pauseOnHover={true} gradient={false} speed={60}>
          🌟 Welcome to the Elite Group of Companies — featuring
          <span className="ml-2 text-yellow-300 font-bold">JIFSA</span>, a
          leader in education, training and placement.
        </Marquee>
      </div>

      {/* Main Navigation */}
      <nav className="bg-gradient-to-r from-blue-800 to-blue-600 text-white hidden lg:flex">
        <div className="max-w-[1440px] mx-auto flex items-center justify-center gap-6 md:gap-8 py-3 px-4 text-lg font-medium transition-all relative">
          {navItems.map((item, idx) => (
            <div key={idx} className="relative group">
              {item.link ? (
                <Link
                  to={item.link}
                  className="flex items-center gap-1 hover:text-gray-200 transition-colors duration-300"
                >
                  {item.title}
                </Link>
              ) : (
                <div className="flex items-center gap-1 cursor-pointer hover:text-gray-200 transition-colors duration-300">
                  {item.title}
                  {item.dropdown && (
                    <ChevronDown
                      size={14}
                      className="transform transition-transform duration-300 group-hover:rotate-180"
                      aria-hidden="true"
                    />
                  )}
                </div>
              )}

              {/* Dropdown Menu */}
              {item.dropdown && item.submenu && (
                <div className="absolute left-0 top-full bg-gray-900 text-white py-2 w-64 rounded shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity duration-300 z-50">
                  {item.submenu.map((subItem, subIdx) => (
                    <Link
                      key={subIdx}
                      to={subItem.link}
                      className="block px-4 py-2 hover:bg-gray-800 transition-colors duration-200"
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default memo(Navbar);