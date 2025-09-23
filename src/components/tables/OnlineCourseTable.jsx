    import React, { useState } from "react";
    import CourseRegisterModal from "../modals/OnlineFormModal";
    
    const courses = [
      {
        code: "BVOC_ADFS",
        name: "ADVANCE DIPLOMA IN FIRE AND SAFETY (INDUSTRIAL)",
        duration: "2 YEARS",
        module: 4,
      },
      {
        code: "BVOC_DFS",
        name: "DIPLOMA IN FIRE AND SAFETY (INDUSTRIAL)",
        duration: "3 YEARS",
        module: 6,
      },
      {
        code: "BVOC_FS",
        name: "BATCHLOR OF VOCATION IN FIRE AND SAFETY (INDUSTRIAL)",
        duration: "3 YEARS",
        module: 6,
      },
      {
        code: "MEFF",
        name: "FIRE FIGHTER MEPSC",
        duration: "780 Hrs.",
        module: 2,
      },
    ];
    
    const OnlineCoursesTable = () => {
      const [isOpen, setIsOpen] = useState(false);
      const [selectedCourse, setSelectedCourse] = useState(null);
    
      const openModal = (course) => {
        setSelectedCourse(course);
        setIsOpen(true);
      };
    
      const closeModal = () => {
        setIsOpen(false);
        setSelectedCourse(null);
      };
    
      const handleSubmit = () => {
        alert("Form submitted!");
        closeModal();
      };
    
      return (
        <section className="w-full py-12 px-4 md:px-12">
          {/* Title */}
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-900">
             JIFSA online courses
            </h2>
            <p className="text-gray-500 text-sm">
            courses may update as per notifications
            </p>
          </div>
    
          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200 text-left">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2 border">Course Code</th>
                  <th className="px-4 py-2 border">Course Name</th>
                  <th className="px-4 py-2 border">Duration</th>
                  <th className="px-4 py-2 border">Module</th>
                  <th className="px-4 py-2 border text-center">Register</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((course, idx) => (
                  <tr key={idx} className="hover:bg-gray-50">
                    <td className="px-4 py-3 border">{course.code}</td>
                    <td className="px-4 py-3 border">{course.name}</td>
                    <td className="px-4 py-3 border">{course.duration}</td>
                    <td className="px-4 py-3 border">{course.module}</td>
                    <td className="px-4 py-3 border text-center">
                      <button
                        onClick={() => openModal(course)}
                        className="bg-teal-500 text-white px-4 py-1 rounded-md hover:bg-teal-600 transition"
                      >
                        Register
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
    
          {/* Modal Component */}
          <CourseRegisterModal
            isOpen={isOpen}
            onClose={closeModal}
            course={selectedCourse}
            onSubmit={handleSubmit}
          />
        </section>
      );
    };
    
    export default OnlineCoursesTable;
    