import React from "react";
import flowchartImage from "../../../assets/informatic.jpg"; 


const CareerFlowchart = () => {
  return (
    <div className="bg-gray-100 py-10">
      <h2 className="bg-gray-200 p-4 text-4xl font-bold text-blue-900 text-center mb-8">
        Career Flowchart
      </h2>

      <div className="flex justify-center">
        <img
          src={flowchartImage}
          alt="Career Flowchart"
          className="max-w-full h-auto rounded-lg "
        />
      </div>
    </div>
  );
};

export default CareerFlowchart;
