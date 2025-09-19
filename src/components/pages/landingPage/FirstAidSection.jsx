import React from "react";
import { Flame } from "lucide-react";
import { motion } from "framer-motion";
import firstAidImg from "../../../assets/FirstAidWeb.jpg";

const FirstAidSection = () => {
  return (
    <section className="w-full bg-white py-10 sm:py-14 lg:py-20 font-['Poppins']">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        
        {/* Section Heading */}
        <motion.div
          className="flex items-center gap-2 mb-3 sm:mb-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Flame className="text-orange-500 w-5 h-5 sm:w-6 sm:h-6" />
          <p className="text-xs sm:text-sm md:text-base font-semibold uppercase text-gray-700">
            First Aid Training Centre
          </p>
        </motion.div>

        {/* Title */}
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6 sm:mb-8 leading-snug"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          DGMS Approved First Aid
        </motion.h2>

        {/* Content Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-10 lg:gap-14">
          {/* Left: Image */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src={firstAidImg}
              alt="DGMS Approved First Aid"
              className="w-full max-w-sm sm:max-w-md md:max-w-lg rounded-lg shadow-md object-cover"
            />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            className="text-gray-800 text-sm sm:text-base md:text-lg lg:text-xl space-y-5 sm:space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="leading-relaxed">
              Now JIFSA is DGMS approved training centre and it’s established as
              per provisions laid down under The Gazette of India Extraordinary,
              Part II-Section 3-Sub section(i) No. 430 of 4th August 2021,
              Notification no. G.S.R. 529(E) dated 4th August, 2021 and approved
              by DGMS vide letter No. DGMS/HO(HQ)/First Aid/04/2021/167 Dhanbad
              2nd May, 2022.
            </p>
            <p className="leading-relaxed">
              First aid competency certificate authorized by DGMS is compulsory
              for any employment application posted by Mining enterprises like
              Coal India etc.
            </p>

            {/* Contact Info */}
            <p className="font-medium text-gray-900">
              Please call for information and admission{" "}
              <a href="tel:9407939795" className="text-blue-600 underline">
                9407939795
              </a>{" "}
              /{" "}
              <a href="tel:7879842744" className="text-blue-600 underline">
                7879842744
              </a>
            </p>

            {/* CTA Button */}
            <div className="pt-2 flex justify-start sm:justify-start md:justify-start lg:justify-start">
              <a
                href="#"
                className="inline-flex items-center justify-center bg-red-600 text-white text-sm sm:text-base md:text-lg font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg shadow-md hover:bg-red-700 hover:scale-105 transition-transform duration-300"
              >
                Know More...
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FirstAidSection;
