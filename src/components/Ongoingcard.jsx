import React from "react";
import { Link } from "react-router-dom";

const Ongoingcard = ({ imageSrc, title, description, projectId }) => {
  return (
    <div className="max-w-sm rounded-md mb-3 overflow-hidden shadow-lg bg-white text-black transform transition duration-300 hover:scale-105 hover:shadow-2xl">
      {/* Ensure all images are the same size */}
      <img
        className="w-full h-64 object-cover border-b-4 border-b-purple-900 md:h-[450px] md:w-[380px] object-cover transition duration-300 hover:brightness-110"
        src={imageSrc}
        alt={title}
      />
      <div className="px-6 text-center bg-white py-2">
        <div className="font-semibold text-purple-900 text-xl mt-1 mb-2">
          {title}
        </div>
        <p className="text-gray-1000 mb-2 text-sm">{description}</p>
        <div className="block items-center mt-4">
          <Link
            to={`/${projectId}`}
            className="inline-block bg-purple-900 text-white text-sm py-2 px-3 pointer rounded hover:font-medium"
          >
            Know More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Ongoingcard;
