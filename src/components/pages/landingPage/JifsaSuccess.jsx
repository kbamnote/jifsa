import React from "react";
import { motion } from "framer-motion";

const stats = [
  { title: "JIFSA BATCHES AND COUNTING", value: "1.5K+", desc: "Successful JIFSA Batches and Counting" },
  { title: "JIFSA'S CORPORATE TRAINING PROVIDE TO", value: "280+", desc: "Companies in India" },
  { title: "JIFSA RELIABLY TRAINED", value: "8250+", desc: "Employees of various Company" },
  { title: "JIFSA'S TRAINING CAMPUS HAVING COLLECTION OF", value: "3000+", desc: "Latest Equipment" },
  { title: "JIFSA'S TOUCHES", value: "20K+", desc: "of Students around the Nation" },
  { title: "JIFSA- TRAINING CAMPUS FOR PROVIDE TRAINING IN", value: "10+", desc: "Acres of Land in India" },
  { title: "JIFSA PROVIDE TO", value: "300+", desc: "Hours Practical Training via fire safety equipments" },
  { title: "HAPPY CLIENTS", value: "99%", desc: "Client Satisfaction" },
];

const JifsaSuccess = () => {
  return (
    <section className="bg-sky-500 py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-white font-['Poppins']"
        >
          JIFSA’s Count Of Success
        </motion.h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-sky-700 text-white p-6 rounded-xl shadow-lg hover:scale-105 transition-transform font-['Poppins']"
            >
              <h3 className="text-sm uppercase mb-2">{item.title}</h3>
              <p className="text-3xl font-bold">{item.value}</p>
              <p className="mt-2 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JifsaSuccess;
