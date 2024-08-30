import { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import {useLocation, Link } from "react-router-dom";

function Course() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const queryParams = new URLSearchParams(location.search);
        const query = queryParams.get('q');
        console.log(query);
        

        const { data } = await axios.get("http://localhost:10000/api/book/search",{params:{q:query}});

        console.log(data);
        
        setBooks(data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch books. Please try again later.");
        setLoading(false);
      }
    };
    fetchBooks();
  }, [location.search]);

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="pt-28 items-center justify-center text-center">
        <h1 className="text-2xl md:text-4xl">
          We're  to have you{" "}
          <span className="text-pink-500">Here!</span>
        </h1>
        <p className="mt-12">
          Lorem ipsum dolor dewdsit, amet consectetur adipisicing elit. Porro,
          assumenda? Repellendus, iste corrupti? Tempore laudantium repellendus
          accusamus accusantium sed architecto odio, nisi expedita quas quidem
          nesciunt debitis dolore non aspernatur praesentium assumenda sint
          quibusdam, perspiciatis, explicabo sequi fugiat amet animi eos aut.
          Nobis quisquam reiciendis sunt quis sed magnam consequatur!
        </p>
        <Link to="/">
          <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
            Back
          </button>
        </Link>
      </div>

      {loading && (
        <div className="text-center mt-12">
          <p>Loading books...</p>
        </div>
      )}

      {error && (
        <div className="text-center mt-12 text-red-500">
          <p>{error}</p>
        </div>
      )}

      {!loading && !error && (
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {books.map((item) => (
            <>
            <Cards key={item._id} item={item} />
            </>
          ))}
        </div>
      )}
    </div>
  );
}

export default Course;
