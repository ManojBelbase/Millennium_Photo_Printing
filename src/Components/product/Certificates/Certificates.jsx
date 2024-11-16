import React from "react";

const Certificates = ({ item }) => {
  return (
    <div className="relative">
      <div className="border">
        <img src={item?.image} alt="" />
      </div>
      <div className="absolute top-2 rounded-sm bg-opacity-90 right-2 bg-secondary text-primary border px-1 text-sm md:text-ba md:px-2">
        #{item?.id}
      </div>
    </div>
  );
};

export default Certificates;
