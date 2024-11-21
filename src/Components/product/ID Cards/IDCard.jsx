import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const IDCard = ({ IDCard }) => {
  const handleWhatsAppClick = () => {
    const isConfirmed = window.confirm(
      `We noticed you're interested in this item:\n\nName: ${IDCard?.name}\nSize: ${IDCard?.size}\n\nWould you like to continue and discuss the details on WhatsApp?`
    );

    if (isConfirmed) {
      const message = `
        *IDCard Details:*
        Name: ${IDCard?.name}
        Size: ${IDCard?.size}
        
        I'm interested in this ID Card Design. Please provide more details.`;

      const phoneNumber = "9745415956";
      const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message
      )}`;

      window.location.href = whatsappURL; // Redirects to WhatsApp
    }
  };

  return (
    <div className="relative">
      <Link className="sm:h-96 md:w-60" onClick={handleWhatsAppClick}>
        <LazyLoadImage
          src={IDCard?.image}
          loading="lazy"
          effect="blur"
          className="h-full w-full object-contain border"
          alt={IDCard?.name || "ID Card"}
        />
        <div className="absolute top-2 rounded-sm bg-opacity-90 right-2 bg-secondary text-primary border px-2">
          #{IDCard?.id}
        </div>
      </Link>
    </div>
  );
};

export default IDCard;
