// import React from 'react'

export const NavBar = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50 h-auto">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <nav className="flex items-center justify-between w-full">
            {/* ***** Logo Start ***** */}
            <a href="index.html" className="text-3xl font-bold">
              <h1>Villa</h1>
            </a>
            {/* ***** Logo End ***** */}

            {/* ***** Menu Start ***** */}
            <ul className="hidden md:flex space-x-8 text-gray-600 md:items-center">
              <li>
                <a href="index.html" className="text-[#f35525] font-semibold">
                  Home
                </a>
              </li>
              <li>
                <a href="properties.html" className="hover:text-[#f35525]">
                  Properties
                </a>
              </li>
              <li>
                <a
                  href="property-details.html"
                  className="hover:text-[#f35525]"
                >
                  Property Details
                </a>
              </li>
              <li>
                <a href="contact.html" className="hover:text-[#f35525]">
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#f35525] flex items-center bg-[#1e1e1e] text-white rounded-full"
                >
                  <i className="fa fa-calendar bg-[#f35525] text-white p-2 rounded-full h-full mr-2 flex-shrink-0"></i>
                  <p className="py-2 pr-3">Schedule a visit</p>
                </a>
              </li>
            </ul>

            {/* ***** Menu Trigger for Mobile ***** */}
            <a className="menu-trigger md:hidden flex items-center">
              <span className="text-gray-900">Menu</span>
            </a>
            {/* ***** Menu End ***** */}
          </nav>
        </div>
      </div>
    </header>
  );
};
