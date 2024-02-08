import React from "react";
import images1 from "../Images/MonetizationDevice.png";
import images2 from "../Images/Monetization.png";

const Monetization = () => {
  return (
    <div className="bg-blue-50 py-12 px-4 sm:px-6 lg:px-8 mt-8 mx-6 rounded-lg">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">

        <div className="md:w-1/3 mb-8 md:mb-0 relative">
          <img
            src={images1}
            className="w-full rounded-lg"
            alt="Feature Image"
          />
          <img
            src={images2}
            className="absolute w-6/6 top-1 right-1/6 rounded-lg"
            alt="Feature Image"
          />
        </div>


        <div className="md:w-1/2 md:pl-20">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 max-w-sm">
            Monetization Made Easy: Earn with multiple option
          </h1>
          <p className="text-lg text-gray-700 mb-4 max-w-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            accumsan magna sit amet dui efficitur vehicula.
          </p>
          <ul className="list-disc list-inside">
            <li className="mb-2 flex items-center">

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                className="mr-2 text-gray-700"
              >
                <path
                  fill="currentColor"
                  d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2m0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8s8 3.589 8 8s-3.589 8-8 8"
                />
                <path
                  fill="currentColor"
                  d="M9.999 13.587L7.7 11.292l-1.412 1.416l3.713 3.705l6.706-6.706l-1.414-1.414z"
                />
              </svg>
              Create your own membership plan with unlimited possibilities
            </li>
            <li className="mb-2 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                className="mr-2 text-gray-700"
              >
                <path
                  fill="currentColor"
                  d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2m0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8s8 3.589 8 8s-3.589 8-8 8"
                />
                <path
                  fill="currentColor"
                  d="M9.999 13.587L7.7 11.292l-1.412 1.416l3.713 3.705l6.706-6.706l-1.414-1.414z"
                />
              </svg>
              Banner ad management system allows you to monetize through banner
              ads.
            </li>
            <li className="mb-2 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="27"
                viewBox="0 0 24 24"
                className="mr-2 text-gray-700"
              >
                <path
                  fill="currentColor"
                  d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2m0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8s8 3.589 8 8s-3.589 8-8 8"
                />
                <path
                  fill="currentColor"
                  d="M9.999 13.587L7.7 11.292l-1.412 1.416l3.713 3.705l6.706-6.706l-1.414-1.414z"
                />
              </svg>
              User can mark his post as featured for some number of days by
              paying the amount as set by admin.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Monetization;
