import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import Category from "./Category";
import c1 from "../../assets/c1.png";
import c2 from "../../assets/c2.png";
import c3 from "../../assets/c3.png";
import c4 from "../../assets/c4.png";
import c5 from "../../assets/c5.png";
import c6 from "../../assets/c6.png";

const categoryList = [
  { name: "Photo Frames", image: c1 },
  { name: "ID Cards", image: c2 },
  { name: "Banners", image: c3 },
  { name: "Canvas", image: c4 },
  { name: "Business Cards", image: c5 },
  { name: "Certificates", image: c6 },
];

const containerVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.2, // Delay between children animations
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const CategoryContainer = () => {
  return (
    <motion.div
      className="my-6 flex flex-col items-start gap-4"
      initial="hidden"
      animate="visible"
      variants={containerVariants} // Apply container variants
    >
      <div className="flex flex-col items-start">
        <h1 className="text:sm md:text-2xl font-semibold uppercase">
          Shop By Category
        </h1>
        <span className="w-10 md:w-14 lg:w-16 h-[2px] md:h-1 mt-1 bg-primary"></span>
      </div>
      <div className="category grid grid-cols-2 gap-4 xs:grid-cols-3 sm:gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 2xl:grid-cols-6">
        {categoryList.map((category, i) => (
          <motion.div
            key={i}
            variants={itemVariants} // Apply item variants
          >
            <Category category={category} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default CategoryContainer;
