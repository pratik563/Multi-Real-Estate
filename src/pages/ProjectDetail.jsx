import React from "react";
import { useParams } from "react-router-dom";
//
import image1 from "../images/Skyline.jpg";
import floorPlan1 from "../images/Skyline-floor-plan.jpg";
import galleryImage1 from "../images/Skyline-cut-1.jpg";
import galleryImage2 from "../images/Skyline-cut-2.jpg";
import galleryImage3 from "../images/Skyline-day-view.jpg";
import galleryImage4 from "../images/Skyline-night-view.jpg";

// Example project details data (replace with actual data source)
const projectDetails = {
  "skyline-avenue": {
    title: "Skyline Avenue",
    description:
      "Skyline Avenue has huge homes that you can decorate as per your wish and where your kids can enjoy their childhood freely. These homes are designed in such a way that you can enjoy fresh air and sunlight all along. Strategically located at Moshi Alandi Road, Skyline Avenue is very well connected with industrial areas, malls, top educational institutes, daily needs, Mumbai-Pune Highway, etc.",
    imageSrc: image1,
    galleryImages: [galleryImage1, galleryImage2, galleryImage3, galleryImage4],
    floorPlanSrc: floorPlan1,
    amenities:
      "Gym, Swimming Pool, Clubhouse, Kids Play Area, and 24/7 Security",
    price: "Starting from $50,000",
    location:
      "Plot No.B1,B2, Moshi - Alandi Rd, opp. Hotel Purnabramha, Moshi, Pune, Maharashtra 412105",
    brochureLink: "link-to-brochure.pdf",
  },
  "moraya-enclave": {
    title: "Moraya Enclave",
    description: "This is the detailed information about Moraya Enclave.",
    features: [
      "3 BHK Luxurious Homes",
      "Sector 13 Pradhikaran - A Prime Residential Area",
      "Modern Amenities and Well-Designed Layout",
    ],
    imageSrc: "/images/moraya-enclave.jpg",
  },
  "meera-heights": {
    title: "Meera Heights",
    description: "This is the detailed information about Meera Heights.",
  },
  madhuban: {
    title: "Meera Heights",
    description: "This is the detailed information about Meera Heights.",
  },
  "nilay-heights": {
    title: "Meera Heights",
    description: "This is the detailed information about Meera Heights.",
  },
  "raj-angan": {
    title: "Meera Heights",
    description: "This is the detailed information about Meera Heights.",
  },
  "vaishnav-residency": {
    title: "Meera Heights",
    description: "This is the detailed information about Meera Heights.",
  },
  "kunal-heritage": {
    title: "Meera Heights",
    description: "This is the detailed information about Meera Heights.",
  },
  "vineet-heights": {
    title: "Meera Heights",
    description: "This is the detailed information about Meera Heights.",
  },
  "samarth-srushti": {
    title: "Meera Heights",
    description: "This is the detailed information about Meera Heights.",
  },
  // Add details for other projects...
};

const ProjectDetail = () => {
  const { projectId } = useParams(); // Get the projectId from the URL
  const project = projectDetails[projectId]; // Fetch project details using projectId

  if (!project) {
    return <h2>Project not found!</h2>;
  }

  return (
    <div className="bg-gray-100">
      {/* Main Image */}
      <div className="relative w-full h-[80vh] mb-8">
        <img
          src={project.imageSrc}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 bg-opacity-50 bg-gray-900 text-white p-4">
          <h1 className="text-5xl font-bold">{project.title}</h1>
        </div>
      </div>

      {/* Description & Details Section */}
      <div className="max-w-5xl mx-auto p-8 bg-white shadow-md mb-12 rounded-lg">
        <h3 className="text-3xl font-semibold mb-4 text-blue-900">
          About the Project
        </h3>
        <p className="text-lg text-gray-700 mb-8">{project.description}</p>

        {/* Project Details (Price, Location, Amenities) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Price */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Price</h3>
            <p className="text-lg text-gray-600">{project.price}</p>
          </div>{" "}
          <br />
          {/* Location moved below Price */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Location</h3>
            <p className="text-lg text-gray-600">{project.location}</p>
          </div>
          {/* Amenities */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold mb-2">Amenities</h3>
            <p className="text-lg text-gray-600">{project.amenities}</p>
          </div>
        </div>
      </div>

      {/* Image Gallery Section */}
      <div className="max-w-5xl mx-auto mb-12">
        <h3 className="text-3xl font-semibold text-blue-900 mb-6">
          Image Gallery
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {project.galleryImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-64 object-cover rounded-lg shadow-md hover:opacity-90 transition"
            />
          ))}
        </div>
      </div>

      {/* Floor Plan Section */}
      <div className="max-w-5xl mx-auto mb-12 p-8 bg-white shadow-md rounded-lg">
        <h3 className="text-3xl font-semibold text-blue-900 mb-6">
          Floor Plan
        </h3>
        <img
          src={project.floorPlanSrc}
          alt="Floor Plan"
          className="w-full h-full object-cover rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default ProjectDetail;
