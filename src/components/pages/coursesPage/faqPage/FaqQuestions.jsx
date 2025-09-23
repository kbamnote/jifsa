import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

const faqs = [
  {
    question:
      "01. What is the reason for more chances of getting a job after taking the Fire and Safety course ?",
    answer:
      "In view of the threat of natural disaster in the world, along with the Industrial Revolution, human safety, human safety in industries, protection of the environment and general protection, as well as to conserve natural resources, The topics like fire technology and industrial safety management, fire prevention, fire safety, health safety environment, disaster management are being promoted, hence A. It has much higher career prospects in the current situation and in the coming years. According to the rules of the Government of India, in any industry, whether it is of small or big scale, today it is mandatory to appoint a safety officer under the Factory Act 1948 section 40B. Due to which the chances of getting a job after doing the course of Fire and Safety increases.",
  },
  {
    question:
      "02. Which students should take the course of Fire and Safety and what should be the qualification to take the course ?",
    answer: "Details about qualifications for Fire and Safety courses.",
  },
  {
    question:
      "03. How safe is the future after taking the Fire and Safety course and what are the employment opportunities in it ?",
    answer: "Explanation about job opportunities in Fire and Safety field.",
  },
  {
    question:
      "04. What can Salary get after doing a Fire and Safety course ?",
    answer: "Expected salary after Fire and Safety course completion.",
  },
  {
    question: "05. How to choose a good institute to do Fire and Safety course?",
    answer: "Guidelines for selecting a good institute.",
  },
  {
    question:
      "06. What is the difference between National and International courses in Fire and Safety courses ?",
    answer: "Comparison between national and international courses.",
  },
  {
    question:
      "07. What are the courses in Fire and Safety, and how long are their duration ?",
    answer: "List of Fire and Safety courses with durations.",
  },
  {
    question: "08. How to get admission in Fire and Safety course ?",
    answer: "Steps to take admission in Fire and Safety course.",
  },
];

const FaqQuestions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-5xl mx-auto p-4 space-y-3">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border rounded-md bg-white shadow-sm overflow-hidden"
        >
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full flex justify-between items-center px-4 py-3 text-left text-gray-800 font-medium hover:bg-gray-50"
          >
            <span>{faq.question}</span>
            {openIndex === index ? (
              <ChevronDown className="w-5 h-5 text-red-500" />
            ) : (
              <ChevronRight className="w-5 h-5 text-gray-500" />
            )}
          </button>

          {openIndex === index && (
            <div className="px-4 pb-4 text-gray-700 text-sm leading-relaxed">
              <span className="font-semibold">Answer: </span>
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FaqQuestions;
