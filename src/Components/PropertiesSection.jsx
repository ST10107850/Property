import property from "../assets/images/property-01.jpg";
import property2 from "../assets/images/property-02.jpg";
import property3 from "../assets/images/property-03.jpg";
import property4 from "../assets/images/property-04.jpg";
import property5 from "../assets/images/property-05.jpg";
import property6 from "../assets/images/property-06.jpg";

const PropertiesSection = () => {
  return (
    <div className="properties section py-16">
      <div className="container mx-auto">
        <div className="flex justify-center mb-12">
          <div className="w-full lg:w-2/3 text-center">
            <div className="section-heading flex flex-col items-center">
              <h6 className="text-[#f35525] text-base font-bold uppercase">| Properties</h6>
              <h2 className="text-3xl font-bold w-1/2 mt-5">
                We Provide The Best Property You Like
              </h2>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          {/* Property 1 */}
          <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-8">
            <div className="item bg-[#FAFAFA] shadow-lg rounded-lg overflow-hidden p-8 mb-8">
              <a href="property-details.html">
                <img
                  src={property}
                  alt=""
                  className="w-[356px] h-[265px] rounded-md"
                />
              </a>
              <div className="flex items-center mt-6 justify-between">
                <span className="category text-sm text-gray-500 px-4 py-2 block  rounded-md bg-[#FBD9CF]">
                  Luxury Villa
                </span>

                <h6 className="px-4 text-xl font-bold text-[#F35525]">
                  R2,264,000
                </h6>
              </div>
              <h4 className="text-lg font-semibold my-6">
                <a href="property-details.html">
                  18 New Street Miami, OR 97219
                </a>
              </h4>

              <ul className="pb-8 border-b mb-8 flex justify-between">
                <div className="mr">
                  <li className="text-gray-500">
                    Bedrooms: <span className="text-black">8</span>
                  </li>
                  <li className="text-gray-500">
                    Bathrooms: <span className="text-black">8</span>
                  </li>
                </div>
                <div>
                  <li className="text-gray-500">
                    Area: <span className="text-black">545m2</span>
                  </li>
                  <li className="text-gray-500">
                    Floor: <span className="text-black">3</span>
                  </li>
                  <li className="text-gray-500">
                    Parking: <span className="text-black">6 spots</span>
                  </li>
                </div>
              </ul>
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
          {/* Properties 2*/}
          <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-8">
            <div className="item bg-[#FAFAFA] shadow-lg rounded-lg overflow-hidden p-8 mb-8">
              <a href="property-details.html">
                <img
                  src={property2}
                  alt=""
                  className="w-[356px] h-[265px] rounded-md"
                />
              </a>
              <div className="flex items-center mt-6 justify-between">
                <span className="category text-sm text-gray-500 px-4 py-2 block  rounded-md bg-[#FBD9CF]">
                  Luxury Villa
                </span>

                <h6 className="px-4 text-xl font-bold text-[#F35525]">
                  R1,180,000
                </h6>
              </div>
              <h4 className="text-lg font-semibold my-6">
                <a href="property-details.html">
                54 Mid Street Florida, OR 27001
                </a>
              </h4>

              <ul className="pb-8 border-b mb-8 flex justify-between">
                <div className="mr">
                  <li className="text-gray-500">
                    Bedrooms: <span className="text-black">6</span>
                  </li>
                  <li className="text-gray-500">
                    Bathrooms: <span className="text-black">5</span>
                  </li>
                </div>
                <div>
                  <li className="text-gray-500">
                    Area: <span className="text-black">450m2</span>
                  </li>
                  <li className="text-gray-500">
                    Floor: <span className="text-black">3</span>
                  </li>
                  <li className="text-gray-500">
                    Parking: <span className="text-black">8 spots</span>
                  </li>
                </div>
              </ul>
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
          {/* Properties 3*/}
          <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-8">
            <div className="item bg-[#FAFAFA] shadow-lg rounded-lg overflow-hidden p-8 mb-8">
              <a href="property-details.html">
                <img
                  src={property3}
                  alt=""
                  className="w-[356px] h-[265px] rounded-md"
                />
              </a>
              <div className="flex items-center mt-6 justify-between">
                <span className="category text-sm text-gray-500 px-4 py-2 block  rounded-md bg-[#FBD9CF]">
                  Luxury Villa
                </span>

                <h6 className="px-4 text-xl font-bold text-[#F35525]">
                  R1.460.000
                </h6>
              </div>
              <h4 className="text-lg font-semibold my-6">
                <a href="property-details.html">
                26 Old Street Miami, OR 38540
                </a>
              </h4>

              <ul className="pb-8 border-b mb-8 flex justify-between">
                <div className="mr">
                  <li className="text-gray-500">
                    Bedrooms: <span className="text-black">5</span>
                  </li>
                  <li className="text-gray-500">
                    Bathrooms: <span className="text-black">4</span>
                  </li>
                </div>
                <div>
                  <li className="text-gray-500">
                    Area: <span className="text-black">225m2</span>
                  </li>
                  <li className="text-gray-500">
                    Floor: <span className="text-black">3</span>
                  </li>
                  <li className="text-gray-500">
                    Parking: <span className="text-black">10 spots</span>
                  </li>
                </div>
              </ul>
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

          {/* Properties 4*/}
          <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-8">
            <div className="item bg-[#FAFAFA] shadow-lg rounded-lg overflow-hidden p-8 mb-8">
              <a href="property-details.html">
                <img
                  src={property4}
                  alt=""
                  className="w-[356px] h-[265px] rounded-md"
                />
              </a>
              <div className="flex items-center mt-6 justify-between">
                <span className="category text-sm text-gray-500 px-4 py-2 block  rounded-md bg-[#FBD9CF]">
                Apartment
                </span>

                <h6 className="px-4 text-xl font-bold text-[#F35525]">
                  R584.500
                </h6>
              </div>
              <h4 className="text-lg font-semibold my-6">
                <a href="property-details.html">
                12 New Street Miami, OR 12650
                </a>
              </h4>

              <ul className="pb-8 border-b mb-8 flex justify-between">
                <div className="mr">
                  <li className="text-gray-500">
                    Bedrooms: <span className="text-black">4</span>
                  </li>
                  <li className="text-gray-500">
                    Bathrooms: <span className="text-black">3</span>
                  </li>
                </div>
                <div>
                  <li className="text-gray-500">
                    Area: <span className="text-black">125m2</span>
                  </li>
                  <li className="text-gray-500">
                    Floor: <span className="text-black">25th</span>
                  </li>
                  <li className="text-gray-500">
                    Parking: <span className="text-black">2 cars</span>
                  </li>
                </div>
              </ul>
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

            {/* Properties 5 */}
          <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-8">
            <div className="item bg-[#FAFAFA] shadow-lg rounded-lg overflow-hidden p-8 mb-8">
              <a href="property-details.html">
                <img
                  src={property5}
                  alt=""
                  className="w-[356px] h-[265px] rounded-md"
                />
              </a>
              <div className="flex items-center mt-6 justify-between">
                <span className="category text-sm text-gray-500 px-4 py-2 block  rounded-md bg-[#FBD9CF]">
                Penthouse
                </span>

                <h6 className="px-4 text-xl font-bold text-[#F35525]">
                  R925.600
                </h6>
              </div>
              <h4 className="text-lg font-semibold my-6">
                <a href="property-details.html">
                34 Beach Street Miami, OR 42680
                </a>
              </h4>

              <ul className="pb-8 border-b mb-8 flex justify-between">
                <div className="mr">
                  <li className="text-gray-500">
                    Bedrooms: <span className="text-black">4</span>
                  </li>
                  <li className="text-gray-500">
                    Bathrooms: <span className="text-black">4</span>
                  </li>
                </div>
                <div>
                  <li className="text-gray-500">
                    Area: <span className="text-black">180m2</span>
                  </li>
                  <li className="text-gray-500">
                    Floor: <span className="text-black">38th</span>
                  </li>
                  <li className="text-gray-500">
                    Parking: <span className="text-black">2 cars</span>
                  </li>
                </div>
              </ul>
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

           {/* Properties 5 */}
          <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-8">
            <div className="item bg-[#FAFAFA] shadow-lg rounded-lg overflow-hidden p-8 mb-8">
              <a href="property-details.html">
                <img
                  src={property6}
                  alt=""
                  className="w-[356px] h-[265px] rounded-md"
                />
              </a>
              <div className="flex items-center mt-6 justify-between">
                <span className="category text-sm text-gray-500 px-4 py-2 block  rounded-md bg-[#FBD9CF]">
                Modern Condo
                </span>

                <h6 className="px-4 text-xl font-bold text-[#F35525]">
                  R450.000
                </h6>
              </div>
              <h4 className="text-lg font-semibold my-6">
                <a href="property-details.html">
                22 New Street Portland, OR 16540
                </a>
              </h4>

              <ul className="pb-8 border-b mb-8 flex justify-between">
                <div className="mr">
                  <li className="text-gray-500">
                    Bedrooms: <span className="text-black">3</span>
                  </li>
                  <li className="text-gray-500">
                    Bathrooms: <span className="text-black">2</span>
                  </li>
                </div>
                <div>
                  <li className="text-gray-500">
                    Area: <span className="text-black">165m2</span>
                  </li>
                  <li className="text-gray-500">
                    Floor: <span className="text-black">26th</span>
                  </li>
                  <li className="text-gray-500">
                    Parking: <span className="text-black">3 cars</span>
                  </li>
                </div>
              </ul>
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
        </div>
      </div>
    </div>
  );
};

export default PropertiesSection;
