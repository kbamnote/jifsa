import React from "react";
import { Quote } from "lucide-react";

// 👉 import student images from recruited students page
import thirteen from "../../../../assets/amitnavale.jpg";
import fortythree from "../../../../assets/prithvibareth.jpg";
import fortyfour from "../../../../assets/ShivamGupta.jpg";
import eleven from "../../../../assets/Amankhan.jpg";
import six from "../../../../assets/Aditya.jpg";
import twentyone from "../../../../assets/BhuwanPal.jpg";
import twentytwo from "../../../../assets/chandrama.jpg";
import thirty from "../../../../assets/JAVED-SINGH.jpg";
import thirtynine from "../../../../assets/MANISHSURYAVANSHI.jpg";
import thirtyeight from "../../../../assets/MANISHKUMAR.jpg";
import fourteen from "../../../../assets/Anand-Kumar-Yadav.jpg";
import fifteen from "../../../../assets/ANILKUGUPTA.jpg";
import Header from "../../../common/Header";
import Navbar from "../../../common/Navbar";
import Footer from "../../../common/Footer";

// 👉 testimonials data from the image
const testimonials = [
  {
    text: "I am S K Danish pursuing my Advance Certification in Fire & Safety from JIFSA. It has been a great experience. Here in JIFSA we have great faculty members under which we have learnt a lot. Because of which I can see my fruitful future.",
    name: "S K Danish",
    batch: "2018-19",
    image: thirteen,
  },
  {
    text: "It gives me great pleasure to say with pride that I have completed my Post Programme Certificate in Fire and Safety course from JIFSA. The relationship between faculties and student is very cordial, which gave me immense opportunities.",
    name: "Ravi Kumar Pandey",
    batch: "2018-19",
    image: fortythree,
  },
  {
    text: "I would describe the JIFSA education and technical services as exciting and dynamic. The best thing about being a student here is the number of additional opportunities that are available. I was initially attracted here by the college’s reputation and my career goals.",
    name: "Suraj Singh Korche",
    batch: "2018-19",
    image: fortyfour,
  },
  {
    text: "में लवकुश कुमार राजवेदे हूँ | मै सेफ्टीफायर ट्रेनिंग बैच 2017-18 का छात्र हूँ | यहाँ की पढ़ाई बहुत अच्छी है और यहाँ का स्टाफ भी बहुत अच्छा है | यहाँ फायर और सेफ्टीफायर के बारे में बहुत अच्छी जानकारी दी जाती है |",
    name: "Luvkesh Kumar Rajwade",
    batch: "2017-18",
    image: twentyone,
  },
  {
    text: "मेरा नाम राहुल सिंह है, मैंने सेफ्टीफायर ट्रेनिंग बैच 2017-18 का कोर्स JIFSA से किया है | यहाँ के सभी टीचर बहुत अच्छे है और यहाँ पर फायर सेफ्टी के विषय में बहुत ही अच्छी जानकारी दी जाती है |",
    name: "Rahul Singh",
    batch: "2017-18",
    image: twentytwo,
  },
  {
    text: "I am a student at JIFSA. I attended the classes and it was really good. Well trained and faculty staff, LCD projector and also teaching communication classes. It helps for my career and I am proud to be a student of JIFSA.",
    name: "Pradeep",
    batch: "2018-19",
    image: six,
  },
  {
    text: "JIFSA Education and Technical Services Pvt. Ltd. has been a great contributor towards the development of my personality. By participating in events conducted by the Institute of Management, I have been able to advance my leadership, time management, and team skills.",
    name: "Sukhsen Kumar Roy",
    batch: "2017-18",
    image: thirty,
  },
  {
    text: "The academic experience with a standard infrastructure and excellent faculty at JIFSA has endowed me with a lifelong career excellence in Fire Safety. The programs and teaching methodologies backed by industry interface have given me the confidence to pursue my career ahead.",
    name: "Satish Gupta",
    batch: "2017-18",
    image: fourteen,
  },
  {
    text: "JIFSA is the best fire and safety training institute across India. Known for its excellence in quality practical training in fire safety. It has all the best facilities under one roof – state of infrastructure, erudite faculty, well stocked and maintained labs, sports, etc. I am very grateful to be a part of this institution.",
    name: "Shivesh",
    batch: "2016-17",
    image: fifteen,
  },
  {
    text: "I am grateful to JIFSA – both the faculty and the Training & Placement Department. They’ve made efforts ensuring maximum number of placed students. The academy started grooming us for placements.",
    name: "Aman Khan",
    batch: "2015-16",
    image: eleven,
  },
  {
    text: "I am satisfied with the Practical training given by JIFSA. During training, the faculty was able to clear my doubts regarding design process followed in the industry and provide real life examples.",
    name: "Himanshu Kumar",
    batch: "2015-16",
    image: thirtynine,
  },
  {
    text: "Great Training is given at JIFSA ST. Joseph’s International Fire & Safety Academy Training Institute. It gave me immense opportunities to grow further in my life as it will help me to grow further.",
    name: "Vijay Bareth",
    batch: "2016-17",
    image: thirtyeight,
  },
];

const StudentTestimonial = () => {
  return (
    <>
    <Header/>
    <Navbar/>
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Students Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg flex flex-col justify-between"
            >
              {/* Quote Icon */}
              <Quote className="text-red-500 w-8 h-8 mb-3" />

              {/* Testimonial Text */}
              <p className="text-gray-700 text-sm leading-relaxed mb-6">
                {t.text}
              </p>

              {/* Footer with Image + Name */}
              <div className="flex items-center mt-auto">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-red-500"
                />
                <div className="ml-3">
                  <h3 className="text-base font-semibold text-gray-800">
                    {t.name}
                  </h3>
                  <p className="text-xs text-gray-500">Batch: {t.batch}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default StudentTestimonial;
