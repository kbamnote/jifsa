import React from "react";
import { Flame } from "lucide-react"; // fire icon
import rungtaImg from "../../../assets/RuntaUniversity.jpg"; // replace with your image

const RungtaSection = () => {
  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-8xl mx-auto px-6 md:px-12">
        {/* Top heading with icon */}
        <div className="flex items-center gap-2 mb-4">
          <Flame className="text-orange-500 w-5 h-5" />
          <p className=" font-semibold uppercase">
            Associated with Rungta International Skill University{" "}
            <a href="#" className="text-blue-600 underline">
              Know More...
            </a>
          </p>
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          B.Voc Degree, Diploma Courses From Rungta International Skill University
        </h2>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side - Image */}
          <div>
            <img
              src={rungtaImg}
              alt="Rungta University"
              className="rounded-lg shadow-md w-full h-auto"
            />
          </div>

          {/* Right Side - Text */}
          <div>
            <p className="text-2xl text-gray-700 leading-relaxed mb-6">
              Now JIFSA is industry partner of Rungta Internation Skill University to
              Deliver B. Voc Courses under B. Voc programme. JIFSA providing skill
              knowledge facilities for various courses to Rungta Internation Skill
              University to Deliver Industrial Safety courses Degree courses with
              multiple entry exit points.
            </p>
            <p className="text-2xl font-medium text-gray-800">
              Please call for information and admission{" "}
              <a href="tel:9407939795" className="text-blue-600 underline">
                9407939795
              </a>{" "}
              /{" "}
              <a href="tel:7021288226" className="text-blue-600 underline">
                7021288226
              </a>{" "}
              <a href="tel:7039089670" className="text-blue-600 underline">
                7039089670
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RungtaSection;
