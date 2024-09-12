import featuredImage from "../assets/images/featured.jpg";
// import featuredIcon from "../assets/images/featured-icon.png";
import infoIcon01 from "../assets/images/info-icon-01.png";
import infoIcon02 from "../assets/images/info-icon-02.png";
import infoIcon03 from "../assets/images/info-icon-03.png";
import infoIcon04 from "../assets/images/info-icon-04.png";

const FeaturedSection = () => {
  return (
    <div className="mt-[120px]">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          {/* Left Column */}
          <div className="lg:w-1/3 w-full mb-8 lg:mb-0 relative md:pl-[55px]">
            <img src={featuredImage} alt="Featured" className="w-full h-[60vh] md:h-auto" />
            {/* <a
              href="property-details.html"
              className="bg-[#f35525] h-[110px] w-[110px] absolute  transform -translate-x-1/2 bottom-[-10%] flex items-center justify-center rounded-full"
            >
              <img
                src={featuredIcon}
                alt="Featured Icon"
                className="w-16 h-16"
              />
            </a> */}
          </div>

          {/* Middle Column */}
          <div className="lg:w-2/5 w-full mb-8 lg:mb-0 px-3">
            <div className="mb-16">
              <h6 className="text-base font-bold text-[#f35525] uppercase">
                | Featured
              </h6>
              <h2 className="text-3xl font-bold text-gray-800 mt-5">
                Best Apartment &amp; Sea view
              </h2>
            </div>

            <div className="accordion bg-[#FAFAFA]" id="accordionExample">
              {/* Accordion Item 1 */}
              <div className="accordion-item mb-4">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button w-full py-4 px-5 bg-[#FAFAFA] text-left text-lg border-none font-medium text-gray-800 "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Best useful links?
                  </button>
                </h2>
                {/* <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div className="accordion-body text-gray-600">
                    Get <strong>the best villa</strong> website template in HTML CSS and Bootstrap for your business. TemplateMo provides you the <a href="https://www.google.com/search?q=best+free+css+templates" target="_blank" rel="noopener noreferrer" className="text-blue-600">best free CSS templates</a> in the world. Please tell your friends about it.
                  </div>
                </div> */}
              </div>

              {/* Accordion Item 2 */}
              <div className="accordion-item mb-4">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button w-full py-4 px-5  text-left text-lg font-medium text-gray-800 collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    How does this work?
                  </button>
                </h2>
                {/* <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                  <div className="accordion-body text-gray-600">
                    Dolor <strong>almesit amet</strong>, consectetur adipiscing elit, sed does not eiusmod tempor incididunt ut labore consectetur <code className="bg-gray-200 text-gray-800 p-1 rounded">adipiscing</code> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </div>
                </div> */}
              </div>

              {/* Accordion Item 3 */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button py-4 px-5  w-full text-left text-lg font-medium text-gray-800 collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Why is Villa Agency the best?
                  </button>
                </h2>
                {/* <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                  <div className="accordion-body text-gray-600">
                    Dolor <strong>almesit amet</strong>, consectetur adipiscing elit, sed does not eiusmod tempor incididunt ut labore consectetur <code className="bg-gray-200 text-gray-800 p-1 rounded">adipiscing</code> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </div>
                </div> */}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:w-1/4 w-full px-3">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <ul className="space-y-4 px-[30px] py-[35px]">
                <li className="flex items-center pb-[35px] mb-[35px] border-b border-gray-300">
                  <img
                    src={infoIcon01}
                    alt="Info Icon"
                    className="w-12 h-12 mr-[25px]"
                  />
                  <div>
                    <h4 className="text-xl font-semibold">
                      250 m<sup>2</sup>
                      <br />
                      <span className="text-gray-600 text-base">
                        Total Flat Space
                      </span>
                    </h4>
                  </div>
                </li>
                <li className="flex items-center pb-[35px] mb-[35px] border-b border-gray-300 ">
                  <img
                    src={infoIcon02}
                    alt="Info Icon"
                    className="w-12 h-12 mr-4"
                  />
                  <div>
                    <h4 className="text-lg font-semibold">
                      Contract
                      <br />
                      <span className="text-gray-600">Contract Ready</span>
                    </h4>
                  </div>
                </li>
                <li className="flex items-center pb-[35px] mb-[35px] border-b border-gray-300">
                  <img
                    src={infoIcon03}
                    alt="Info Icon"
                    className="w-12 h-12 mr-4"
                  />
                  <div>
                    <h4 className="text-lg font-semibold">
                      Payment
                      <br />
                      <span className="text-gray-600">Payment Process</span>
                    </h4>
                  </div>
                </li>
                <li className="flex items-center">
                  <img
                    src={infoIcon04}
                    alt="Info Icon"
                    className="w-12 h-12 mr-4"
                  />
                  <div>
                    <h4 className="text-lg font-semibold">
                      Safety
                      <br />
                      <span className="text-gray-600">24/7 Under Control</span>
                    </h4>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;
