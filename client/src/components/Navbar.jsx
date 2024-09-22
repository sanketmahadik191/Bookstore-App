import React, { useEffect, useState, useCallback, startTransition } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

function Navbar() {
  const authUser = useSelector((state) => state.auth.user);
  const [sticky, setSticky] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleScroll = useCallback(() => {
    setSticky(window.scrollY > 0);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query) {
      // Use startTransition to handle navigation which may cause suspension
      startTransition(() => {
        navigate(`/course?q=${query}`);
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const navItems = (
    <>
      <li className="px-4 py-2 hover:bg-gray-100 rounded-md transition">
        <Link to="/">Home</Link>
      </li>
      <li className="px-4 py-2 hover:bg-gray-100 rounded-md transition">
        {/* Wrap the navigation to Course in startTransition */}
        <button
          onClick={() =>
            startTransition(() => {
              navigate("/course");
            })
          }
        >
          Store
        </button>
      </li>
      <li className="px-4 py-2 hover:bg-gray-100 rounded-md transition">
        <Link to="/contact">Contact</Link>
      </li>
      <li className="px-4 py-2 hover:bg-gray-100 rounded-md transition">
        <Link to="/aboutUs">About</Link>
      </li>
    </>
  );

  return (
    <div
      className={`w-full pt-4 fixed top-0 z-50 transition-all ${
        sticky ? "bg-white text-black shadow-lg" : "bg-slate-900 text-white"
      } py-3`}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="dropdown lg:hidden">
              <button tabIndex={0} className="btn btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 transition-colors ${
                    sticky ? "text-black" : "text-white"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </button>
              <ul
                tabIndex={0}
                className="dropdown-content bg-gray-800 text-white mt-3 p-2 shadow-lg rounded-box w-52 space-y-2"
              >
                {navItems}
              </ul>
            </div>
            <a href="/" className="text-2xl font-bold">
              BookStore
            </a>
          </div>
          <div className="hidden lg:flex space-x-8 items-center">
            <ul className="flex space-x-8 items-center">{navItems}</ul>
            <div className="relative">
              <form onSubmit={handleSearch}>
                <label className="input input-bordered flex items-center gap-2">
                  <input
                    type="text"
                    className="grow text-black"
                    placeholder="Search"
                    value={query}
                    onChange={(e) => {
                      setQuery(e.target.value);
                    }}
                  />
                  <button
                    type="submit"
                    className="text-black p-2 rounded-r-md hover:bg-gray-200 transition"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </label>
              </form>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            {authUser ? (
              <div
                className={`h-14 w-14 flex items-center justify-center cursor-pointer rounded-full hover:bg-slate-500 transition ${
                  sticky ? "bg-slate-700" : ""}`}
                onClick={() => navigate("/profile")}
              >
                <CgProfile className="h-10 w-10 text-white" />
              </div>
            ) : (
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
