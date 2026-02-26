import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, User, GraduationCap, Phone, Mail, Send } from "lucide-react";
import { addDetail } from "../utils/Api";

const ContactPopup = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    specialisation: "",
    phoneNo: "",
    email: "",
    productCompany: "JIFSA"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  if (!isOpen && !submitStatus) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Mapping specialisation to message for the existing API
      const apiData = {
        ...formData,
        message: `Specialisation: ${formData.specialisation}`
      };
      
      await addDetail(apiData);
      setSubmitStatus("success");
      
      // Reset form and close after delay
      setTimeout(() => {
        setFormData({
          fullName: "",
          specialisation: "",
          phoneNo: "",
          email: "",
          productCompany: "JIFSA"
        });
        setSubmitStatus(null);
        onClose();
      }, 3000);
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(null), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {(isOpen || submitStatus) && (
        <div className="fixed inset-0 flex items-center justify-center z-[9999] px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative bg-white w-full max-w-md rounded-2xl overflow-hidden shadow-2xl"
          >
            {/* Header */}
            <div className="bg-[#1D5CFF] p-6 text-white relative">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
              <h2 className="text-2xl font-bold mb-2">Ready to Transform Your Career?</h2>
              <p className="text-blue-100 text-sm leading-relaxed">
                Fill in your details to begin your journey with JIFSA
              </p>
            </div>

            {/* Body */}
            <div className="p-6">
              {submitStatus === "success" ? (
                <div className="py-12 flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    >
                      <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </motion.div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Thank You!</h3>
                  <p className="text-gray-600">Your details have been submitted successfully. We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Full Name */}
                  <div className="space-y-1">
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700 ml-1">
                      <User size={16} className="text-gray-400" />
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    />
                  </div>

                  {/* Specialisation */}
                  <div className="space-y-1">
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700 ml-1">
                      <GraduationCap size={16} className="text-gray-400" />
                      Specialisation
                    </label>
                    <input
                      type="text"
                      name="specialisation"
                      required
                      placeholder="Your area of specialisation"
                      value={formData.specialisation}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-1">
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700 ml-1">
                      <Phone size={16} className="text-gray-400" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phoneNo"
                      required
                      placeholder="Your phone number"
                      value={formData.phoneNo}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    />
                  </div>

                  {/* Email Address */}
                  <div className="space-y-1">
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700 ml-1">
                      <Mail size={16} className="text-gray-400" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Your email address"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                    type="submit"
                    className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold transition shadow-md ${
                      isSubmitting 
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed" 
                        : "bg-[#D1D5DB] hover:bg-[#BEC3CB] text-gray-700"
                    }`}
                  >
                    <Send size={18} />
                    {isSubmitting ? "Processing..." : "Start My Journey"}
                  </motion.button>
                  
                  {submitStatus === "error" && (
                    <p className="text-red-500 text-sm text-center mt-2">
                      Something went wrong. Please try again.
                    </p>
                  )}
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ContactPopup;
