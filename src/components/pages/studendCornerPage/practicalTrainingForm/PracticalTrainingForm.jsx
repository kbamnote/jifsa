import React from "react";
import TrainingForm from "../../../Forms/PRACTICALTRAININGFORM.pdf";
import DelcarationForm from "../../../Forms/PracticalTrainingFormDeclarationUndertakingfromthestudent.pdf";
import NOC from "../../../Forms/NoObjectionCertificate.pdf";
import RequirmentTraineeForm from "../../../Forms/RequirementsforTrainees.pdf";
import Footer from "../../../common/Footer";
import Header from "../../../common/Header";
import Navbar from "../../../common/Navbar";

const PracticalTrainingForm = () => {
  return (
    <>
      <Header />
      <Navbar />

      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 via-white to-blue-100 p-6">
        
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold text-red-600 underline mb-10 text-center">
          Practical Training Forms
        </h1>

        {/* Card Container */}
        <div className="bg-white shadow-xl rounded-2xl p-8 md:p-12 w-full max-w-2xl text-center">
          <div className="flex flex-col gap-6 text-lg md:text-xl font-medium text-blue-900">
            
            {/* Practical Training Form */}
            <a
              href={TrainingForm}
              target="_blank"
              rel="noopener noreferrer"
              className="block py-3 px-5 rounded-lg bg-blue-50 hover:bg-blue-100 hover:text-blue-700 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              📑 Practical Training Form
            </a>

            {/* Declaration Form */}
            <a
              href={DelcarationForm}
              target="_blank"
              rel="noopener noreferrer"
              className="block py-3 px-5 rounded-lg bg-blue-50 hover:bg-blue-100 hover:text-blue-700 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              📝 Declaration & Undertaking Form
            </a>

            {/* NOC */}
            <a
              href={NOC}
              target="_blank"
              rel="noopener noreferrer"
              className="block py-3 px-5 rounded-lg bg-blue-50 hover:bg-blue-100 hover:text-blue-700 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              📄 No Objection Certificate (NOC)
            </a>

            {/* Requirements for Trainees */}
            <a
              href={RequirmentTraineeForm}
              target="_blank"
              rel="noopener noreferrer"
              className="block py-3 px-5 rounded-lg bg-blue-50 hover:bg-blue-100 hover:text-blue-700 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              📋 Requirements for Trainees
            </a>
          </div>

          {/* Enquiry Section */}
          <div className="mt-10 p-4 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 rounded-md text-base md:text-lg">
            <p>
              📞 For any further query or doubt regarding practical training, please
              contact: <span className="font-semibold">+91 8855885807</span> <br />
              (<span className="italic">Basant Bareth, Practical Coordinator</span>)
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PracticalTrainingForm;
