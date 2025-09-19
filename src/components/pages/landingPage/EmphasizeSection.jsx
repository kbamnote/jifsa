import React from "react";
import { Flame } from "lucide-react";
import { motion } from "framer-motion";

const emphasizePoints = [
  "Excellence of 28 years in educational Services.",
  "Awarded by Governor of Maharashtra Govt.",
  "Times Brand Icon 2021.",
  "JIFSA is associated with MEPSC, BSS, DISH, DGMS to achieve goal of skill India.",
  "India’s Leading Fire Safety Academy with Biggest Practical ground spread over 10 acres of land.",
  "India’s only academy, having 10 Acres of Practical Setup and over 3000+ tools.",
  "Online learning portal and app with quality study content along with self-made videos, presentations and recorded lectures.",
  "Dedicated placement cell working for our student career startup and growth.",
  "Star Level Hostel & Mess facilities for 500 Students.",
  "Well-equipped training ground with fire tender, ambulance and modern & latest equipment’s.",
  "Competent faculties from industry experienced with advanced teaching techniques using LCD projector e-learning classes."
];

// Variants for animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // delay between each child
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const EmphasizeSection = () => {
  return (
    <section className="w-full bg-white py-16 font-['Poppins']">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 mb-4"
        >
          <Flame className="text-red-600 w-6 h-6" />
          <h3 className="text-sm font-semibold uppercase text-gray-700">
            Our Strength and Achievements
          </h3>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-8 text-black"
        >
          Our Emphasize
        </motion.h2>

        {/* Animated List */}
        <motion.ul
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-5 text-lg md:text-xl text-gray-800"
        >
          {emphasizePoints.map((point, index) => (
            <motion.li
              key={index}
              variants={itemVariants}
              className="flex items-start gap-3"
            >
              <Flame className="text-red-600 w-5 h-5 mt-1 flex-shrink-0" />
              <span>{point}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default EmphasizeSection;
