import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Certificates = ({ item }) => {
  return (
    <div className="relative">
      <div className="border">
        <LazyLoadImage
          effect="blur"
          src={item?.image}
          loading="lazy"
          alt={item?.name}
        />
      </div>
      <div className="absolute top-2 rounded-sm bg-opacity-90 right-2 bg-secondary text-primary border px-1 text-sm md:text-ba md:px-2">
        #{item?.id}
      </div>
      <p className="absolute backdrop-blur-sm bg-white/10 bottom-10  md:px-4 h-7 w-full"></p>
    </div>
  );
};

export default Certificates;
