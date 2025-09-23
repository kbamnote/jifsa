import React from "react";
import Header from "../../../../common/Header";
import Navbar from "../../../../common/Navbar";
import Footer from "../../../../common/Footer";
import banner from "../../../../../assets/ban2.jpg";
import { Link } from "react-router-dom";
import AbContents from "./abContents/AbContents";

const AdvisoryBoard = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div
        className="relative min-h-[200px] sm:min-h-[250px] md:min-h-[350px] lg:min-h-[350px] xl:min-h-[360px] flex items-center text-white bg-center bg-no-repeat bg-contain"
        style={{ backgroundImage: `url(${banner})` }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e1e2f]/90 to-[#0a0a0f]/20"></div>

        {/* Content */}
        <div className="relative z-10 text-left px-4 sm:px-8 md:px-[5%]">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-3">
            Advisory Committee
          </h1>
          <p className="text-xs sm:text-sm">
            <Link to="/" className="hover:underline">
              HOME
            </Link>{" "}
            <span className="mx-2">&gt;</span> Advisory Committee
          </p>
        </div>
      </div>
      <div className="w-full pt-3 bg-gray-100">
        <AbContents/>
      </div>
      <Footer />
    </>
  );
};

export default AdvisoryBoard;
