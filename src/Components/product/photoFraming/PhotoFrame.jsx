import React, { useContext } from "react";
import photoFrameData from "./PhotoFrameData.js";
import PhotoFrameCard from "./PhotoFrameCard";
import { MdArrowBack } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { IoCreateOutline } from "react-icons/io5";
import MyContext from "../../../context/MyContext.jsx";

const PhotoFrame = () => {
  const { user, getAllPhotoFrames } = useContext(MyContext);
  const navigate = useNavigate();
  return (
    <div className="my-2 bg-secondary border-accent border p-4 shadow-md ">
      <div className="flex items-center justify-between mb-3">
        {/* Back button */}
        <button
          className="px-2 py-[6px] bg-secondary border border-accent rounded-sm inline-flex items-center gap-2 md:gap-3 shadow-md hover:shadow-accent"
          onClick={() => navigate("/")}
        >
          <MdArrowBack className="text-2xl" />
          <span>Back</span>
        </button>
        {/* Create Frame Icon */}
        {user && (
          <Link
            to={"/admin/create_frame"}
            className="flex items-center justify-center gap-2 md:gap-3 border px-2 py-[6px] shadow-md hover:shadow-accent bg-secondary  border-accent"
          >
            <IoCreateOutline className="text-2xl" />
            <span className="">Create</span>
          </Link>
        )}
      </div>
      <div>
        <h1 className="font-medium  text-xl mb-4">Choose Design</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-10 rounded-md">
        {getAllPhotoFrames.map((frame, i) => (
          <PhotoFrameCard key={i} frame={frame} />
        ))}
      </div>
    </div>
  );
};

export default PhotoFrame;
