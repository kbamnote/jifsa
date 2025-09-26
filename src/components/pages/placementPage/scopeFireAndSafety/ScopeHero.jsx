import React from "react";
import bannerImg from "../../../../assets/banner17alt.jpg"; // your bg image
import { Link } from "react-router-dom";

const ScopeHero = () => {
  return (
    <section className="relative w-full h-[250px] md:h-[350px] lg:h-[400px]">
      {/* Background image */}
      <img
        src={bannerImg}
        alt="Scope for Fire & Safety Banner"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full max-w-7xl mx-auto px-6 text-white">
        {/* Title */}
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold">
          SCOPE FOR FIRE & SAFETY
        </h1>

        {/* Breadcrumb */}
        <div className="mt-2 text-sm md:text-base font-medium">
          <Link to="/"> <span className="hover:text-gray-200 cursor-pointer">HOME</span></Link>
          <span className="mx-2">{">"}</span>
          <span className="text-gray-300">CONTACT</span>
        </div>
      </div>
    </section>
  );
};

export default ScopeHero;
