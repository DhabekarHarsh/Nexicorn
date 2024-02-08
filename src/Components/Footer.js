import React from "react";
import icon from "../Images/icon.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="flex justify-center my-20">
        <div className="flex items-center">
          <img src={icon} alt="Logo 1" className="h-8 w-6 mr-2" />
          <h1 className="text-xl font-extrabold">QuickJob</h1>
        </div>
      </div>

      <div className="flex justify-center mt-4 my-20">
        <ul className="flex">
          <li className="mx-2">
            <a href="#" className="hover:text-blue-500 font-bold px-2">
              Home
            </a>
          </li>
          <li className="mx-2">
            <a href="#" className="hover:text-blue-500 font-bold px-2">
              About Us
            </a>
          </li>
          <li className="mx-2">
            <a href="#" className="hover:text-blue-500 font-bold px-2">
              Blog
            </a>
          </li>
          <li className="mx-2">
            <a href="#" className="hover:text-blue-500 font-bold px-2">
              Documentation
            </a>
          </li>
        </ul>
      </div>

      <div className="flex justify-center my-8">
        <div className="flex space-x-6">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded shadow-md">
            Contact US
          </button>
          <button className="bg-transparent hover:bg-white text-white font-bold py4 px-8 rounded border border-white hover:text-black">
            Help Center
          </button>
        </div>
      </div>

      <div className="flex justify-center mt-4">
        <div className="flex">
          <div className="bg-transparent hover:bg-blue-500 p-2 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          </div>

          <div className="bg-transparent hover:bg-blue-500 p-2 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </div>

          <div className="bg-transparent hover:bg-red-500 p-2 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.PP385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="text-center mt-4">
        <p>© 2022 Bylancer. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
