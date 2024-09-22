import { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { useSearchParams, Link } from "react-router-dom";

function Course() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      setError(null); // Reset error before fetching

      try {
        const query = searchParams.get('q') || "";
        const token = localStorage.getItem('token');

        const { data } = await axios.get("/api/book/search", { params: { q: query },headers: {
          Authorization: token,
        }, });

        setBooks(data);
      } catch (err) {
        setError("No Avilable Books");
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, [searchParams]);

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="pt-28 text-center">
        <h1 className="text-2xl md:text-4xl">
          We're <span className="text-pink-500">Thrilled</span> to Have You Here!
        </h1>
        <p className="mt-12 text-gray-600">
          Explore a variety of books designed to enhance your knowledge and skills.
        </p>
        <Link to="/">
          <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 transition duration-300">
            Back
          </button>
        </Link>
      </div>

      {loading ? (
        <div className="text-center mt-12">
          <p>Loading books...</p>
        </div>
      ) : error ? (
        <div className="text-center mt-12 text-red-500">
          <p>{error}</p>
        </div>
      ) : (
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {books.map((item) => (
            <Cards key={item._id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Course;
