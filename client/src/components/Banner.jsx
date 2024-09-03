import banner from "../assets/Banner.png";
import { useSelector,  } from "react-redux";
import { useNavigate } from "react-router-dom";

function Banner() {

  const user = useSelector((state)=> state.auth.user)
  const navigate = useNavigate();
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 lg:px-40 px-6 mt-16 flex flex-col md:flex-row items-center my-10  space-y-8 md:space-y-0 md:space-x-10">
      <div className="w-full order-2 md:order-1 md:w-1/2 flex flex-col justify-center mt-12 md:mt-36 space-y-8">
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold leading-tight text-center md:text-left">
          Welcome to a place where you learn something{" "}
          <span className="text-pink-500">new every day!</span>
        </h1>
        <p className="hidden md:block  text-md md:text-xl text-gray-700 dark:text-gray-300 text-center md:text-left">
          Join us in exploring a variety of topics that broaden your knowledge.
          Discover content that inspires, educates, and entertains.
        </p>
        <div className="flex flex-col md:flex-row md:items-center gap-3">
          { user ? <button className="btn btn-secondary w-full md:w-auto mt-3 md:mt-0 py-3 px-8 rounded-md text-white bg-pink-500 hover:bg-pink-600 transition-all" 
          onClick={()=>navigate('/addBook')}>
            Add Book
          </button>:
          <button className="btn btn-secondary w-full md:w-auto mt-3 md:mt-0 py-3 px-8 rounded-md text-white bg-pink-500 hover:bg-pink-600 transition-all" 
          onClick={()=>navigate('/login')}>
            Get Started
          </button>
          }
        </div>
      </div>
      <div className="order-1 w-full md:w-1/2 flex justify-center mt-20 md:mt-40 lg:pt-40">
        <img
          src={banner}
          className="w-full h-auto max-w-sm md:max-w-full md:h-[500px] object-contain rounded-lg shadow-lg"
          alt="Banner"
        />
      </div>
    </div>
  );
}

export default Banner;
