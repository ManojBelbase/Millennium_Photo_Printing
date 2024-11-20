import React, { useContext } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import PhotoFrameCard from "./PhotoFrameCard";
import { MdArrowBack } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { IoCreateOutline } from "react-icons/io5";
import MyContext from "../../../context/MyContext.jsx";
import Loader from "../../../Loader/Loader.jsx";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Stagger appearance of children
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

const PhotoFrame = () => {
  const { user, getAllPhotoFrames, loading } = useContext(MyContext);
  const navigate = useNavigate();

  return (
    <motion.div
      className="my-2 bg-secondary border-accent border p-4 shadow-md"
      initial="hidden"
      animate="visible"
      variants={containerVariants} // Apply container animation
    >
      {/* Header Section */}
      <motion.div
        className="flex items-center justify-between mb-3"
        variants={itemVariants} // Animate header elements
      >
        {/* Back Button */}
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
      </motion.div>

      {/* Title Section */}
      <motion.div variants={itemVariants}>
        <h1 className="font-medium text-xl mb-4 text-white">Choose Design</h1>
      </motion.div>

      {/* Grid Section */}
      {loading ? (
        <Loader />
      ) : (
        <motion.div
          className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-10 rounded-md"
          variants={containerVariants} // Apply staggered animation to children
        >
          {getAllPhotoFrames.map((frame, i) => (
            <motion.div key={i} variants={itemVariants}>
              <PhotoFrameCard frame={frame} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
};

export default PhotoFrame;
