import React from "react";
import Header from "../../../common/Header";
import Navbar from "../../../common/Navbar";
import Footer from "../../../common/Footer";

const MarksheetPage = () => {
  const contacts = [
    {
      name: "Mr. Kunal Bamnote",
      email: "kunalbamnote5@gmail.com",
    },
    {
      name: "Mr. Himanshu Thakre",
      email: "himanshuthakre777@gmail.com",
    },
  ];

  return (
    <>
      <Header />
      <Navbar />

      <div className="min-h-screen bg-gradient-to-r from-blue-50 via-white to-blue-100 flex items-center justify-center p-6">
        <div className="max-w-5xl w-full">
          <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Marksheet Correction / Technical Support
          </h1>

          <div className="grid gap-6 sm:grid-cols-2">
            {contacts.map((person, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-shadow"
              >
                <p className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                  <span className="text-blue-600 text-xl">👤</span>
                  {person.name}
                </p>
                <p className="mt-3 text-gray-700 flex items-center gap-2">
                  <span className="text-red-500 text-lg">📧</span>
                  Mail to:{" "}
                  <a
                    href={`mailto:${person.email}`}
                    className="text-blue-600 hover:underline"
                  >
                    {person.email}
                  </a>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default MarksheetPage;
