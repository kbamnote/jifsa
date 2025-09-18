import React from "react";
import { Flame } from "lucide-react"; // Fire icon
import cvrImage from "../../../assets/BannerMobile_4.png"; // Replace with your actual image path

const BvocCourses = () => {
  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-8xl mx-auto px-6 md:px-12">
        {/* Top heading with icon */}
        <div className="flex items-center gap-2 mb-4">
          <Flame className="text-orange-500 w-5 h-5" />
          <p className="font-semibold uppercase">
            Skill Knowledge Provider of Dr. C.V. Raman University{" "}
            <a href="#" className="text-blue-600 underline">
              Know More...
            </a>
          </p>
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          B.Voc Courses From University
        </h2>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side - Text */}
          <div>
            <p className="text-2xl text-gray-700 leading-relaxed mb-6">
              Now JIFSA is a Skill Knowledge Provider of Dr. C.V. Raman University under
              B. Voc programme of UGC. JIFSA is providing skill knowledge facilities for
              various courses to Dr. C.V. Raman University, C.G. Kota for Fire Safety and
              Industrial Safety courses.
            </p>
            <p className="text-2xl text-gray-700 leading-relaxed mb-6">
              Degree courses with multiple entry and exit points.
            </p>
            <p className="text-2xl font-medium text-gray-800">
              Please call for information and admission{" "}
              <a href="tel:9407939795" className="text-blue-600 underline">
                9407939795
              </a>{" "}
              /{" "}
              <a href="tel:7879842744" className="text-blue-600 underline">
                7879842744
              </a>
            </p>
          </div>

          {/* Right Side - Image */}
          <div>
            <img
              src={cvrImage}
              alt="CV Raman University"
              className="rounded-lg shadow-md w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BvocCourses;
