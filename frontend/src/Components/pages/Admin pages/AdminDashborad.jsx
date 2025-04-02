import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function AdminDashboard({ open }) {

    const [data, setData] = useState([])
    const [menuOpen, setMenuOpen] = useState(false);

    const getHouse = () => {
        axios.get('http://localhost:5000/gethouse').then((res) => {
            setData(res.data)
        }).catch((error) => {
            console.log(error)
        })
    }

    useEffect(() => {
        getHouse()
    }, [])

    const HandleDalte = (id) => {
        axios.delete("http://localhost:5000/remove/" + id).then(() => {

        }).catch((eror) => {
            console.log(eror)
        })
    }

    const toggleRentStatus = (id, currentStatus) => {
        axios.put(`http://localhost:5000/rent/${id}`, { available: !currentStatus })
            .then((res) => {
                setData(prevData =>
                    prevData.map(item =>
                        item._id === id ? { ...item, available: !currentStatus } : item
                    )
                );
            })
            .catch(error => console.log("Error updating status:", error));
    };

    const navigate = useNavigate()
    const admin = localStorage.getItem("admin")

    const protectRouter = () => {
        if (!admin) {
            navigate("/Admin")
        }
    }

    useEffect(() => {
        protectRouter()
    }, [])

    return <div>
        {/* ----------------- Header ----------------- */}
        <div className="flex justify-between sm:px-20 px-3 bg-[#003049] text-white py-6 items-center relative shadow-md">
            <h1 className="sm:text-4xl text-xl font-[JosefinSans]">Admin Page</h1>

            {/* Desktop Menu */}
            <div className="sm:flex hidden items-center space-x-4">
                <Link to="/Addhome">
                    <button className="transition-all duration-300 bg-[#a8dadc] hover:bg-[#82c7d0] cursor-pointer sm:px-8 px-3 sm:py-2 text-[20px] text-[#003049] m-3 rounded-2xl shadow-sm hover:scale-105">Add</button>
                </Link>
                <Link to="/Update">
                    <button className="transition-all duration-300 bg-[#a8dadc] hover:bg-[#82c7d0] cursor-pointer sm:px-8 px-3 sm:py-2 text-[20px] text-[#003049] m-3 rounded-2xl shadow-sm hover:scale-105">Update</button>
                </Link>
                <Link to="/Complainment">
                    <button className="sm:px-8 px-3 text-white cursor-pointer hover:text-gray-300 rounded-2xl transition-all duration-300">
                        <i className="fa-solid fa-box-open sm:text-[50px] text-[20px]"></i>
                    </button>
                </Link>
            </div>

            {/* Mobile Button */}
            <button onClick={() => setMenuOpen(!menuOpen)} className="sm:hidden text-3xl hover:scale-110 transition-all duration-300">
                <i className="fa-solid fa-bars"></i>
            </button>

            {/* Mobile Dropdown */}
            <div className={`absolute top-full right-3 bg-[#003049] rounded-md shadow-md w-[200px] py-3 space-y-2 sm:hidden z-50 transition-all duration-300 origin-top-right transform ${menuOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
                <Link to="/Addhome">
                    <button className="w-full text-left px-4 py-2 hover:bg-[#1b4d70] transition-all duration-300 rounded">Add</button>
                </Link>
                <Link to="/Update">
                    <button className="w-full text-left px-4 py-2 hover:bg-[#1b4d70] transition-all duration-300 rounded">Update</button>
                </Link>
                <Link to="/Complainment">
                    <button className="w-full text-left px-4 py-2 hover:bg-[#1b4d70] transition-all duration-300 rounded">Complainment</button>
                </Link>
            </div>
        </div>

        {/* ------------------ Title ------------------ */}
        <h1 className="text-4xl text-center font-semibold mt-10">Admin Access!</h1>

        {/* ------------------ Houses ------------------ */}
        <div className="grid sm:grid-cols-[400px_400px_400px] grid-cols-[350px] justify-center gap-8 my-10">
            {data.map((item) => {
                return (
                    <div key={item._id} className="transition-all duration-300 hover:scale-[1.02] shadow-xl sm:w-[400px] w-[350px] py-3 rounded relative bg-white">
                        <img className="w-full h-[250px] rounded" src={`http://localhost:5000/images/${item.image}`} alt="" />
                        <h1 className="text-[#006400] pt-2 text-[18px] pl-1 font-semibold">{item.title}</h1>
                        <h1 className="font-bold py-2 pl-1">${item.price}</h1>
                        <div className="flex gap-2 pl-1">
                            <h1><span className="font-bold">{item.bed}</span> bed</h1>
                            <h1><span className="font-bold">{item.bath}</span> bath</h1>
                            <h1><span className="font-bold">{item.sqft}</span> sqft</h1>
                        </div>
                        <h1 className="py-2 pl-1">{item.location}</h1>
                        <h1 className='absolute -top-3 -left-3 bg-[#036194] text-2 text-white rounded-full py-3 px-3 font-bold'>{item.Gurinumber}</h1>

                        <div className="flex justify-between items-center px-2 mt-2">
                            <h1 className={`py-2 pl-1 ${item.available ? "text-green-500" : "text-red-500"}`}>
                                {item.available ? "Available" : "Unavailable"}
                            </h1>

                            <button
                                className={`text-2xl px-4 mr-2 py-1 rounded transition-all duration-300 hover:scale-105 ${item.available ? "bg-[#003049] text-white hover:bg-[#082940]" : "bg-red-500 text-white hover:bg-red-600"}`}
                                onClick={() => toggleRentStatus(item._id, item.available)}
                            >
                                {item.available ? "Rent" : "Unrent"}
                            </button>

                            <i onClick={() => HandleDalte(item._id)} className="fa-solid fa-trash text-2xl text-red-600 cursor-pointer hover:text-red-800 transition-all duration-300"></i>
                        </div>

                    </div>
                )
            })}
        </div>
    </div>
}
