import React from "react";
import { IoIosHeart } from "react-icons/io"; // Importing Heart icon
import altImg from "../assets/BookImg.png"; // Import the fallback image
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { bookData } from "../redux/authSlice";
import toast from "react-hot-toast"; // Import toast notification for wishlist

function Cards({ item }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const imageSrc = altImg;

  const handleClick = () => {
    dispatch(bookData(item));
    navigate(`/book/${item._id}`);
  };

  const handleWishlist = (e) => {
    e.stopPropagation();
    toast('Please login to wishlist a book!', {
      icon: '⚠️',
      style: {
        border: '1px solid #FFA500',
        padding: '8px 16px',
      },
      iconTheme: {
        primary: '#FFA500',
        secondary: '#fff',
      },
    });
  };

  return (
    <div
      key={item._id}
      className="mt-4 my-3 p-3 cursor-pointer sm:max-w-xs sm:w-full"
      onClick={handleClick}
    >
      <div className="card bg-slate-900 w-full shadow-xl hover:scale-105 duration-200 text-white border border-gray-600">
        <figure className="relative">
          <img
            src={imageSrc}
            alt={item.name || "Book Image"}
            className="w-full h-60 object-cover transition-transform duration-300 hover:scale-110"
          />
          {/* Wishlist Heart Icon */}
          <div className="group">
            <IoIosHeart
              className="absolute right-5 top-4 text-slate-300 text-2xl cursor-pointer hover:text-red-600"
              onClick={(e) => handleWishlist(e)}
            />
            <span className="absolute right-0 top-0 transform -translate-x-1/2 mb-2 p-2 text-xs text-white bg-pink-500 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              Add to Wishlist
            </span>
          </div>
          {/* Category badge positioned at top-right */}
          <div className="absolute top-2 right-2 bg-purple-500 text-white text-xs font-bold px-2 py-1 rounded-lg shadow-lg">
            {item.category}
          </div>
        </figure>

        <div className="card-body p-3">
          {/* Trimming long book names */}
          <h2 className="card-title text-sm font-semibold flex justify-between items-center">
            {item.name.length > 18 ? `${item.name.slice(0, 20)}...` : item.name}
          </h2>
          <p className="text-gray-400 mb-2 flex-grow overflow-hidden text-xs">
            {item.title}
          </p>
          <div className="card-actions justify-between items-center">
            {/* Show price if the category is not 'free' */}
            {item.category !== "free" ? (
              <div className="text-blue-500 text-lg font-semibold">
                ${item.price}
              </div>
            ) : (
              <div className="text-green-500 font-semibold">Free</div>
            )}
            {/* "View" Button */}
            <div className="cursor-pointer px-3 py-1 rounded-full border-2 hover:bg-pink-500 text-xs hover:text-white duration-200">
              View
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
