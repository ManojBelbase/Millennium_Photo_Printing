import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const BannerCard = ({ banner }) => {
  const businessWhatsAppNumber = "9745415956";

  const handleInterestedOnItem = () => {
    const isConfirmed = window.confirm(
      `We noticed you're interested in this item:\n\nName: ${banner?.name}\nBanner Number: #${banner?.id}\n\nWould you like to continue and discuss the details on WhatsApp?`
    );

    if (isConfirmed) {
      const message = `Hello, I am interested in the following item:\n\nName: ${banner?.name}\n Banner Number: #${banner?.id}\n\nI’d like to know more details. Please assist me.`;
      const encodedMessage = encodeURIComponent(message);
      window.open(
        `https://wa.me/${businessWhatsAppNumber}?text=${encodedMessage}`,
        "_blank" // Opens in a new tab
      );
    }
  };

  return (
    <div>
      <div
        className="relative border-2 cursor-pointer border-white"
        onClick={handleInterestedOnItem}
      >
        <LazyLoadImage
          src={banner?.image}
          loading="lazy"
          effect="blur"
          alt={banner?.name}
          className="object-cover"
        />
        <div className="absolute top-2 rounded-sm bg-opacity-90 right-2 bg-secondary text-primary border px-2">
          #{banner?.id}
        </div>
      </div>
    </div>
  );
};

export default BannerCard;
