import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader-grid grid-cols-3">
      {[...Array(6)].map((_, index) => (
        <div key={index} className="shimmer-card">
          <div className="shimmer-gradient"></div>
        </div>
      ))}
    </div>
  );
};

export default Loader;
