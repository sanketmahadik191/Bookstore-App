import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { login } from "../redux/authSlice";
import { CgProfile } from "react-icons/cg";
import { FaChevronDown, FaChevronUp, FaTimes } from "react-icons/fa";
import Logout from "../components/Logout";

function Profile() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    userId: user._id,
    fullname: user.fullname,
    email: user.email,
    oldPassword: "",
    newPassword: "",
  });

  const [showPasswordFields, setShowPasswordFields] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const res = await axios.post("/api/user/updateProfile", formData,{
        headers:{
            Authorization: token,
        }
      });
      dispatch(login(res.data.user));
      toast.success("Profile updated successfully");
    } catch (error) {
      const errorMsg = error.response?.data?.message || "Failed to update profile";
      toast.error(errorMsg);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 text-black">
      <div className="relative w-full max-w-lg bg-white p-8 shadow-lg rounded-lg">
        <button
          onClick={() => navigate('/')}
          className="absolute top-4 right-4 text-gray-700 hover:text-gray-900"
        >
          <FaTimes className="h-6 w-6" />
        </button>
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Your Profile</h2>
        
        <div className="flex justify-center mb-6">
          <div className="h-24 w-24 flex items-center justify-center rounded-full bg-gray-200">
            <CgProfile className="h-16 w-16 text-gray-600" />
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="space-y-4 mb-6">
            <div>
              <label htmlFor="fullname" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                disabled
                className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </div>

          <div className="mb-6">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setShowPasswordFields(!showPasswordFields)}
            >
              <h3 className="text-lg font-semibold text-gray-700">Change Password</h3>
              {showPasswordFields ? (
                <FaChevronUp className="text-gray-700" />
              ) : (
                <FaChevronDown className="text-gray-700" />
              )}
            </div>
            {showPasswordFields && (
              <div className="space-y-4 mt-4">
                <div>
                  <label htmlFor="oldPassword" className="block text-sm font-medium text-gray-700">Old Password</label>
                  <input
                    type="password"
                    id="oldPassword"
                    name="oldPassword"
                    value={formData.oldPassword}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">New Password</label>
                  <input
                    type="password"
                    id="newPassword"
                    name="newPassword"
                    value={formData.newPassword}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>
            )}
          </div>

          <div className="flex justify-between mb-6">
            <button
              type="button"
              onClick={()=>navigate('/addBook')}
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition w-1/2 mr-2"
            >
              Add Book
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition w-1/2 ml-2"
            >
              Save Changes
            </button>
          </div>

          <div className="mt-6 w-full">
            <Logout />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Profile;
