import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion"; // Import Framer Motion
import MyContext from "../../context/MyContext";

const navItems = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  // { title: "Gallery", path: "/gallery" },
  { title: "Contact", path: "/contact" },
];

const Navbar = () => {
  const { user } = useContext(MyContext);
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="relative mx-4 md:mx-20 my-4">
      <nav className="flex items-center justify-between px-6 bg-secondary h-14 border md:border-t border-accent rounded-sm md:rounded-full">
        {/* Draggable Logo Section */}
        <motion.div
          className="h-11 border border-primary rounded-full"
          drag // Enable drag
          dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }} // Constrain drag area
          dragElastic={0.2} // Add elasticity
          whileDrag={{ scale: 1.1, cursor: "grabbing" }} // Scale up on drag
        >
          <img
            src={logo}
            alt="Logo"
            className="h-full rounded-full object-cover cursor-pointer"
            onClick={() => navigate("/")}
            onDoubleClick={() => navigate("/admin/login")}
          />
        </motion.div>

        {/* Navigation Links for Desktop */}
        <ul className="hidden md:flex gap-6">
          {navItems.map((item, i) => (
            <li key={i} className="text-sm uppercase font-normal">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "bg-accent px-4 py-2 rounded-full"
                    : "hover:text-primary px-4 py-2"
                }
                to={item.path}
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-primary">
            {isMobileMenuOpen ? (
              <AiOutlineClose size={24} />
            ) : (
              <AiOutlineMenu size={24} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <ul className="absolute top-14 left-0 w-full bg-secondary flex flex-col items-start space-y-2 px-4 py-2 border border-accent rounded-sm md:hidden z-20">
          {navItems.map((item, i) => (
            <li key={i} className="w-full">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "block px-3 py-2 rounded text-white bg-primary"
                    : "block px-3 py-2 rounded text-white"
                }
                to={item.path}
                onClick={toggleMobileMenu} // Close menu on click
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
