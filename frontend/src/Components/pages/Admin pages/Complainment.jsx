import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Complainment = () => {
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch complaints from the backend
  const fetchComplaints = async () => {
    try {
      const response = await axios.get('http://localhost:5000/get/complainments');
      setComplaints(response.data);
      setLoading(false);
    } catch (error) {
      setError('Error fetching complaints');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchComplaints();
  }, []);

  return (
    <div>
    <h2 className="text-2xl font-bold text-gray-800 mb-6 mt-10 text-center">Submitted Complaints</h2>
    <div className=" sm:w-[500px] w-[380px] sm:p-8 p-2">

      {loading && <p className="text-gray-600 text-center">Loading complaints...</p>}
      {error && <p className="text-red-500 text-center">{error}</p>}

      {complaints.length === 0 && !loading ? (
        <p className="text-center text-gray-600 py-4">No complaints submitted yet.</p>
      ) : (
        <div className="grid sm:grid-cols-[400px_400px_400px] grid-rows-1 sm:ml-20 ml-2 gap-10">
          {complaints.map((complaint, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md border border-gray-300">
              <p className="text-lg font-semibold text-gray-800"><strong>Name:</strong> {complaint.name}</p>
              <p className="text-gray-700"><strong>Email:</strong> {complaint.email}</p>
              <p className="text-gray-700"><strong>Message:</strong> {complaint.message}</p>
              <p className="text-gray-600 text-sm"><strong>Submitted On:</strong> {new Date(complaint.createdAt).toLocaleDateString()}</p>
            </div>
          ))}
        </div>
      )}
    </div>
    </div>
  );
};

export default Complainment;
