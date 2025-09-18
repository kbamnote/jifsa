import React from "react";
import { Quote, User } from "lucide-react";

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
  {
    name: "Devraj Singh",
    session: "2016-17",
    feedback:
      "Before joining JIFSA, I was shy and nervous. JIFSA training helped me build my career as a Safety Supervisor at Floor Space India Pvt. Ltd. in Ahmedabad. The course transformed my life.",
  },
  {
    name: "Rahmat Ali",
    session: "2015-16",
    feedback:
      "Amazing course of industrial safety and fire science. I learned new concepts and skills. Placement cell helped me get placed in Ultra Tech Cement Limited as a Safety Supervisor.",
  },
  {
    name: "Vidaya Bhusan",
    session: "2014-15",
    feedback:
      "Great course highlighting fire engineering fundamentals. The most special part was the mock interviews. Placement cell gave me an opportunity in NRDA, Naya Raipur Development Authority, as Fireman Prevention Officer.",
  },
  // ➝ add until 15 reviews
];

const StudentReviews = () => {
  return (
    <div className="bg-gray-100 py-12 px-6 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-10">
        JIFSA Students Reviews
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 relative flex flex-col justify-between"
          >
            {/* Quote icon */}
            <Quote className="text-red-500 w-9 h-9 absolute -top-3 -left-3 bg-white rounded-full p-1 shadow" />

            <p className="text-gray-700 font-bold text-sm mb-4">{review.feedback}</p>

            <div className="flex items-center gap-3 mt-4">
              <User className="w-8 h-8 text-gray-500" />
              <div>
                <p className="font-semibold text-gray-900">{review.name}</p>
                <p className="text-xs text-gray-600">Session {review.session}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentReviews;
