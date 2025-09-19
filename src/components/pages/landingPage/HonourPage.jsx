import React from "react";
import { motion } from "framer-motion";
import leftImage from "../../../assets/GovernerAward.jpg";

const HonourPage = () => {
  return (
    <section className="w-full bg-gradient-to-r from-gray-50 to-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center px-4 sm:px-6 lg:px-8">
        
        {/* Left side - Image with animation */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative group"
        >
          <img
            src={leftImage}
            alt="Award Ceremony"
            className="w-full h-auto rounded-xl shadow-2xl transform transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0  bg-opacity-10 rounded-xl group-hover:bg-opacity-0 transition"></div>
        </motion.div>

        {/* Right side - Content with animation */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center lg:text-left"
        >
          <p className="text-red-600 font-semibold uppercase tracking-wide mb-3 text-sm sm:text-base md:text-lg font-['Poppins']">
            India&apos;s Largest Fire and Safety Academy
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold font-['Poppins']  mb-6 text-gray-900">
            Welcome To <span className="text-red-600">ST. JOSEPH&apos;S</span> <br className="hidden sm:block" />
            International Fire and Safety Academy
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-2 font-['Poppins']">
            JIFSA provides occupational health and safety training and qualification,
            industrial safety training, safety officer courses, fire safety training,
            and engineering courses from govt. recognised certification authorities.  
            Our syllabus is aligned with globally recognised institutions in occupational
            health and safety.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-red-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-medium shadow-lg hover:shadow-xl hover:bg-red-700 transition-all duration-300 font-['Poppins'] text-sm sm:text-base md:text-lg"
          >
            Read More
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HonourPage;
