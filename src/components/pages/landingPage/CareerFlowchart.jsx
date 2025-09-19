import React from "react";
import { motion } from "framer-motion";
import flowchartImage from "../../../assets/informatic.jpg"; 

const CareerFlowchart = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-8xl mx-auto px-6 md:px-12">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 font-['Poppins'] bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"
        >
          Career Flowchart
        </motion.h2>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src={flowchartImage}
            alt="Career Flowchart"
            className="max-w-full h-auto rounded-xl shadow-2xl hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default CareerFlowchart;
