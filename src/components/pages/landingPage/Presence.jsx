import React from 'react';
import { motion } from 'framer-motion';
import { Users, Briefcase, MapPin } from 'lucide-react';
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import mapImg from '../../../assets/India Map (1).png'

const Presence = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section ref={ref} className="w-full bg-gradient-to-r from-gray-50 to-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 lg:mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <p className="text-red-600 font-semibold uppercase tracking-wide mb-3 text-sm sm:text-base font-['Poppins']">
              Rapid Growth & Expansion
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight font-['Poppins']">
              Our Expansion <br /> Is Progressing <span className="text-red-600">Rapidly</span>
            </h2>
          </motion.div>

          {/* Global Presence Box */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-red-600 text-white p-6 rounded-xl shadow-2xl min-w-fit transform hover:scale-105 transition duration-500"
          >
            <h3 className="font-bold text-lg mb-3 text-center flex items-center justify-center gap-2 font-['Poppins']">
              <MapPin className="w-5 h-5" />
              Our Global Presence
            </h3>
            <ul className="text-sm space-y-1 font-['Poppins']">
              <li>• UAE</li>
              <li>• Qatar</li>
              <li>• Oman</li>
              <li>• Mauritius</li>
              <li>• Singapore</li>
              <li>• Vietnam</li>
              <li>• Philippines</li>
            </ul>
          </motion.div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 items-start">
          
          {/* Left Cards */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Card 1 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-red-600 to-red-700 text-white p-8 rounded-xl shadow-2xl transform transition duration-500 hover:shadow-3xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-8 h-8" />
              </div>
              <p className="text-3xl sm:text-4xl font-bold mb-2 font-['Poppins']">
                {inView ? <CountUp end={1000000} duration={2.5} separator="," /> : "0"}
              </p>
              <p className="text-lg font-['Poppins'] font-medium">LEARNERS TRAINED</p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-red-600 to-red-700 text-white p-8 rounded-xl shadow-2xl transform transition duration-500 hover:shadow-3xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="w-8 h-8" />
              </div>
              <p className="text-3xl sm:text-4xl font-bold mb-2 font-['Poppins']">
                {inView ? <CountUp end={75000} duration={2.5} separator="," /> : "0"}+
              </p>
              <p className="text-lg mb-1 font-['Poppins'] font-medium">STUDENTS PLACED</p>
              <p className="text-sm opacity-90 font-['Poppins']">Under the job guarantee programs</p>
            </motion.div>
          </motion.div>

          {/* Map Column */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-2 relative group"
          >
            <div className="relative flex justify-center">
              <div className="w-full max-w-3xl h-96 md:h-[500px]">
                <img
                  src={mapImg}
                  alt="India Expansion Map"
                  className="w-full h-full object-contain rounded-xl shadow-2xl transform transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Presence;
