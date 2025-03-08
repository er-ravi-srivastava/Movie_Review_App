import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";



const Review = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    rating: '',
    review: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://movie-review-api-ravis-projects-495941fa.vercel.app/review", formData);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        rating: '',
        review: ''
      });
    } catch (error) {
      console.error("Error sending review:", error);
    }
  };

  return (
    <div className="bg-white p-8 rounded-md shadow-lg max-w-lg mx-auto my-12">
      <h2 className="text-2xl font-bold text-center mb-6">Submit Your Movie Review</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="rating" className="block text-sm font-medium text-gray-700">Rating (1-5)</label>
          <input
            type="number"
            name="rating"
            id="rating"
            min="1"
            max="5"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            value={formData.rating}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="review" className="block text-sm font-medium text-gray-700">Review</label>
          <textarea
            name="review"
            id="review"
            rows="4"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            value={formData.review}
            onChange={handleInputChange}
          ></textarea>
        </div>
        
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit Review
        </button>
        
      </form>
    </div>
  );
};

export default Review;
