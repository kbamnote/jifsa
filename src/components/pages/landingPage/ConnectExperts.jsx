import React from "react";
import { Phone } from "lucide-react";

const experts = [
  {
    id: 1,
    title: "E Learning",
    desc: "Online Course & Enquiry",
    numbers: ["+91-7030980670", "+91-8080041312"],
    color: "bg-green-600",
  },
  {
    id: 2,
    title: "DGMS First Aid",
    desc: "Course & Enquiry",
    numbers: ["+91-7879842742"],
    color: "bg-red-500",
  },
  {
    id: 3,
    title: "First AID",
    desc: "Course & Enquiry",
    numbers: ["+91-703098067"],
    color: "bg-cyan-600",
  },
  {
    id: 4,
    title: "Admission",
    desc: "Admission and Enquiry",
    numbers: ["+91-9407938795", "+91-7021288226", "+91-7879842744"],
    color: "bg-red-500",
  },
  {
    id: 5,
    title: "Franchisee",
    desc: "Services and Enquiry",
    numbers: ["+91-9407938795", "+91-7030980679"],
    color: "bg-gray-600",
  },
  {
    id: 6,
    title: "Corporate",
    desc: "Training & Enquiry",
    numbers: ["+91-9407938795", "+91-7030980679"],
    color: "bg-cyan-600",
  },
  {
    id: 7,
    title: "Admission Residential & Offline",
    desc: "Course at campus",
    numbers: ["+91-7879842744", "+91-7021288226", "+91-9407938795"],
    color: "bg-yellow-500",
  },
];

const ConnectExperts = () => {
  return (
    <div className="bg-gray-100 p-6 max-w-9xl mx-auto">
      {/* Heading */}
      <div className="flex items-center gap-2 text-blue-800 font-semibold uppercase">
        <Phone className="w-5 h-5 text-blue-600" />
        <span>Our Experts</span>
      </div>

      <h1 className="text-3xl font-bold mt-2 mb-6">Connect With Experts</h1>

      {/* All Services button */}
      <div className="flex justify-end mb-6">
        <button className="px-4 py-2 border border-blue-500 text-blue-600 rounded hover:bg-blue-50">
          All Services
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {experts.map((expert) => (
          <div
            key={expert.id}
            className={`relative rounded-md overflow-hidden shadow-md ${expert.color}`}
          >
            {/* White content box */}
            <div className="relative bg-white p-4 min-h-[150px] m-4">
              {/* Phone Icon */}
              <div className="absolute -top-5 left-4 bg-white p-2 rounded-md shadow">
                <Phone className="w-5 h-5 text-gray-700" />
              </div>

              <h2 className="text-lg font-semibold">{expert.title}</h2>
              <p className="text-gray-600 text-sm">{expert.desc}</p>

              <div className="mt-3 space-y-1">
                {expert.numbers.map((num, idx) => (
                  <a
                    key={idx}
                    href={`tel:${num}`}
                    className="block text-blue-600 hover:underline"
                  >
                    {num}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConnectExperts;
