import React from "react";
import altImg from "../assets/BookImg.png"; // Import the fallback image
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { bookData } from "../redux/authSlice";

function Cards({ item }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const imageSrc =altImg; // Use the book's image if available, otherwise fallback to altImg

  const handleClick = () => {
    dispatch(bookData(item));
    navigate(`/book/${item._id}`);
  };

  return (
    <div
      key={item._id}
      className="flex flex-col min-h-[360px]  bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transform duration-300 ease-in-out dark:bg-slate-900 dark:text-white dark:border dark:hover:border-gray-500"
      onClick={handleClick}
    >
      <figure className="overflow-hidden h-48">
        <img
          src={imageSrc}
          alt={item.name || "Book Image"}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </figure>

      <div className="flex flex-col flex-grow p-4">
        <h2 className="text-lg font-semibold mb-2 flex justify-between items-center">
          {item.name}
          <div className="badge badge-secondary bg-purple-500 text-white px-2 py-1 rounded-lg">
            {item.category}
          </div>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow overflow-hidden">{item.title}</p>
        <div className="flex justify-between items-center mt-auto">
          <div className="text-xl font-bold text-purple-600 dark:text-purple-400">
            ${item.price}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
