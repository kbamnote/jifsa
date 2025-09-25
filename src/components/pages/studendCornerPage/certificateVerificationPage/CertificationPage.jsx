import React, { useState } from "react";
import Header from "../../../common/Header";
import Navbar from "../../../common/Navbar";
import Footer from "../../../common/Footer";

const CertificationPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    file: null,
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setFormData({ ...formData, file: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);

    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      file: null,
    });

    setTimeout(() => setSuccess(false), 4000);
  };

  return (
    <>
      <Header />
      <Navbar />
      <div className="min-h-screen bg-gradient-to-r from-blue-50 via-white to-blue-100 flex items-center justify-center p-6">
        <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h1 className="text-3xl font-bold text-gray-800 border-b pb-3 mb-5">
            Certification Form
          </h1>
          <p className="text-gray-600 text-sm mb-6">
            Please fill in your details to request certification. Make sure to
            upload the required document file before submitting.
          </p>

          {success && (
            <div className="mb-6 flex items-center gap-2 p-4 rounded-lg bg-green-100 text-green-700 border border-green-400">
              <span className="text-xl">✅</span>
              <span>
                Your certification request has been submitted successfully!
              </span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block font-semibold text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                required
              />
            </div>

            <div>
              <label className="block font-semibold text-gray-700 mb-1">
                Company Name
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Enter your company name"
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
                placeholder="email@domain.com"
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
                Upload File
              </label>
              <input
                type="file"
                name="file"
                onChange={handleChange}
                className="w-full text-gray-600 file:mr-4 file:py-2 file:px-4 
                         file:rounded-lg file:border-0 
                         file:text-sm file:font-semibold 
                         file:bg-blue-500 file:text-white 
                         hover:file:bg-blue-600"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold py-3 rounded-lg shadow-md hover:from-red-600 hover:to-red-700 transition-all"
            >
              Submit Request
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CertificationPage;
