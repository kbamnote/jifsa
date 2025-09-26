import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react"; 
import jifsaImg from "../../../assets/b4 - Copy.jpg"; 
import nafsImg from "../../../assets/23.jpg";   

const RungtaSection = () => {
  return (
    <section className="w-full bg-gradient-to-br from-gray-50 to-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center font-['Poppins'] mb-14 text-gray-900"
        >
          Why <span className="text-blue-700">Choose Us</span>
        </motion.h2>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start">
          
          {/* JIFSA Column */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition"
          >
            <img
              src={jifsaImg}
              alt="JIFSA"
              className="rounded-lg shadow-md w-full h-48 object-cover mb-6"
            />
            <h3 className="text-2xl font-bold text-blue-700 mb-6 font-['Poppins']">
              JIFSA
            </h3>
            <ul className="space-y-4 text-gray-700 text-left w-full max-w-md">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="text-blue-700 w-6 h-6 shrink-0" />
                <span>Industry-oriented training with modern facilities</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="text-blue-700 w-6 h-6 shrink-0" />
                <span>International presence (UAE, Qatar, Oman, etc.)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="text-blue-700 w-6 h-6 shrink-0" />
                <span>1,000,000+ learners trained successfully</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="text-blue-700 w-6 h-6 shrink-0" />
                <span>75,000+ students placed under job guarantee programs</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="text-blue-700 w-6 h-6 shrink-0" />
                <span>Collaboration with global universities & industries</span>
              </li>
            </ul>
          </motion.div>

          {/* NAFS Column */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition"
          >
            <img
              src={nafsImg}
              alt="NAFS Nagpur"
              className="rounded-lg shadow-md w-full h-48 object-cover mb-6"
            />
            <h3 className="text-2xl font-bold text-red-600 mb-6 font-['Poppins']">
              NAFS Nagpur
            </h3>
            <ul className="space-y-4 text-gray-700 text-left w-full max-w-md">
              <li className="flex items-start gap-2">
                <XCircle className="text-red-500 w-6 h-6 shrink-0" />
                <span>Limited industry tie-ups and exposure</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="text-red-500 w-6 h-6 shrink-0" />
                <span>Mostly national-level presence</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="text-red-500 w-6 h-6 shrink-0" />
                <span>Fewer students trained compared to JIFSA</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="text-red-500 w-6 h-6 shrink-0" />
                <span>No structured job guarantee placement programs</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="text-red-500 w-6 h-6 shrink-0" />
                <span>Traditional teaching methods with limited global recognition</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RungtaSection;
