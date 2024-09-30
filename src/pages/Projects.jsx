import React from "react";
import Card from "../components/Card.jsx";
import portimage from "../images/white.jpg";
import { Link } from "react-router-dom";

// Import images for cards
import image3 from "../images/Meera.jpg";
import image4 from "../images/Madhuban.jpg";
import image5 from "../images/Nilay-heights.jpg";
import image6 from "../images/Raj-angan.jpg";
import image7 from "../images/Vaishnav-Recidency.png";
import image8 from "../images/Kunal-Heritage.jpg";
import image9 from "../images/Vineet-Heights.jpg";
import image10 from "../images/Samarth-Srushti.jpg";
import projectimage from "../images/projects-home-bg.png";
import Address from "../components/Address.jsx";

const Projects = () => {
  const completedprojects = [
    {
      imageSrc: image3,
      title: "Meera Heights",
      description: "1 BHK Homes & Commercial @ Chikhali",
    },
    {
      imageSrc: image4,
      title: "Madhuban",
      description: "Premium 1 & 2 BHK Homes @ Thergaon",
    },
    {
      imageSrc: image5,
      title: "Nilay Heights",
      description: "1 & 2 BHK Luxurious Homes @ Pradhikaran Annexe",
    },
    {
      imageSrc: image6,
      title: "Raj Angan",
      description: "1 & 2 BHK Luxurious Homes @ Chikhali More Vasti",
    },
    {
      imageSrc: image7,
      title: "Vaishnav Residency",
      description: "1 & 2 BHK Luxurious Homes @ Chikhali",
    },
    {
      imageSrc: image8,
      title: "Kunal Heritage",
      description: "2 BHK Luxurious Homes @ Sector 20 Pradhikaran",
    },
    {
      imageSrc: image9,
      title: "Vineet Heights",
      description: "1 & 2 BHK Luxurious Homes @ Sane Chowk",
    },
    {
      imageSrc: image10,
      title: "Samarth Srushti",
      description: "1 & 2 BHK Luxurious Homes @ Chikhali",
    },
  ];

  return (
    <>
      <div
        className="flex flex-col justify-center items-center bg-repeat object-cover p-8 w-full h-auto py-8"
        style={{ backgroundImage: `url(${projectimage})` }}
      >
        <div className="container mx-auto mb-4 px-4">
          <h1 className="text-3xl text-center font-semibold text-white mb-12">
            Completed Projects
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-12 gap-6">
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
        {/* Address */}
      </div>
      <Address />
    </>
  );
};

export default Projects;
