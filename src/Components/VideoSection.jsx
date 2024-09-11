// import React from "react";
import videoBg from "../assets/images/video-bg.jpg";
import videoFrame from "../assets/images/video-frame.jpg";

export const VideoSection = () => {
  return (
    <div>
      <div
        className="video section mt-[120px] h-[500px] flex bg-cover bg-center, bg-no-repeat"
        style={{ backgroundImage: `url(${videoBg})` }}
      >
        <div className="container mx-auto">
          <div className="flex justify-center">
            <div className="text-center lg:w-1/2 mt-[120px]">
              <h6 className="text-[#f35525] uppercase  text-base font-bold">
                | Video View
              </h6>
              <h2 className="text-5xl font-bold text-white mt-4">
                Get Closer View &<br /> Different Feeling
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="video-content mt-[-150px]">
        <div className="container mx-auto">
          <div className="flex justify-center">
            <div className="relative lg:w-10/12">
              <img
                src={videoFrame}
                alt="Video Frame"
                className="w-full h-auto"
              />
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center "
              >
                <div className="bg-[#ee8869] w-[70px] h-[70px] flex items-center justify-center rounded-full">
                <div className="bg-white w-[50px] h-[50px] flex items-center justify-center rounded-full">
                  <i className="fa fa-play text-[#f35525] text-xl"></i>
                </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="fun-facts py-16 bg-gray-100">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center">
            <div className="lg:w-[270px] mr-[200px] w-full text-center p-4 relative">
              <div className="bg-[#f35525] w-[50px] h-[50px] rounded-full absolute top-[-25px] right-[-25px]"></div>
              <div className="counter w-[270px] flex flex-row  justify-center rounded-md py-4 bg-[#FFEEE9] relative z-10">
                <h2
                  className="text-[40px] font-bold text-[#f35525] mr-[25px]"
                  data-to="34"
                  data-speed="1000"
                >
                  34
                </h2>
                <p className="text-gray-600">
                  Buildings
                  <br />
                  Finished Now
                </p>
              </div>
            </div>
            <div className="lg:w-[270px] mr-[200px] w-full text-center p-4 relative">
              <div className="bg-[#f35525] w-[50px] h-[50px] rounded-full absolute top-[-25px] right-[-25px]"></div>
              <div className="counter w-[270px] flex flex-row  justify-center rounded-md py-4 bg-[#FFEEE9] relative z-10">
                <h2
                  className="text-3xl font-bold text-[#f35525] mr-[25px]"
                  data-to="12"
                  data-speed="1000"
                >
                  12
                </h2>
                <p className="text-gray-600">
                  Years
                  <br />
                  Experience
                </p>
              </div>
            </div>
            <div className="lg:w-[270px] w-full text-center p-4 relative">
              <div className="bg-[#f35525] w-[50px] h-[50px] rounded-full absolute top-[-25px] right-[-25px]"></div>
              <div className="counter w-[270px] flex flex-row  justify-center rounded-md py-4 bg-[#FFEEE9] relative z-10">
                <h2
                  className="text-3xl font-bold text-[#f35525] mr-[25px]"
                  data-to="24"
                  data-speed="1000"
                >
                  24
                </h2>
                <p className="text-gray-600">
                  Awards
                  <br />
                  Won 2023
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
