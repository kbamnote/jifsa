import React from "react";
import Slider from "react-slick";

import banner1 from "../../../assets/b12.webp";
import banner2 from "../../../assets/b2.webp";
import banner3 from "../../../assets/b3.webp";
import banner4 from "../../../assets/b4.webp";
import banner5 from "../../../assets/b5.webp";
import banner6 from "../../../assets/b6.webp";
import banner7 from "../../../assets/b7.webp";
import banner8 from "../../../assets/b8.webp";
import banner9 from "../../../assets/b9.webp";
import banner10 from "../../../assets/b10.webp";
import banner12 from '../../../assets/b1.webp'
import { Link } from "react-router-dom";

const HeroCaraousel = () => {
  const settings = {
    dots: false, // removed the dots
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    pauseOnHover: false,
  };

  const banners = [
    banner12,
    banner1,
    banner2,
    banner3,
    banner4,
    banner5,
    banner6,
    banner7,
    banner8,
    banner9,
    banner10,
  ];

  return (
 <section className="w-full max-w-screen overflow-hidden relative mx-auto ">
  {/* Carousel */}
  <Slider {...settings}>
    {banners.map((img, idx) => (
      <div key={idx} className="relative">
        <img
          src={img}
          alt={`banner-${idx + 1}`}
          className="w-full h-auto"
        />
      </div>
    ))}
  </Slider>

  {/* Text strip below carousel */}
  <div className="bg-gray-100 shadow-sm rounded-md px-4 py-2 flex flex-wrap  gap-4 text-gray-800 text-sm md:text-base">
  <span className="flex items-center gap-1">
    📢 New Jobs are posted, please view{" "}
    <Link
      to="/careers" 
      className="text-blue-600 hover:underline font-medium"
    >
      here
    </Link>
  </span>
  <span className="flex items-center gap-1">
    ✅ Certificate Verification, please click{" "}
    <Link
      to="/certificate-verification" 
      className="text-green-600 hover:underline font-medium"
    >
      here
    </Link>
  </span>
</div>

</section>

  );
};

export default HeroCaraousel;