import React from "react";
import { Flame, Phone } from "lucide-react";

const courses = [
  {
    id: 1,
    course: "Diploma in Industrial Safety",
    duration: "1 Year",
    certification: "Rungta International Skill University",
  },
  {
    id: 2,
    course: "Advance Diploma in Industrial Safety",
    duration: "2 Years",
    certification: "Rungta International Skill University",
  },
  {
    id: 3,
    course: "Bachelor's degree in Industrial Safety",
    duration: "3 Years",
    certification: "Rungta International Skill University",
  },
  {
    id: 4,
    course: "Fire fighter",
    duration: "780 Hrs. / 1 Year",
    certification: "NCVET MEPSC NSQF",
  },
];

const CoursesTableOne = () => {
  return (
    <div className="p-6 max-w-8xl mx-auto">
      {/* Heading */}
      <div className="flex items-center gap-2 text-blue-800 font-semibold uppercase">
        <Flame className="w-5 h-5 text-blue-600" />
        <span>Our Courses and Services</span>
      </div>

      <h1 className="text-3xl font-bold mt-2 mb-6">
        University Courses Under B. Voc
      </h1>

      {/* Table */}
      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="w-full text-left border border-gray-200 rounded-lg">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-6 py-3 border-b">#</th>
              <th className="px-6 py-3 border-b">Course</th>
              <th className="px-6 py-3 border-b">Duration</th>
              <th className="px-6 py-3 border-b">Certification</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {courses.map((course) => (
              <tr key={course.id} className="hover:bg-gray-50">
                <td className="px-6 py-3 border-b">{course.id}</td>
                <td className="px-6 py-3 border-b">{course.course}</td>
                <td className="px-6 py-3 border-b">{course.duration}</td>
                <td className="px-6 py-3 border-b">{course.certification}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer Note */}
      <div className="mt-6 flex items-center gap-2 text-gray-700 text-lg font-medium">
        <Phone className="w-5 h-5 text-green-600" />
        <span>
          To know more about courses please{" "}
          <span className="text-blue-600 font-semibold">call us</span>
        </span>
      </div>
    </div>
  );
};

export default CoursesTableOne;
