import React from 'react'
import LeftImg from '../../../../../../assets/r2.jpg'

const Mission = () => {
  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-20 py-10 bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* Left Image */}
        <div className="flex justify-center md:justify-start">
          <img
            src={LeftImg}
            alt="Mission"
            className="rounded-lg shadow-lg max-h-[550px] object-cover"
          />
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2c1e47] mb-2">
            Mission
          </h2>
          <p className="text-2xl font-bold text-gray-700 mb-6">•••</p>

          <ul className="space-y-4 text-[#0a1f44]">
            <li className="flex items-start">
              <span className="text-blue-600 text-lg mr-2">✔</span>
              JIFSA's mission is to provide a broad range of career-oriented educational programs with the goal of producing innovative, creative professionals who are well prepared for their chosen career in a global network.
            </li>

            <li className="flex items-start">
              <span className="text-blue-600 text-lg mr-2">✔</span>
              We strive to provide quality education training, which is affordable and has 100% job availability.
            </li>

            <li className="flex items-start">
              <span className="text-blue-600 text-lg mr-2">✔</span>
              JIFSA is committed to mutually enriching relationships with government, business, our old student and world community. Research training, leadership, learning, innovation, scholarship, exploration and teaching development for promoting student success are our central motive.
            </li>

            <li className="flex items-start">
              <span className="text-blue-600 text-lg mr-2">✔</span>
              JIFSA endeavour would be for the all-round development of the students.
            </li>

            <li className="flex items-start">
              <span className="text-blue-600 text-lg mr-2">✔</span>
              JIFSA has aimed to open 100 centers all over India by the year 2022.
            </li>

            <li className="flex items-start">
              <span className="text-blue-600 text-lg mr-2">✔</span>
              JIFSA is committed to set up the best an ultra-modern Fire & Safety Practical Ground of India having its own distinct recognition – equipped with latest apparatus, modern, hi-tech and handy facilities by the year 2021.
            </li>

            <li className="flex items-start">
              <span className="text-blue-600 text-lg mr-2">✔</span>
              JIFSA will establish the monument of Fire & Safety by the year of 2021.
            </li>

            <li className="flex items-start">
              <span className="text-blue-600 text-lg mr-2">✔</span>
              JIFSA is determined to set up its own university of Fire & Safety in India that will be shaped up by the year 2025.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Mission
