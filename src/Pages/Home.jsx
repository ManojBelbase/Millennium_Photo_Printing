import React from "react";
import Hero from "../Components/Hero/Hero";
import CategoryContainer from "../Components/Category/CategoryContainer";
import Testimonial from "../Components/Testimonial/Testinomial.jsx";

const Home = () => {
  return (
    <div>
      <Hero />
      <CategoryContainer />
      <Testimonial />
    </div>
  );
};

export default Home;
