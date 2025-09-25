import React from "react";
import Header from "../../common/Header";
import Navbar from "../../common/Navbar";
import Footer from "../../common/Footer";

const jobs = [
  {
    title: "MARKETING EXECUTIVES (MALE)",
    experience: "3-5 Yrs.",
    salary: "As per Industry Norms",
    location: "Korba/Goregaon/Thane/Kuchaina",
    qualification: "BBA/MBA (Marketing/PGDBM) 1 to 3 Years Experience.",
    profile: "1 to 3 Years Experience",
  },
  {
    title: "CAREER COUNSELOR (FEMALE)",
    experience: "0-3 Yrs.",
    salary: "As per Industry Norms",
    location: "Korba/Goregaon/Thane/Kuchaina",
    qualification: "Any Graduate/PG.",
  },
  {
    title: "FACULTY FIRE & SAFETY",
    experience: "1 to 3 Years.",
    salary: "As per Industry Norms",
    location: "Kuchaina, Korba",
    qualification: "Any Graduate/PG.",
  },
  {
    title: "CORPORATE TRAINER FIRE & SAFETY AND FIRST AID",
    experience: "1 to 3 Years.",
    salary: "As per Industry Norms",
    location: "Goregaon West Mumbai",
    qualification: "Dip Fire & Safety, NEBOSH, IOSH.",
  },
  {
    title: "PLACEMENT COORDINATOR",
    experience: "1 to 3 Years.",
    salary: "As per Industry Norms",
    location: "Korba/Thane",
    qualification: "BBA/MBA/PGDBM.",
  },
  {
    title: "PLACEMENT COORDINATOR",
    experience: "1 to 3 Years.",
    salary: "As per Industry Norms",
    location: "Korba/Thane",
    qualification: "BBA/MBA/PGDBM.",
  },
];

const Careers = () => {
  return (
    <>
    <Header/>
    <Navbar/>
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-blue-900 mb-10">
        JOB OPPORTUNITIES
      </h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 relative hover:shadow-2xl transition-all duration-300 flex flex-col"
          >
            {/* Job title badge */}
            <span className="absolute -top-4 left-4 bg-blue-900 text-white text-sm font-semibold px-4 py-1 rounded-full shadow">
              {job.title}
            </span>

            {/* Job details */}
            <div className="mt-6 space-y-2 text-gray-700 flex-grow">
              <p>
                <span className="font-semibold">Experience - </span>
                {job.experience}
              </p>
              <p>
                <span className="font-semibold">Salary - </span>
                {job.salary}
              </p>
              <p>
                <span className="font-semibold">Location - </span>
                {job.location}
              </p>
              <p>
                <span className="font-semibold">Qualification - </span>
                {job.qualification}
              </p>
              {job.profile && (
                <p>
                  <span className="font-semibold">Work Profile - </span>
                  {job.profile}
                </p>
              )}
            </div>

            {/* Apply button pinned to bottom */}
            <div className="mt-auto pt-4">
              <button className="w-full px-6 py-2 bg-red-500 text-white font-semibold rounded-lg shadow hover:bg-red-600 transition">
                Apply
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Careers;
