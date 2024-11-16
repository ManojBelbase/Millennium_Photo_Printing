import React from "react";
import { Link } from "react-router-dom";

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
        <div className="w-32 h-32 sm:w-36 sm:h-36  md:w-40 md:h-44 bg-gray-900 rounded-md overflow-hidden">
          <img
            src={category.image}
            alt={category.name || "Category"}
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        {/* Text Section */}
        <p className="mt-1 text-center text-gray-200 text-base md:text-lg font-medium">
          {category.name}
        </p>
      </Link>
    </div>
  );
};

export default Category;
