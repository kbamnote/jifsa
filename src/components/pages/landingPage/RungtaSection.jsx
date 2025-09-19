import React from "react";
import { Flame } from "lucide-react"; // fire icon
import { motion } from "framer-motion"; // for animations
import rungtaImg from "../../../assets/RuntaUniversity.jpg";

const RungtaSection = () => {
  return (
    <section className="w-full bg-gradient-to-br from-gray-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Top heading with icon */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-6"
        >
          <Flame className="text-orange-500 w-6 h-6 animate-pulse" />
          <p className="text-lg font-semibold uppercase font-['Poppins']">
            Associated with{" "}
            <span className="text-red-600">Rungta International Skill University</span>{" "}
            <a href="#" className="text-blue-600 underline hover:text-blue-800 transition">
              Know More...
            </a>
          </p>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold font-['Poppins'] mb-10 leading-snug"
        >
          🎓 B.Voc Degree & Diploma Courses From{" "}
          <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
            Rungta International Skill University
          </span>
        </motion.h2>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative group"
          >
            <img
              src={rungtaImg}
              alt="Rungta University"
              className="rounded-xl shadow-2xl w-full h-auto transform transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-opacity-10 rounded-xl group-hover:bg-opacity-0 transition"></div>
          </motion.div>

          {/* Right Side - Text */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 font-['Poppins']">
              JIFSA is now an industry partner of{" "}
              <span className="font-semibold text-red-600">
                Rungta International Skill University
              </span>{" "}
              to deliver B.Voc Courses. JIFSA provides world-class skill training
              facilities and industry-ready knowledge in{" "}
              <span className="text-gray-900 font-medium">Industrial Safety</span> and
              related domains, offering multiple entry-exit points for learners.
            </p>

            <p className="text-xl font-semibold text-gray-800 mb-6 font-['Poppins']">
              📞 Call for Information & Admission:
            </p>

            <div className="flex flex-wrap gap-4 text-lg">
              <a href="tel:9407939795" className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
                9407939795
              </a>
              <a href="tel:7021288226" className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
                7021288226
              </a>
              <a href="tel:7039089670" className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
                7039089670
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RungtaSection;
