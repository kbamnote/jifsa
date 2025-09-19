import React from "react";
import { MapPin } from "lucide-react";
import bgImage from "../../../assets/presence-bg.jpg"; 

const Presence = () => {
  return (
    <section
      className="relative bg-cover bg-center h-screen w-full"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-opacity-40"></div>

      <div className="relative z-10 max-w-4xl mx-auto h-full flex flex-col justify-center items-center text-center text-white px-6">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4 font-['Poppins']">
          Our Hub of Excellence
        </h2>
        <p className="text-lg md:text-xl mb-12 font-['Poppins'] text-gray-200">
          Strategically located in <span className="text-sky-400 font-semibold">Nagpur</span> 
          {" "}to deliver world-class training and safety education
        </p>

        {/* Location */}
        <div className="flex justify-center items-center space-x-3">
          <MapPin className="w-6 h-6 text-sky-400" />
          <span className="text-xl md:text-2xl font-semibold">Nagpur, Maharashtra</span>
        </div>
      </div>
    </section>
  );
};

export default Presence;
