import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  { title: "JIFSA BATCHES AND COUNTING", value: 1500, suffix: "+", desc: "Successful JIFSA Batches and Counting" },
  { title: "JIFSA'S CORPORATE TRAINING PROVIDE TO", value: 280, suffix: "+", desc: "Companies in India" },
  { title: "JIFSA RELIABLY TRAINED", value: 8250, suffix: "+", desc: "Employees of various Company" },
  { title: "JIFSA'S TRAINING CAMPUS HAVING COLLECTION OF", value: 3000, suffix: "+", desc: "Latest Equipment" },
  { title: "JIFSA'S TOUCHES", value: 20000, suffix: "+", desc: "of Students around the Nation" },
  { title: "JIFSA- TRAINING CAMPUS FOR PROVIDE TRAINING IN", value: 10, suffix: "+", desc: "Acres of Land in India" },
  { title: "JIFSA PROVIDE TO", value: 300, suffix: "+", desc: "Hours Practical Training via fire safety equipments" },
  { title: "HAPPY CLIENTS", value: 99, suffix: "%", desc: "Client Satisfaction" },
];

const JifsaSuccess = () => {
  // hook to detect if the section is visible
  const { ref, inView } = useInView({
    triggerOnce: true, // only animate once
    threshold: 0.2, // fire when 20% of the component is visible
  });

  return (
    <section ref={ref} className="bg-sky-500 py-16">
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
              <p className="text-3xl font-bold">
                {inView ? (
                  <CountUp end={item.value} duration={2} separator="," />
                ) : (
                  "0"
                )}
                {item.suffix}
              </p>
              <p className="mt-2 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JifsaSuccess;
