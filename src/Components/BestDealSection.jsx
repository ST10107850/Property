import { useState } from "react";
import deal from "../assets/images/deal-01.jpg";
import deal2 from "../assets/images/deal-02.jpg";
import deal3 from "../assets/images/deal-03.jpg";

export const BestDealSection = () => {
  const [activeTab, setActiveTab] = useState("appartment");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="section best-deal py-16 bg-gray-100">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full flex items-center">
            <div className="section-heading text-center px-3 w-1/3 h-[220px]">
              <h6 className="text-[#f35525] text-base font-bold uppercase">
                | Best Deal
              </h6>
              <h2 className="text-4xl font-bold mt-5">
                Find Your Best Deal Right Now!
              </h2>
            </div>
            <div className="nav-wrapper w-full mb-4">
              <ul className="flex justify-end  mt-[-35px] space-x-2">
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
          </div>
          <div className="w-full">
            {activeTab === "appartment" && (
              <div className="flex flex-wrap">
                <div className="lg:w-1/4 w-full px-3">
                  <div className="info-table bg-white rounded-md shadow-md px-[30px] py-[35px]">
                    <ul>
                      <li className="flex justify-between text-sm pb-6 mb-6 text-[#AAAAAA] font-bold border-b border-gray-300">
                        Total Flat Space{" "}
                        <span className="text-xl text-[#1E1E1E]">185 m2</span>
                      </li>
                      <li className="flex justify-between text-sm pb-6 mb-6 text-[#AAAAAA] font-bold border-b border-gray-300">
                        Floor number{" "}
                        <span className="text-xl text-[#1E1E1E]">26th</span>
                      </li>
                      <li className="flex justify-between text-sm pb-6 mb-6 text-[#AAAAAA] font-bold border-b border-gray-300">
                        Number of rooms{" "}
                        <span className="text-xl text-[#1E1E1E]">4</span>
                      </li>
                      <li className="flex justify-between text-sm pb-6 mb-6 text-[#AAAAAA] font-bold border-b border-gray-300">
                        Parking Available{" "}
                        <span className="text-xl text-[#1E1E1E]">Yes</span>
                      </li>
                      <li className="flex justify-between text-sm text-[#AAAAAA] font-bold">
                        Payment Process{" "}
                        <span className="text-xl text-[#1E1E1E]">Bank</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="lg:w-1/2 w-full px-3">
                  <img
                    src={deal}
                    alt="Appartment"
                    className="w-full h-auto rounded-md px-[45px]"
                  />
                </div>
                <div className="lg:w-1/4 w-full px-3">
                  <h4 className="text-xl font-bold mb-8">
                    Extra Info About Property
                  </h4>
                  <p className="text-gray-600 mb-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua
                    quised ipsum suspendisse.
                    <br />
                    <br />
                    When you need free CSS templates, you can simply type
                    TemplateMo in any search engine website. In addition, you
                    can type TemplateMo Portfolio, TemplateMo One Page Layouts,
                    etc.
                  </p>
                  <div className="icon-button">
                    <a
                      href="#"
                      className="hover:text-[#f35525] flex items-center bg-[#1e1e1e] w-[200px] text-white rounded-full"
                    >
                      <i className="fa fa-calendar bg-[#f35525] text-white p-2  rounded-full h-full mr-2 flex-shrink-0"></i>
                      <p className="py-2 pr-1">Schedule a visit</p>
                    </a>
                  </div>
                </div>
              </div>
            )}
            {activeTab === "villa" && (
              <div className="flex flex-wrap">
                <div className="lg:w-1/4 w-full px-3">
                  <div className="info-table bg-white rounded-md shadow-md px-[30px] py-[35px]">
                    <ul>
                      <li className="flex justify-between text-sm pb-6 mb-6 text-[#AAAAAA] font-bold border-b border-gray-300">
                        Total Flat Space{" "}
                        <span className="text-xl text-[#1E1E1E]">250 m2</span>
                      </li>
                      <li className="flex justify-between text-sm pb-6 mb-6 text-[#AAAAAA] font-bold border-b border-gray-300">
                        Floor number{" "}
                        <span className="text-xl text-[#1E1E1E]">26th</span>
                      </li>
                      <li className="flex justify-between text-sm pb-6 mb-6 text-[#AAAAAA] font-bold border-b border-gray-300">
                        Number of rooms{" "}
                        <span className="text-xl text-[#1E1E1E]">5</span>
                      </li>
                      <li className="flex justify-between text-sm pb-6 mb-6 text-[#AAAAAA] font-bold border-b border-gray-300">
                        Parking Available{" "}
                        <span className="text-xl text-[#1E1E1E]">Yes</span>
                      </li>
                      <li className="flex justify-between text-sm text-[#AAAAAA] font-bold border-b border-gray-300">
                        Payment Process{" "}
                        <span className="text-xl text-[#1E1E1E]">Bank</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="lg:w-1/2 w-full px-3">
                  <img
                    src={deal2}
                    alt="Villa House"
                    className="w-full h-auto rounded-md px-[45px]"
                  />
                </div>
                <div className="lg:w-1/4 w-full p-4">
                  <h4 className="text-xl font-bold mb-8">
                    Detail Info About Villa
                  </h4>
                  <p className="text-gray-600 mb-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua
                    quised ipsum suspendisse.
                    <br />
                    <br />
                    Swag fanny pack lyft blog twee. JOMO ethical copper mug,
                    succulents typewriter shaman DIY kitsch twee taiyaki fixie
                    hella venmo after messenger poutine next level humblebrag
                    swag franzen.
                  </p>
                  <div className="icon-button">
                    <a
                      href="#"
                      className="hover:text-[#f35525] flex items-center bg-[#1e1e1e] w-[200px] text-white rounded-full"
                    >
                      <i className="fa fa-calendar bg-[#f35525] text-white p-2  rounded-full h-full mr-2 flex-shrink-0"></i>
                      <p className="py-2 pr-1">Schedule a visit</p>
                    </a>
                  </div>
                </div>
              </div>
            )}
            {activeTab === "penthouse" && (
              <div className="flex flex-wrap">
                <div className="lg:w-1/4 w-full px-3">
                  <div className="info-table bg-white rounded-md shadow-md px-[30px] py-[35px]">
                    <ul>
                      <li className="flex justify-between text-sm pb-6 mb-6 text-[#AAAAAA] font-bold border-b border-gray-300">
                        Total Flat Space{" "}
                        <span className="text-xl text-[#1E1E1E]">320 m2</span>
                      </li>
                      <li className="flex justify-between text-sm pb-6 mb-6 text-[#AAAAAA] font-bold border-b border-gray-300">
                        Floor number{" "}
                        <span className="text-xl text-[#1E1E1E]">34th</span>
                      </li>
                      <li className="flex justify-between text-sm pb-6 mb-6 text-[#AAAAAA] font-bold border-b border-gray-300">
                        Number of rooms{" "}
                        <span className="text-xl text-[#1E1E1E]">6</span>
                      </li>
                      <li className="flex justify-between text-sm pb-6 mb-6 text-[#AAAAAA] font-bold border-b border-gray-300">
                        Parking Available{" "}
                        <span className="text-xl text-[#1E1E1E]">Yes</span>
                      </li>
                      <li className="flex justify-between text-sm text-[#AAAAAA] font-bold border-b border-gray-300">
                        Payment Process{" "}
                        <span className="text-xl text-[#1E1E1E]">Bank</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="lg:w-1/2 w-full px-3">
                  <img
                    src={deal3}
                    alt="Penthouse"
                    className="w-full h-auto rounded-md px-[45px]"
                  />
                </div>
                <div className="lg:w-1/4 w-full px-3">
                  <h4 className="text-xl font-bold mb-8">
                    Special Info About Penthouse
                  </h4>
                  <p className="text-gray-600 mb-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua
                    quised ipsum suspendisse.
                    <br />
                    <br />
                    Swag fanny pack lyft blog twee. JOMO ethical copper mug,
                    succulents typewriter shaman DIY kitsch twee taiyaki fixie
                    hella venmo after messenger poutine next level humblebrag
                    swag franzen.
                  </p>
                  <div className="icon-button">
                    <a
                      href="#"
                      className="hover:text-[#f35525] flex items-center bg-[#1e1e1e] w-[200px] text-white rounded-full"
                    >
                      <i className="fa fa-calendar bg-[#f35525] text-white p-2  rounded-full h-full mr-2 flex-shrink-0"></i>
                      <p className="py-2 pr-1">Schedule a visit</p>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
