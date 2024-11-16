import React from "react";
import { Link } from "react-router-dom";

const IDCard = ({ IDCard }) => {
  const handleWhatsAppClick = () => {
    const message = `
      *IDCard Details:*
      Name: ${IDCard?.name}
      Size: ${IDCard?.size} 
      
      I'm interested in this ID Card Design. Please provide more details.`;

    const phoneNumber = "9745415956";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.location.href = whatsappURL;
  };
  return (
    <div className="relative">
      <Link className="sm:h-96 md:w-60" onClick={handleWhatsAppClick}>
        <img
          src={IDCard?.image}
          className="h-full w-full object-contain border"
          alt=""
        />
        <div className="absolute top-2 rounded-sm bg-opacity-90 right-2 bg-secondary text-primary border px-2">
          #{IDCard?.id}
        </div>
      </Link>
    </div>
  );
};

export default IDCard;
