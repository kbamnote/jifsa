import React from "react";
import { Flame } from "lucide-react";

const emphasizePoints = [
  "Excellence of 28 years in educational Services.",
  "Awarded by Governor of Maharashtra Govt.",
  "Times Brand Icon 2021.",
  "JIFSA is associated with MEPSC, BSS, DISH, DGMS to achieve goal of skill India.",
  "India’s Leading Fire Safety Academy with Biggest Practical ground spread over 10 acres of land.",
  "India’s only academy, having 10 Acres of Practical Setup and over 3000+ tools.",
  "Online learning portal and app with quality study content along with self-made videos, presentations and recorded lectures.",
  "Dedicated placement cell working for our student career startup and growth.",
  "Star Level Hostel & Mess facilities for 500 Students.",
  "Well-equipped training ground with fire tender, ambulance and modern & latest equipment’s.",
  "Competent faculties from industry experienced with advanced teaching techniques using LCD projector e-learning classes."
];

const EmphasizeSection = () => {
  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-8xl mx-auto px-6 md:px-12">
        {/* Section Title */}
        <div className="flex items-center gap-2 mb-4">
          <Flame className="text-black w-5 h-5" />
          <h3 className="text-sm font-semibold uppercase text-gray-700">
            Our Strength and Achievements
          </h3>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-black">
          Our Emphasize
        </h2>

        {/* List Items */}
        <ul className="space-y-4 text-lg md:text-xl text-gray-800">
          {emphasizePoints.map((point, index) => (
            <li key={index} className="flex items-start gap-2">
              <Flame className="text-black w-5 h-5 mt-1 flex-shrink-0" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default EmphasizeSection;
