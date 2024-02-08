import React from 'react';

const JobBoard = () => {
  return (
    <div className="bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
      {/* Left side: Text content */}
      <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-2 text-white max-w-md">The Best Rated PHP Job Board Script</h1>
        <p className="text-lg text-gray-300 mb-4">Easiest and most effective PHP job board Script to let you build a Job classified ads website of cutting-edge quality, Whether you are a recruiting firm, corporate or human resources departments, or agencies that recruit looking for competent applicants.</p>
        <div className="flex space-x-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Try Demo</button>
          <button className="bg-transparent hover:bg-white text-white font-bold py-2 px-4 rounded border border-white hover:text-black">Buy Now</button>
        </div>
      </div>

      {/* Right side: Image */}
      <div className="md:w-1/2">
        <img src="your-image-url" className="w-full rounded-lg" alt="Feature Image" />
      </div>
    </div>
  );
};

export default JobBoard;
