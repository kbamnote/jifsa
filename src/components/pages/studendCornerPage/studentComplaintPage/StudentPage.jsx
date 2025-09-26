import React, { useState } from "react";
import Header from "../../../common/Header";
import Navbar from "../../../common/Navbar";
import Footer from "../../../common/Footer";

const StudentPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    studentId: "",
    email: "",
    phone: "",
    complaint: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);

    // Clear input fields
    setFormData({
      fullName: "",
      studentId: "",
      email: "",
      phone: "",
      complaint: "",
    });

    setTimeout(() => setSuccess(false), 4000);
  };

  return (
    <>
      <Header />
      <Navbar />
      <div className="min-h-screen bg-gradient-to-r from-blue-50 via-white to-blue-100 flex items-center justify-center p-6">
        <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h1 className="text-3xl font-bold text-blue-800 border-b pb-3 mb-5">
            Complaint Form
          </h1>
          <p className="text-gray-600 text-sm mb-3">
            Please send us details about the incident you would like to report.
            Our Complaint Center will analyze your complaint and take the
            appropriate measures to ensure it does not occur again in the
            future.{" "}
            <a href="#" className="text-blue-600 underline hover:text-blue-800">
              Complaint policy
            </a>
          </p>
          <p className="text-gray-700 text-sm mb-6">
            📞 Call us: <b className="text-gray-900">9860111868</b>
          </p>

          {/* Success Message */}
          {success && (
            <div className="mb-6 flex items-center gap-2 p-4 rounded-lg bg-green-100 text-green-700 border border-green-400">
              <span className="text-xl">✅</span>
              <span>Your complaint has been submitted successfully!</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block font-semibold text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="First and Last"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                required
              />
            </div>

            <div>
              <label className="block font-semibold text-gray-700 mb-1">
                Student ID (Mentioned in fee receipts)
              </label>
              <input
                type="text"
                name="studentId"
                value={formData.studentId}
                onChange={handleChange}
                placeholder="Student ID"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                required
              />
            </div>

            <div>
              <label className="block font-semibold text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="email@domain.tld"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                required
              />
            </div>

            <div>
              <label className="block font-semibold text-gray-700 mb-1">
                Mobile Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="10 digit phone number"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                pattern="[0-9]{10}"
                required
              />
            </div>

            <div>
              <label className="block font-semibold text-gray-700 mb-1">
                Complaint
              </label>
              <textarea
                name="complaint"
                value={formData.complaint}
                onChange={handleChange}
                placeholder="Write your complaint / grievances here"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 h-32 resize-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold py-3 rounded-lg shadow-md hover:from-red-600 hover:to-red-700 transition-all"
            >
              File Complaint
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default StudentPage;
