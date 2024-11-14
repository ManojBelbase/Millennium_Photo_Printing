import { addDoc, collection } from "firebase/firestore";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { fireDB } from "../../../firebase/FirebaseConfig";
import { useNavigate } from "react-router-dom";

const CreateFrame = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [frameData, setFrameData] = useState({
    name: "",
    description: "",
    size: "",
    frameColor: [{ name: "", colorCode: "" }],
    customizableText: false,
    price: "",
    discount: "",
    image: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFrameData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle adding a color option
  const addColorOption = () => {
    setFrameData((prevData) => ({
      ...prevData,
      frameColor: [...prevData.frameColor, { name: "", colorCode: "" }],
    }));
  };

  // Handle color change
  const handleColorChange = (index, e) => {
    const { name, value } = e.target;
    const updatedColors = [...frameData.frameColor];
    updatedColors[index][name] = value;
    setFrameData({ ...frameData, frameColor: updatedColors });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Frame Data:", frameData);
    if (
      !frameData.name ||
      !frameData.size ||
      !frameData.image ||
      !frameData.price ||
      !frameData.frameColor ||
      !frameData.discount
    ) {
      return toast.error("Something is missing");
    }
    setLoading(true);
    try {
      const photoframeRef = collection(fireDB, "photoframe");
      await addDoc(photoframeRef, frameData);
      toast.success("Frame added successfully");
      navigate("/shop/photo_frames");
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error(error.message);
    }
  };

  return (
    <div className="p-4 min-w-md mx-auto bg-secondary shadow-md rounded-md text-white">
      <h2 className="text-xl font-bold mb-4">Create New Frame</h2>
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <label className="block mb-2">Name</label>
        <input
          type="text"
          name="name"
          value={frameData.name}
          onChange={handleChange}
          className="bg-gray-800 border border-gray-500 p-2 w-full rounded text-white mb-2"
          required
        />

        {/* Description */}
        <label className="block mb-2">Description</label>
        <textarea
          name="description"
          value={frameData.description}
          onChange={handleChange}
          className="bg-gray-800 border border-gray-500 p-2 w-full rounded text-white mb-2"
        />

        {/* Size */}
        <label className="block mb-2">Size</label>
        <input
          type="text"
          name="size"
          value={frameData.size}
          onChange={handleChange}
          className="bg-gray-800 border border-gray-500 p-2 w-full rounded text-white mb-2"
          placeholder="e.g., 8*10"
        />

        {/* Frame Colors */}
        <label className="block mb-2">Frame Colors</label>
        {frameData.frameColor.map((color, index) => (
          <div key={index} className="flex gap-2 mb-2">
            <input
              type="text"
              name="name"
              placeholder="Color Name"
              value={color.name}
              onChange={(e) => handleColorChange(index, e)}
              className="bg-gray-800 border border-gray-500 p-2 w-1/2 rounded text-white"
              required
            />
            <input
              type="text"
              name="colorCode"
              placeholder="Color Code (e.g., bg-white)"
              value={color.colorCode}
              onChange={(e) => handleColorChange(index, e)}
              className="bg-gray-800 border border-gray-500 p-2 w-1/2 rounded text-white"
              required
            />
          </div>
        ))}
        <button
          type="button"
          onClick={addColorOption}
          className="bg-primary hover:bg-primary text-gray-950 py-1 px-2 rounded mb-2"
        >
          Add Color
        </button>

        <div className="flex items-center justify-between gap-2">
          {/* Price */}
          <div className="flex flex-col w-full">
            <label className="block mb-2">Price</label>
            <input
              type="number"
              name="price"
              value={frameData.price}
              onChange={handleChange}
              className="bg-gray-800 border border-gray-500 p-2 w-full rounded text-white mb-2"
              required
            />
          </div>

          {/* Discount */}
          <div className="flex flex-col w-full">
            <label className="block mb-2">Discount</label>
            <input
              type="number"
              name="discount"
              value={frameData.discount}
              onChange={handleChange}
              className="bg-gray-800 border border-gray-500 p-2 w-full rounded text-white mb-2"
            />
          </div>
        </div>

        {/* Image URL */}
        <label className="block mb-2">Image URL</label>
        <input
          type="text"
          name="image"
          value={frameData.image}
          onChange={handleChange}
          className="bg-gray-800 border border-gray-500 p-2 w-full rounded text-white mb-2"
          placeholder="e.g., URL to image file"
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-primary hover:bg-primary text-secondary py-2 px-4 rounded"
        >
          {loading ? "Please wait.." : "Create Frame"}
        </button>
      </form>
    </div>
  );
};

export default CreateFrame;
