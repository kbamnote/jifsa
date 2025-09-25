import React from "react";
import { Flame, Phone } from "lucide-react";
import { motion } from "framer-motion";

const courses = [
  {
    id: 1,
    course: "Diploma in Fire and Safety (Industrial and Construction) NSQF 5",
    duration: "1 Year",
    certification: "C V Raman University",
  },
  {
    id: 2,
    course: "Advance Diploma in Fire and Safety (Industrial and Construction) NSQF 6",
    duration: "2 Years",
    certification: "C V Raman University",
  },
  {
    id: 3,
    course: "Bachelor's degree in Fire and Safety (Industrial and Construction) NSQF 7",
    duration: "3 Years",
    certification: "C V Raman University",
  },
  {
    id: 4,
    course: "Fire fighter",
    duration: "780 Hrs. / 1 Year",
    certification: "NCVET MEPSC NSQF",
  },
];

const CoursesTableTwo = () => {
  return (
    <section className="w-full bg-gradient-to-br from-gray-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-4 text-blue-800 font-semibold uppercase font-['Poppins']"
        >
          <Flame className="w-5 h-5 text-orange-500 animate-pulse" />
          <span>Our Courses and Services</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-10 leading-snug font-['Poppins']"
        >
          🎓 University Courses Under{" "}
          <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
            B.Voc
          </span>
        </motion.h2>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="overflow-x-auto shadow-2xl rounded-xl border border-gray-200"
        >
          <table className="w-full text-left border-collapse">
            <thead className="bg-gradient-to-r from-blue-600 to-blue-500 text-white">
              <tr>
                <th className="px-6 py-3 border-b border-blue-700">#</th>
                <th className="px-6 py-3 border-b border-blue-700">Course</th>
                <th className="px-6 py-3 border-b border-blue-700">Duration</th>
                <th className="px-6 py-3 border-b border-blue-700">Certification</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course, idx) => (
                <tr
                  
                  className={`transition-all duration-300 ${
                    idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                  } hover:bg-blue-50`}
                >
                  <td className="px-6 py-4 border-b border-gray-200 font-medium">{course.id}</td>
                  <td className="px-6 py-4 border-b border-gray-200">{course.course}</td>
                  <td className="px-6 py-4 border-b border-gray-200">{course.duration}</td>
                  <td className="px-6 py-4 border-b border-gray-200">{course.certification}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-6 flex flex-wrap items-center gap-3 text-gray-700 text-lg font-medium font-['Poppins']"
        >
          <Phone className="w-5 h-5 text-green-600" />
          <span>
            To know more about courses please{" "}
            <span className="text-blue-600 font-semibold cursor-pointer hover:underline">
              call us: 7276568807
            </span>
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default CoursesTableTwo;
