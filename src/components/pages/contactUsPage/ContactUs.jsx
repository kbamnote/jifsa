import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "../../common/Header";
import Navbar from "../../common/Navbar";
import Footer from "../../common/Footer";
import { addDetail } from "../../utils/Api"; // Import the API function

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNo: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    console.log(formData);
    
    e.preventDefault();
    setLoading(true);
    setSubmitStatus(null);

    try {
      // Prepare the data for API
      const detailData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phoneNo: formData.phoneNo,
        message: formData.message
      };

      // Call the API
      const response = await addDetail(detailData);
      
      console.log('Form submitted successfully:', response.data);
      setSubmitStatus('success');
      
      // Reset form after successful submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phoneNo: '',
        message: ''
      });

    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
     <Header/>
     <Navbar/>
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full p-8 h-60 sm:h-72 bg-gradient-to-r from-red-600 to-red-700 text-white flex justify-center items-center"
      >
        <div className="text-center">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl md:text-5xl xl:text-6xl font-bold font-['Poppins'] mb-2"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl font-['Poppins'] opacity-90"
          >
            Get in touch with ST. JOSEPH'S International Fire and Safety Academy
          </motion.p>
        </div>
      </motion.div>

      <section className="w-full bg-gradient-to-r from-gray-50 to-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
            
            {/* Left Column - Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <p className="text-red-600 font-semibold uppercase tracking-wide mb-3 text-sm sm:text-base md:text-lg font-['Poppins']">
                India's Largest Fire and Safety Academy
              </p>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-['Poppins'] mb-6 text-gray-900">
                You Will <span className="text-red-600">Grow</span>, You Will <span className="text-red-600">Succeed</span>. <br className="hidden sm:block" />
                We Promise That
              </h2>

              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8 font-['Poppins']">
                Connect with us today to learn more about our comprehensive fire safety training programs, 
                industrial safety courses, and professional certification opportunities. 
                Your safety career starts here!
              </p>

              {/* Contact Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
                {/* Phone */}
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-red-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <h3 className="font-bold text-gray-900 font-['Poppins']">Call for inquiry</h3>
                  </div>
                  <p className="text-gray-600 font-medium font-['Poppins']">+91 8855885807</p>
                </motion.div>

                {/* Email */}
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-red-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <h3 className="font-bold text-gray-900 font-['Poppins']">Send us email</h3>
                  </div>
                  <p className="text-gray-600 font-medium font-['Poppins']"> jifsaadmissions@gmail.com</p>
                </motion.div>

                {/* Hours */}
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-red-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="font-bold text-gray-900 font-['Poppins']">Opening hours</h3>
                  </div>
                  <p className="text-gray-600 font-medium font-['Poppins']">Mon - Sat: 10AM - 7PM</p>
                </motion.div>

                {/* Location */}
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-red-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="font-bold text-gray-900 font-['Poppins']">Office</h3>
                  </div>
                  <p className="text-gray-600 font-medium font-['Poppins']">
                    1st Floor Mohota Complex, Above State Bank Of India Katol Road, Chhaoni Rd, Nagpur, Maharashtra 440013
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-500 border border-gray-100"
            >
              <div className="mb-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 font-['Poppins']">
                  Get In <span className="text-red-600">Touch</span>
                </h3>
                <p className="text-gray-600 font-['Poppins']">
                  Ready to start your safety career journey? Contact us today!
                </p>
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-100 border border-green-300 text-green-700 rounded-lg font-['Poppins']"
                >
                  ✅ Thank you! Your message has been sent successfully. We'll get back to you soon.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-100 border border-red-300 text-red-700 rounded-lg font-['Poppins']"
                >
                  ❌ Sorry, there was an error sending your message. Please try again or contact us directly.
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-bold text-gray-700 mb-2 font-['Poppins']"
                    >
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      disabled={loading}
                      className="w-full p-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all duration-300 font-['Poppins'] disabled:bg-gray-100 disabled:cursor-not-allowed"
                      placeholder="Your first name"
                    />
                  </motion.div>
                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-bold text-gray-700 mb-2 font-['Poppins']"
                    >
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      disabled={loading}
                      className="w-full p-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all duration-300 font-['Poppins'] disabled:bg-gray-100 disabled:cursor-not-allowed"
                      placeholder="Your last name"
                    />
                  </motion.div>
                </div>

                <motion.div whileFocus={{ scale: 1.02 }}>
                  <label
                    htmlFor="email"
                    className="block text-sm font-bold text-gray-700 mb-2 font-['Poppins']"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    disabled={loading}
                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all duration-300 font-['Poppins'] disabled:bg-gray-100 disabled:cursor-not-allowed"
                    placeholder="your.email@example.com"
                  />
                </motion.div>

                <motion.div whileFocus={{ scale: 1.02 }}>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-bold text-gray-700 mb-2 font-['Poppins']"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phoneNo"
                    name="phoneNo"
                    value={formData.phoneNo}
                    onChange={handleInputChange}
                    required
                    disabled={loading}
                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all duration-300 font-['Poppins'] disabled:bg-gray-100 disabled:cursor-not-allowed"
                    placeholder="Your phone number"
                  />
                </motion.div>

                <motion.div whileFocus={{ scale: 1.02 }}>
                  <label
                    htmlFor="message"
                    className="block text-sm font-bold text-gray-700 mb-2 font-['Poppins']"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    disabled={loading}
                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all duration-300 font-['Poppins'] disabled:bg-gray-100 disabled:cursor-not-allowed"
                    placeholder="Tell us about your interest in our courses..."
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: loading ? 1 : 1.05 }}
                  whileTap={{ scale: loading ? 1 : 0.95 }}
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-3 px-6 rounded-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 font-['Poppins'] text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending Message...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="bg-white p-6 border-b border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-2 font-['Poppins']">
                Find Us at <span className="text-red-600">ST. JOSEPH'S</span>
              </h3>
              <p className="text-gray-600 font-['Poppins']">
                Visit our academy and discover world-class fire safety training facilities
              </p>
            </div>
            <div className="w-full h-[480px] relative">
              <iframe
                title="ST. JOSEPH'S International Fire and Safety Academy Location"
                src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d14777.326899284418!2d79.0758026!3d21.1795312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x3bd4c1c9c9c9c9c9%3A0x1234567890abcdef!2sYour%20Location!3m2!1d21.1795312!2d79.075803!4m5!1s0x3bd4c1dfdc6c9b43%3A0x54f93538e6888db3!2sElite%20Associate%20in%20Nagpur%2C%20501%2C%205th%20Floor%20Mohota%20Apartment%20Behind%20State%20Bank%20Of%20India%20Katol%20Road%2C%20Chhaoni%20Rd%2C%20Nagpur%2C%20Maharashtra%20440013!3m2!1d21.1690299!2d79.0778028!5e0!3m2!1sen!2sin!4v1739422850317!5m2!1sen!2sin"
                width="100%"
                height="480"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default ContactUs;