import React from 'react'
import leftImg from '../../../../../../assets/pr1.jpg'

const CMContent = () => {
  return (
    <div className="bg-gray-50 py-10 px-5">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
        
        {/* Left Section - Image + Info */}
        <div className="md:w-1/3 flex flex-col">
          <img 
            src={leftImg} 
            alt="Chairman" 
            className="w-full h-80 object-cover"
          />
          <div className="p-5 bg-gray-100 flex flex-col justify-center h-full">
            <h2 className="text-lg md:text-2xl font-bold text-blue-900">Mr. Bahauddin Ahmad</h2>
            <p className="text-sm md:text-lg text-gray-700 mt-1">
              Honourable Chairman cum Managing Director (CMD)
            </p>
            <p className="text-sm mt-2 text-gray-700">
              Phone: <span className="font-medium text-md">+91 9827960818</span>
            </p>
          </div>
        </div>

        {/* Right Section - Content */}
        <div className="md:w-2/3 p-6 md:p-10 text-gray-800">
          <p className="font-semibold text-blue-900 text-lg md:text-xl leading-relaxed mb-6">
            “Your education in Fire and Safety can equip you with the foundation that you need for pursuing 
            leadership roles and career advancement. The carefully selected curriculum is designed to provide 
            students with the skills necessary to avail the floodgate of opportunities that is opening up in 
            India and abroad, especially in the Gulf."
          </p>

          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              St Joseph's International Fire and Safety Academy now upgraded to JIFSA Education and Technical 
              Services Private Limited, INDIA has a vision to prepare safety personnel, we have started our 
              branch in various countries. We have our expansion plan for modern group in more countries by 
              coming years.
            </p>

            <p>
              We aim the safest environment to everyone through a voluntary movement at the international 
              level on Safety Management & Health Administration by educating and influencing society to adopt 
              appropriate policies, practices and methods to install, maintain & manage safety to avoid human 
              suffering and economic loss due to hazards.
            </p>

            <p>
              Keeping this thought in mind, we have come up with Industrial Safety courses like Industrial 
              Safety – IGC (International General Certificate) and Industrial Safety – IFC (International 
              Certificate in Fire Safety and Risk Management) which results as the excellent, comprehensive 
              and high quality in workplace safety. Across the globe Occupational Health & Safety as well as 
              Health Safety & Environment is backbone of the industries. Industrial Safety deliver the 
              programs which are globally-recognised qualifications designed to meet the health, safety and 
              environmental management needs of all places of work.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CMContent
