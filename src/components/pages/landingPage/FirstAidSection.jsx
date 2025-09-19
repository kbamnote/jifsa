import React from "react";
import { Flame } from "lucide-react";
import { motion } from "framer-motion";
import firstAidImg from "../../../assets/FirstAidWeb.jpg";

const FirstAidSection = () => {
  return (
    <section className="w-full bg-white py-12 font-['Poppins']">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Heading */}
        <motion.div
          className="flex items-center gap-2 mb-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Flame className="text-orange-500 w-5 h-5" />
          <p className="text-sm font-semibold uppercase  text-gray-700">
            First Aid Training Centre
          </p>
        </motion.div>

        {/* Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-black mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          DGMS Approved First Aid
        </motion.h2>

        {/* Content Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-8">
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
              className="max-h-[430px] rounded-lg shadow-md w-full max-w-lg"
            />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            className="text-gray-800 text-lg md:text-xl space-y-6"
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
          </motion.div>
        </div>

        {/* CTA Button - Centered below both columns */}
        <motion.div
          className="flex justify-center mt-10"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <a
            href="#"
            className="inline-flex items-center justify-center bg-red-600 text-white text-base font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-red-700 hover:scale-105 transition-transform duration-300"
          >
            Know More...
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FirstAidSection;
