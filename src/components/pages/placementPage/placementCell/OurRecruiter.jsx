import React from 'react';
import { CheckCircle, Phone, Mail } from 'lucide-react';

const advisoryCommittee = [
  "Ms. Priya Malhotra, Director",
  "Ms. Ritika Taunk, Head Support Division",
  "Mr. Prabir Chatterjee, Placement Trainer"
];

const OurRecruiter = () => {
  return (
    <section className="bg-white py-12 px-6 lg:px-20 text-gray-800">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Top Section */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Online Placement Support */}
          <div className="bg-blue-50 rounded-xl p-6 shadow">
            <h3 className="text-xl font-semibold text-red-600 mb-2">ONLINE PLACEMENT SUPPORT</h3>
            <p className="text-blue-700 font-medium mb-2">WALK4JOB.COM</p>
            <p className="text-sm text-gray-500">National Career Service</p>

            <div className="mt-6">
              <h4 className="font-semibold text-blue-800 mb-3">ADVISORY COMMITTEE FOR TRAINING & PLACEMENTS:</h4>
              <ul className="space-y-2">
                {advisoryCommittee.map((member, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="text-green-600 w-5 h-5 mt-1" />
                    <span>{member}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-4 text-red-600">
                Placement Support contact: Ms. Ritika Taunk - 09039323233
              </p>
            </div>
          </div>

          {/* Our Recruiter Companies */}
          <div>
            <h3 className="text-2xl font-bold text-blue-800 mb-3">Our Recruiter Companies</h3>
            <p className="text-gray-700 text-base leading-relaxed">
              Within itself is enriched with all the essential raw materials needed for power generation namely coal and water. A profit-making coal company under Coal India Limited has many of its important mines in Korba district...
            </p>
          </div>
        </div>

        {/* Employer Info */}
        <div className="bg-gray-50 rounded-xl p-6 shadow-md space-y-5">
          <h3 className="text-xl font-bold text-blue-800">Information for Employer</h3>
          <p>
            Students of JIFSA undergo full-time regular classes, industrial exposure, and 15 days of practical training in Korba (C.G). They are trained on safety measures for various industries including Airports, Hospitals, Construction Sites, etc.
          </p>
          <p>
            Every final section ensures well-trained students are placed in multiple industrial sectors, often via campus drives, referrals, and direct recruiter interaction.
          </p>
        </div>

        {/* Career & Course Info */}
        <div className="space-y-4 text-gray-700">
          <p>
            After completing the industrial safety management courses, students can work as safety managers, fire protection officers, and coordinators globally. Companies include: TFI International, BP, Shell, Petrofac, Omni Oil, etc.
          </p>
          <p>
            Fire safety courses are available after matriculation or +2. Options include Diploma in Fire & Safety, Industrial Safety, PG Diplomas, and MBA in Fire & Safety. Duration and criteria vary.
          </p>
          <p>
            Courses cover industrial design, installation, accident safeguards, and advanced training in electrical, mechanical, scaffolding, trenching, welding, and hazardous materials handling.
          </p>
        </div>

        {/* Contact Section */}
        <div className="bg-red-50 rounded-xl p-6 shadow-md">
          <h4 className="text-red-600 font-bold text-lg mb-4">
            COMPANIES MAY APPROACH THE DEPARTMENT THROUGH THE FOLLOWING CONTACT DETAILS:-
          </h4>
          <div className="space-y-1 text-sm">
            <p className="font-semibold">Placement Officer,</p>
            <p>St. Joseph’s International Fire & Safety Academy</p>
            <p>Part ‘D’ 1st Floor, Commercial Complex</p>
            <p>T.P. Nagar, Korba – 495677, Chhattisgarh INDIA</p>
            <div className="flex items-center gap-2 mt-2">
              <Phone className="w-4 h-4 text-red-500" />
              <span>09039323233</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default OurRecruiter;
