import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

import logo1 from "../../../assets/Ambuja-Cement-Logo.jpg";
import logo2 from "../../../assets/Our Recruiter Companies 9.jpg";
import logo3 from "../../../assets/Our Recruiter Companies 8.jpg";
import logo4 from "../../../assets/Our Recruiter Companies 7.jpg";
import logo5 from "../../../assets/Our Recruiter Companies 6.jpg";
import logo6 from "../../../assets/Our Recruiter Companies 5.jpg";
import logo7 from "../../../assets/Our Recruiter Companies 4.jpg";
import logo8 from "../../../assets/Our Recruiter Companies 30.jpg";
import logo9 from "../../../assets/Our Recruiter Companies 3.jpg";
import logo10 from "../../../assets/Our Recruiter Companies 29.jpg";
import logo11 from "../../../assets/Our Recruiter Companies 28.jpg";
import logo12 from "../../../assets/Our Recruiter Companies 28.jpg";
import logo13 from "../../../assets/Our Recruiter Companies 27.jpg";
import logo14 from "../../../assets/Our Recruiter Companies 26.jpg";
import { Link } from "react-router-dom";

const logos = [
  logo1, logo2, logo3, logo4, logo5, logo6, logo7,
  logo8, logo9, logo10, logo11, logo12, logo13, logo14,
];

const videos = [
  "https://www.youtube.com/embed/Ce7RFAjqDB0",
  "https://www.youtube.com/embed/diebLYVxsYM",
  "https://www.youtube.com/embed/mzisZrQgjKI",
];

const RecruiterAndVideos = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-white py-12 md:py-16 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">

      {/* Recruiter Companies Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-xs sm:text-sm font-semibold text-blue-600 uppercase mb-2">
          Our Recruiter
        </p>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-3 sm:gap-0">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 font-['Poppins']">
            Our Recruiter Companies
          </h2>
          <Link to="/recruited-students">
          <button className="border border-blue-500 text-blue-600 px-3 sm:px-4 py-2 rounded-md hover:bg-blue-50 shadow-sm transition text-sm sm:text-base">
            View All
          </button>
          </Link>
        </div>
      </motion.div>

      {/* Swiper Logos */}
      <Swiper
        spaceBetween={15}
        slidesPerView={2}
        breakpoints={{
          480: { slidesPerView: 3 },
          640: { slidesPerView: 4 },
          768: { slidesPerView: 5 },
          1024: { slidesPerView: 6 },
          1280: { slidesPerView: 7 },
        }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop
        modules={[Autoplay]}
        className="w-full mt-6 sm:mt-10"
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl p-3 sm:p-4 flex justify-center items-center shadow hover:shadow-lg transition"
            >
              <img
                src={logo}
                alt={`Recruiter ${index + 1}`}
                className="h-16 sm:h-24 object-contain"
              />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Videos Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-12 md:mt-16"
      >
        <p className="text-xs sm:text-sm font-semibold text-blue-600 uppercase mb-2">
          Media
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 font-['Poppins']">
          Videos Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <iframe
                className="w-full aspect-video"
                src={video}
                title={`YouTube video ${index + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default RecruiterAndVideos;
