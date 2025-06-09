import React, { useState, useEffect } from "react";
import Footer from "../Components/Shared/Footer";
import Navbar from "../Components/Shared/Navbar";
import { Outlet } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";
import Chat from "../Components/chat/Chat"; // Assuming Chat is WhatsApp component

const Layout = () => {
  const [showScroll, setShowScroll] = useState(false);

  // Handle scroll to show/hide the arrow
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-full max-w-screen-2xl">
        <Navbar />
        <div className="md:mx-20 mx-4">
          <Outlet />
        </div>
      </div>
      <div className="w-full">
        <Footer />
      </div>
      {/* Scroll to Top Arrow */}
      <div className="w-full fixed bottom-20 right-6 p-2">
        {/* Show WhatsApp icon when scroll button is hidden */}
        {!showScroll && <Chat />}
      </div>
      {showScroll && (
        <div
          className="fixed bottom-3 right-6 border bg-accent border-primary text-white p-2 md:p-2 rounded-full shadow-lg cursor-pointer hover:bg-primary transition"
          onClick={scrollToTop}
        >
          <FaArrowUp className="text-xs md:text-sm" />
        </div>
      )}
    </div>
  );
};

export default Layout;
