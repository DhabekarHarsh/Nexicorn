import React from 'react';

const TestimonialCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-xs">
      {/* Stars */}
      <div className="flex items-center mb-4">
        <span className="text-yellow-500 ">⭐</span>
        <span className="text-yellow-500 ">⭐</span>
        <span className="text-yellow-500 ">⭐</span>
        <span className="text-yellow-500 ">⭐</span>
        <span className="text-yellow-500 ">⭐</span>
      </div>

      {/* Paragraph */}
      <p className="text-gray-700 mb-4">This is a great CMS - that has been re-purposed from the classified product by the author very smartly. Excellent support and looking forward to feature upgrades. Have been interacting on some more bugs that need to be ironed out..looking forward to support and upgrades.</p>

      {/* Logo, Name, and Age */}
      <div className="flex items-center">
        <img src="logo-url" alt="Logo" className="w-12 h-12 rounded-full mr-4" />
        <div>
          <p className="text-base font-bold">supersoftware</p>
          <p className="text-gray-600">Design Quality</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;