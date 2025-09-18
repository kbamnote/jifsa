import React from "react";

const stats = [
  {
    title: "JIFSA BATCHES AND COUNTING",
    value: "1.5K+",
    desc: "Successful JIFSA Batches and Counting",
  },
  {
    title: "JIFSA'S CORPORATE TRAINING PROVIDE TO",
    value: "280+",
    desc: "Companies in India",
  },
  {
    title: "JIFSA RELIABLY TRAINED",
    value: "8250+",
    desc: "Employees of various Company",
  },
  {
    title: "JIFSA'S TRAINING CAMPUS HAVING COLLECTION OF",
    value: "3000+",
    desc: "Latest Equipment",
  },
  {
    title: "JIFSA'S TOUCHES",
    value: "20K+",
    desc: "of Students around the Nation",
  },
  {
    title: "JIFSA- TRAINING CAMPUS FOR PROVIDE TRAINING IN",
    value: "10+",
    desc: "Acres of Land in India",
  },
  {
    title: "JIFSA PROVIDE TO",
    value: "300+",
    desc: "Hours Practical Training via fire safety equipments",
  },
  {
    title: "HAPPY CLIENTS",
    value: "99%",
    desc: "Client Satisfaction",
  },
];

const JifsaSuccess = () => {
  return (
    <div className="bg-sky-500 py-12 px-6">
      <h2 className="text-3xl font-bold text-white text-center mb-10">
        JIFSA’s Count Of Success
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-sky-700 text-white p-6 rounded-md shadow-lg hover:scale-105 transition-transform"
          >
            <h3 className="text-sm uppercase mb-2">{item.title}</h3>
            <p className="text-3xl font-bold">{item.value}</p>
            <p className="mt-2 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JifsaSuccess;
