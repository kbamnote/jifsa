import React, { useState } from "react";
import { motion } from "framer-motion";
import leftImage from "../../../assets/image-40.jpg";
import { addDetail } from "../../utils/Api"; 

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phoneNo: "",
    message: "",
  });
  const [isVerified, setIsVerified] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    console.log(formData);
    
    e.preventDefault();
    if (!isVerified) {
      alert("Please complete the reCAPTCHA verification");
      return;
    }

    try {
      setLoading(true);
      const response = await addDetail(formData);
      console.log("Form submitted:", response.data);

      alert("✅ Message sent successfully!");
      setFormData({ firstName: "", email: "", phoneNo: "", message: "" }); // ✅ fixed keys
      setIsVerified(false);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("❌ Failed to send message. Please try again later.");
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
            We’d love to hear from you. Let’s build something great together!
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
                name="firstName"   // ✅ fixed
                placeholder="Full Name"
                value={formData.firstName}
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
              name="phoneNo"   // ✅ fixed
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

            {/* reCAPTCHA */}
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-3 p-3 md:p-4 border border-gray-300 rounded-xl bg-gray-50">
              <input
                type="checkbox"
                id="recaptcha"
                checked={isVerified}
                onChange={(e) => setIsVerified(e.target.checked)}
                className="w-5 h-5 text-red-500 border-2 border-gray-300 rounded focus:ring-red-500"
              />
              <label htmlFor="recaptcha" className="text-sm text-gray-700">
                I'm not a robot
              </label>
              <div className="ml-auto text-xs text-gray-500 text-right">
                reCAPTCHA
                <div>Privacy - Terms</div>
              </div>
            </div>

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
