import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import Cards from "./Cards";

function Freebook() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("/api/book/get");
        const data = res.data;
        setBook(data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
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
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-10">
        <div className="text-center mb-8">
          <h1 className="font-bold text-3xl pb-4 text-purple-600">
            Free Offered Courses
          </h1>
          <p className="text-gray-600 text-lg">
            Discover a wide range of free courses designed to help you expand
            your knowledge and skills. Enroll today and start learning!
          </p>
        </div>

        <div className="relative">
          <Slider {...settings}>
            {book.map((item) => (
              <div key={item._id} className="p-4">
                <Cards item={item} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Freebook;
