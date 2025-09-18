import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import noimage from "../../../assets/noimageW.jpg";
import one from '../../../assets/AMANKUNWAR.jpg'
import two from '../../../assets/Amankhan.jpg'
import three from '../../../assets/amitnavale.jpg'
import four from '../../../assets/ShivamGupta.jpg'
import five from '../../../assets/prithvibareth.jpg'
import six from '../../../assets/Niyazkhan.jpg'

const students = [
  {
    name: "VAIBHAV MISHRA",
    company: "R R Ispat",
    designation: "Safety Officer",
    image: one,
  },
  {
    name: "MD. SHADAB",
    company: "Floor Space India Pvt. Ltd",
    designation: "Safety Supervisor",
    image: two,
  },
  {
    name: "YOGESH HARISHCHANDRA",
    company: "Floor Space India Pvt. Ltd",
    designation: "Safety Supervisor",
    image: three,
  },
//   {
//     name: "ANITA SINGH",
//     company: "Reliance Industries",
//     designation: "Safety Engineer",
//     image: noimage,
//   },
  {
    name: "RAHUL VERMA",
    company: "Aditya Birla Group",
    designation: "HSE Officer",
    image: five,
  },
//   {
//     name: "PRIYA KUMARI",
//     company: "Tata Steel",
//     designation: "Industrial Safety Supervisor",
//     image: noimage,
//   },
  {
    name: "AMAN KHAN",
    company: "L&T Construction",
    designation: "Site Safety Engineer",
    image: six,
  },
//   {
//     name: "SNEHA JOSHI",
//     company: "JSW Energy",
//     designation: "Safety Inspector",
//     image: noimage,
//   },
  {
    name: "ROHIT SHARMA",
    company: "Essar Power",
    designation: "Safety Officer",
    image: four,
  },
];

const PlacementSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start py-12 px-6 max-w-7xl mx-auto">
      {/* Left - Carousel */}
      <div>
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Recruited Students
        </h2>
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
              <div className="bg-white rounded-lg shadow-md p-4 text-center h-full flex flex-col justify-between">
                <img
                  src={student.image}
                  alt={student.name}
                  className="w-full h-56 object-cover rounded-md mb-4"
                />
                <h3 className="font-bold text-lg">
                  NAME: <span className="uppercase">{student.name}</span>
                </h3>
                <p className="text-sm text-gray-600">
                  Company: {student.company}
                </p>
                <p className="text-sm text-gray-600">
                  Designation: {student.designation}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Right - Placement Info */}
      <div>
        <p className="text-sm font-semibold text-blue-600 uppercase">
          Placement
        </p>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          ONLINE PLACEMENT SUPPORT
        </h2>
        <p className="text-gray-700 mb-4">
          The department has a cell looking after placement activities and
          management of placement schedules. The placement cell maintains a
          record of potential employers and contacts them on a regular basis.
          Past students of the department also provide referrals. Every year
          campus interviews are arranged by the placement cell.
        </p>
        <p className="text-gray-700 mb-4">
          Abundant career opportunities in safety exist both in industries and
          at construction sites. Safeguard against accidents—it is what concerns
          the job of a Safety Officer. Accidents often occur at both the
          industrial as well as residential premises; they can be caused by
          machinery, chemicals, gases, electricity, radiation, fire, etc.
        </p>
        <a
          href="#"
          className="text-blue-600 font-semibold hover:underline inline-flex items-center"
        >
          &gt; More About Placement
        </a>
      </div>
    </div>
  );
};

export default PlacementSection;
