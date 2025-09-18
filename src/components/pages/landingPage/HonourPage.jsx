import React from "react";
import leftImage from "../../../assets/GovernerAward.jpg"; 

const HonourPage = () => {
  return (
    <section className="w-full bg-white py-10">
      <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6 md:px-4">
        {/* Left side - Image */}
        <div className="w-full">
          <img
            src={leftImage}
            alt="Award Ceremony"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Right side - Content */}
        <div className="text-left">
          <p className="text-blue-700 font-semibold mb-2">
            INDIA'S LARGEST FIRE AND SAFETY ACADEMY
          </p>
          <h1 className="text-3xl md:text-4xl font-bold leading-snug mb-4">
            Welcome To ST. JOSEPH'S <br />
            INTERNATIONAL FIRE AND SAFETY ACADEMY
          </h1>
          <p className="text-2xl text-gray-700 leading-relaxed mb-6">
            JIFSA provides occupational health and safety training and qualification,
            industrial safety training, industrial safety course, safety officer courses,
            Industrial safety courses, fire safety course, safety engineering courses
            from govt. recognised certification authorities. Our syllabuses are matched
            with world's recognised institutions in Occupational health and safety and
            industrial safety etc.
          </p>
          <button className="bg-red-600 text-white px-6 py-3 rounded-md font-medium hover:bg-red-700 transition">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HonourPage;
