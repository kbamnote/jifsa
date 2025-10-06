import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import leftImage from "../../../assets/image-40.jpg";
import { addDetail } from "../../utils/Api"; 

function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNo: "",
    message: "",
    productCompany: "JIFSA"
  });
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    console.log(formData);
    
    e.preventDefault();

    try {
      setLoading(true);
      setSubmitStatus(null);
      const response = await addDetail(formData);
      console.log("Form submitted:", response.data);

      setSubmitStatus('success');
      setFormData({ fullName: "", email: "", phoneNo: "", message: "" });
      
      // Hide success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Left Panel */}
      <div className="md:w-1/3 relative hidden md:flex items-end justify-center">
        <img
          src={leftImage}
          alt="Contact"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="relative p-6 md:p-8 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Get In Touch</h2>
          <p className="text-sm md:text-base">
            We'd love to hear from you. Let's build something great together!
          </p>
        </div>
      </div>

      {/* Right Panel */}
      <div className="flex-1 flex items-center justify-center p-6 md:p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-lg md:max-w-2xl bg-white p-6 md:p-10 rounded-3xl shadow-xl"
        >
          {/* Success/Error Message */}
          <AnimatePresence>
            {submitStatus && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className={`mb-6 p-4 rounded-xl text-center ${
                  submitStatus === 'success'
                    ? 'bg-green-100 border border-green-300 text-green-800'
                    : 'bg-red-100 border border-red-300 text-red-800'
                }`}
              >
                {submitStatus === 'success' && (
                  <div className="flex items-center justify-center space-x-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium">Message sent successfully!</span>
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="flex items-center justify-center space-x-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium">Failed to send message. Please try again.</span>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mb-6 md:mb-8 text-center">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
              Don't Hesitate
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              to send your message to us
            </p>
          </div>

          <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
            {/* First Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition"
                required
              />
              <motion.input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition"
                required
              />
            </div>

            {/* Phone */}
            <motion.input
              type="tel"
              name="phoneNo"
              placeholder="Phone"
              value={formData.phoneNo}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition"
              required
            />

            {/* Message */}
            <motion.textarea
              name="message"
              placeholder="Message goes here"
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition resize-vertical"
              required
            />

            {/* Submit */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              disabled={loading}
              className={`w-full ${
                loading ? "bg-gray-400" : "bg-red-500 hover:bg-red-600"
              } text-white font-medium py-3 rounded-xl transition duration-200 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 outline-none`}
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

export default ContactForm;