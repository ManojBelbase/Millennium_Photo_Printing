import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import banner from "../../assets/banner.png";

// Animation Variants
const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 }, // Initial state: faded out and slightly zoomed out
  visible: {
    opacity: 1,
    scale: 1, // Final state: fully visible and at normal size
    transition: { duration: 0.6, ease: "easeOut" }, // Smooth transition
  },
};

const Hero = () => {
  return (
    <div className="border border-accent rounded-sm">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={imageVariants} // Apply animation variants
      >
        <LazyLoadImage
          src={banner}
          alt="Hero Banner"
          loading="lazy"
          effect="blur" // Blur effect while loading
          className="object-cover rounded-sm"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
