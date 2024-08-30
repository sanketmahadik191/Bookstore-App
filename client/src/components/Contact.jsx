import React from "react";
import { useNavigate } from "react-router-dom";
import bgImage from '../assets/bg.jpg';  // Assuming your image is in the assets folder

function ContactUs() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Semi-transparent Dark Container */}
      <div className="max-w-lg w-full bg-gray-300 bg-opacity-60 p-8 rounded-lg shadow-lg relative">
        <h2 className="text-3xl font-bold text-gray-700 text-center mb-8">
          Contact Us
        </h2>
        <form className="space-y-6">
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
              Enter Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 bg-gray-700 text-white"
              placeholder="Your Name"
              required
            />
          </div>

          {/* Contact Details Input */}
          <div>
            <label htmlFor="contact" className="block text-gray-700 font-semibold mb-2">
              Contact Details
            </label>
            <input
              type="text"
              id="contact"
              name="contact"
              className="w-full px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 bg-gray-700 text-white"
              placeholder="Your Email or Phone Number"
              required
            />
          </div>

          {/* Write Us Textarea */}
          <div>
            <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
              Write Us
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 bg-gray-700 text-white"
              placeholder="Your Message"
              rows="4"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition duration-300 ease-in-out"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Back to Home Button */}
        <button
          onClick={() => navigate('/')}
          className="absolute top-4 right-4 text-gray-700 hover:text-gray-500 focus:outline-none text-2xl"
          aria-label="Close"
        >
          ✕
        </button>
      </div>
    </div>
  );
}

export default ContactUs;
