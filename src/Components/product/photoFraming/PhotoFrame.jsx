import React from "react";
import photoFrameData from "./PhotoFrameData.js";
import PhotoFrameCard from "./PhotoFrameCard";
import { MdArrowBack } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const PhotoFrame = () => {
  const navigate = useNavigate();
  return (
    <div className="my-2 bg-secondary border-accent border p-4">
      <button
        className="px-2 py-1 bg-secondary border border-accent rounded-sm inline-flex items-center gap-2 md:gap-3 mb-3"
        onClick={() => navigate("/")}
      >
        <MdArrowBack className="text-2xl" />
        <span>Back</span>
      </button>
      <div>
        <h1 className="font-medium  text-xl mb-4">Choose Design</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-12  md:h-screen rounded-md">
        {photoFrameData.map((frame, i) => (
          <PhotoFrameCard key={i} frame={frame} />
        ))}
      </div>
    </div>
  );
};

export default PhotoFrame;
