import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Complainment = () => {
  const [complaints, setComplaints] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  // Fetch complaints from the backend
  const fetchComplaints = async () => {
    try {
      const response = await axios.get('http://localhost:5000/get/complainments')
      setComplaints(response.data)
      setLoading(false)
    } catch (error) {
      setError('Error fetching complaints')
      setLoading(false)
    }
  }

  
  useEffect(() => {
    fetchComplaints();
  }, []);

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Submitted Complaints</h2>

      
      {loading && <p className="text-gray-600">Loading complaints...</p>}

      
      {error && <p className="text-red-500">{error}</p>}

     
      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 border border-gray-300 text-left">Name</th>
            <th className="px-4 py-2 border border-gray-300 text-left">Email</th>
            <th className="px-4 py-2 border border-gray-300 text-left">Message</th>
            <th className="px-4 py-2 border border-gray-300 text-left">Submitted On</th>
          </tr>
        </thead>
        <tbody>
          {complaints.length === 0 && !loading ? (
            <tr>
              <td colSpan="4" className="text-center text-gray-600 py-4">No complaints submitted yet.</td>
            </tr>
          ) : (
            complaints.map((complaint, index) => (
              <tr key={index} className="odd:bg-gray-50">
                <td className="px-4 py-2 border border-gray-300">{complaint.name}</td>
                <td className="px-4 py-2 border border-gray-300">{complaint.email}</td>
                <td className="px-4 py-2 border border-gray-300">{complaint.message}</td>
                <td className="px-4 py-2 border border-gray-300">
                  {new Date(complaint.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Complainment;
