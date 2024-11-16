import React from "react";
import logo from "../../assets/logo.jpg";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="border-t px-2 py-3 md:px-20 border-accent mt-4 bg-secondary rounded-sm">
      <div
        className="h-10 w-10 rounded-full cursor-pointer border border-primary"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
      >
        <img src={logo} alt="logo" className="h-full w-full rounded-full" />
      </div>
    </div>
  );
};

export default Footer;
