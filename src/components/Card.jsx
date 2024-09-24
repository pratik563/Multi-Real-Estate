import React from "react";
import { Link } from "react-router-dom";

const Card = ({ imageSrc, title, description, projectId }) => {
  return (
    <div className="max-w-sm rounded-md overflow-hidden shadow-lg bg-[#2f0547] text-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
      {/* Ensure all images are the same size */}
      <img
        className="w-full h-96 object-cover transition duration-300 hover:brightness-110"
        src={imageSrc}
        alt={title}
      />
      <div className="px-6 text-center py-4">
        <div className="font-medium text-2xl mb-2">{title}</div>
        <p className="text-gray-300 text-base">{description}</p>
        <div className="block items-center mt-4">
          <Link
            to={`/projects/${projectId}`}
            className="inline-block bg-white text-purple-800 font-semibold py-2 px-4 pointer rounded hover:text-purple-900 hover:font-bold"
          >
            Know More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
