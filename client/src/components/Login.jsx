import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { login } from '../redux/authSlice';

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    
    try {
      const res = await axios.post("/api/user/signIn", data);
       console.log(res.data);
       
      if (res.data) {
        toast.success("Logged in successfully");
        dispatch(login(res.data.user));
        navigate("/");  // Redirect to home after successful login
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed. Please try again.");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 dark:from-gray-800 dark:to-gray-900">
      <div className="relative w-full max-w-md bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
        {/* Close Button */}
        <button
          onClick={() => navigate('/')}
          className="absolute font-bold top-3 right-3 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100 focus:outline-none"
          aria-label="Close"
        >
          ✕
        </button>

        <h3 className="font-bold text-3xl text-gray-800 dark:text-white text-center mb-8">Login</h3>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="email" className="text-gray-600 dark:text-gray-300">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className={`w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-pink-500 dark:bg-gray-700 dark:text-white ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
              {...register("email", { required: "Email is required" })}
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email && <span className="text-sm text-red-500">{errors.email.message}</span>}
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="text-gray-600 dark:text-gray-300">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className={`w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-pink-500 dark:bg-gray-700 dark:text-white ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
              {...register("password", { required: "Password is required" })}
              aria-invalid={errors.password ? "true" : "false"}
            />
            {errors.password && <span className="text-sm text-red-500">{errors.password.message}</span>}
          </div>

          <button
            type="submit"
            className="w-full bg-pink-500 text-white rounded-md px-6 py-2 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-300"
          >
            Login
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-gray-600 dark:text-gray-300">
            Not registered?{" "}
            <Link
              to="/signup"
              className="underline text-pink-500 hover:text-pink-700 dark:text-pink-400 dark:hover:text-pink-600 transition duration-300"
            >
              Signup
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
