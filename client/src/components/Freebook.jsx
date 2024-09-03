import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import Cards from "./Cards";

function Freebook() {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const res = await axios.get("/api/book/getFreeBook");
        setBooks(res.data);
      } catch (error) {
        setError("Failed to fetch books. Please try again later.");
        console.error(error);
      }
    };

    getBooks();
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-2xl mx-auto px-8 py-10">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-purple-600 mb-4">
          Free Offered Courses
        </h1>
        <p className="text-lg text-gray-600">
          Discover a wide range of free courses designed to help you expand
          your knowledge and skills. Enroll today and start learning!
        </p>
      </div>

      {error && <p className="text-red-500 text-center">{error}</p>}

      <div className="relative">
        <Slider {...settings}>
          {books.length > 0 ? (
            books.map((item) => (
              <div key={item._id} className="p-4 flex ">
                <Cards item={item} />
              </div>
            ))
          ) : (
            <div className="text-center p-4">No books available</div>
          )}
        </Slider>
      </div>
    </div>
  );
}

export default Freebook;
