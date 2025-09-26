import React from "react";
import PlacementForm from "../../../Forms/placementform.pdf";
import Footer from "../../../common/Footer";
import Header from "../../../common/Header";
import Navbar from "../../../common/Navbar";

const PlacementFormPage = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 via-white to-blue-100 p-6">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold text-blue-600 underline mb-10 text-center">
          Placement Forms
        </h1>

        {/* Card Container */}
        <div className="bg-white shadow-xl rounded-2xl p-8 md:p-12 w-full max-w-2xl text-center">
          <div className="flex flex-col gap-6 text-lg md:text-xl font-medium text-blue-900">
            
            {/* Placement Offline */}
            <a
              href={PlacementForm}
              target="_blank"
              rel="noopener noreferrer"
              className="block py-3 px-5 rounded-lg bg-blue-50 hover:bg-blue-100 hover:text-blue-700 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              📑 Placement Form (Offline)
            </a>

            {/* Placement Online (placeholder for now) */}
            <a
              href="#"
              className="block py-3 px-5 rounded-lg bg-blue-50 hover:bg-blue-100 hover:text-blue-700 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              🌐 Placement Form (Online)
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PlacementFormPage;
