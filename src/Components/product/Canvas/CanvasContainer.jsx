import React from "react";
import { MdArrowBack } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import CanvasData from "./CanvasData";
import CanvasCard from "./CanvasCard";
const CanvasContainer = () => {
  const navigate = useNavigate();
  return (
    <div className="my-2 bg-secondary border-accent border p-4 shadow-md">
      <div className="flex items-center justify-between mb-3">
        {/* Back button */}
        <button
          className="px-2 py-[6px] bg-secondary border border-accent rounded-sm inline-flex items-center gap-2 md:gap-3 shadow-md hover:shadow-accent"
          onClick={() => navigate("/")}
        >
          <MdArrowBack className="text-2xl" />
          <span>Back</span>
        </button>
      </div>
      <div>
        <h1 className="font-medium  text-xl mb-4">Choose Design</h1>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {CanvasData.map((canvas, i) => (
          <CanvasCard key={i} canvas={canvas} />
        ))}
      </div>
    </div>
  );
};

export default CanvasContainer;
