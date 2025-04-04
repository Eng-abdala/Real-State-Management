import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Footer from './pages/footer';

export default function Header() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);


  const getHouse = () => {
    axios.get('http://localhost:5000/gethouse').then((res) => {
      setData(res.data);
    }).catch((error) => {
      console.log(error);
    });
  };

  const searchHouse = data.filter((item) => {
    return item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.location.toLowerCase().includes(search.toLowerCase()) ||
      item.price.toString().includes(search);
  });

  useEffect(() => {
    getHouse();
  }, []);

  const sentence = "Find Your Dream Home 🚀";
  const letters = sentence.split("");

  return (
    <div className="font-[Roboto] ">
      {/* Header */}
      <div className="flex justify-between sm:px-10 px-5 bg-[#003049] font-semibold text-white py-6 items-center">
        <h1 className="sm:text-4xl text-2xl font-[JosefinSans]">Real Estate</h1>

        <div className=" gap-10 text-2xl font-semibold sm:flex hidden">
          <Link to="/" className="cursor-pointer hover:text-[#a8dadc]">Home</Link>
          <Link to="/About" className="cursor-pointer hover:text-[#a8dadc]">About</Link>
        </div>

        <div className="sm:flex items-center hidden">
          <button className="bg-[#a8dadc] px-8 py-2 text-[20px] text-[#003049] m-3 rounded-4xl">
            <Link to="/login">Login</Link>
          </button>
          <button className="px-8 py-2 text-[20px] text-[#a8dadc] m-3 rounded-4xl hover:border-2 hover:border-[#a8dadc]">
            <Link to="/signUp">Sign Up</Link>
          </button>
          <Link to="/ComplaintForm">
            <button className="bg-[#003049] border-2 border-slate-700 hover:bg-[#a8dadc] hover:text-black text-white px-4 py-2 rounded-full transition duration-300 ease-in-out shadow-md">
              Send Complaint
            </button>
          </Link>
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)} className="sm:hidden text-3xl hover:scale-110 transition-all duration-300">
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="sm:hidden flex flex-col bg-[#003049] text-white text-center py-5 space-y-4"
        >
          <Link to="/" className="text-lg hover:text-[#a8dadc]" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/About" className="text-lg hover:text-[#a8dadc]" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/login" className="text-lg hover:text-[#a8dadc]" onClick={() => setMenuOpen(false)}>Login</Link>
          <Link to="/signUp" className="text-lg hover:text-[#a8dadc]" onClick={() => setMenuOpen(false)}>Sign Up</Link>
          <Link to="/ComplaintForm">
            <button className="bg-[#a8dadc] text-[#003049] px-4 py-2 rounded-full hover:bg-white transition-all" onClick={() => setMenuOpen(false)}>
              Send Complaint
            </button>
          </Link>
        </motion.div>
      )}

      {/* Second Section */}
      <div
        className="bg-[url('src/images/dd.jpg')] relative sm:h-[600px] h-[300px] bg-cover bg-center items-center text-center sm:pt-52 pt-20"
      >
        <div className="absolute inset-0 bg-[#036194] opacity-20 "></div>
        <motion.h1 className="sm:text-4xl text-2xl text-[#036194] font-bold">
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1, delay: index * 0.1 }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.h1>
        <motion.input  
          value={search} 
          onChange={(e) => setSearch(e.target.value)}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="border-2 border-[#a8dadc] relative z-10 bg-[#003049] text-white mt-3 sm:w-[650px] w-[350px] sm:py-4 py-2 rounded-4xl outline-none pl-2"
          type="text"
          placeholder=" Name Price and Location "
        />
        <motion.i
          className="fa-solid fa-magnifying-glass  z-10 text-white absolute sm:text-3xl text-2xl sm:top-[272px] sm:right-[450px] right-8 top-34 "
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        ></motion.i>
      </div>

      {/* Hero Case */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className=" grid sm:grid-cols-[300px_300px_300px_300px] grid-cols-[200px_200px] sm:ml-0  ml-8 items-center justify-center relative -top-5 "
      >
        <div className="text-center sm:w-[250px] w-[150px]">
          <i className="fa-solid fa-gears bg-[#003049] text-white text-[22px] py-6 px-5 border-4  border-white rounded-full"></i>
          <h1 className="font-bold py-2">Sell Property</h1>
          <p className=" sm:text-[18px] text-[12px]  text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dolore </p>
        </div>

        <div className="text-center sm:w-[250px] w-[150px]">
          <i className="fa-solid fa-house-user bg-[#003049] text-white text-[22px] py-6 px-6 border-4  border-white border-white rounded-full"></i>
          <h1 className="font-bold py-2">Single Apartment</h1>
          <p className=" sm:text-[18px] text-[12px]  text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dolore </p>
        </div>

        <div className="text-center sm:w-[250px] w-[150px]">
          <i className="fa-solid fa-users-rays bg-[#003049] text-white text-[22px] py-6 px-5 border-4  border-white border-white rounded-full"></i>
          <h1 className="font-bold py-2">Family House</h1>
          <p className=" sm:text-[18px] text-[12px]  text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dolore </p>
        </div>
        <div className="text-center sm:w-[250px] w-[150px]">
          <i className="fa-solid fa-building bg-[#003049] text-white text-[22px] py-6 px-6 border-4  border-white border-white rounded-full"></i>
          <h1 className="font-bold py-2">Company Location</h1>
          <p className=" sm:text-[18px] text-[12px] text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dolore </p>
        </div>
      </motion.div>

      {/* Newest Listings */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-center text-[#036194] sm:text-4xl text-2xl font-bold mt-10">Find a house that suits you</h1>
        <div
          className="grid sm:grid-cols-[300px_300px_300px_300px] grid-cols-[300px] justify-center gap-8 my-10"
        >
          {searchHouse.map((item, index) => (
            <div className="shadow-xl shadow-sky-200 w-[300px] rounded relative">
              <Link to={`/rent/${index}`}>
                <img className="w-[300px] h-[250px] rounded" src={`http://localhost:5000/images/${item.image}`} alt="" />
              </Link>
              <h1 className="text-[#006400] pt-2 text-[18px] pl-1 font-semibold">{item.title}</h1>
              <h1 className="font-bold py-2 pl-1">${item.price}</h1>
              <div className="flex gap-2 pl-1">
                <h1><span className="font-bold">{item.bed}</span> bed</h1>
                <h1><span className="font-bold">{item.bath}</span> bath</h1>
                <h1><span className="font-bold">{item.sqft}</span> sqft</h1>
              </div>
              <h1 className="py-2 pl-1">{item.location}</h1>
              <h1 className="absolute -top-3 -left-3 bg-[#036194] text-2 text-white rounded-full py-3 px-3 font-bold">{item.Gurinumber}</h1>
              <div className="flex justify-center">
                <h1 className={`py-2 pl-1 ${item.available ? "text-green-500" : "text-red-500"}`}>{item.available ? "Available" : "Unavailable"}</h1>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <Footer/>
      </div>
  );
}
