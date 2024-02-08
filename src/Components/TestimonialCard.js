import React from "react";

const TestimonialCard = ({ para, name, designation }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-xs">
      <div className="flex items-center mb-4">
        <span className="text-yellow-500 ">⭐</span>
        <span className="text-yellow-500 ">⭐</span>
        <span className="text-yellow-500 ">⭐</span>
        <span className="text-yellow-500 ">⭐</span>
        <span className="text-yellow-500 ">⭐</span>
      </div>

      <p className="text-gray-700 mb-4">{para}</p>

      <div className="flex items-center">
        <img
          src="logo-url"
          alt="Logo"
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <p className="text-base font-bold">{name}</p>
          <p className="text-gray-600">{designation}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
