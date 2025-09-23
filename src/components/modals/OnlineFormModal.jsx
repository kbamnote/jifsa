import React from "react";

const OnlineFormModal = ({ isOpen, onClose, course, onSubmit }) => {
  if (!isOpen || !course) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-gray-100 w-full max-w-2xl rounded-lg shadow-lg p-6 relative">
        <h2 className="text-xl font-semibold text-center mb-4 text-blue-900">
          Online admission form
        </h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit(e);
          }}
          className="space-y-3"
        >
          <input
            type="text"
            placeholder="Enter Name *"
            required
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Enter Father Name *"
            required
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Enter Date of Birth dd/mm/yyyy *"
            required
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Enter your highest qualification *"
            required
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            value={`${course.code} : ${course.name}`}
            disabled
            className="w-full p-2 border rounded bg-gray-200"
          />
          <input
            type="text"
            placeholder="Enter Contact No. *"
            required
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Enter 2nd Contact No."
            className="w-full p-2 border rounded"
          />
          <input
            type="email"
            placeholder="Enter email id"
            required
            className="w-full p-2 border rounded"
          />

          <p className="text-sm text-gray-600">
            You will get your credentials and url to upload your images and
            documents after confirmation of accounts
          </p>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
          >
            Submit
          </button>
        </form>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default OnlineFormModal;
