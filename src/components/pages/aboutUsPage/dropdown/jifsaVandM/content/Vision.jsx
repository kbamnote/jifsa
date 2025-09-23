import React from 'react'
import RightImg from '../../../../../../assets/r1.jpg'

const Vision = () => {
  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-20 py-10 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2c1e47] mb-6">
            VISION
          </h2>

          <ul className="space-y-4 text-[#0a1f44]">
            <li className="flex items-start">
              <span className="text-blue-600 text-lg mr-2">✔</span>
              Our vision is to frame up a National and International level of 
              training centre in the field of Fire and Safety.
            </li>

            <li className="flex items-start">
              <span className="text-blue-600 text-lg mr-2">✔</span>
              To have a world class setup for fire and safety training, where 
              our new research and development, can make the world a better 
              place to be in.
            </li>

            <li className="flex items-start">
              <span className="text-blue-600 text-lg mr-2">✔</span>
              JIFSA to set up a benchmark for its high standard of training in 
              global scenario: so people may observe and identify the difference 
              because of its quality and uniqueness.
            </li>

            <li className="flex items-start">
              <span className="text-blue-600 text-lg mr-2">✔</span>
              JIFSA will lead higher education in preparing students for 
              innovative, creative, and successful careers in a global society.
            </li>

            <li className="flex flex-col">
              <div className="flex items-start font-semibold">
                <span className="text-blue-600 text-lg mr-2">✔</span>
                The college of education will be a world leader in the integration of:
              </div>
              <ul className="list-disc ml-8 mt-2 space-y-1 text-sm sm:text-base">
                <li>Preparing and learning.</li>
                <li>Augmentation of the knowledge base through practical training and scholarship.</li>
                <li>Leadership in service and outreach.</li>
                <li>Preparing and learning.</li>
              </ul>
              <p className="mt-2">
                Afore, it will be a world leader in preparing professionals. Who provide 
                leadership and exemplary scholastic and related services to improve the lives 
                of individuals; in this changing and complex global society.
              </p>
            </li>
          </ul>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <img 
            src={RightImg} 
            alt="Vision" 
            className="rounded-lg shadow-lg max-h-[500px] object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default Vision
