import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';


const AddBook = () => {

  const [bookData, setBookData] = useState({
    name: '',
    image: '',
    category: 'free',
    price: 0,
    description: '',
  });

  const handleChange = (e) => {
    const {name ,value} = e.target;
  
    if(name ==="category" && value ==="free"){
    setBookData({
      ...bookData,
      category: value,
      price:0,
    });}
    else{
      setBookData({
        ...bookData,
        [name]:value,  
      })
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('/api/book/addBook', bookData,{
        headers:{
            Authorization: token,
        }
      });
      console.log('Book added:', response.data);
      toast.success('Book added Successfully')
      // Optionally, clear the form or give feedback to the user
    } catch (error) {
        console.log(error);
     toast.error(error.response?.data?.message);
   
     
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
      <div className="w-full max-w-2xl p-8 bg-white rounded-lg shadow-lg text-black">
        <h2 className="text-4xl font-bold mb-8 text-center">Add New Book</h2>
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Book Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Book Name</label>
            <input
              type="text"
              name="name"
              value={bookData.name}
              onChange={handleChange}
              required
              placeholder='Enter Book Name ...'
              className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Price and Category */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select
                name="category"
                value={bookData.category}
                onChange={handleChange}
                required
                className="block w-full px-2 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="paid">Paid</option>
                <option value="free">Free</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Price</label>
              <input
                type="number"
                name="price"
                value={bookData.price}
                onChange={handleChange}
                required
                disabled={bookData.category ==='free'}
                min={0}
                className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
            <textarea
              name="description"
              value={bookData.description}
              onChange={handleChange}
              placeholder='Enter Description Here ....'
              className="block w-full h-32 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
