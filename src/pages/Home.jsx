import React from "react";
import heroImage from "../images/buildings.jpg";
import rightImage from "../images/right3-image.jpg";

const Home = () => {
  return (
    <div
      className="flex text-center relative w-full h-screen bg-cover bg-center bg-hero-pattern items-center justify-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 flex flex-col lg:flex-row items-center justify-center">
        <div className="bg-black/50 backdrop-blur-md p-6 w-full lg:w-[1800px] h-auto lg:h-[800px] rounded-lg flex flex-col lg:flex-row">
          {/* Left Side (Text) */}
          <div className="flex flex-col justify-center items-center lg:items-start px-4 lg:pl-6 w-full lg:w-1/2 mb-8 lg:mb-0">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4 text-center lg:text-left">
              Where Quality Meets Excellence
            </h1>
            <p className="text-lg lg:text-xl font-medium text-white mt-4 mb-4 text-center lg:text-left">
              Moraya Group of Companies is a renowned name in the real estate
              development industry in Pimpri Chinchwad Municipal Corporation
              (PCMC). Established in 2005, We have been providing exceptional
              real estate services & building exclusive homes that meet the
              highest standards of quality & craftsmanship.
            </p>
            <a
              href="#"
              className="border border-black p-2 pl-4 pr-4 text-lg lg:text-xl font-semibold rounded-md text-white bg-[#6b9330] hover:bg-[#3d5e2f]"
            >
              Contact Us
            </a>
          </div>
          {/* Right Side (Image) */}
          <div className="hidden lg:flex ml-0 lg:ml-5 justify-center items-center w-full lg:w-1/2">
            <img
              src={rightImage}
              alt="Right side content"
              className="h-full rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
