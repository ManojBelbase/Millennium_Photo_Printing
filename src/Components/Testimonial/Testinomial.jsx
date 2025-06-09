import React from "react";
import { motion } from "framer-motion"; // Importing Framer Motion
import client1 from "./client1.jpg";
// Reusable Rating Component
const Rating = ({ stars }) => {
  const starPath =
    "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z";

  return (
    <div className="flex justify-center gap-0.5 text-primary">
      {[...Array(stars)].map((_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          className="size-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d={starPath} />
        </svg>
      ))}
    </div>
  );
};

const Testinomial = () => {
  const reviews = [
    {
      name: "Bhesraj Belbase",
      image:
        "https://scontent.fktm19-1.fna.fbcdn.net/v/t1.6435-9/35826279_264976767572478_4317226994803671040_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=669761&_nc_ohc=pQ7zNUrJwZIQ7kNvwG1MwuF&_nc_oc=AdnQ8tIHqnQipaMQJmntl9_4ABGERFDpfYXvyLBFSX7NXFzkyVubNUGQh8q-tBq-CK2Tk05BuYYZRdwamuu6q1df&_nc_zt=23&_nc_ht=scontent.fktm19-1.fna&_nc_gid=TmTNO9TdgT-Dliyk_nIJLw&oh=00_AfNhLjDhW_aTQSTbVBi6vWXgQWzuWRaO4KrrALbf8ZZKLg&oe=686E73B5",
      text: "The custom photo frame was beautifully crafted, and the quality exceeded my expectations. Highly recommend their services!",
      stars: 5,
    },

    {
      name: "Aarati Bhattarai",
      image: client1,
      text: "I ordered a birthday photo frame, and it was perfect! Beautifully made and delivered on time. Very satisfied!",
      stars: 4,
    },
    {
      name: "Manoj Poudel",
      image:
        "https://media.licdn.com/dms/image/v2/D4D03AQFy3LAUVkvEQg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1729877632902?e=1737590400&v=beta&t=8U5rzLnfmWBMEgAYkxOQtHbGX8__SE6A-yqHBa8D4LU",
      text: "Professional ID card designs with great attention to detail. The team was efficient, and the final product was fantastic.",
      stars: 5,
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-black rounded-md">
      <div className="mx-auto py-6 lg:py-8">
        <div className="flex flex-col items-start">
          <h1 className="text-sm md:text-2xl font-semibold uppercase">
            Testimonials
          </h1>
          <span className="w-10 md:w-14 lg:w-16 h-[2px] md:h-1 mt-1 bg-primary"></span>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              className="rounded-lg bg-secondary border-accent shadow-accent p-4 md:p-6 shadow-sm sm:p-8 
                     hover:shadow-primary delay-300 transition-shadow transform  duration-300"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex items-center gap-2 md:gap-4">
                <img
                  alt=""
                  src={review.image}
                  className="w-10 h-10 md:w-14 md:h-14 rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <Rating stars={review.stars} />
                  <p className="mt-0.5 text-sm md:text-lg font-medium text-white">
                    {review.name}
                  </p>
                </div>
              </div>
              <p className="mt-3 md:mt-4 text-xs md:text-base text-gray-400">
                {review.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testinomial;
