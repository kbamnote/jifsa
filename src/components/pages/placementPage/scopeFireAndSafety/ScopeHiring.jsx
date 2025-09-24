import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

import one from "../../../../assets/scopeandcareer1.jpg"; // 🔹 replace with your actual image path
import two from "../../../../assets/scopeandcareer2.jpg"; // 🔹 replace with your actual image path

const ScopeHiring = () => {
  const images = [one, two];

  return (
    <section className="w-full bg-gray-50 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center px-4 sm:px-6 lg:px-8">
        
        {/* Left: Carousel */}
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
            className="rounded-xl shadow-xl overflow-hidden"
          >
            {images.map((src, idx) => (
              <SwiperSlide key={idx}>
                <img
                  src={src}
                  alt={`Scope Hiring ${idx}`}
                  className="w-full h-auto rounded-xl transform transition duration-500 group-hover:scale-105"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Right: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center lg:text-left"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-['Poppins']">
            SCOPE FOR FIRE & SAFETY IN INDIA AND ABROAD
          </h2>

          <p className="text-gray-700 leading-relaxed font-['Poppins'] text-base md:text-lg mb-4">
            Kingdom of Saudi Arabia, United Arab Emirates, Oman, and Kuwait are
            some of the prominent destinations in the emerging land of opportunities.
            A new name given to the middle east for that is where the investors are
            pouring their money resulting in many job opportunities for professionals
            who have had their training in the right fields.
          </p>

          <p className="text-gray-700 leading-relaxed font-['Poppins'] text-base md:text-lg">
            They need Safety Supervisors, Safety Engineers and Safety Managers in
            industrial projects like Construction, Chemicals, Fertilizers, Petroleum,
            Aluminum, Automobiles and more. Fire Fighters, Fire Control Supervisors,
            Fire Engineers and Officers-in-Charge are becoming indispensable specialists.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ScopeHiring;
