import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import LeftImg1 from "../../../../../../assets/l1.jpg";
import LeftImg2 from "../../../../../../assets/l2.jpg";
import LeftImg3 from "../../../../../../assets/l3.jpg";

const Profile = () => {
  return (
    <div className="w-full px-3 sm:px-6 md:px-8 xl:px-16 py-6 sm:py-8 md:py-10 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-start">
          {/* Left - Images Section */}
          <div className="w-full order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#2c1e47] mb-4 sm:mb-6 lg:mb-8 text-center lg:text-left hidden lg:block">
              Profile
            </h2>
            <div className="w-full">
              <Swiper
                spaceBetween={20}
                slidesPerView={1}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                modules={[Autoplay]}
                className="rounded-lg overflow-hidden shadow-lg w-full"
              >
                <SwiperSlide>
                  <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
                    <img
                      src={LeftImg1}
                      alt="JIFSA Fire Safety Training"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
                    <img
                      src={LeftImg2}
                      alt="JIFSA Security Training"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
                    <img
                      src={LeftImg3}
                      alt="JIFSA Professional Training"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

          {/* Right - Content Section */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6 order-1 lg:order-2">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-900 uppercase leading-tight">
              Fire Safety & Security Training Solutions – World Class standards in
              training
            </h2>

            <div className="space-y-4 sm:space-y-5">
              <p className="text-gray-700 text-sm sm:text-base md:text-md leading-relaxed text-justify">
                Education is not like filling a bucket, it is to kindle a fire
                within. Each one of us has got enormous potential waiting to be
                picked and polished. And that is all that we do at JIFSA-
                recognizing the hidden talent and innate ability of our students and
                then facilitating their knowledge acquisition in our modern class
                rooms equipped with state-of-art gadgets and teaching aids. Our team
                of experienced industry professionals turned instructors leave
                nothing to chance. These are the persons who have earlier indulged
                themselves in the practical field. They now dedicate their
                experience and toil them in sweating for each and every student,
                until the inputs have been fully understood and internalized.
              </p>

            </div>

            <div className="pt-4 sm:pt-6">
              <h3 className="text-base sm:text-lg md:text-xl lg:text-1xl font-bold text-blue-900 uppercase mb-4 sm:mb-5">
                JIFSA ADVANTAGE
              </h3>

              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-start text-gray-700 text-sm sm:text-base md:text-sm">
                  <span className="text-blue-900 mr-2 sm:mr-3 mt-1 flex-shrink-0">•</span>
                  <span className="leading-relaxed">
                    A team of hands dedicated trainers who will provide mentoring for
                    all selected courses.
                  </span>
                </li>
                <li className="flex items-start text-gray-700 text-sm sm:text-base md:text-sm">
                  <span className="text-blue-900 mr-2 sm:mr-3 mt-1 flex-shrink-0">•</span>
                  <span className="leading-relaxed">
                    Asia's finest and most established training provider, delivering
                    to a wide spectrum of inshore construction and service industries
                    and to offshore Oil & Gas and Marine industries.
                  </span>
                </li>
                <li className="flex items-start text-gray-700 text-sm sm:text-base md:text-sm">
                  <span className="text-blue-900 mr-2 sm:mr-3 mt-1 flex-shrink-0">•</span>
                  <span className="leading-relaxed">
                    JIFSA is having vast practical ground with multiple apparatus
                    where student can sharp up their practical knowledge with live
                    experiment.
                  </span>
                </li>
                <li className="flex items-start text-gray-700 text-sm sm:text-base md:text-sm">
                  <span className="text-blue-900 mr-2 sm:mr-3 mt-1 flex-shrink-0">•</span>
                  <span className="leading-relaxed">
                    JIFSA organizes training session for 10-15 days in which the
                    participation of students from all over India.
                  </span>
                </li>
                <li className="flex items-start text-gray-700 text-sm sm:text-base md:text-sm">
                  <span className="text-blue-900 mr-2 sm:mr-3 mt-1 flex-shrink-0">•</span>
                  <span className="leading-relaxed">
                    JIFSA arranges industrial visit in mega project to enhance on
                    their knowledge and view with expert and guest lecture from
                    renowned and experienced personality.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;