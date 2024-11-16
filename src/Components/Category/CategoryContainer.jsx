import React from "react";
import Category from "./Category";
import c1 from "../../assets/c1.png";
import c2 from "../../assets/c2.png";
import c3 from "../../assets/c3.png";
import c4 from "../../assets/c4.png";
import c5 from "../../assets/c5.png";
import c6 from "../../assets/c6.png";
const categoryList = [
  {
    name: "Photo Frames",
    image: c1,
  },
  {
    name: "ID Cards",
    image: c2,
  },
  {
    name: "Banners",
    image: c3,
  },
  {
    name: "Canvas",
    image: c4,
  },
  {
    name: "Business Cards",
    image: c5,
  },
  {
    name: "Certificates",
    image: c6,
  },
];
const CategoryContainer = () => {
  return (
    <div className="my-6 flex flex-col items-start gap-4">
      <div className="flex flex-col items-start">
        <h1 className="text:xl md:text-2xl font-semibold uppercase">
          Shop By Category
        </h1>
        <span className="w-10 md:w-14 lg:w-16 h-[2px] md:h-1 mt-1 bg-primary"></span>
      </div>
      <div className="grid grid-cols-2  md:grid-cols-4 lg:grid-cols-6 2xl:grid-cols-6 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-4">
        {categoryList.map((category, i) => (
          <Category key={i} category={category} />
        ))}
      </div>
    </div>
  );
};

export default CategoryContainer;
