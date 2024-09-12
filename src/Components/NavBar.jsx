import { HiBars3CenterLeft } from "react-icons/hi2";
import { useState } from "react";

export const NavBar = () => {
  const [isMenuBarOpen, setMenuBarOpen] = useState(false);

  const toogleMenuBar = () => setMenuBarOpen(!isMenuBarOpen);

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

            {/* ***** Menu Start (Desktop) ***** */}
            <ul className="hidden md:flex space-x-8 text-xl text-gray-600 md:items-center">
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
            <button
              className="menu-trigger md:hidden flex items-center"
              onClick={toogleMenuBar}
            >
              <span className="text-gray-900">
                <HiBars3CenterLeft className="text-4xl mr-4 font-bold" />
              </span>
            </button>
          </nav>
        </div>

        {/* ***** Mobile Menu (below logo) ***** */}
        {isMenuBarOpen && (
          <ul className="flex flex-col pb-3 space-y-4 text-xl text-gray-600 mt-4 md:hidden">
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
              <a href="property-details.html" className="hover:text-[#f35525]">
                Property Details
              </a>
            </li>
            <li>
              <a href="contact.html" className="hover:text-[#f35525]">
                Contact Us
              </a>
            </li>
            
          </ul>
        )}
      </div>
    </header>
  );
};
