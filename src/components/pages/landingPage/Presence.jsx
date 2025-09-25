import React from "react";
import mapImage from "../../../assets/India Map (1).png"; // replace with your map image

const Presence = () => {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-green-800 leading-snug">
            Our Expansion <br /> Is Progressing Rapidly
          </h2>

          {/* Card 1 */}
          <div className="bg-green-800 text-white p-6 md:p-8 rounded-2xl shadow-lg">
            <p className="text-3xl font-bold">10,00,000</p>
            <p className="text-lg">Learners Trained</p>
          </div>

          {/* Card 2 */}
          <div className="bg-green-800 text-white p-6 md:p-8 rounded-2xl shadow-lg">
            <p className="text-3xl font-bold">75,000+</p>
            <p className="text-lg">
              Students Placed <br />
              <span className="text-sm opacity-90">
                (Under the job guarantee programs)
              </span>
            </p>
          </div>
        </div>

        {/* Right Content - Map + Global Presence */}
        <div className="relative flex justify-center">
          {/* Map */}
          <img
            src={mapImage}
            alt="India Expansion Map"
            className="w-full max-w-2xl object-contain"
          />

          {/* Global Presence Box */}
          <div className="absolute bottom-4 right-4 bg-green-800 text-white p-6 rounded-2xl shadow-lg w-56">
            <h3 className="font-semibold text-lg">Our Global Presence</h3>
            <ul className="text-sm mt-3 space-y-1">
              <li>UAE</li>
              <li>Qatar</li>
              <li>Oman</li>
              <li>Mauritius</li>
              <li>Singapore</li>
              <li>Vietnam</li>
              <li>Philippines</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Presence;
