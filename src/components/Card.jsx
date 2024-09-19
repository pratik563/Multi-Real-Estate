import React from "react";
import { Link } from "react-router-dom";

const Card = ({ imageSrc, title, description, projectId }) => {
  return (
    <div className="max-w-sm rounded-md overflow-hidden shadow-lg bg-[#011a42] text-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
      {/* Ensure all images are the same size */}
      <img
        className="w-full h-64 object-cover transition duration-300 hover:brightness-110"
        src={imageSrc}
        alt={title}
      />
      <div className="px-6 text-center py-4">
        <div className="font-bold text-2xl mb-2">{title}</div>
        <p className="text-gray-300 text-base">{description}</p>
        <div className="block items-center mt-4">
          <Link
            to={`/projects/${projectId}`}
            className="inline-block bg-cyan-500 text-white font-bold py-2 px-4 pointer rounded hover:bg-cyan-700"
          >
            Know More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
