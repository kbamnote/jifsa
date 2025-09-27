import React from "react";
import logo from "../../assets/logo.png"; // update path to your logo

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      {/* Logo */}
      <img
        src={logo}
        alt="Logo"
        className="w-40 h-20 mb-8 animate-pulse"
      />

      {/* Red arc loader */}
      <div className="loader"></div>

      <style jsx>{`
        .loader {
          width: 50px;
          height: 50px;
          border: 4px solid transparent;
          border-top: 4px solid #dc2626;   /* red-600 */
          border-right: 4px solid #dc2626; /* red-600 */
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Loading;
