import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Import Framer Motion
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Category = ({ category }) => {
  return (
    <div>
      <Link
        to={`${
          category.name === "Photo Frames"
            ? "/shop/photo_frames"
            : category.name === "ID Cards"
            ? "/shop/ID_Cards"
            : category.name === "Banners"
            ? "/shop/banners"
            : category.name === "Canvas"
            ? "/shop/canvas"
            : category.name === "Business Cards"
            ? "/shop/business_cards"
            : category.name === "Certificates"
            ? "/shop/certificate"
            : ""
        }`}
        className="flex flex-col items-center p-2 bg-secondary rounded-lg hover:shadow-lg transition-shadow shadow-white duration-300 border hover:border-primary cursor-pointer"
      >
        {/* Image Section */}
        <motion.div
          className="w-32 h-32 sm:w-36 sm:h-36 md:w-36 md:h-44 lg:w-32 lg:h-40 bg-gray-900 rounded-md overflow-hidden"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }} // Tap animation
        >
          <LazyLoadImage
            src={category.image}
            alt={category.name || "Category"}
            className="w-full h-full object-cover rounded-md"
            effect="blur" // Blur effect on lazy loading
          />
        </motion.div>

        {/* Text Section */}
        <p className="mt-1 text-center text-gray-200 text-base md:text-lg lg:text-base font-medium">
          {category.name}
        </p>
      </Link>
    </div>
  );
};

export default Category;
