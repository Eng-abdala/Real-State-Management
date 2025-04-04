import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function AdminDashboard({ open }) {
  const [data, setData] = useState([]);
  const [complaintCount, setComplaintCount] = useState(0); // State cusub complaints-ka

  const getHouse = () => {
    axios.get('http://localhost:5000/gethouse')
      .then((res) => setData(res.data))
      .catch((error) => console.log(error));
  };

  // Complaints function for count
  const getComplaints = () => {
    axios.get('http://localhost:5000/get/complainments') 
      .then((res) => setComplaintCount(res.data.length))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getHouse();
    getComplaints(); 
  }, []);

  const HandleDelete = (id) => {
    axios.delete(`http://localhost:5000/remove/${id}`)
      .then(() => getHouse())
      .catch((error) => console.log(error));
  };

  const toggleRentStatus = (id, currentStatus) => {
    axios.put(`http://localhost:5000/rent/${id}`, { available: !currentStatus })
      .then(() => {
        setData(prevData =>
          prevData.map(item =>
            item._id === id ? { ...item, available: !currentStatus } : item
          )
        );
      })
      .catch(error => console.log("Error updating status:", error));
  };

  const navigate = useNavigate();
  const admin = localStorage.getItem("admin");

  useEffect(() => {
    if (!admin) navigate("/Admin");
  });

  return (
    <div>
      <div className="flex justify-between sm:px-20 px-3 bg-[#003049] text-white py-6 items-center">
        <h1 className="sm:text-4xl text-xl font-[JosefinSans]">Admin Page</h1>

        <div className="flex items-center">
          <Link to="/Addhome">
            <button onClick={open} className="bg-[#a8dadc] cursor-pointer sm:px-8 px-3 sm:py-2 text-[20px] text-[#003049] m-3 rounded-4xl">
              Add
            </button>
          </Link>
          <Link to="/Update">
            <button onClick={open} className="bg-[#a8dadc] cursor-pointer sm:px-8 px-3 sm:py-2 text-[20px] text-[#003049] m-3 rounded-4xl">
              Update
            </button>
          </Link>

          {/* Complaints icon-ka + Badge */}
          <Link to="/Complainment">
            <button className="relative sm:px-8 px-3 text-white cursor-pointer rounded-4xl">
              <i className="fa-solid fa-box-open sm:text-[50px] text-[20px] relative"></i>
              
             {complaintCount > 0 && (
                <span className="absolute -top-3 -right-2 mr-15 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                  {complaintCount}
                </span> 
              )}
            </button>
          </Link>
        </div>
      </div>

      <h1 className="text-4xl text-center font-semibold mt-10">Admin Access!</h1>

      <div className="grid sm:grid-cols-[400px_400px_400px] grid-cols-[350px] justify-center gap-8 my-10">
        {data.map((item) => (
          <div key={item._id} className="shadow-xl shadow-sky-200 sm:w-[400px] w-[350px] py-3 rounded relative">
            <img className="w-[400px] h-[250px] rounded" src={`http://localhost:5000/images/${item.image}`} alt="" />
            <h1 className="text-[#006400] pt-2 text-[18px] pl-1 font-semibold">{item.title}</h1>
            <h1 className="font-bold py-2 pl-1">${item.price}</h1>
            <div className="flex gap-2 pl-1">
              <h1><span className="font-bold">{item.bed}</span> bed</h1>
              <h1><span className="font-bold">{item.bath}</span> bath</h1>
              <h1><span className="font-bold">{item.sqft}</span> sqft</h1>
            </div>
            <h1 className="py-2 pl-1">{item.location}</h1>
            <h1 className='absolute -top-3 -left-3 bg-[#036194] text-2 text-white rounded-full py-3 px-3 font-bold'>{item.Gurinumber}</h1>

            <div className="flex justify-between items-center px-2">
              <h1 className={`py-2 pl-1 ${item.available ? "text-green-500" : "text-red-500"}`}>
                {item.available ? "Available" : "Unavailable"}
              </h1>

              <button 
                className={`text-2xl px-4 mr-2 py-1 rounded ${item.available ? "bg-[#003049] text-white" : "bg-red-500 text-white"}`}
                onClick={() => toggleRentStatus(item._id, item.available)}
              >
                {item.available ? "Rent" : "Unrent"}
              </button>

              <i onClick={() => HandleDelete(item._id)} className="fa-solid fa-trash text-2xl text-red-600"></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
