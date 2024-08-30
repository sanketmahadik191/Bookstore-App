import React, { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import Home from './home/Home';
import Signup from './components/Signup';
import Login from "./components/Login";
import AboutUs from './components/AboutUs';
import Contact from "./components/Contact";
import Profile from "./pages/Profile";
import Book from "./pages/Book";

// Lazy load the components

const Courses = lazy(() => import("./courses/Courses"));

// Fallback loading component
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <p>Loading...</p>
  </div>
);

function App() {
  const authUser = useSelector((state) => state.auth.user);

  return (
    <div className=" bg-slate-900 text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          />
          <Route path ="/login" element={<Login />}/>
          <Route path="/signup" element={<Signup />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/book/:id" element={<Book />} />

        </Routes>
      <Toaster />
    </div>
  );
}

export default App;
