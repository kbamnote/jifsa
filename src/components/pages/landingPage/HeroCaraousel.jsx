import React from "react";
import Slider from "react-slick";

// import banner1 from "../../../assets/dtpweb1.jpg";
// import banner2 from "../../../assets/dtpweb2.jpg";
// import banner3 from "../../../assets/dtpweb3.jpg";
// import banner4 from "../../../assets/dtpweb5.jpg";
// import banner5 from "../../../assets/dtpweb6.jpg";
// import banner6 from "../../../assets/dtpweb7.jpg";
// import banner7 from "../../../assets/dtpweb8.jpg";
// import banner8 from "../../../assets/dtpweb9.jpg";
// import banner9 from "../../../assets/dtpweb10.jpg";
// import banner10 from "../../../assets/dtpweb11.jpg";
// import banner11 from "../../../assets/dtpweb12.jpg";
import banner12 from '../../../assets/bannerOne.png'

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
    // banner1,
    // banner2,
    // banner3,
    // banner4,
    // banner5,
    // banner6,
    // banner7,
   
    // banner8,
    // banner9,
    // banner10,
    // banner11,
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
    <a 
      href="#" 
      className="text-blue-600 hover:underline font-medium"
    >
      here
    </a>
  </span>
  <span className="flex items-center gap-1">
    ✅ Certificate Verification, please click{" "}
    <a 
      href="#" 
      className="text-green-600 hover:underline font-medium"
    >
      here
    </a>
  </span>
</div>

</section>

  );
};

export default HeroCaraousel;
