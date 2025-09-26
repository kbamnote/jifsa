import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // ✅ FIXED import

import noimage from "../../../assets/noimageW.jpg";
import one from '../../../assets/AMANKUNWAR.jpg'
import two from '../../../assets/Amankhan.jpg'
import three from '../../../assets/amitnavale.jpg'
import four from '../../../assets/ShivamGupta.jpg'
import five from '../../../assets/prithvibareth.jpg'
import six from '../../../assets/Niyazkhan.jpg'

const students = [
  { name: "VAIBHAV MISHRA", company: "R R Ispat", designation: "Safety Officer", image: one },
  { name: "MD. SHADAB", company: "Floor Space India Pvt. Ltd", designation: "Safety Supervisor", image: two },
  { name: "YOGESH HARISHCHANDRA", company: "Floor Space India Pvt. Ltd", designation: "Safety Supervisor", image: three },
  { name: "RAHUL VERMA", company: "Aditya Birla Group", designation: "HSE Officer", image: five },
  { name: "AMAN KHAN", company: "L&T Construction", designation: "Site Safety Engineer", image: six },
  { name: "ROHIT SHARMA", company: "Essar Power", designation: "Safety Officer", image: four },
];

// ✅ Create a motion-wrapped Link
const MotionLink = motion(Link);

const PlacementSection = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* Left - Carousel */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 font-['Poppins']"
          >
            Recruited Students
          </motion.h2>

          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop={true}
            modules={[Autoplay]}
            className="w-full"
          >
            {students.map((student, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-4 text-center h-full flex flex-col justify-between hover:scale-105 transition-transform"
                >
                  <img
                    src={student.image}
                    alt={student.name}
                    className="w-full h-56 object-cover rounded-md mb-4"
                  />
                  <h3 className="font-bold text-lg">
                    <span className="uppercase">{student.name}</span>
                  </h3>
                  <p className="text-sm text-gray-600">{student.company}</p>
                  <p className="text-sm text-gray-600">{student.designation}</p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Right - Placement Info */}
        <div className="flex flex-col justify-center">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-sm font-semibold text-blue-600 uppercase mb-2"
          >
            Placement
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-['Poppins']"
          >
            Online Placement Support
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-700 mb-4"
          >
            The department has a cell looking after placement activities and management of placement schedules. 
            The placement cell maintains a record of potential employers and contacts them on a regular basis. 
            Past students of the department also provide referrals. Every year campus interviews are arranged by the placement cell.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-gray-700 mb-4"
          >
            Abundant career opportunities in safety exist both in industries and at construction sites. 
            Safeguard against accidents—it is what concerns the job of a Safety Officer. 
            Accidents often occur at both the industrial as well as residential premises; they can be caused by machinery, chemicals, gases, electricity, radiation, fire, etc.
          </motion.p>

          {/* ✅ Fixed motion Link */}
          <MotionLink
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            to="/placement-cell"
            className="text-blue-600 font-semibold hover:underline inline-flex items-center"
          >
            &gt; More About Placement
          </MotionLink>
        </div>
      </div>
    </section>
  );
};

export default PlacementSection;
