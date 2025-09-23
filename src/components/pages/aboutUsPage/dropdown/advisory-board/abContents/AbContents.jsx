import React from 'react';
import { Check } from 'lucide-react';
import img1 from '../../../../../../assets/im1.jpg';
import img2 from '../../../../../../assets/im2.jpg';
import img3 from '../../../../../../assets/im3.jpg';
import img4 from '../../../../../../assets/im4.jpg';

const AbContents = () => {
  return (
    <div className="max-w-6xl mx-auto p-4 bg-gray-100 space-y-8">
      {/* First Profile Card - Dr. Shaheer Ahmad */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          {/* Left Section - Photo and Basic Info */}
          <div className="lg:w-1/3 bg-white p-6 border-r border-gray-200">
            {/* Photo Container with black border */}
            <div className="w-64 h-80 mx-auto mb-4 border-4 border-black rounded overflow-hidden">
              <img 
                src={img1} 
                alt="Dr. Shaheer Ahmad" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Name and Title */}
            <div className="text-center">
              <h1 className="text-2xl font-bold text-blue-800 mb-2">Dr. Shaheer Ahmad</h1>
              <p className="text-gray-700 text-sm leading-relaxed">
                Former Vice-President, Bharat<br />
                Aluminium Company Limited,<br />
                (Balco)
              </p>
            </div>
          </div>

          {/* Right Section - Detailed Information */}
          <div className="lg:w-2/3 p-6">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-blue-800 mb-6">
                Vice - Chairman of JIFSA advisory committee
              </h2>
            </div>

            {/* Education and Experience List */}
            <div className="space-y-3">
              {[
                "Past Vice-President BALCO",
                "Royal Institute of Public Administration, London; School of Management, Henley;",
                "Cooperative College, Loughborough;",
                "Institute of Financial Engineering, USA; and",
                "George Washington University, USA.",
                "Advanced learning from university of Lucknow;",
                "N.I.T., Srinagar;",
                "NITIE, Mumbai;",
                "Air Force Technical College, Bangalore;",
                "HAL Staff College, Bangalore;"
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-3"
                >
                  <div className="flex-shrink-0 mt-1">
                    <Check size={16} className="text-blue-800" />
                  </div>
                  <p className="text-gray-800 text-base leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Second Profile Card - Mr. P. G. Thakur */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          {/* Left Section - Photo and Basic Info */}
          <div className="lg:w-1/3 bg-white p-6 border-r border-gray-200">
            {/* Photo Container with black border */}
            <div className="w-64 h-80 mx-auto mb-4 border-4 border-black rounded overflow-hidden">
              <img 
                src={img2} 
                alt="Mr. P. G. Thakur" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Name and Title */}
            <div className="text-center">
              <h1 className="text-2xl font-bold text-blue-800 mb-2">Mr. P. G. Thakur</h1>
              <p className="text-gray-700 text-sm leading-relaxed">
                (Fire Ground Operations,<br />
                LONDON, U.K.)
              </p>
            </div>
          </div>

          {/* Right Section - Detailed Information */}
          <div className="lg:w-2/3 p-6">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-blue-800 mb-6">
                HEAD - TECHNICAL OF JIFSA ADVISORY COMMITTEE
              </h2>
            </div>

            {/* Education and Experience List */}
            <div className="space-y-3">
              {[
                "Bachelor of science.",
                "Diploma in industrial safety.",
                "Graduate of institute of fire engineering (london)",
                "Ex-Corporate HSE Manager, Galar Engineering W.L.L. (Abudhabi)",
                "46 years in health safety & environment",
                "Fire ground operations LONDON U.K",
                "Breathing apparatus training, H2s awareness and escape, Permit to work system, Gastesting training, Fire warden training, Scaffolding appreciation - Petroleum Development Of Oman.",
                "Permit to work system- GASCO- U.A.E.",
                "Incident investigation and reporting, Hazards awareness- ADCO- U.A.E.",
                "First aid- U.A.E."
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-3"
                >
                  <div className="flex-shrink-0 mt-1">
                    <Check size={16} className="text-blue-800" />
                  </div>
                  <p className="text-gray-800 text-base leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Third Profile Card - Dr. Ajay Shesh */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          {/* Left Section - Photo and Basic Info */}
          <div className="lg:w-1/3 bg-white p-6 border-r border-gray-200">
            {/* Photo Container with black border */}
            <div className="w-64 h-80 mx-auto mb-4 border-4 border-black rounded overflow-hidden">
              <img 
                src={img3} 
                alt="Dr. Ajay Shesh" 
                className="w-full h-full object-cover object-center "
              />
            </div>
            
            {/* Name and Title */}
            <div className="text-center">
              <h1 className="text-2xl font-bold text-blue-800 mb-2">Dr. Ajay Shesh</h1>
              <p className="text-gray-700 text-sm leading-relaxed">
                (MBBS Pathologist)
              </p>
            </div>
          </div>

          {/* Right Section - Detailed Information */}
          <div className="lg:w-2/3 p-6">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-blue-800 mb-6">
                Director - Advisory Committee
              </h2>
            </div>

            {/* Education and Experience List */}
            <div className="space-y-3">
              {[
                "MBBS, - MD [Pathology], MBA [Marketing],MPhil - in Management, PhD in Management.",
                "DOUBLE GUINNESS WORLD RECORD HOLDER FOR LONGEST MARATHON SPEECH 60 hrs 29 min.",
                "Certified Executive/Personal Coach and Public Speaker – Results Coaching Systems from FranklinCovey Inc.",
                "Certified Trainer and Health Consultant - Teacher Coaching Courses for the Handicapped, [Rehabilitation Council of India, Ankur, Korba].",
                "Secretary- Indian Medical Association, Korba Branch.",
                "Amateur Freelance author for local publications.",
                "Current publication Book Life Full of Lessons: God Proposes, Man Disposes",
                "Certified Coach and Professional Public Speaker [areas of Interest – Franklin Covey's Time Management, Life & Vocational Management, Motivational and Inspirational issues] for Educational Institutions and Business/Corporate Executives."
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-3"
                >
                  <div className="flex-shrink-0 mt-1">
                    <Check size={16} className="text-blue-800" />
                  </div>
                  <p className="text-gray-800 text-base leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Fourth Profile Card - Dr. Naresh Makhija */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          {/* Left Section - Photo and Basic Info */}
          <div className="lg:w-1/3 bg-white p-6 border-r border-gray-200">
            {/* Photo Container with black border */}
            <div className="w-64 h-80 mx-auto mb-4 border-4 border-black rounded overflow-hidden">
              <img 
                src={img4} 
                alt="Dr. Naresh Makhija" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Name and Title */}
            <div className="text-center">
              <h1 className="text-2xl font-bold text-blue-800 mb-2">Dr. Naresh Makhija</h1>
              <p className="text-gray-700 text-sm leading-relaxed">
                (B.E. Electronics &<br />
                Communication)
              </p>
            </div>
          </div>

          {/* Right Section - Detailed Information */}
          <div className="lg:w-2/3 p-6">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-blue-800 mb-6">
                Director - Advisory Committee
              </h2>
            </div>

            {/* Education and Experience List */}
            <div className="space-y-3">
              {[
                "Bachelor of Engineering in Electronics and Communication",
                "Director – LED procurement, Financial management, Marketing and sales - SWAN LED SOLAR.",
                "Director – LED procurement, Production, Financial management, Marketing and sales - OSHEEN ELECTRONICS PRIVATE LIMITED.",
                "Senior Manager – Instrumentation Design, commissioning & proposal - BGR ENERGY SYSTEM LTD. NOIDA.",
                "Manager - REAL ISPAT POWER LTD RAIPUR."
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-3"
                >
                  <div className="flex-shrink-0 mt-1">
                    <Check size={16} className="text-blue-800" />
                  </div>
                  <p className="text-gray-800 text-base leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AbContents;