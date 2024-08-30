import React from "react";
import altImg from "../assets/BookImg.png"; // Import the fallback image
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { bookData } from "../redux/authSlice";

function Cards({ item }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const imageSrc = altImg; // Use the book's image if available, otherwise fallback to altImg

  const handleClick = () => {
    dispatch(bookData(item));
    navigate(`/book/${item._id}`);
  };

  return (
    <div className="mt-4 my-3 p-3" onClick={handleClick}>
      <div className="card w-92 bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transform duration-300 ease-in-out dark:bg-slate-900 dark:text-white dark:border dark:hover:border-gray-500 order-100">
        <figure className="overflow-hidden">
          <img
            src={imageSrc}
            alt={item.name || "Book Image"}
            className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
          />
        </figure>

        <div className="card-body p-4">
          <h2 className="card-title text-lg font-semibold mb-2 flex justify-between items-center">
            {item.name}
            <div className="badge badge-secondary bg-purple-500 text-white px-2 py-1 rounded-lg">
              {item.category}
            </div>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">{item.title}</p>
          <div className="card-actions flex justify-between items-center">
            <div className="text-xl font-bold text-purple-600 dark:text-purple-400">
              ${item.price}
            </div>
            {/* <button className="cursor-pointer px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-300 ease-in-out shadow-lg hover:shadow-xl order-40 z-10"
             onClick={()=>console.log(45)
             }
            >
              Buy Now
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
