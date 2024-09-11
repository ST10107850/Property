import { useState, useEffect } from "react";
import banner01 from "../assets/images/banner-01.jpg";
import banner02 from "../assets/images/banner-02.jpg";
import banner03 from "../assets/images/banner-03.jpg";

const slides = [
  {
    image: banner01,
    text: "Toronto",
    county: "Canada",
    heading: "Hurry! Get the Best Villa for you",
  },
  {
    image: banner02,
    text: "Melbourne",
    county: "Australia",
    heading: "Be Quick! Get the best villa in town",
  },
  {
    image: banner03,
    text: "Miami",
    county: "South Florida",
    heading: "Act Now! Get the highest level penthouse",
  },
];

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative overflow-hidden">
      <div className="relative w-full h-[100vh]">
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex items-center p-20 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100 z-10" : "opacity-0"
              }`}
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="text-white p-8 w-72">
                <p className="block text-lg mb-2 w-auto bg-white text-black py-1 pl-2">
                  {slide.text}
                  <span className="text-[#f35525]">, {slide.county}</span>
                </p>
                <h2 className="text-6xl font-bold leading-tight w-96">
                  {slide.heading}
                </h2>
              </div>
            </div>
          ))}
        </div>
        {/* Navigation buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 w-[40px] h-[40px] transform -translate-y-1/2 bg-black text-white p-2 rounded-full z-20"
        >
          <i className="fa fa-chevron-left" aria-hidden="true"></i>
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2  w-[40px] h-[40px] transform -translate-y-1/2 bg-black text-white p-2 rounded-full z-20"
        >
          <i className="fa fa-chevron-right" aria-hidden="true"></i>
        </button>
        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? "bg-white" : "bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
