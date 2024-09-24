import React from "react";
import { Carousel, Typography, Button } from "@material-tailwind/react";
import aboutimage from "../images/onecom.jpg";
import aboutimage1 from "../images/portfolio.jpg";
import heroImage from "../images/twotwo.jpg";
import logo from "../images/happy-family1.jpg";
import image1 from "../images/Skyline.jpg";
import image2 from "../images/moryaenclave3.jpg";
import image3 from "../images/Meera.jpg";
import image4 from "../images/Madhuban.jpg";
import image5 from "../images/Nilay-heights.jpg";
import image6 from "../images/Raj-angan.jpg";
import image7 from "../images/Vaishnav-Recidency.png";
import image8 from "../images/Kunal-Heritage.jpg";
import image9 from "../images/Vineet-Heights.jpg";
import image10 from "../images/Samarth-Srushti.jpg";
import Card from "../components/Card.jsx";
import projectimage from "../images/projects-home-bg.png";
import legacyimage from "../images/legacy-bg.png";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

export function Home2() {
  // Move the project arrays here
  const ongoingProjects = [
    {
      imageSrc: image1,
      title: "Skyline Avenue",
      description: "2 BHK Luxurious Homes @ Moshi Pimpri-Chinchwad",
      projectId: "skyline-avenue",
    },
    {
      imageSrc: image2,
      title: "Moraya Enclave",
      description: "3 BHK Luxurious Homes @ Sector 13 Pradhikaran",
      projectId: "moraya-enclave",
    },
    {
      imageSrc: image2,
      title: "Moraya Enclave",
      description: "3 BHK Luxurious Homes @ Sector 13 Pradhikaran",
      projectId: "moraya-enclave",
    },
  ];

  const completedprojects = [
    {
      imageSrc: image3,
      title: "Meera Heights",
      description: "1 BHK Homes & Commercial spaces @ Chikhali",
      projectId: "meera-heights",
    },
    {
      imageSrc: image4,
      title: "Madhuban",
      description: "Premium 1 & 2 BHK Homes @ Thergaon",
      projectId: "madhuban",
    },
    {
      imageSrc: image5,
      title: "Nilay Heights",
      description: "1 & 2 BHK Luxurious Homes @ Pradhikaran Annexe",
      projectId: "nilay-heights",
    },
    {
      imageSrc: image6,
      title: "Raj Angan",
      description: "1 & 2 BHK Luxurious Homes @ Chikhali More Vasti",
      projectId: "raj-angan",
    },
    {
      imageSrc: image7,
      title: "Vaishnav Residency",
      description: "1 & 2 BHK Luxurious Homes @ Chikhali",
      projectId: "vaishnav-residency",
    },
    {
      imageSrc: image8,
      title: "Kunal Heritage",
      description: "2 BHK Luxurious Homes @ Sector 20 Pradhikaran",
      projectId: "kunal-heritage",
    },
    {
      imageSrc: image9,
      title: "Vineet Heights",
      description: "1 & 2 BHK Luxurious Homes @ Sane Chowk",
      projectId: "vineet-heights",
    },
    {
      imageSrc: image10,
      title: "Samarth Srushti",
      description: "1 & 2 BHK Luxurious Homes @ Chikhali",
      projectId: "samarth-srushti",
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
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                Where Quality Meets Excellence
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                Moraya Group of Companies is a renowned name in the real estate
                development industry in Pimpri Chinchwad Municipal Corporation
                (PCMC). Established in 2005, We have been providing exceptional
                real estate services & building exclusive homes that meet the
                highest standards of quality & craftsmanship.
              </Typography>
              <div className="flex gap-2">
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
      <div
        className="flex flex-col md:flex-row text-black lg:bg-cover lg:bg-center w-full h-auto py-16 md:h-[calc(100vh)] justify-center items-center"
        /* style={{ backgroundImage: `url(${})` }} */
      >
        <div className="flex flex-col items-center md:flex-row w-full max-w-screen-2xl mx-auto px-6">
          {/* Logo Section */}
          <div className="flex justify-center w-full md:w-1/2 mb-8 md:mb-0 mr-4 px-4">
            <img
              src={logo}
              alt="Right side content"
              className="w-[700px] h-[700px] border border-gray-600 border-4 p-2 object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="flex flex-col justify-center items-center md:items-start px-6 w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl md:text-3xl font-semibold text-purple-800 mb-8">
              Moraya Group
            </h1>
            <h1 className="text-3xl md:text-3xl font-medium mb-8">
              A Legacy of Excellence
            </h1>
            <p className="text-lg md:text-lg mb-1">
              Founded in 2005, Moraya Group has established itself as a
              prominent player in the real estate industry. With a strong
              commitment to quality, innovation, and customer satisfaction, we
              have consistently delivered exceptional projects that redefine the
              standards of living.
            </p>
            <p className="text-lg md:text-lg mb-1">
              Founded in 2005, Moraya Group has established itself as a
              prominent player in the real estate industry. With a strong
              commitment to quality, innovation, and customer satisfaction, we
              have consistently delivered exceptional projects that redefine the
              standards of living.
            </p>
            <button
              className="border border-black mt-4 p-3 text-lg md:text-lg font-medium rounded-md text-white bg-purple-800 hover:bg-purple-900 hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-lg"
              type="button"
            >
              Explore More
            </button>
          </div>
        </div>
      </div>
      {/* //Projects */}
      <div
        className="flex flex-col justify-center items-center bg-repeat bg-center p-8 w-full h-auto py-16 bg-white"
        style={{ backgroundImage: `url(${projectimage})` }}
      >
        <h1 className="md:text-3xl font-semibold text-3xl p-3 text-white mb-12">
          Ongoing Projects
        </h1>

        {/* Ongoing Projects Section */}
        <div className="w-full max-w-screen-2xl mx-auto flex justify-center mb-8">
          <div className="flex flex-wrap gap-12 justify-center">
            {ongoingProjects.map((project, index) => (
              <Card
                key={index}
                imageSrc={project.imageSrc}
                title={project.title}
                description={project.description}
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
        <h1 className="text-3xl md:text-3xl font-semibold p-3 text-white text-center">
          Our Legacy
        </h1>
        <div class="flex justify-center gap-16 mt-8 my-10">
          <div class="border border-white text-white p-8 rounded-tl-[15px] rounded-br-[15px] shadow-lg text-center transform transition-transform duration-300 hover:scale-105 w-40">
            <h2 class="text-3xl font-bold">20+</h2>
            <p class="mt-2 text-lg">Projects Delivered</p>
          </div>
          <div class="border border-white text-white p-8 rounded-tl-[15px] rounded-br-[15px] shadow-lg text-center transform transition-transform duration-300 hover:scale-105 w-40">
            <h2 class="text-3xl font-bold">03+</h2>
            <p class="mt-2 text-lg">Family Served</p>
          </div>
          <div class="border border-white text-white p-8 rounded-tl-[15px] rounded-br-[15px] shadow-lg text-center transform transition-transform duration-300 hover:scale-105 w-40">
            <h2 class="text-3xl font-bold">20+</h2>
            <p class="mt-2 text-lg">Years Service</p>
          </div>
          <div class="border border-white text-white p-8 rounded-tl-[15px] rounded-br-[15px] shadow-lg text-center transform transition-transform duration-300 hover:scale-105 w-40">
            <h2 class="text-3xl font-bold">900+</h2>
            <p class="mt-2 text-lg">Homes Sold</p>
          </div>
        </div>
      </div>
      {/* Address */}
      <div className="flex flex-col md:flex-row text-black w-full h-auto border border-gray-800 py-10 justify-center items-center">
        <div className="flex flex-col items-center md:flex-row w-full max-w-screen-2xl mx-auto">
          {/* Map Section */}
          <div className="w-full md:w-1/2 rounded-lg overflow-hidden shadow-lg mb-4 md:mr-10">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.8055185169054!2d73.85534781481648!3d18.520430187409707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0738a80db45%3A0x3a0a4c6d1c4f781f!2sXYZ%20Building%2C%20Pune!5e0!3m2!1sen!2sin!4v1693766800000!5m2!1sen!2sin"
              width="550"
              height="550"
              className="border-0 rounded-full"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Text Section */}
          <div className="flex flex-col justify-center items-center md:items-start w-full md:w-1/2 px-4 text-center md:text-left">
            <h2 className="text-3xl font-semibold text-purple-900 mb-4">
              Our Office:
            </h2>
            <p className="text-lg mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores
              officia numquam
            </p>
            <p className="text-lg mb-4">
              <a
                href="tel:+919595959595"
                className="hover:text-purple-900 hover:font-medium"
              >
                Phone: +91 9595959595
              </a>
              <br />
              <a
                href="mailto:info@example.com"
                className="hover:text-purple-900 hover:font-medium"
              >
                Email: info@example.com
              </a>
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-blue-500 text-2xl p-2 rounded-full hover:bg-purple-900 hover:text-white transition duration-200"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-blue-600 text-2xl p-2 rounded-full hover:bg-purple-900 hover:text-white transition duration-200"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="text-pink-500 text-2xl p-2 rounded-full hover:bg-purple-900 hover:text-white transition duration-200"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home2;
