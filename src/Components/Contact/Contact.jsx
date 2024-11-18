import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaRegCommentDots,
} from "react-icons/fa";

const ContactForm = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "b1a5bdcf-2568-4ae7-8a5a-130ccf3245de");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="flex flex-col md:flex-col lg:flex-row justify-center rounded-md items-center gap-8 md:mt-8 mt-4 p-4 md:p-8 bg-secondary text-gray-100">
      {/* Contact Details */}
      <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
        <h3 className="text-2xl font-bold flex items-center justify-center lg:justify-start">
          Contact Millennium Photo Printing{" "}
          <FaRegCommentDots className="ml-2 text-xl" />
        </h3>
        <p className="text-gray-400 md:text-base text-sm">
          Reach out to us for custom photo framing, ID cards, banners, or any
          other services. We're here to help!
        </p>
        <ul className="space-y-4">
          <li className="flex items-center gap-2 text-gray-300">
            <FaEnvelope className="text-primary" />
            <span>millenniumphotoprinting@gmail.com</span>
          </li>
          <li className="flex items-center gap-2 text-gray-300">
            <FaPhone className="text-primary" />
            <span>+977 974-5415956 | 9866147873 </span>
          </li>
          <li className="flex items-center gap-2 text-gray-300">
            <FaMapMarkerAlt className="text-primary" />
            <span>4 No. Jitpur, Kapilvastu</span>
          </li>
        </ul>
      </div>

      {/* Contact Form */}
      <div className="lg:w-1/2 bg-secondary border-accent border md:p-8 p-4 shadow-lg rounded-sm">
        <form onSubmit={onSubmit} className="space-y-2">
          <label className="block text-sm font-medium text-gray-300">
            Your Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            required
            className="w-full p-2 bg-accent text-gray-200 border border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-secondary"
          />

          <label className="block text-sm font-medium text-gray-300">
            Phone Number
          </label>
          <input
            type="tel"
            name="mobile"
            placeholder="Enter your mobile number"
            required
            className="w-full p-2 bg-accent text-gray-200 border border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-secondary"
          />

          <label className="block text-sm font-medium text-gray-300">
            Your Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="w-full p-2 bg-accent text-gray-200 border border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-secondary"
          />

          <label className="block text-sm font-medium text-gray-300">
            Your Message
          </label>
          <textarea
            name="message"
            placeholder="Enter your message"
            rows={6}
            required
            className="w-full p-2 bg-accent text-gray-200 border border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-secondary"
          ></textarea>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-primary border-accent border  text-black font-semibold rounded-sm  focus:outline-none focus:ring-2 focus:bg-yellow-400"
          >
            Send Message
          </button>
        </form>
        <span className="block mt-4 text-center text-sm text-gray-300">
          {result}
        </span>
      </div>
    </div>
  );
};

export default ContactForm;
