import React from "react";
import { useSelector } from "react-redux";
import altImg from "../assets/BookImg.png"; // Common fallback image

function Book() {
  const book = useSelector((state) => state.auth.book);

  const imageSrc = altImg;
  // const imageSrc = book.image || altImg; // Use book image if available, otherwise fallback
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-slate-900 p-6">
      <div className="w-full max-w-4xl bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8 md:flex md:items-center">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img
            src={imageSrc}
            alt={"Book Image"}
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="md:w-1/2 md:ml-8">
          <h1 className="text-4xl font-bold mb-4 text-purple-100 ">
            {book.name}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
            <span className="font-semibold text-purple-600 ">Category:</span> {book.category}
          </p>
  
          <p className="text-lg  mb-4">
            <span className="font-semibold text-purple-600 ">Price:</span> {book.category ==="free"? 0:`${book.price}` }
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            <span className="font-semibold text-purple-600 ">Description:</span>{" "}
            {book.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Book;
