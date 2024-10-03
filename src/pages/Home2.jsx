import React from "react";
import { Carousel, Typography, Button } from "@material-tailwind/react";
import Address from "../components/Address.jsx";
import aboutimage from "../images/onecom.jpg";
/* import aboutimage1 from "../images/portfolio.jpg"; */
import heroImage from "../images/twotwo.jpg";
/* import Contactlogo from "../images/navlogo.png"; */
import Family from "../images/happy-family1.jpg";
import image1 from "../images/Skyline.jpg";
import image2 from "../images/moryaenclave3.jpg";
import Ongoingcard from "../components/Ongoingcard.jsx";
import projectimage from "../images/projects-home-bg.png";
import legacyimage from "../images/legacy-bg.png";
/* import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa"; 
import { Link } from "react-router-dom";*/

export function Home2() {
  // Move the project arrays here
  const ongoingProjects = [
    {
      imageSrc: image1,
      title: "Skyline Avenue",
      description: "2 BHK Luxurious Homes @ Moshi P.    Chinchwad",
      projectId: "skyline-avenue",
    },
    {
      imageSrc: image2,
      title: "Moraya Enclave",
      description: "3 BHK Luxurious Homes @ Sector 13 Pradhikaran",
      projectId: "morya-enclave",
    },
    {
      imageSrc: image2,
      title: "Moraya Enclave",
      description: "3 BHK Luxurious Homes @ Sector 13 Pradhikaran",
      projectId: "morya-enclave",
    },
  ];

  return (
    <>
      <Carousel className="bg-black">
        {/* First Image Section */}
        <div className="relative h-full w-full">
          <img
            src={aboutimage}
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full items-center bg-black/50">
            <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 hidden sm:block text-3xl md:text-4xl lg:text-5xl"
              >
                Where Quality Meets Excellence
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 hidden sm:block  opacity-80"
              >
                Moraya Group of Companies is a renowned name in the real estate
                development industry in Pimpri Chinchwad Municipal Corporation
                (PCMC). Established in 2005, We have been providing exceptional
                real estate services & building exclusive homes that meet the
                highest standards of quality & craftsmanship.
              </Typography>
              <div className="flex hidden sm:block  gap-2">
                <Button size="lg" color="white">
                  Projects
                </Button>
                <Button size="lg" color="white" variant="text">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Second Image Section */}
        <div className="relative h-full w-full">
          <img
            src={heroImage}
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full items-center bg-black/50">
            <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                Morya Enclave
              </Typography>
              <Typography
                variant="h2"
                color="white"
                className="mb-4 text-xl md:text-2xl font-medium lg:text-3xl"
              >
                Our Flagship Project
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                Moraya Enclave offers premium living in Pune-Nashik highway with
                modern amenities and strategic location. Enjoy close proximity
                to facilities like gardens, playgrounds, and educational
                centers. Experience posh yet understated architecture in this
                urban landscape.
              </Typography>
              <div className="flex gap-2">
                <a
                  href="https://enclave.morayaassociates.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" color="white">
                    Explore
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
      {/* About us */}
      <div className="flex flex-col md:flex-row text-black lg:bg-cover lg:bg-center w-full h-auto md:py-16 py-8 md:h-[calc(100vh)] justify-center items-center">
        <div className="flex flex-col items-center md:flex-row w-full max-w-screen-2xl mx-auto px-6">
          {/* Logo Section - Hidden on mobile view */}
          <div className="hidden md:flex justify-center w-full md:w-1/2 mb-8 md:mb-0 md:mr-4 px-4">
            <img
              src={Family}
              alt="Right side content"
              className="w-[700px] h-[700px] border border-gray-600 border-4 p-2 object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="flex flex-col justify-center items-center md:items-start px-4 md:px-6 w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-semibold text-purple-800 mb-4 md:mb-6">
              Moraya Group
            </h1>
            <h1 className="text-xl md:text-3xl font-medium mb-4 md:mb-6">
              A Legacy of Excellence
            </h1>
            <p className="text-base md:text-lg mb-2 md:mb-4">
              Founded in 2005, Moraya Group has established itself as a
              prominent player in the real estate industry. With a strong
              commitment to quality, innovation, and customer satisfaction, we
              have consistently delivered exceptional projects that redefine the
              standards of living.
            </p>
            <p className="text-base md:text-lg mb-2 md:mb-4">
              Founded in 2005, Moraya Group has established itself as a
              prominent player in the real estate industry. With a strong
              commitment to quality, innovation, and customer satisfaction, we
              have consistently delivered exceptional projects that redefine the
              standards of living.
            </p>
            <button
              className="border border-black mt-4 p-3 text-base md:text-lg font-medium rounded-md text-white bg-purple-800 hover:bg-purple-900 hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-lg"
              type="button"
            >
              Explore More
            </button>
          </div>
        </div>
      </div>
      {/* OngoingProjects */}
      <div
        className="flex flex-col justify-center items-center bg-repeat bg-center p-8 w-full h-auto py-16 bg-white"
        style={{ backgroundImage: `url(${projectimage})` }}
      >
        <h1 className="md:text-3xl font-semibold text-2xl text-white mb-8 md:mb-12">
          Ongoing Projects
        </h1>
        {/* Ongoing Projects Section */}
        <div className="w-full max-w-screen-2xl mx-auto flex justify-center mb-2">
          <div className="flex flex-wrap gap-12 justify-center">
            {ongoingProjects.map((project, index) => (
              <Ongoingcard
                key={index}
                imageSrc={project.imageSrc}
                title={project.title}
                description={project.description}
                projectId={project.projectId}
              />
            ))}
          </div>
        </div>
      </div>
      {/* //Legacy */}
      <div
        className="image-cover p-6"
        style={{ backgroundImage: `url(${legacyimage})` }}
      >
        <h1 className="text-2xl md:text-3xl font-semibold p-3 text-white text-center">
          Our Legacy
        </h1>
        {/* Responsive Card Section */}
        <div className="w-full max-w-screen-lg mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8 my-10">
          <div className="border-2 border-[#cc8b12] text-white p-8 rounded-tl-[15px] rounded-br-[15px] shadow-lg text-center transform transition-transform duration-300 hover:scale-105">
            <h2 className="text-2xl md:text-3xl font-bold">20+</h2>
            <p className="hidden sm:block mt-2 text-lg">Projects Delivered</p>
            <p className="sm:hidden mt-2 text-lg">
              Projects <br /> Delivered
            </p>
          </div>
          <div className="border-2 border-[#cc8b12] text-white p-8 rounded-tl-[15px] rounded-br-[15px] shadow-lg text-center transform transition-transform duration-300 hover:scale-105">
            <h2 className="text-2xl md:text-3xl font-bold">03+</h2>
            <p className="mt-2 text-lg">
              Family <br /> Served
            </p>
          </div>
          <div className="border-2 border-[#cc8b12] text-white p-8 rounded-tl-[15px] rounded-br-[15px] shadow-lg text-center transform transition-transform duration-300 hover:scale-105">
            <h2 className="text-2xl md:text-3xl font-bold">20+</h2>
            <p className="mt-2 text-lg">
              Years <br /> Service
            </p>
          </div>
          <div className="border-2 border-[#cc8b12] text-white p-8 rounded-tl-[15px] rounded-br-[15px] shadow-lg text-center transform transition-transform duration-300 hover:scale-105">
            <h2 className="text-2xl md:text-3xl font-bold">900+</h2>
            <p className="mt-2 text-lg">
              Homes <br /> Sold
            </p>
          </div>
        </div>
      </div>
      {/* Address */}
      <Address />
    </>
  );
}

export default Home2;
