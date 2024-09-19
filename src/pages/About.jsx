import React from "react";
import aboutimage from "../images/portfolio.jpg";
import logo from "../images/navlogo.png";

const About = () => {
  return (
    <div
      className="flex flex-col md:flex-row text-2xl text-black lg:bg-cover lg:bg-center w-full h-auto py-16 bg-black/50 md:h-[calc(100vh)]"
      style={{ backgroundImage: `url(${aboutimage})` }}
    >
      <div className="flex flex-col items-center md:flex-row w-full">
        {/* Logo Section */}
        <div className="flex justify-center w-full md:w-1/2 mb-8 md:mb-0">
          <img
            src={logo}
            alt="Right side content"
            className="h-32 md:h-96 md:w-auto rounded-lg object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-center items-center md:items-start px-6 w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-semibold text-[#6b9330] mb-8">
            About Us
          </h1>
          <h1 className="text-3xl md:text-5xl font-medium mb-8">
            Moraya Group: A Legacy of Excellence
          </h1>
          <p className="text-xl md:text-3xl mb-8">
            Founded in 2005, Moraya Group has established itself as a prominent
            player in the real estate industry. With a strong commitment to
            quality, innovation, and customer satisfaction, we have consistently
            delivered exceptional projects that redefine the standards of
            living.
          </p>
          <button
            className="border border-black p-3 text-lg md:text-2xl font-semibold rounded-md text-white bg-[#6b9330] hover:bg-[#3d5e2f] hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-lg"
            type="button"
          >
            Explore More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
