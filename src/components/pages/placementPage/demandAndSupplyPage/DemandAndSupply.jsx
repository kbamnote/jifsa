import React from "react";
import { motion } from "framer-motion";

import one from "../../../../assets/demandandsupply1.jpg";


const DemandAndSupply = () => {
  const images = [one]  

  return (
    <section className="w-full bg-gray-50 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center px-4 sm:px-6 lg:px-8">
        
        {/* Left: Images */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full relative group space-y-6"
        >
          {images.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Demand and Supply ${idx + 1}`}
              className="w-full h-auto rounded-xl transform transition duration-500 group-hover:scale-105"
            />
          ))}
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
            DEMAND & SUPPLY OF FIRE & SAFETY PROFESSIONALS
          </h2>

          <p className="text-gray-700 leading-relaxed font-['Poppins'] text-base md:text-lg mb-4">
            As of now the requirement for these professionals easily outnumbers
            the availability. If you are looking for a qualification that gives
            you a passport to immediate employment, your obvious choice would be
            Fire & Safety. Whether you should go for a certificate/diploma/degree
            would, however, depend on your present qualification and the ability
            to invest effort. The worldwide growth in industry is a phenomenon
            that couldn't have been the same without India contributing to it in
            a visibly significant manner. While the industries in all three
            sectors Public, Private, and Joint require Fire & Safety personnel
            in increasing numbers there are very few institutions which are
            suitably equipped and properly geared to train and supply quality
            professionals. That explains the gap between supply and demand, and
            the resultant advantage to a well groomed professional.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DemandAndSupply;
