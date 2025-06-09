import Hero from "../Components/Hero/Hero";
import CategoryContainer from "../Components/Category/CategoryContainer";
import Testimonial from "../Components/Testimonial/Testinomial.jsx";
import Clients from "../Components/Clients/Clients.jsx";

const Home = () => {
  return (
    <div>
      <Hero />
      <CategoryContainer />
      <Clients />
      <Testimonial />
    </div>
  );
};

export default Home;
