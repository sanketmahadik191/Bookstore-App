import React from "react";
import { useNavigate } from "react-router-dom";

function AboutUs() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f172a] text-white p-10 relative">
      {/* Close Button */}
      <button
        onClick={() => navigate('/')}
        className="absolute top-4 right-4 text-white hover:text-gray-300 focus:outline-none text-3xl"
        aria-label="Close"
      >
        ✕
      </button>

      <div className="max-w-4xl mx-auto bg-gradient-to-r from-gray-800 to-gray-700 text-gray-200 p-10 rounded-lg shadow-2xl relative">
        <h1 className="text-5xl font-extrabold text-center mb-8 text-pink-500">
          About Our Bookstore
        </h1>
        <p className="text-lg mb-6 leading-relaxed">
          Welcome to our bookstore! We are passionate about books and dedicated to bringing you an extensive collection of over <span className="font-bold text-pink-400">1,000+</span> titles across various genres. Whether you're into fiction, non-fiction, fantasy, science fiction, romance, or biographies, we have something for every reader.
        </p>
        <p className="text-lg mb-6 leading-relaxed">
          Our mission is to foster a love of reading in our community by offering a wide selection of books at affordable prices. We believe in the power of books to educate, inspire, and entertain, and we strive to make our store a haven for book lovers.
        </p>
        <p className="text-lg mb-6 leading-relaxed">
          We also offer a premium membership that allows avid readers to add their own books to our collection, share reviews, and enjoy exclusive discounts. Our community of premium members is growing every day, and we invite you to join us!
        </p>
        <p className="text-lg mb-6 leading-relaxed">
          Thank you for visiting our bookstore. We hope you find your next great read with us!
        </p>
        <p className="text-lg mb-6 leading-relaxed">
          Have questions or want to get in touch? Visit our <span className="underline text-blue-400 cursor-pointer" onClick={() => navigate('/contact')}>Contact Us</span> page for more information.
        </p>

        <div className="mt-10 text-center">
          <button
            onClick={() => navigate('/')}
            className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-2xl transition duration-300 ease-in-out"
          >
            Back to Home
          </button>
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-transparent opacity-20 rounded-lg pointer-events-none"></div>
      </div>
    </div>
  );
}

export default AboutUs;
