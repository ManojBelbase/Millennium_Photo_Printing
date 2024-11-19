import React, { useContext, useState } from "react";
// import photoFrameData from "./PhotoFrameData";
import { useNavigate, useParams } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import MyContext from "../../../context/MyContext";
import { MdOutlineMoreHoriz } from "react-icons/md";
import useDeletePhotoFrame from "./useDeletePhotoFrame";
const SingleFrame = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { getAllPhotoFrames } = useContext(MyContext);
  const { deletePhotoFrame, loading } = useDeletePhotoFrame();

  const [isActionOpen, setIsActionOpen] = useState(false);

  const frameData = getAllPhotoFrames.find((frame) => frame.id === id);

  const [selectedColor, setSelectedColor] = useState("Black"); // Default to "Black"

  // Dynamically determine the border class based on selected color
  const borderColorClass = (() => {
    switch (selectedColor) {
      case "Black":
        return "border-black";
      case "Wood":
        return "border-amber-700"; // Wood-like dark yellow
      case "Golden":
        return "border-yellow-500"; // Gold color
      case "White":
        return "border-white";
      default:
        return "border-gray-300"; // Default color if none matches
    }
  })();

  const handleWhatsAppClick = () => {
    const message = `
      *Frame Details:*
      Name: ${frameData?.name}
      Size: ${frameData?.size}
      Color: ${selectedColor}
      Price: Rs.${(frameData?.price - (frameData?.discount || 0)).toFixed(2)}
      Description: ${frameData.description}
      
      I'm interested in this frame. Please provide more details.`;

    const phoneNumber = "9745415956";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.location.href = whatsappURL;
  };

  if (!frameData) {
    return (
      <p className="text-center text-gray-500 dark:text-gray-300">
        Frame not found
      </p>
    );
  }

  return (
    <div className="bg-secondary  border-accent border p-4">
      <div className="flex items-center justify-between">
        {/* Back button */}
        <button
          className="px-2 py-1 bg-secondary border border-accent rounded-sm inline-flex items-center gap-2 md:gap-3 mb-3 shadow-md hover:shadow-accent"
          onClick={() => navigate("/shop/photo_frames")}
        >
          <MdArrowBack className="text-2xl" />
          <span>Back</span>
        </button>
        {/* Action (Update and delete)*/}
        <div>
          <div className="relative">
            <MdOutlineMoreHoriz
              className="text-2xl cursor-pointer"
              onClick={() => setIsActionOpen((prev) => !prev)}
            />
            {isActionOpen && (
              <div className="absolute right-0 text-white bg-secondary border border-accent rounded-sm flex flex-col gap-1 px-3 py-2">
                <button
                  className="cursor-pointer  py-1 hover:shadow-primary border-accent shadow-sm px-2"
                  onClick={() =>
                    navigate(`/admin/update_frame/${frameData.id}`)
                  }
                >
                  Update
                </button>
                <button
                  onClick={() => deletePhotoFrame(frameData?.id)}
                  className="cursor-pointer px-2 py-1 shadow-sm hover:shadow-red-500"
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row rounded-sm shadow-lg mx-auto">
        {/* Frame Image */}
        <div className="w-full md:w-[35%] p-2">
          <img
            src={frameData.image}
            alt={frameData.name}
            className={`w-full h-auto object-cover rounded-sm border-8 ${borderColorClass} shadow-lg inner-shadow outline outline-2 outline-gray-300`}
          />
        </div>

        {/* Frame Details */}
        <div className="w-full  md:w-1/2 flex flex-col md:gap-3 gap-2 md:p-4">
          <div>
            <h1 className="text-2xl md:text-3xl text-white font-bold dark:text-gray-100">
              {frameData.name}
            </h1>
            <p className="text-gray-600 text-smtext-white">
              {frameData.description}
            </p>
          </div>

          {/* Frame Color Selection */}
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-3">
            <h3 className="text-lg font-semibold text-white">
              Select Frame Color:
            </h3>
            <div className="flex gap-2 text-white">
              {["Black", "White", "Golden"].map((color, index) => (
                <div key={index} className="flex items-center gap-2">
                  <input
                    type="radio"
                    id={color}
                    name="frameColor"
                    value={color}
                    checked={selectedColor === color}
                    onChange={() => setSelectedColor(color)}
                    className="hidden"
                  />
                  <div
                    className={`md:w-6 md:h-6 w-4 h-4  rounded-full border-2 cursor-pointer ${
                      selectedColor === color
                        ? color === "Black"
                          ? "bg-black"
                          : color === "Golden"
                          ? "bg-yellow-500"
                          : "bg-white"
                        : "bg-gray-300"
                    }`}
                    onClick={() => setSelectedColor(color)}
                  ></div>
                  <label
                    htmlFor={color}
                    className="font-semibold text-sm text-white"
                  >
                    {color}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="text-lg">
            <span className="font-semibold text-white">Size:</span>{" "}
            {frameData.size}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-lg text-white font-semibold">Price:</span>
            <span className="text-lg text-red-500 font-semibold">
              Rs.{(frameData.price - (frameData?.discount || 0)).toFixed(2)}
            </span>
            <span className="text-lg font-medium text-gray-500 line-through">
              Rs.{frameData?.price}
            </span>
          </div>

          {/* Contact Button */}
          <button
            className="mt-4 bg-primary text-black font-bold py-2 px-4 rounded"
            onClick={handleWhatsAppClick}
          >
            Confirm Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleFrame;
