import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

import one from "../../../assets/residentialpageimage1.jpg";
import two from "../../../assets/residentialpageimage2.jpg";
import three from "../../../assets/residentialpageimage3.jpg";
import four from "../../../assets/residentialpageimage4.jpg";
import five from "../../../assets/residentialpageimage5.jpg";
import six from "../../../assets/residentialpageimage6.jpg";

const Residential = () => {
  const images = [one, two, three, four, five, six];

  return (
    <section className="w-full bg-gradient-to-r from-gray-50 to-white  sm:py-16 lg:py-20">
      {/* Top Header */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-12 px-6 md:px-20 text-center">
        <h1 className="text-4xl font-bold font-['Poppins']">Residential</h1>
       
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center px-4 sm:px-6 lg:px-8 mt-10">
        
        {/* Carousel with animation */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full relative group"
        >
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            spaceBetween={20}
            slidesPerView={1}
            className="rounded-xl shadow-2xl overflow-hidden"
          >
            {images.map((src, idx) => (
              <SwiperSlide key={idx}>
                <img
                  src={src}
                  alt={`Residential ${idx}`}
                  className="w-full h-auto rounded-xl transform transition duration-500 group-hover:scale-105"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Text Section with animation */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center lg:text-left"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-red-600 mb-4 font-['Poppins']">
            RESIDENTIAL COURSES OF JIFSA <br /> 
            <span className="text-gray-900">"A COURSE OF SUCCESS"</span>
          </h2>

          <p className="text-gray-700 leading-relaxed font-['Poppins'] text-base md:text-lg">
            JIFSA Education and Technical Services Private Limited gives you a trust
            and grooms every part of your career which is very important for students
            to make you well aware about the courses and clear your mindset for the
            future. The pictures you are already seeing on our website guarantee these
            things! JIFSA is going to sharpen every edge of your prospect and bring your
            dreams into reality. We are here to think about your future with commitments,
            and your faith in JIFSA will guide you toward success.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Residential;
