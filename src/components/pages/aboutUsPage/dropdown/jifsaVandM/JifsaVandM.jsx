import React from "react";
import { Link } from "react-router-dom";
import Header from "../../../../common/Header";
import Navbar from "../../../../common/Navbar";
import Footer from "../../../../common/Footer";
import banner from "../../../../../assets/bann1.jpg";
import Vision from "./content/Vision";
import Mission from "./content/Mission";
import Profile from "./content/Profile";

const JifsaVandM = () => {
  return (
    <>
      <Header />
      <Navbar />

      {/* Banner Section */}
      <div
        className="relative min-h-[200px] sm:min-h-[250px] md:min-h-[350px] lg:min-h-[350px] xl:min-h-[360px] flex items-center text-white bg-center bg-no-repeat bg-contain"
        style={{ backgroundImage: `url(${banner})` }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e1e2f]/90 to-[#0a0a0f]/20"></div>

        {/* Content */}
        <div className="relative z-10 text-left px-4 sm:px-8 md:px-[5%]">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-3">
            About JIFSA
          </h1>
          <p className="text-xs sm:text-sm">
       
       Your help is our endeavor
            
          
          </p>
        </div>
      </div>
      <div>
        <Vision />
        <Mission />
        <Profile />
      </div>
      <Footer />
    </>
  );
};

export default JifsaVandM;
