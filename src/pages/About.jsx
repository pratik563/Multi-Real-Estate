import React from "react";
import aboutimage from "../images/portfolio.jpg"; // Background image
import logo from "../images/navlogo.png"; // Logo image
import Contactlogo from "../images/navlogo.png";
import missionImage from "../images/our-mission.jpg"; // Image for mission
import visionImage from "../images/our vision.jpg"; // Image for vision
import founderImage from "../images/founder.jpg"; // Founder photo
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Address from "../components/Address";

const About = () => {
  return (
    <div>
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
            <h1 className="text-4xl md:text-5xl font-semibold text-blue-900 mb-8">
              About Us
            </h1>
            <h1 className="text-3xl md:text-5xl font-medium mb-8">
              Moraya Group: A Legacy of Excellence
            </h1>
            <p className="text-xl md:text-3xl mb-8">
              Founded in 2005, Moraya Group has established itself as a
              prominent player in the real estate industry. With a strong
              commitment to quality, innovation, and customer satisfaction, we
              have consistently delivered exceptional projects that redefine the
              standards of living.
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

      {/* Our Mission Section: Image on Left, Text on Right */}
      <div className="flex flex-col md:flex-row items-center px-6 mt-12 w-full text-center md:text-left">
        <div className="w-full md:w-1/2">
          <img
            src={missionImage}
            alt="Our Mission"
            className="rounded-lg object-cover w-full h-auto md:w-[300px] md:h-[300px] lg:w-auto lg:h-[650px]"
          />
        </div>
        <div className="w-full md:w-1/2 px-6">
          <h2 className="text-3xl md:text-4xl text-blue-900 font-semibold mb-4">
            Our Mission
          </h2>
          <p className="text-lg md:text-2xl mb-8">
            Moraya Group's mission is to provide exceptional customer-centric
            real estate services with sustainable construction solutions. We aim
            to exceed clients' expectations through expertise and technology,
            maintaining high standards of quality and professionalism.
          </p>
        </div>
      </div>

      {/* Our Vision Section: Text on Left, Image on Right */}
      <div className="flex flex-col md:flex-row-reverse items-center px-6 mt-12 w-full text-center md:text-left">
        <div className="w-full md:w-1/2">
          <img
            src={visionImage}
            alt="Our Vision"
            className="rounded-lg object-cover w-full h-auto md:w-[300px] md:h-[300px] lg:w-auto lg:h-[700px]"
          />
        </div>
        <div className="w-full md:w-1/2 px-6">
          <h2 className="text-3xl md:text-4xl text-blue-900 font-semibold mb-4">
            Our Vision
          </h2>
          <p className="text-lg md:text-2xl mb-8">
            Moraya Group aims to set new standards of excellence in real estate
            development and create a lasting impact on clients and the world
            through innovative solutions and ethical practices.
          </p>
        </div>
      </div>

      {/* Founder Section: Image on Left, Text on Right */}
      <div className="flex flex-col md:flex-row items-center px-6 mt-12 w-full bg-black text-center md:text-left">
        <div className="w-full md:w-1/2">
          <img
            src={founderImage}
            alt="Founder"
            className="rounded-lg object-cover w-full h-auto md:w-[300px] mb-6 transition duration-300 hover:scale-105 hover:shadow-2xl md:h-[300px] lg:w-auto lg:h-[920px]"
          />
        </div>
        <div className="w-full md:w-1/2 px-6">
          <h2 className="text-3xl md:text-4xl text-blue-900 font-semibold mb-6">
            From the Founder’s Desk
          </h2>
          <p className="text-2xl font-semibold mb-6 text-[#cc8b12] ">
            Mr. Dnyaneshwar Kadu, <br />
            Founder, Moraya Group of Companies
          </p>
          <p className="text-md text-justify md:text-xl text-white mb-8">
            As the founder of Moraya Group of Companies, Mr. Dyaneshwar Kadu has
            been instrumental in shaping the company's growth and success since
            establishing it in 2002. With a clear vision and unwavering
            determination, he has steered the company towards excellence in the
            real estate sector. Mr. Kadu's extensive knowledge and expertise in
            the field of real estate has been the cornerstone of the company's
            success. His commitment to quality and customer satisfaction has
            earned Moraya Associates a reputation as one of the most reliable
            and trustworthy real estate developers in Pimpri Chinchwad Municipal
            Corporation (PCMC). Under his leadership, the company has
            consistently delivered innovative and high-quality real estate
            solutions that have exceeded customer expectations. Mr. Kadu's
            passion for excellence and his unrelenting pursuit of customer
            satisfaction continue to inspire and guide the Moraya Group of
            Companies to greater heights of success.
          </p>
        </div>
      </div>

      {/* Address */}
      <Address />
    </div>
  );
};

export default About;
