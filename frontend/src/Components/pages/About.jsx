import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "./footer";

export default function About() {
  const [totalHouses, setTotalHouses] = useState(1);
  const [availableHouses, setAvailableHouses] = useState(1);
  const [unavailableHouses, setUnavailableHouses] = useState(1);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const intervalTotal = setInterval(() => {
      setTotalHouses((prev) => {
        if (prev >= 200) {
          clearInterval(intervalTotal);
          return 200;
        }
        return prev + 1;
      });
    }, 10);

    const intervalAvailable = setInterval(() => {
      setAvailableHouses((prev) => {
        if (prev >= 120) {
          clearInterval(intervalAvailable);
          return 120;
        }
        return prev + 1;
      });
    }, 15);

    const intervalUnavailable = setInterval(() => {
      setUnavailableHouses((prev) => {
        if (prev >= 80) {
          clearInterval(intervalUnavailable);
          return 80;
        }
        return prev + 1;
      });
    }, 20);

    return () => {
      clearInterval(intervalTotal);
      clearInterval(intervalAvailable);
      clearInterval(intervalUnavailable);
    };
  }, []);

  return (
    <div className="font-[Roboto]">
      {/* Header */}
      <div className="flex justify-between sm:px-10 px-5 bg-[#003049] font-semibold text-white py-6 items-center">
        <h1 className="sm:text-4xl text-2xl font-[JosefinSans]">Real Estate</h1>

        <div className=" gap-10 text-2xl font-semibold sm:flex hidden">
          <Link to="/home" className="cursor-pointer hover:text-[#a8dadc]">Home</Link>
          <Link to="/About" className="cursor-pointer hover:text-[#a8dadc]">About</Link>
        </div>

        <div className="sm:flex items-center hidden">
          {/* <button className="bg-[#a8dadc] px-8 py-2 text-[20px] text-[#003049] m-3 rounded-4xl">
            <Link to="/login">Login</Link>
          </button>
          <button className="px-8 py-2 text-[20px] text-[#a8dadc] m-3 rounded-4xl hover:border-2 hover:border-[#a8dadc]">
            <Link to="/signUp">Sign Up</Link>
          </button> */}
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
          {/* <Link to="/login" className="text-lg hover:text-[#a8dadc]" onClick={() => setMenuOpen(false)}>Login</Link>
          <Link to="/signUp" className="text-lg hover:text-[#a8dadc]" onClick={() => setMenuOpen(false)}>Sign Up</Link> */}
          <Link to="/ComplaintForm">
            <button className="bg-[#a8dadc] text-[#003049] px-4 py-2 rounded-full hover:bg-white transition-all" onClick={() => setMenuOpen(false)}>
              Send Complaint
            </button>
          </Link>
        </motion.div>
      )}
   



      {/* About Section */}
      <div className="sm:flex justify-between sm:px-40 px-8 py-10 items-center">


      <motion.img
         initial={{ opacity: 0, x: 100 }}
         whileInView={{ opacity: 1, x: 0 }}
         transition={{ duration: 2 }}
        
        className="w-[500px] sm:hidden flex my-10 rounded-b-full"src="/src/images/about.jpeg"/>
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
        
        
        className="sm:w-[550px] w-[350px]">
          <h1 className="text-4xl font-bold text-[#036194] ">About Us</h1>
          <h1 className="border-b-4 text-[#00f7ff] mr-90 my-2"></h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, est
            aliquam! Exercitationem veritatis nesciunt a provident magnam
            ratione aperiam, eveniet voluptatum repellat nisi ullam modi!
            Dolorum autem quod optio. Soluta, dolorem corporis. Quod commodi
            expedita hic earum illo animi unde tempora cupiditate corporis sequi
            consequatur, delectus perspiciatis praesentium? Porro officia sed
            neque sequi, nostrum velit veritatis numquam aliquid maiores rem?
          </p>

          <div className="my-2 sm:flex flex-row  gap-7 sm:text-center sm:pl-0 pl-10">
            <div>
              <h1 className="text-black text-[20px] font-semibold">Total Houses</h1>
              <i className="fa-solid fa-house mt-1 text-[20px] text-[#00f7ff] "> <span className="text-[#036194]">  {totalHouses}</span></i>
            </div>
            <div className="sm:py-0 py-3">
              <h1 className="text-[#036194] text-[20px] font-semibold"> Available Houses</h1>
              <i className="fa-solid fa-house mt-1 text-[20px] text-[#00f7ff] "><span className="text-[#036194]">  {availableHouses}</span></i>
            </div>
            <div>
              <h1 className="text-red-500 text-[20px] font-semibold">Unavailable Houses</h1>
              <i className="fa-solid fa-house mt-1 text-[20px] text-[#00f7ff] "><span className="text-[#036194]">  {unavailableHouses}</span></i>
            </div>
          </div>
          <button className="text-2xl bg-[#036194] px-2 py-2 text-white rounded mt-4 hover:bg-[#00f7ff] hover:text-black  cursor-pointer">See Houses</button>
        </motion.div>

        <motion.img
         initial={{ opacity: 0, x: 100 }}
         whileInView={{ opacity: 1, x: 0 }}
         transition={{ duration: 2 }}
        
        className="w-[500px] sm:flex hidden my-10 rounded-b-full"src="/src/images/about.jpeg"/>
      </div>


{/* section owrners */}
<div>
  <h1 className="text-3xl font-bold text-[#036194] text-center">Owners Real State Componey</h1>
<div className="sm:flex gap-3 justify-center my-10 sm:ml-0 ml-10">
  <motion.div 

initial={{ opacity: 0, y: 100 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 2 }}
  
  className=" relative border-2 border-gray-300 shadow w-[290px] my-10">
    <img className="w-75 h-50" src="src/images/ff0d0c4d-baf4-45aa-8ba1-f524d80d4ea6.jpeg" alt="" />
      <img className="w-15 ml-1 border-4 h-15 border-white bg-white rounded-full absolute top-40 shadow-2xl" src="src/images/WhatsApp_Image_2024-09-02_at_06.20.30_e81b8f5d-removebg-preview.png" alt="" />
    <div className="pl-1">
      <h1 className="mt-6 font-bold">Abdullahi Mohamed</h1>
      <h1 className="mt-1">Im One of The Owners Real State Company</h1>
      <button className="bg-[#00f7ff] px-2 py-1 font-semibold rounded my-2">Know About Me</button>

    </div>
  </motion.div>

  <motion.div 
  initial={{ opacity: 0, y: -100 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 2 }}
  className=" relative border-2 border-gray-300 shadow w-[290px] my-10">
    <img className="w-75 h-50" src="src/images/0b8b90c4-5f99-4d78-93f3-c8e4989a9c15.jpeg" alt="" />
      <img className="w-15 ml-1  h-15 bg-white  border-white border-4  rounded-full absolute top-40 shadow-2xl" src="src/images/WhatsApp_Image_2024-11-26_at_11.02.17_8818ad38-removebg-preview.png" alt="" />
    <div className="pl-1">
      <h1 className="mt-6 font-bold">Abdullahi Salaad</h1>
      <h1 className="mt-1">Im One of The Owners Real State Company</h1>
      <button className="bg-[#00f7ff] px-2 py-1 font-semibold rounded my-2">Know About Me</button>

    </div>
  </motion.div>

  <motion.div 
  initial={{ opacity: 0, y: 100 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 2 }}
  
  className=" relative border-2 border-gray-300 shadow w-[290px] my-10">
    <img className="w-75 h-50" src="src/images/0b8b90c4-5f99-4d78-93f3-c8e4989a9c15.jpeg" alt="" />
      <img className="w-15 ml-1 border-4 h-15 border-[#036194] rounded-full absolute top-40 shadow-2xl" src="src/images/WhatsApp_Image_2024-09-02_at_06.20.30_e81b8f5d-removebg-preview.png" alt="" />
    <div className="pl-1">
      <h1 className="mt-6 font-bold">Abdullahi Mohamed</h1>
      <h1 className="mt-1">Im One of The Owners Real State Company</h1>
      <button className="bg-[#00f7ff] px-2 py-1 font-semibold rounded my-2">Know About Me</button>

    </div>
  </motion.div>

  <motion.div
  initial={{ opacity: 0, y: -100 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 2 }}
  
  className=" relative border-2 border-gray-300 shadow w-[290px] my-10">
    <img className="w-75 h-50" src="src/images/0b8b90c4-5f99-4d78-93f3-c8e4989a9c15.jpeg" alt="" />
      <img className="w-15 ml-1 border-4 h-15 border-[#036194] rounded-full absolute top-40 shadow-2xl" src="src/images/WhatsApp_Image_2024-09-02_at_06.20.30_e81b8f5d-removebg-preview.png" alt="" />
    <div className="pl-1">
      <h1 className="mt-6 font-bold">Abdullahi Mohamed</h1>
      <h1 className="mt-1">Im One of The Owners Real State Company</h1>
      <button className="bg-[#00f7ff] px-2 py-1 font-semibold rounded my-2">Know About Me</button>

    </div>
  </motion.div>
</div>
</div>
      
<Footer></Footer>
    </div>
  );
}
