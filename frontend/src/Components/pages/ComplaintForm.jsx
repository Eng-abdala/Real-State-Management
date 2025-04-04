import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const ComplaintForm = ({ onClose }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [responseMessage, setResponseMessage] = useState('')

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const complaintData = { name, email, message }

    try {
      // Make POST request to the backend API
      const response = await axios.post('http://localhost:5000/post/complainments', complaintData)
      setResponseMessage(response.data.message)
      setName('')
      setEmail('')
      setMessage('')

      // Close the form after 2 seconds
      setTimeout(() => onClose(), )
    } catch (error) {
      setResponseMessage('Error: Could not submit complaint.')
    }
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 fixed top-0 left-0 w-full z-50">
      <div className="bg-white p-8 rounded-s-md shadow-md w-96">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Write a Complaint</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700">Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700">Message:</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <div className="flex justify-between mt-4">
            <button
              type="submit"
              className="bg-blue-300 text-white py-2 px-6 text-xl font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Submit</button>
         <Link to ={"/"} >  <button type="button"onClick={onClose} className="bg-gray-400 text-white py-2 px-7 text-xl font-semibold rounded-md hover:bg-red-300 focus:outline-none focus:ring-2 focus:ring-gray-400"> Close</button> </Link> 
          </div>
        </form>
        {responseMessage && (
          <p className="mt-4 text-center text-green-500">{responseMessage}</p>
        )}
      </div>
    </div>
  )
}

export default ComplaintForm;