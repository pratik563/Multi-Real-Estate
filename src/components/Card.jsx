import React from "react";

const Card = ({ imageSrc, title, description /* projectId */ }) => {
  return (
    <div className="max-w-sm rounded-md mb-3 overflow-hidden shadow-lg text-black transform transition duration-300 hover:cursor-pointer hover:scale-105 hover:shadow-2xl">
      {/* Ensure all images are the same size */}
      <img
        className="max-w-full w-44 h-44 md:h-[286px] md:w-[286px] border-b-2 border-b-purple-900 object-cover transition duration-300 hover:brightness-110"
        src={imageSrc}
        alt={title}
      />
      <div className="md:px-6 px-1 py-1 text-center bg-white md:py-2">
        <div className="font-medium md:font-semibold text-purple-800 text-lg mt-1 mb-2">
          {title}
        </div>
        <p className="text-gray-1000 mb-2 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default Card;
