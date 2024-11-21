import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const CanvasCard = ({ canvas }) => {
  const businessWhatsAppNumber = "9745415956";

  const handleInterestedOnItem = () => {
    const isConfirmed = window.confirm(
      `We noticed you're interested in this canvas design:\n\nName: ${canvas?.name}\nCanvas Number: #${canvas?.id}\n\nWould you like to continue and discuss the details on WhatsApp?`
    );

    if (isConfirmed) {
      const message = `Hello, I am interested in the following canvas design:\n\nName: ${canvas?.name}\nCanvas Number: #${canvas?.id}\n\nI’d like to know more details. Please assist me.`;
      const encodedMessage = encodeURIComponent(message);
      window.open(
        `https://wa.me/${businessWhatsAppNumber}?text=${encodedMessage}`,
        "_blank" // Opens in a new tab
      );
    }
  };

  return (
    <div
      className="relative border cursor-pointer border-primary"
      onClick={handleInterestedOnItem}
    >
      <LazyLoadImage
        src={canvas?.image}
        loading="lazy"
        effect="blur"
        alt={canvas?.name}
        className="object-cover w-full h-full"
      />
      <div className="absolute top-2 rounded-sm bg-opacity-90 right-2 bg-secondary text-primary border px-2">
        #{canvas?.id}
      </div>
    </div>
  );
};

export default CanvasCard;
