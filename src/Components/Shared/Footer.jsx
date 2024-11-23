import React from "react";
import logo from "../../assets/logo.jpg";
import { FaFacebook, FaWhatsapp, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-secondary py-6 mt-10 border-t border-accent">
      {/* Top Section */}
      <div className="flex justify-between items-center px-4 md:px-20">
        {/* Logo and Scroll to Top */}
        <div className="flex items-center space-x-2 md:space-x-4">
          <div
            className="h-10 w-10 md:h-14 md:w-14 rounded-full cursor-pointer border-2 border-primary"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
          >
            <img src={logo} alt="logo" className="h-full w-full rounded-full" />
          </div>
          <span className="text-sm md:text-base text-gray-400">
            &copy; 2024 Millennium Photo Printing
          </span>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-3">
          <a
            href="https://www.facebook.com/profile.php?id=61555895144416"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400  hover:text-primary transition-colors text-lg"
          >
            <FaFacebook className="" />
          </a>
          <a
            href="https://wa.me/9745415956"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary transition-colors text-lg"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.tiktok.com/@millenniumphoto.np?_t=8rcssYANkPd&_r=1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary transition-colors text-lg"
          >
            <FaTiktok />
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <p className="text-center text-xs md:text-sm text-gray-500 mt-4">
        Designed and Developed by{" "}
        <a
          href="https://www.manojbelbase.com.np/"
          className="text-primary hover:underline"
        >
          Manoj Belbase
        </a>
      </p>
    </div>
  );
};

export default Footer;
