import React from 'react';
import { motion } from 'framer-motion';
import { Users, Briefcase, MapPin } from 'lucide-react';
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import mapImg from '../../../assets/India Map (1).png';

const Presence = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section ref={ref} className="w-full bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">

        {/* Heading Center */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <p className="text-green-900 font-extrabold uppercase tracking-wide mb-3 text-sm sm:text-lg font-['Poppins']">
            Rapid Growth & Expansion
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight font-['Poppins']">
            Our Expansion <br /> Is Progressing <span className="text-green-900">Rapidly</span>
          </h2>
        </motion.div>

        {/* Map Full Width */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full mb-12"
        >
          <img
            src={mapImg}
            alt="India Expansion Map"
            className="w-full h-[400px] sm:h-[500px] md:h-[600px] object-contain rounded-xl"
          />
        </motion.div>

        {/* Three Equal Blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
          {/* Global Presence */}
          <motion.div
  whileHover={{ scale: 1.05 }}
  className="bg-gradient-to-br from-green-900 to-green-900 text-white p-8 rounded-xl shadow-lg flex flex-col items-center justify-center"
>
  <h3 className="font-bold text-2xl mb-3 text-center flex items-center gap-2 font-['Poppins']">
    <MapPin className="w-5 h-5" />
    Our Global Presence
  </h3>
  
  {/* Two-column list */}
  <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-lg font-['Poppins'] text-left">
    <li>• UAE</li>
    <li>• Qatar</li>
    <li>• Oman</li>
    <li>• Mauritius</li>
    <li>• Singapore</li>
    <li>• Vietnam</li>
  
  </ul>
</motion.div>


          {/* Learners Trained */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-green-900 to-green-900 text-white p-8 rounded-xl shadow-lg flex flex-col items-center justify-center"
          >
            <Users className="w-10 h-10 mb-4" />
            <p className="text-3xl sm:text-4xl font-bold mb-2 font-['Poppins']">
              {inView ? <CountUp end={1000000} duration={2.5} separator="," /> : "0"}
            </p>
            <p className="text-lg font-['Poppins'] font-medium">LEARNERS TRAINED</p>
          </motion.div>

          {/* Students Placed */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-green-900 to-green-900 text-white p-8 rounded-xl shadow-lg flex flex-col items-center justify-center"
          >
            <Briefcase className="w-10 h-10 mb-4" />
            <p className="text-3xl sm:text-4xl font-bold mb-2 font-['Poppins']">
              {inView ? <CountUp end={75000} duration={2.5} separator="," /> : "0"}+
            </p>
            <p className="text-lg mb-1 font-['Poppins'] font-medium">STUDENTS PLACED</p>
            <p className="text-sm opacity-90 font-['Poppins'] text-center">
              Under the job guarantee programs
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Presence;
