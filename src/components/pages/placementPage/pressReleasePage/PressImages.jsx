import React from "react";

// Import all your images
import img1 from "../../../../assets/pressrelease11.jpg";
import img2 from "../../../../assets/pressrelease2.png";
import img3 from "../../../../assets/pressrelease3.jpg";
import img4 from "../../../../assets/pressrelease5.jpg";
import img5 from "../../../../assets/pressrelease6.jpg";
import img6 from "../../../../assets/pressrelease7.jpg";
import img7 from "../../../../assets/pressrelease8.jpg";
import img8 from "../../../../assets/pressrelease12.jpg";
import img9 from "../../../../assets/pressrelease13.jpg";
import img10 from "../../../../assets/pressrelease14.jpg";
import img11 from "../../../../assets/pressrelease15.jpg";

const PressImages = () => {
  const images = [
    img1, img2, img3, img4,
    img5, img6, img7, img8,
    img9, img10, img11,
  ];

  return (
    <div className="w-full min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
          News & Media Coverage
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {images.map((src, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition flex items-center justify-center"
            >
              <img
                src={src}
                alt={`press-${index}`}
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PressImages;
