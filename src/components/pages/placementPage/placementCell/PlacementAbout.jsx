import React from 'react';
import { CheckCircle } from 'lucide-react';

const services = [
  "Interview Preparation Classes.",
  "Arrange Mock Sessions",
  "Interview Questions and Answers",
  "Personality Development Classes",
  "Guest Lecture.",
  "English Speaking Classes.",
  "Other Miscellaneous."
];

const PlacementAbout = () => {
  return (
    <section className="bg-gray-100 py-12 px-6 lg:px-20 text-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-800 mb-6 uppercase">About the Cell</h2>
        
        <p className="mb-6 text-lg leading-relaxed">
          The department has a cell looking after placement activities and management of placement schedules. The placement cell maintains a record of potential employers and contacts them on a regular basis. Past students of the department also provide referrals. Every year campus interviews are arranged by the placement cell.
        </p>

        <div className="bg-white shadow-xl rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold text-blue-700 mb-4">
            JIFSA gives a platform to every student and provides them job assistance. Not only this we prepare the students from the root level and provide them:
          </h3>
          <ul className="space-y-3">
            {services.map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-700">
                <CheckCircle className="text-green-600 w-5 h-5 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="mb-6 text-lg leading-relaxed">
          With all above given guidelines students set their goals and become more confident for their interviews and get a good opportunity everywhere above their expectations. JIFSA’s first and last goal is to set the career of students and for this our placement cell strives a lot and gives the best opportunity to every student.
        </p>

        <p className="mb-6 text-lg leading-relaxed">
          Students of JIFSA have to undergo full-time regular classes, compulsory different industrial exposure and mandatory part of 15 days practical training program in our training ground itself in Korba (C.G) which is associated in 10 acres of land with all fire & safety equipments, fire engine vehicle, advance techniques and equipments, trained by experienced industrial employees where students of every centre get trained for each and every Fire & Safety measures of different Industries, Construction sites, Airports, Hospitals, Malls etc. which develop each student’s skills and knowledge about the particular fields.
        </p>

        <p className="text-lg leading-relaxed">
          After completing the courses, one can work as a plant safety manager, safety coordinator, fire protection manager in countries like UAE, Oman, Afghanistan, UK, Russia with companies like TFI international, British Petroleum, Shell Ormco Corporation, Petrofac, Technip, Omni Oil etc both National and International.
        </p>
      </div>
    </section>
  );
};

export default PlacementAbout;
