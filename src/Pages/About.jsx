import React from "react";
import about from "../assets/about.jpg";
const About = () => {
  return (
    <div className="bg-secondary text-white py-8 px-4 rounded-sm">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h1 className="text-xl md:text-3xl font-bold mb-6 text-start">
          About Millenium Photo Printing
        </h1>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8">
          {/* Text Section */}
          <div className="md:w-1/2 text-gray-400">
            <p className="md:text-lg text-sm leading-relaxed text-left mb-4">
              At <span className="font-bold">Millenium Photo Printing</span>, we
              specialize in transforming your memories into timeless pieces of
              art. With years of experience in custom photo printing, we offer a
              wide range of services, including photo framing, ID card
              designing, banner printing, canvas printing, and much more.
            </p>
            <p className="text-sm md:text-lg leading-relaxed text-left mb-4">
              Our mission is to provide high-quality, personalized printing
              services to help you preserve your special moments and create
              impactful designs. Whether you're looking for a custom photo frame
              for your home or a stunning canvas print for your office, we
              ensure every project meets the highest standards of craftsmanship
              and attention to detail.
            </p>
            <p className="text-sm md:text-lg leading-relaxed text-left">
              We take pride in our exceptional customer service, quick
              turnaround times, and creative solutions that cater to all your
              printing needs. Let us bring your ideas to life with our expertise
              and passion for design!
            </p>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 mt-6 md:mt-0">
            <img
              src={about}
              alt="Millenium Photo Printing"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
