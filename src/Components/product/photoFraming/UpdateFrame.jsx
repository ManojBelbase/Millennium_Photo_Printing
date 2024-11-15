import React, { useContext, useEffect, useState } from "react";
import MyContext from "../../../context/MyContext";
import { useNavigate, useParams } from "react-router-dom";
import { doc, getDoc, setDoc, Timestamp } from "firebase/firestore";
import { fireDB } from "../../../firebase/FirebaseConfig";
import toast from "react-hot-toast";
import { MdArrowBack } from "react-icons/md";

const UpdateFrame = () => {
  const { id } = useParams();
  const { loading, setLoading, getAllPhotoFramesFunction } =
    useContext(MyContext);
  const navigate = useNavigate();

  const [frameData, setFrameData] = useState({
    name: "",
    description: "",
    size: "A4",
    frameColor: ["Black", "White", "Golden"], // Predefined color options
    price: 0,
    discount: 0,
    image: "", // This should be an image URL or path
    time: Timestamp.now(),
    date: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });

  const [selectedColors, setSelectedColors] = useState([]);

  // Fetch the frame data on mount
  useEffect(() => {
    const fetchFrameData = async () => {
      setLoading(true);
      try {
        const docSnap = await getDoc(doc(fireDB, "photoframe", id));
        if (docSnap.exists()) {
          const data = docSnap.data();
          setFrameData(data);
          setSelectedColors(data.frameColor || []);
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchFrameData();
  }, [id, setLoading]);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFrameData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle checkbox changes
  const handleCheckboxChange = (color) => {
    setSelectedColors((prevColors) =>
      prevColors.includes(color)
        ? prevColors.filter((c) => c !== color)
        : [...prevColors, color]
    );
    setFrameData((prevData) => ({
      ...prevData,
      frameColor: selectedColors,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await setDoc(doc(fireDB, "photoframe", id), {
        ...frameData,
        frameColor: selectedColors,
      });
      toast.success("Frame updated successfully");
      getAllPhotoFramesFunction(); // Refresh the frame list
      navigate("/shop/photo_frames"); // Navigate to frames page
    } catch (error) {
      console.log(error);
      toast.error("Failed to update frame");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 min-w-md mx-auto bg-secondary shadow-md rounded-md text-white">
      <button
        className="px-2 py-1 bg-secondary border border-accent rounded-sm inline-flex items-center gap-2 md:gap-3 mb-3"
        onClick={() => navigate("/shop/photo_frames")}
      >
        <MdArrowBack className="text-2xl" />
        <span>Back</span>
      </button>
      <h2 className="text-xl font-bold mb-4">Update Frame</h2>
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
          placeholder="e.g., A4"
        />

        {/* Frame Colors */}
        <label className="block mb-2">Frame Colors</label>
        <div className="flex gap-2 mb-2">
          {["Black", "White", "Golden"].map((color, index) => (
            <label key={index} className="flex items-center gap-1">
              <input
                type="checkbox"
                value={color}
                checked={selectedColors.includes(color)}
                onChange={() => handleCheckboxChange(color)}
                className="bg-gray-800 border border-gray-500 p-2 rounded text-white"
              />
              <span>{color}</span>
            </label>
          ))}
        </div>

        {/* Price */}
        <label className="block mb-2">Price</label>
        <input
          type="number"
          name="price"
          value={frameData.price}
          onChange={handleChange}
          className="bg-gray-800 border border-gray-500 p-2 w-full rounded text-white mb-2"
          required
        />

        {/* Discount */}
        <label className="block mb-2">Discount</label>
        <input
          type="number"
          name="discount"
          value={frameData.discount}
          onChange={handleChange}
          className="bg-gray-800 border border-gray-500 p-2 w-full rounded text-white mb-2"
        />

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
          {loading ? "Please wait.." : "Update Frame"}
        </button>
      </form>
    </div>
  );
};

export default UpdateFrame;
