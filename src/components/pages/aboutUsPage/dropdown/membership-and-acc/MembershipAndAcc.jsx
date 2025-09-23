import React from 'react'
import Header from '../../../../common/Header'
import Navbar from '../../../../common/Navbar'
import Footer from '../../../../common/Footer'
import logo1 from '../../../../../assets/lo1.png'
import logo2 from '../../../../../assets/lo2.png'
import logo3 from '../../../../../assets/lo3.png'
import logo4 from '../../../../../assets/lo4.png'
import logo5 from '../../../../../assets/lo5.png'

const MembershipAndAcc = () => {
  return (
    <>
      <Header/>
      <Navbar/>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Memberships & Accreditations
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our prestigious certifications and partnerships ensure world-class education standards
            </p>
          </div>

          {/* Top Row - 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 mb-8 lg:mb-12">
            {/* Industry Partner Card */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6 lg:p-8 border border-gray-100 hover:border-blue-200">
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <div className="flex-shrink-0 mx-auto sm:mx-0">
                  <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-3 group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300">
                    <img src={logo1} alt="Rungta University" className="w-full h-full object-contain" />
                  </div>
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors duration-300">
                    Industry Partner
                  </h3>
                  <p className="text-sm lg:text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    St. Joseph's International Fire & Safety Academy is industry skill and knowledge provider of Rungta International Skill University, a Statutory State Private University established by RUNGTA Educational Foundation.
                  </p>
                  <div className="mt-4 flex justify-center sm:justify-start">
                    <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full group-hover:w-16 transition-all duration-300"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Approved Centre by DGMS Card */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6 lg:p-8 border border-gray-100 hover:border-green-200">
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <div className="flex-shrink-0 mx-auto sm:mx-0">
                  <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-3 group-hover:from-green-100 group-hover:to-green-200 transition-all duration-300">
                    <img src={logo2} alt="DGMS" className="w-full h-full object-contain" />
                  </div>
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-900 transition-colors duration-300">
                    Approved Centre by DGMS
                  </h3>
                  <p className="text-sm lg:text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    JIFSA St. Joseph's International Fire and Safety Academy is approved centre by DGMS The Directorate General of Mines Safety.
                  </p>
                  <div className="mt-4 flex justify-center sm:justify-start">
                    <div className="w-12 h-1 bg-gradient-to-r from-green-500 to-green-400 rounded-full group-hover:w-16 transition-all duration-300"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Accredited by DISH Card */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6 lg:p-8 border border-gray-100 hover:border-purple-200 md:col-span-2 xl:col-span-1">
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <div className="flex-shrink-0 mx-auto sm:mx-0">
                  <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-3 group-hover:from-purple-100 group-hover:to-purple-200 transition-all duration-300">
                    <img src={logo3} alt="DISH" className="w-full h-full object-contain" />
                  </div>
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-900 transition-colors duration-300">
                    Accredited by DISH
                  </h3>
                  <p className="text-sm lg:text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    JIFSA Education & Technical Services Pvt. Ltd. is accredited by DISH The Directorate of Industrial Safety and Health (formerly known as Factory Inspectorate).
                  </p>
                  <div className="mt-4 flex justify-center sm:justify-start">
                    <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-purple-400 rounded-full group-hover:w-16 transition-all duration-300"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row - 2 Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* ISO 9001:2008 Certification Card */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6 lg:p-8 border border-gray-100 hover:border-orange-200">
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <div className="flex-shrink-0 mx-auto sm:mx-0">
                  <div className="w-24 h-24 lg:w-28 lg:h-28 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-3 group-hover:from-orange-100 group-hover:to-orange-200 transition-all duration-300">
                    <img src={logo4} alt="ISO 9001:2008" className="w-full h-full object-contain" />
                  </div>
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-900 transition-colors duration-300">
                    Certified From ISO 9001:2008
                  </h3>
                  <p className="text-sm lg:text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    St. Joseph's International Fire & Safety Academy is an ISO 9001:2008 certified (JAS-ANZ) institute ensuring quality management systems.
                  </p>
                  <div className="mt-4 flex justify-center sm:justify-start">
                    <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full group-hover:w-16 transition-all duration-300"></div>
                  </div>
                  <div className="mt-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800 group-hover:bg-orange-200 transition-colors duration-300">
                      Quality Management
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* ISO 29990:2010 Certification Card */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6 lg:p-8 border border-gray-100 hover:border-indigo-200">
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <div className="flex-shrink-0 mx-auto sm:mx-0">
                  <div className="w-24 h-24 lg:w-28 lg:h-28 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl p-3 group-hover:from-indigo-100 group-hover:to-indigo-200 transition-all duration-300">
                    <img src={logo5} alt="ISO 29990:2010" className="w-full h-full object-contain" />
                  </div>
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 group-hover:text-indigo-900 transition-colors duration-300">
                    Certified From ISO 29990:2010
                  </h3>
                  <p className="text-sm lg:text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    St. Joseph's International Fire & Safety Academy is an ISO 29990:2010 certified Institute for learning services in non-formal education and training.
                  </p>
                  <div className="mt-4 flex justify-center sm:justify-start">
                    <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-indigo-400 rounded-full group-hover:w-16 transition-all duration-300"></div>
                  </div>
                  <div className="mt-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 group-hover:bg-indigo-200 transition-colors duration-300">
                      Learning Services
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll to Top Button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-full shadow-xl hover:shadow-2xl hover:from-blue-700 hover:to-blue-800 transform hover:scale-110 transition-all duration-300 z-50"
        aria-label="Scroll to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
      
      <Footer/>
    </>
  )
}

export default MembershipAndAcc