import React from "react";
import { Phone } from "lucide-react";
import { motion } from "framer-motion";

const experts = [
  {
    id: 1,
    title: "E Learning",
    desc: "Online Course & Enquiry",
    numbers: ["+91-9860111868", "+91-8855885807"],
    color: "from-green-400 to-green-600",
  },
  {
    id: 2,
    title: "DGMS First Aid",
    desc: "Course & Enquiry",
    numbers: ["+91-9860111868"],
    color: "from-red-400 to-red-600",
  },
  {
    id: 3,
    title: "First AID",
    desc: "Course & Enquiry",
    numbers: ["+91-7276735659"],
    color: "from-cyan-400 to-cyan-600",
  },
  {
    id: 4,
    title: "Admission",
    desc: "Admission and Enquiry",
    numbers: ["+91-7276568807", "+91-8799959224"],
    color: "from-red-400 to-red-600",
  },
  {
    id: 5,
    title: "Franchisee",
    desc: "Services and Enquiry",
    numbers: ["+91-9860111868", "+91-7276735659"],
    color: "from-gray-400 to-gray-600",
  },
  {
    id: 6,
    title: "Corporate",
    desc: "Training & Enquiry",
    numbers: ["+91-8855885807", "+91-9860111868"],
    color: "from-cyan-400 to-cyan-600",
  },
  {
    id: 7,
    title: "Admission Residential & Offline",
    desc: "Course at campus",
    numbers: ["+91-7276568807", "+91-8799959224"],
    color: "from-yellow-400 to-yellow-500",
  },
];

const ConnectExperts = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 text-blue-800 font-semibold uppercase font-['Poppins'] mb-3"
        >
          <Phone className="w-5 h-5 text-blue-600" />
          <span>Our Experts</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-8 font-['Poppins']"
        >
          Connect With Experts
        </motion.h2>

        {/* All Services button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-end mb-6"
        >
          <button className="px-5 py-2 border border-blue-500 text-blue-600 rounded-lg hover:bg-blue-50 transition font-semibold">
            All Services
          </button>
        </motion.div>

        {/* Experts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {experts.map((expert, idx) => (
            <motion.div
              key={expert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-xl overflow-hidden shadow-xl transform transition hover:scale-105 bg-gradient-to-r ${expert.color}`}
            >
              <div className="relative bg-white p-6 rounded-xl m-4 min-h-[160px]">
                {/* Icon */}
                <div className="absolute -top-5 left-4 bg-white p-3 rounded-full shadow-md">
                  <Phone className="w-6 h-6 text-gray-700" />
                </div>

                {/* Title & Description */}
                <h3 className="text-lg font-semibold font-['Poppins']">{expert.title}</h3>
                <p className="text-gray-600 text-sm font-['Poppins']">{expert.desc}</p>

                {/* Phone Numbers */}
                <div className="mt-4 space-y-1">
                  {expert.numbers.map((num, i) => (
                    <a
                      key={i}
                      href={`tel:${num}`}
                      className="block text-blue-600 hover:underline font-medium"
                    >
                      {num}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConnectExperts;
