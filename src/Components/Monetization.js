import React from 'react';
import images2 from '../Images/Monetization.png'
import images1 from '../Images/MonetizationDevice.png'
const Monetization = () => {
  return (
    <div className="bg-blue-50 py-12 px-4 sm:px-6 lg:px-8 mt-8 mx-6 rounded-lg"> {/* Added mx-4 for horizontal margin and rounded-lg for border curve */}
  <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
    {/* Left side: Image */}
    <div className="md:w-1/3 mb-8 md:mb-0 relative"> {/* Adjusted width to md:w-1/3 */}
      <img src={images1} className="w-full rounded-lg" alt="Feature Image" />
      <img src={images2} className="absolute w-6/6 top-1 right-1/6 rounded-lg" alt="Feature Image" />
    </div>

    {/* Right side: Text content */}
    <div className="md:w-1/2 md:pl-20 ">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 max-w-sm">Monetization Made Easy: Earn with multiple option</h1>
      <p className="text-lg text-gray-700 mb-4 max-w-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus accumsan magna sit amet dui efficitur vehicula.</p>
      <ul className="list-disc list-inside">
        <li className="mb-2">Point 1</li>
        <li className="mb-2">Point 2</li>
        <li className="mb-2">Point 3</li>
      </ul>
    </div>
  </div>
</div>

  );
};

export default Monetization;
