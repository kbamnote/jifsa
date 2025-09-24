import React from "react";
import { motion } from "framer-motion";

import one from "../../../../assets/safety-programmes-img.jpg";


const SafetyProgram = () => {
  const images = [one]  

  return (
    <section className="w-full bg-gray-50 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center px-4 sm:px-6 lg:px-8">
        
        {/* Left: Images */}
      {/* Left: Image */}
<motion.div
  initial={{ opacity: 0, x: -80 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true }}
  className="w-full relative group"
>
  {images.map((src, idx) => (
    <div
      key={idx}
      className="w-full aspect-square overflow-hidden rounded-xl"
    >
      <img
        src={src}
        alt={`Future Prospects ${idx + 1}`}
        className="w-full h-full object-cover transform transition duration-500 group-hover:scale-105"
      />
    </div>
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
         FUTURE PROSPECTS & SCOPE FOR GROWTH AFTER ACQUIRING A PROFESSIONAL QUALIFICATION IN FIRE & SAFETY
          </h2>

          <p className="text-gray-700 leading-relaxed font-['Poppins'] text-base md:text-lg mb-4">
           An accident spells doom for the unfortunate victims and a peril no less for the organization. No matter whether it is caused by a human error of judgment or lack of precaution or a mechanical failure (which could in turn have arisen either due to faulty design or poor material or faulty workmanship/maintenance), or careless handling of heavy materials, or owing to leakage of certain gases or radiations - an accident is an accident, and it's the business of the management team to see that it is avoided. The onus legally lies on the Unit Head/Occupier and functionally on the Safety Manager- the ceaseless concern of both these being to safeguard against such accidents.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SafetyProgram;
