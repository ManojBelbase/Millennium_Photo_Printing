import React from "react";

const BusinessCard = ({ bc }) => {
  const businessWhatsAppNumber = "9745415956";

  const handleInterestedOnItem = () => {
    const isConfirmed = window.confirm(
      `We noticed you're interested in this business card:\n\nName: ${bc?.name}\nCard Number: #${bc?.id}\n\nWould you like to continue and discuss the details on WhatsApp?`
    );

    if (isConfirmed) {
      const message = `Hello, I am interested in the following business card:\n\nName: ${bc?.name}\nCard Number: #${bc?.id}\n\nI’d like to know more details. Please assist me.`;
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
        <img src={bc?.image} alt={bc?.name} className="object-cover" />
        <div className="absolute top-2 rounded-sm bg-opacity-90 right-2 bg-secondary text-primary border px-2">
          #{bc?.id}
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
