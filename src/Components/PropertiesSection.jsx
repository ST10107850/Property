import property from "../assets/images/property-01.jpg";
import property2 from "../assets/images/property-02.jpg";
import property3 from "../assets/images/property-03.jpg";
import property4 from "../assets/images/property-04.jpg";
import property5 from "../assets/images/property-05.jpg";
import property6 from "../assets/images/property-06.jpg";

import PropTypes from "prop-types";
import { useState } from "react";

const propertyData = [
  {
    img: property,
    category: "Luxury Villa",
    price: "R2,264,000",
    address: "18 New Street Miami, OR 97219",
    bedrooms: 8,
    bathrooms: 8,
    area: "545m2",
    floor: 3,
    parking: "6 spots",
  },
  {
    img: property2,
    category: "Luxury Villa",
    price: "R1,180,000",
    address: "54 Mid Street Florida, OR 27001",
    bedrooms: 6,
    bathrooms: 5,
    area: "450m2",
    floor: 3,
    parking: "8 spots",
  },
  {
    img: property3,
    category: "Luxury Villa",
    price: "R1,460,000",
    address: "26 Old Street Miami, OR 38540",
    bedrooms: 5,
    bathrooms: 4,
    area: "225m2",
    floor: 3,
    parking: "10 spots",
  },
  {
    img: property4,
    category: "Apartment",
    price: "R584,500",
    address: "12 New Street Miami, OR 12650",
    bedrooms: 4,
    bathrooms: 3,
    area: "125m2",
    floor: "25th",
    parking: "2 cars",
  },
  {
    img: property5,
    category: "Penthouse",
    price: "R925,600",
    address: "34 Beach Street Miami, OR 42680",
    bedrooms: 4,
    bathrooms: 4,
    area: "350m2",
    floor: 5,
    parking: "4 spots",
  },
  {
    img: property6,
    category: "Villa",
    price: "R850,000",
    address: "14 Hilltop Avenue Miami, OR 12650",
    bedrooms: 3,
    bathrooms: 2,
    area: "250m2",
    floor: 2,
    parking: "3 spots",
  },
];

const PropertiesSection = ({ isHome = false }) => {
  const [activeTab, setActiveTab] = useState("appartment");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="properties section py-16 md:px-0 px-20">
      <div className="container md:mx-auto">
        <div className={isHome ? "flex justify-center mb-12" : "hidden"}>
          <div className="w-full lg:w-2/3 text-center">
            <div className="section-heading flex flex-col items-center">
              <h6 className="text-[#f35525] text-base font-bold uppercase">
                | Properties
              </h6>
              <h2 className="text-3xl font-bold w-1/2 mt-5">
                We Provide The Best Property You Like
              </h2>
            </div>
          </div>
        </div>
        {/* If is home these button will not be displayed and if not it will show */}
        <div
          className={isHome ? "hidden" : "nav-wrapper w-full mb-[50px] md:mb-4"}
        >
          <ul
            className={`flex ${
              isHome ? "md:justify-end" : "md:justify-center"
            } justify-center  md:mt-[-35px] space-x-2`}
          >
            <li className="nav-item">
              <button
                className={`nav-link px-[25px] py-2 rounded-md ${
                  activeTab === "appartment"
                    ? "bg-[#f35525] text-white"
                    : "bg-[#1E1E1E] text-white"
                } text-base font-bold`}
                onClick={() => handleTabClick("appartment")}
              >
                Appartment
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link px-4 py-2 rounded-md ${
                  activeTab === "villa"
                    ? "bg-[#f35525] text-white"
                    : "bg-[#1E1E1E] text-white"
                } text-base font-bold`}
                onClick={() => handleTabClick("villa")}
              >
                Villa House
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link px-4 py-2 rounded-md ${
                  activeTab === "penthouse"
                    ? "bg-[#f35525] text-white"
                    : "bg-[#1E1E1E] text-white"
                } text-base font-bold`}
                onClick={() => handleTabClick("penthouse")}
              >
                Penthouse
              </button>
            </li>
          </ul>
        </div>
        {/* End of Buttons */}
        
        <div className="flex flex-wrap">
          {propertyData.map((property, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-3 mb-8">
              <div className="item bg-[#FAFAFA] shadow-lg rounded-lg overflow-hidden p-8 mb-8">
                <a href="#">
                  <img
                    src={property.img}
                    alt={property.category}
                    className="w-[356px] h-[265px] rounded-md"
                  />
                </a>
                <div className="flex items-center mt-6 justify-between">
                  <span className="category text-sm text-gray-500 px-4 py-2 block rounded-md bg-[#FBD9CF]">
                    {property.category}
                  </span>
                  <h6 className="px-4 text-xl font-bold text-[#F35525]">
                    {property.price}
                  </h6>
                </div>
                <h4 className="text-lg font-semibold my-6">
                  <a href="#">{property.address}</a>
                </h4>
                <ul className="pb-8 border-b mb-8 flex justify-between">
                  <div className="mr">
                    <li className="text-gray-500">
                      Bedrooms:{" "}
                      <span className="text-black">{property.bedrooms}</span>
                    </li>
                    <li className="text-gray-500">
                      Bathrooms:{" "}
                      <span className="text-black">{property.bathrooms}</span>
                    </li>
                  </div>
                  <div>
                    <li className="text-gray-500">
                      Area: <span className="text-black">{property.area}</span>
                    </li>
                    <li className="text-gray-500">
                      Floor:{" "}
                      <span className="text-black">{property.floor}</span>
                    </li>
                    <li className="text-gray-500">
                      Parking:{" "}
                      <span className="text-black">{property.parking}</span>
                    </li>
                  </div>
                </ul>
                <div className="icon-button">
                  <a
                    href="#"
                    className="hover:text-[#f35525] flex items-center bg-[#1e1e1e] w-[200px] text-white rounded-full"
                  >
                    <i className="fa fa-calendar bg-[#f35525] text-white p-2 rounded-full h-full mr-2 flex-shrink-0"></i>
                    <p className="py-2 pr-1">Schedule a visit</p>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

PropertiesSection.prototypes = {
  isHome: PropTypes.bool,
};

export default PropertiesSection;
