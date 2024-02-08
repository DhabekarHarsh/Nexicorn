


  import React from 'react'

  function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <div className="mb-4">
            <div className="flex items-center justify-center">

              <img src="/logo.png" className="w-8 h-8" alt="QuickJob Logo" />
              <h2 className="text-lg font-bold text-white mr-2">QuickJob</h2>
            </div>




          </div>
          <div className="mb-4">
            <nav className="flex justify-center">
              <a href="#" className="text-white hover:text-blue-500 px-4">Home</a>
              <a href="#" className="text-white hover:text-blue-500 px-4">About Us</a>
              <a href="#" className="text-white hover:text-blue-500 px-4">Blog</a>
              <a href="#" className="text-white hover:text-blue-500 px-4">Documentation</a>
            </nav>
          </div>
          <div>
            <p className="text-sm">© 2022 Bylancer. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    )
  }

  export default Footer