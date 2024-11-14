import React from "react";
import banner from "../../assets/banner.png";
const Hero = () => {
  return (
    <div className="border border-accent rounded-sm">
      <img src={banner} alt="" className="object-cover rounded-sm" />
    </div>
  );
};

export default Hero;
