import React from "react";
import bannerImg from "../../../../assets/banner13alt.jpg";

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
            <span className=" px-2 py-1">JIFSA's</span> COURSES
          </h1>
          <p className="mt-2 text-sm md:text-base text-gray-300">
            Courses may update as per university, NCVET, MPPSC notifications
          </p>

          {/* Breadcrumb */}
          <div className="mt-4 text-sm text-gray-300">
            <span className="hover:text-white cursor-pointer">HOME</span> &gt;{" "}
            <span className="text-white font-medium">
              JIFSA PROVIDED UNIVERSITY COURSES UNDER B VOC
            </span>
          </div>
        </div>
      </div>
    </section>
    
    </>
  );
};

export default QualificationHero;
