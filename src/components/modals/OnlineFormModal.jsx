import React, { useState } from "react";
import { addAdmissionForm } from "../utils/Api"; // Adjust import path as needed

const OnlineFormModal = ({ isOpen, onClose, course, onSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    fatherName: "",
    dob: "",
    qualification: "",
    phoneNo: "",
    contactNo: "",
    email: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  if (!isOpen || !course) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const formatDateForAPI = (dateString) => {
    // Convert dd/mm/yyyy to yyyy-mm-dd
    const parts = dateString.split('/');
    if (parts.length === 3) {
      const [day, month, year] = parts;
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
    }
    return dateString;
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Name is required";
    }
    
    if (!formData.fatherName.trim()) {
      newErrors.fatherName = "Father's name is required";
    }
    
    if (!formData.dob.trim()) {
      newErrors.dob = "Date of birth is required";
    } else {
      // Validate date format dd/mm/yyyy
      const dateRegex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
      if (!dateRegex.test(formData.dob)) {
        newErrors.dob = "Date must be in dd/mm/yyyy format";
      }
    }
    
    if (!formData.qualification.trim()) {
      newErrors.qualification = "Qualification is required";
    }
    
    if (!formData.phoneNo.trim()) {
      newErrors.phoneNo = "Contact number is required";
    } else if (!/^\d{10}$/.test(formData.phoneNo)) {
      newErrors.phoneNo = "Contact number must be 10 digits";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    console.log(formData);
    
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const apiPayload = {
        fullName: formData.fullName,
        fatherName: formData.fatherName,
        qualification: formData.qualification,
        dob: formatDateForAPI(formData.dob),
        phoneNo: formData.phoneNo,
        contactNo: formData.contactNo || "", // Optional field
        email: formData.email,
        course: {
          courseName: course.name,
          courseCode: course.code
        }
      };

      const response = await addAdmissionForm(apiPayload);
      
      // Call the parent onSubmit if provided
      if (onSubmit) {
        onSubmit(response.data);
      }

      // Show success message
      setSubmitStatus('success');
      
      // Reset form after 4 seconds and close modal
      setTimeout(() => {
        setFormData({
          fullName: "",
          fatherName: "",
          dob: "",
          qualification: "",
          phoneNo: "",
          contactNo: "",
          email: ""
        });
        setSubmitStatus(null);
        onClose();
      }, 4000);

    } catch (error) {
      console.error("Error submitting form:", error);
      
      // Handle different types of errors
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
      fatherName: "",
      dob: "",
      qualification: "",
      phoneNo: "",
      contactNo: "",
      email: ""
    });
    setErrors({});
    setSubmitStatus(null);
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-gray-100 w-full max-w-2xl rounded-lg shadow-lg p-6 relative max-h-[90vh] overflow-y-auto">
        <h2 className="text-xl font-semibold text-center mb-4 text-blue-900">
          Online admission form
        </h2>

        {/* Success Message - More prominent and centered */}
        {submitStatus === 'success' && (
          <div className="mb-6 p-6 bg-green-50 border-2 border-green-400 text-green-800 rounded-lg shadow-md">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-green-700">Form Submitted Successfully!</h3>
              <p className="text-green-700 mb-2">Your admission form has been submitted successfully.</p>
              <p className="text-sm text-green-600">You will receive your credentials and upload URL soon via email.</p>
              <p className="text-xs text-green-500 mt-3 italic">This window will close automatically in a few seconds...</p>
            </div>
          </div>
        )}

        {/* Error Message - More prominent */}
        {submitStatus === 'error' && (
          <div className="mb-4 p-4 bg-red-50 border-2 border-red-400 text-red-700 rounded-lg shadow-md">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-red-800">Submission Failed</h3>
                <p className="text-sm text-red-700">Something went wrong while submitting your form. Please try again.</p>
                <button 
                  onClick={() => setSubmitStatus(null)}
                  className="text-xs text-red-600 underline mt-2 hover:no-underline font-medium"
                >
                  Try Again
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Form - Hide when success message is shown */}
        <div style={{ display: submitStatus === 'success' ? 'none' : 'block' }}>
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Enter Name *"
                className={`w-full p-2 border rounded ${errors.fullName ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
            </div>

            <div>
              <input
                type="text"
                name="fatherName"
                value={formData.fatherName}
                onChange={handleInputChange}
                placeholder="Enter Father Name *"
                className={`w-full p-2 border rounded ${errors.fatherName ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.fatherName && <p className="text-red-500 text-sm mt-1">{errors.fatherName}</p>}
            </div>

            <div>
              <input
                type="text"
                name="dob"
                value={formData.dob}
                onChange={handleInputChange}
                placeholder="Enter Date of Birth dd/mm/yyyy *"
                className={`w-full p-2 border rounded ${errors.dob ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.dob && <p className="text-red-500 text-sm mt-1">{errors.dob}</p>}
            </div>

            <div>
              <input
                type="text"
                name="qualification"
                value={formData.qualification}
                onChange={handleInputChange}
                placeholder="Enter your highest qualification *"
                className={`w-full p-2 border rounded ${errors.qualification ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.qualification && <p className="text-red-500 text-sm mt-1">{errors.qualification}</p>}
            </div>

            <input
              type="text"
              value={`${course.code} : ${course.name}`}
              disabled
              className="w-full p-2 border rounded bg-gray-200 cursor-not-allowed"
            />

            <div>
              <input
                type="text"
                name="phoneNo"
                value={formData.phoneNo}
                onChange={handleInputChange}
                placeholder="Enter Contact No. *"
                className={`w-full p-2 border rounded ${errors.phoneNo ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.phoneNo && <p className="text-red-500 text-sm mt-1">{errors.phoneNo}</p>}
            </div>

            <input
              type="text"
              name="contactNo"
              value={formData.contactNo}
              onChange={handleInputChange}
              placeholder="Enter 2nd Contact No."
              className="w-full p-2 border rounded border-gray-300"
            />

            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter email id *"
                className={`w-full p-2 border rounded ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <p className="text-sm text-gray-600">
              You will get your credentials and url to upload your images and
              documents after confirmation of accounts
            </p>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-2 rounded transition ${
                isSubmitting 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-green-600 hover:bg-green-700'
              } text-white font-medium`}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>

        {/* Close Button - Hide when showing success message */}
        {submitStatus !== 'success' && (
          <button
            onClick={handleClose}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl w-8 h-8 flex items-center justify-center"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
};

export default OnlineFormModal;