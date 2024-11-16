import React from "react";

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
        "https://scontent.fbwa8-1.fna.fbcdn.net/v/t1.6435-9/115934280_768395273897289_8751289607749192566_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=GlYG_Byfft8Q7kNvgGLj8N_&_nc_zt=23&_nc_ht=scontent.fbwa8-1.fna&_nc_gid=Ag8ECU4dQYt2ms2MSalBDFP&oh=00_AYD0jVdO7O6JB95TdOsUnV0ghXspWrqx3QWIKO1X26j7Ag&oe=67603039",
      text: "The custom photo frame was beautifully crafted, and the quality exceeded my expectations. Highly recommend their services!",
      stars: 5,
    },
    {
      name: "Sarah Lee",
      image:
        "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
      text: "Professional ID card designs with great attention to detail. The team was efficient, and the final product was fantastic.",
      stars: 4,
    },
    {
      name: "Aarati Sharma",
      image:
        "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
      text: "I ordered a birthday photo frame, and it was perfect! Beautifully made and delivered on time. Very satisfied!",
      stars: 5,
    },
  ];

  return (
    <section className=" bg-black rounded-md">
      <div className="mx-auto py-6 lg:py-8">
        <div className="flex flex-col items-start">
          <h1 className="text:xl md:text-2xl font-semibold uppercase">
            Testimonials
          </h1>
          <span className="w-10 md:w-14 lg:w-16 h-[2px] md:h-1 mt-1 bg-primary"></span>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
          {reviews.map((review, index) => (
            <blockquote
              key={index}
              className="rounded-lg bg-secondary border-accent shadow-accent p-6 shadow-sm sm:p-8"
            >
              <div className="flex items-center gap-4">
                <img
                  alt=""
                  src={review.image}
                  className="size-14 rounded-full object-cover"
                />
                <div>
                  <Rating stars={review.stars} />
                  <p className="mt-0.5 text-lg font-medium text-white">
                    {review.name}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-gray-400">{review.text}</p>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testinomial;
