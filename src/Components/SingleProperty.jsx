
import single from "../assets/images/single-property.jpg";
import infoIcon01 from "../assets/images/info-icon-01.png";
import infoIcon02 from "../assets/images/info-icon-02.png";
import infoIcon03 from "../assets/images/info-icon-03.png";
import infoIcon04 from "../assets/images/info-icon-04.png";

const SingleProperty = () => {
  return (
    <>
     
      {/* Main Content Section */}
      <div className="single-property section py-12 md:mx-0 mx-20">
        <div className="container mx-auto">
          <div className="row flex flex-row flex-wrap">
            {/* Main Image and Content */}
            <div className="col-lg-8 max-w-[900px] h-auto px-3">
              <div className="main-image mb-6">
                <img
                  src={single}
                  alt="Single Property"
                  className="w-full h-auto"
                />
              </div>
              <div className="main-content">
                <div className="mt-10">
                <span className="category text-gray-500 bg-[#F8D9CF] py-1 px-3 text-sm">
                  Apartment
                </span>
                </div>
                <h4 className="text-2xl font-bold mt-6 mb-10 pb-10">
                  24 New Street Miami, OR 24560
                </h4>
                <p className="text-gray-600 text-sm">
                  Get <strong>the best villa agency</strong> HTML CSS Bootstrap
                  Template for your company website. TemplateMo provides you the
                  <a
                    href="https://www.google.com/search?q=best+free+css+templates"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500"
                  >
                    {" "}
                    best free CSS templates
                  </a>{" "}
                  in the world. Please tell your friends about it. Thank you. Cloud bread kogi bitters pitchfork 
                  shoreditch tumblr yr succulents single-origin coffee schlitz enamel
                   pin you probably haven't heard of them ugh hella.

                   <br/><br/>When you look for free CSS templates, you can simply type TemplateMo 
                   in any search engine website. In addition, you can type TemplateMo Digital Marketing,
                    TemplateMo Corporate Layouts, etc. Master cleanse +1 intelligentsia swag post-ironic,
                     slow-carb chambray knausgaard PBR&B DSA poutine neutra cardigan hoodie pop-up.
         
                </p>
              </div>

              {/* Accordion */}
              <div className="accordion mt-6 bg-gray-50 rounded-xl" id="accordionExample">
                <div className="accordion-item border-b py-4 px-5">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="text-left py-4 text-lg font-medium"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Best useful links ?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body text-gray-600">
                      Dolor <strong>almesit amet</strong>, consectetur
                      adipiscing elit. Snackwave wolf, same vice, chillwave
                      vexillologist.
                    </div>
                  </div>
                </div>

                <div className="accordion-item  border-b py-4 px-5">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="collapsed py-4 text-lg font-medium "
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      How does this work ?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body text-gray-600">
                      Dolor <strong>almesit amet</strong>, consectetur
                      adipiscing elit. Snackwave wolf, same vice, chillwave
                      vexillologist.
                    </div>
                  </div>
                </div>

                <div className="accordion-item py-4 px-5">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="collapsed py-4 text-lg font-medium "
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Why is Villa the best ?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body text-gray-600">
                      Dolor <strong>almesit amet</strong>, consectetur
                      adipiscing elit. Snackwave wolf, same vice, chillwave
                      vexillologist.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Info Table */}
            <div className="md:w-1/4 w-full md:px-3  ">
              <div className="bg-white p-4 rounded-lg shadow-lg md:ml-16">
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
                        <span className="text-gray-600">
                          24/7 Under Control
                        </span>
                      </h4>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProperty;
