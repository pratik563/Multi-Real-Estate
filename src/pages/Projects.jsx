import React from "react";
import Card from "../components/Card.jsx";
import portimage from "../images/white.jpg";
import { Link } from "react-router-dom";

// Import images for cards
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

const Projects = () => {
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
    <div
      className="flex flex-col justify-center items-center bg-cover bg-center p-8 w-full h-auto py-16 bg-white"
      style={{ backgroundImage: `url(${portimage})` }}
    >
      <h1 className="text-5xl font-bold text-blue-900 mb-8">Our Projects</h1>

      {/* Ongoing Projects Section */}
      <h2 className="text-4xl font-semibold text-green-800 mb-12">
        Ongoing Projects
      </h2>
      <div className="container mx-auto px-4">
        {/* Ongoing Projects - Larger Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-0 gap-8 mb-12">
          {ongoingProjects.map((project, index) => (
            <div key={index} className="flex justify-center">
              <div className="w-full max-w-md min-h-[400px]">
                <Card
                  imageSrc={project.imageSrc}
                  title={project.title}
                  description={project.description}
                  projectId={project.projectId}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Completed Projects Section */}
        <h2 className="text-4xl text-center font-semibold text-green-800 mb-12">
          Completed Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-12 gap-6">
          {completedprojects.map((card, index) => (
            <Card
              key={index}
              imageSrc={card.imageSrc}
              title={card.title}
              description={card.description}
              projectId={card.projectId}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
