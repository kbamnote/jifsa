import React from "react";
import one from "../../../assets/1.jpg";
import two from "../../../assets/2.jpg";
import three from "../../../assets/3.jpg";
import four from "../../../assets/4.jpg";
import five from "../../../assets/5.jpg";
import six from "../../../assets/6.jpg";
import seven from "../../../assets/7.jpg";
import eight from "../../../assets/8.jpg";
import nine from "../../../assets/9.jpg";
import ten from "../../../assets/10.jpg";
import eleven from "../../../assets/11.jpg";
import twelve from "../../../assets/12.jpg";
import thirteen from "../../../assets/13.jpg";
import fourteen from "../../../assets/14.jpg";
import fifteen from "../../../assets/15.jpg";
import sixteen from "../../../assets/16.jpg";

const Featured = () => {
  const features = [
    { src: one, title: "Residential Program in India" },
    { src: two, title: "Residential Fire Safety Program in India" },
    { src: three, title: "Residential Industrial Safety Program in India" },
    { src: four, title: "Safety Professional Courses" },
    { src: five, title: "Safety Officer Course" },
    { src: six, title: "Safety Courses in India" },
    { src: seven, title: "Best Fire and Safety Institute" },
    { src: eight, title: "National Safety Diploma Training Courses in India" },
    { src: nine, title: "Online Safety Training" },
    { src: ten, title: "Institutes for Industrial Safety Management" },
    { src: eleven, title: "Institutes for Fire Extinguisher Training" },
    { src: twelve, title: "Institutes for Fire Engineering" },
    { src: thirteen, title: "Safety Training Institute" },
    { src: fourteen, title: "Industrial Safety Training" },
    { src: fifteen, title: "Top Fire and Safety Institute" },
    { src: sixteen, title: "Top Rank College in Fire and Safety" },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-10">
          Our Special Featured
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-3">
                <h3 className="text-sm font-semibold text-gray-800">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
