import React from "react";
import bannerImg from "../../../../assets/banner24alt.jpg";

const QualificationHero = () => {
  return (
    <>
   
    <section className="relative w-full">
      {/* Image */}
      <img
        src={bannerImg}
        alt="Qualification Banner"
        className="w-full h-auto object-contain"
      />

      {/* Overlay content */}
      <div className="absolute inset-0 flex items-center bg-black/40">
        <div className="w-full max-w-7xl mx-auto px-6 text-white text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold">
            <span className=" px-2 py-1">DEMAND AND</span> SUPPLY
          </h1>
         

          {/* Breadcrumb */}
          <div className="mt-4 text-sm text-gray-300">
            <span className="hover:text-white cursor-pointer">HOME</span> &gt;{" "}
            <span className="text-white font-medium">
             CONTACT
            </span>
          </div>
        </div>
      </div>
    </section>
    
    </>
  );
};

export default QualificationHero;
