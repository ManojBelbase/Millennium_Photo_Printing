import React, { useState } from "react";
import { motion } from "framer-motion";
import Category from "./Category";
import c1 from "../../assets/c1.png";
import c2 from "../../assets/c2.png";
import c3 from "../../assets/c3.png";
import c4 from "../../assets/c4.png";
import c5 from "../../assets/c5.png";
import c6 from "../../assets/c6.png";
import howTo from "../../assets/howto.png";
import lanyard from "../../assets/lanyard/lanyard1.jpg";
import VideoPlayer from "../../others/VideoPlayer.jsx"; // Import VideoPlayer component

const categoryList = [
  { name: "Photo Frames", image: c1 },
  { name: "ID Cards", image: c2 },
  { name: "Banners", image: c3 },
  { name: "Canvas", image: c4 },
  { name: "Lanyard", image: lanyard },
  { name: "Business Cards", image: c5 },
  { name: "Certificates", image: c6 },
];

const CategoryContainer = () => {
  const [playState, setPlayState] = useState(false); // State for controlling video player visibility

  const openVideoPlayer = () => {
    setPlayState(true); // Open video player
  };

  return (
    <motion.div
      className="my-6 flex flex-col items-start gap-4"
      initial="hidden"
      animate="visible"
    >
      <div className="relative flex items-center justify-between w-full">
        <div className="flex flex-col items-start">
          <h1 className="text:sm md:text-2xl font-semibold uppercase">
            Shop By Category
          </h1>
          <span className="w-10 md:w-14 lg:w-16 h-[2px] md:h-1 mt-1 bg-primary"></span>
        </div>
        <div className="flex">
          <img
            src={howTo}
            alt="How to Order"
            className="md:w-12 w-10 cursor-pointer absolute right-2 -top-2 animate-pulse"
            onClick={openVideoPlayer} // Open VideoPlayer when the image is clicked
          />
        </div>
      </div>

      {/* VideoPlayer Component */}
      <VideoPlayer playState={playState} setPlayState={setPlayState} />

      <div className="category grid grid-cols-2 gap-4 xs:grid-cols-3 sm:gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7  lg:gap-4 xl:gap-6 2xl:grid-cols-7">
        {categoryList.map((category, i) => (
          <motion.div key={i}>
            <Category category={category} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default CategoryContainer;
