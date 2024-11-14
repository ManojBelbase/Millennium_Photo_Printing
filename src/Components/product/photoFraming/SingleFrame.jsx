import React, { useState } from "react";
import photoFrameData from "./PhotoFrameData";
import { useNavigate, useParams } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
const SingleFrame = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const frameData = photoFrameData.find((frame) => frame.id === id);

  const [selectedColor, setSelectedColor] = useState("Black"); // Default to "Black"

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
      Name: ${frameData.name}
      Size: ${frameData.size}
      Color: ${selectedColor}
      Price: $${frameData.price.toFixed(2)}
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
    <div className="bg-secondary border-accent border p-4">
      <button
        className="px-2 py-1 bg-secondary border border-accent rounded-sm inline-flex items-center gap-2 md:gap-3 mb-3"
        onClick={() => navigate("/shop/photo_frames")}
      >
        <MdArrowBack className="text-2xl" />
        <span>Back</span>
      </button>
      <div className="flex flex-col md:flex-row rounded-sm shadow-lg mx-auto">
        {/* Frame Image */}

        <div className="w-full md:w-[35%] p-2">
          <img
            src={frameData.image}
            alt={frameData.name}
            className={`w-full h-auto object-cover rounded-sm border-8 ${borderColorClass} shadow-lg`}
          />
        </div>

        {/* Frame Details */}
        <div className="w-full md:w-1/2 flex flex-col gap-3 p-4">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100">
            {frameData.name}
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            {frameData.description}
          </p>

          {/* Frame Color Selection */}
          <div className="flex flex-col md:flex-row md:items-center gap-3">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
              Select Frame Color:
            </h3>
            <div className="flex gap-2">
              {frameData.frameColor.map((color, index) => (
                <div key={index} className="flex items-center gap-2">
                  <input
                    type="radio"
                    id={color.name}
                    name="frameColor"
                    value={color.name}
                    checked={selectedColor === color.name}
                    onChange={() => setSelectedColor(color.name)}
                    className="hidden"
                  />
                  <div
                    className={`w-6 h-6 rounded-full border-2 cursor-pointer ${
                      selectedColor === color.name
                        ? color.colorCode // Apply selected color
                        : "bg-gray-300"
                    }`}
                    onClick={() => setSelectedColor(color.name)}
                  ></div>
                  <label
                    htmlFor={color.name}
                    className={`font-semibold text-sm text-gray-700 dark:text-gray-300`}
                  >
                    {color.name}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="text-lg">
            <span className="font-semibold text-gray-800 dark:text-gray-100">
              Size:
            </span>{" "}
            {frameData.size}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-lg text-gray-100 font-semibold">Price:</span>
            <span className="text-lg text-red-500 font-semibold">
              Rs.{(frameData.price - (frameData?.discount || 0)).toFixed(1)}
            </span>
            <span className="text-lg font-medium text-gray-500 line-through">
              Rs.{frameData.price.toFixed(1)}
            </span>
          </div>

          {/* Customizable Option */}
          {frameData.customizableText && (
            <p className="text-md text-green-600 dark:text-green-400 font-semibold">
              This frame is customizable!
            </p>
          )}

          {/* Contact Button */}
          <button
            className="mt-4 bg-primary text-white font-bold py-2 px-4 rounded"
            onClick={handleWhatsAppClick}
          >
            Contact on WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleFrame;
