import React, { useState } from "react";
import { BsWhatsapp } from "react-icons/bs";

const Chat = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState("");

  const phoneNumber = "9745415956"; // Replace with your WhatsApp number in international format

  const handleSendMessage = () => {
    if (message.trim()) {
      const encodedMessage = encodeURIComponent(message);
      const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
      window.open(whatsappURL, "_blank");
      setMessage(""); // Clear the message input after sending
    } else {
      alert("Please type a message before sending.");
    }
  };

  return (
    <div className="fixed bottom-16 right-4 md:bottom-16 md:right-6 z-50">
      {/* Chat Box */}
      {isChatOpen && (
        <div
          className="bg-secondary border border-primary rounded-md shadow-lg p-4 w-72 md:w-96
            absolute bottom-12 right-0 md:bottom-16 md:right-0"
        >
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-white">Chat with us</h2>
            <button
              className="text-gray-500 hover:text-red-500 text-2xl"
              onClick={() => setIsChatOpen(false)}
            >
              ✕
            </button>
          </div>
          <div className="mt-2">
            <p className="text-sm text-gray-400">How can we assist you?</p>
          </div>
          <textarea
            className="w-full mt-4 border border-gray-300 rounded-md p-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
            rows={3}
            placeholder="Type your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            className="mt-4 w-full bg-primary text-black py-2 rounded-md text-sm hover:bg-primary transition"
            onClick={handleSendMessage}
          >
            Send
          </button>
        </div>
      )}

      {/* WhatsApp Icon */}
      <BsWhatsapp
        className="text-3xl md:text-4xl cursor-pointer text-[#15a595] hover:scale-110 transition-transform"
        onClick={() => setIsChatOpen((prev) => !prev)}
      />
    </div>
  );
};

export default Chat;
