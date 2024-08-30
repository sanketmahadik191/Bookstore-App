import banner from "../assets/Banner.png";

function Banner() {
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
          <label className="input input-bordered flex items-center gap-2 w-full md:w-auto rounded-md border border-gray-300 p-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-5 h-5 opacity-70">
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="text"
              className="grow outline-none rounded-md px-2 bg-transparent text-black dark:bg-slate-900 dark:text-white"
              placeholder="Enter your email"
            />
          </label>
          <button className="btn btn-secondary w-full md:w-auto mt-3 md:mt-0 py-3 px-8 rounded-md text-white bg-pink-500 hover:bg-pink-600 transition-all">
            Get Started
          </button>
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
