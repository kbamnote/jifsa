import React from "react";
import { Quote, User } from "lucide-react";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Harsh Yadav",
    session: "2021-22",
    feedback:
      "I joined JIFSA on 18 October. When I saw campus, it looked very healthy for studies and training. The academy develops in such a way by keeping in mind all essential requirements for students. Apart from regular classes, I got extra orientation, personality development, English speaking, communication, mock interviews, etc.",
  },
  {
    name: "Ajay Kumar Mourya",
    session: "2021-22",
    feedback:
      "I have completed my One Year Fire & Safety course. JIFSA provided me with modern classes, mock interviews, industrial visits, and campus drives. I am very thankful to JIFSA for supporting me throughout my journey.",
  },
  {
    name: "Sameer Siddiqui",
    session: "2021-22",
    feedback:
      "I am glad to provide feedback about JIFSA. Here you can grow your communication skills, which helps in interviews. JIFSA provides international career opportunities too. Courses are very useful in the fire and safety field globally.",
  },
  {
    name: "Chandraman Singh",
    session: "2019-20",
    feedback:
      "Thanks to JIFSA placement department for giving me an opportunity in Lafarge Cement as Fire Prevention Specialist. JIFSA training made concepts easy to understand with practical examples, which is important in industry.",
  },
  {
    name: "Aakash Singh",
    session: "2018-19",
    feedback:
      "I am working in Abudo Electronic Security Systems Pvt. Ltd., Mumbai as a HSE Supervisor. JIFSA course was very helpful to boost my confidence and communication skills, making me industry ready.",
  },
  {
    name: "Sagar Baghel",
    session: "2017-18",
    feedback:
      "It was a really great course. The way of explanation and professionalism made the course interesting. Placement cell gave me an opportunity in Adani OM Chhattisgarh Power Project as a Fireman.",
  },
];

const StudentReviews = () => {
  return (
    <div className="bg-gray-50 py-16 px-6 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12 font-['Poppins']"
      >
        What Our Students Say
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-lg p-6 relative flex flex-col justify-between hover:shadow-2xl transition"
          >
            {/* Quote Icon */}
            <Quote className="text-blue-600 w-10 h-10 absolute -top-5 -left-5 bg-white rounded-full p-1 shadow" />

            {/* Feedback */}
            <p className="text-gray-700 text-sm md:text-base mb-6 font-['Poppins']">
              {review.feedback}
            </p>

            {/* Reviewer */}
            <div className="flex items-center gap-3 mt-auto">
              <User className="w-10 h-10 text-blue-600" />
              <div>
                <p className="font-semibold text-gray-900">{review.name}</p>
                <p className="text-xs text-gray-500">Session {review.session}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default StudentReviews;
