import React from "react";
import icon from "../Images/icon.png";

const Navbar = () => {
  const products = [
    "Bookme - Appointment Booking and Scheduling Plugin",
    "QuickQR - Saas - Contactless Restaurant QR Menu Maker",
    "QuickVCard - Digital Business Card SaaS PHP Script",
    "Quickad - Classified Ads CMS PHP Script",
    "QuickJob - Job Board PHP Script",
  ];

  return (
    <nav className="bg-gray-900 py-4 fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center text-white">
          <div className="flex items-center">
            <img src={icon} alt="Logo 1" className="h-8 w-6 mr-2" />
            <h1 className="text-xl font-extrabold">QuickJob</h1>
          </div>
          <div className="relative group ml-8">
            <button className="hover:text-blue-500 text-white font-bold">
              Products{" "}
            </button>
            <div className="absolute bg-gray-900 text-white z-10 hidden group-hover:block mt-1 p-2 shadow-lg rounded w-60">
              {products.map((product, index) => (
                <p key={index} className="hover:text-blue-500">
                  {product}
                </p>
              ))}
            </div>
          </div>
          <button className="hover:text-blue-500 text-white font-bold ml-8">
            About
          </button>
          <button className="hover:text-blue-500 text-white font-bold ml-8">
            Payment Gateway
          </button>
        </div>
        <div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ml-8">
            Buy Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
