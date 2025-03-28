import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function AdminDashboard({open}){


    const [data, setData] = useState([])

const getHouse = ()=>{

    axios.get('http://localhost:5000/gethouse').then((res) => {
        setData(res.data)
        
    }).catch((error)=>{
        console.log(error)

    })
}

useEffect(()=>{
    getHouse()  
}  )

// Dalete APi

const HandleDalte=(id)=>{
    axios.delete("http://localhost:5000/remove/"+id).then(()=>{
     
    }).catch((eror)=>{
      console.log(eror)
    })
  }



//   Update button rent
const toggleRentStatus = (id, currentStatus) => {
    axios.put(`http://localhost:5000/rent/${id}`, { available: !currentStatus }) // Send the new status
        .then((res) => {
            console.log("Updated House:", res.data); // Debugging
            setData(prevData =>
                prevData.map(item =>
                    item._id === id ? { ...item, available: !currentStatus } : item
                )
            );
        })
        .catch(error => console.log("Error updating status:", error));
};


    const navigate=useNavigate()
    const admin =localStorage.getItem("admin")
    
    const protectRouter=()=>{
        if(!admin){
          navigate("/Admin")
        }
      }

      useEffect(()=>{
        protectRouter()
    })


    return <div>
         <div className="flex  justify-between px-20 bg-[#003049] text-white py-6 items-center ">
        <h1 className="text-4xl font-[JosefinSans]">Admin Page</h1>

       <div className="flex items-center ">
      <Link to="/Addhome"><button onClick={open} className="bg-[#a8dadc] cursor-pointer px-8 py-2 text-[20px] text-[#003049] m-3 rounded-4xl">Add Home</button> </Link>
      <Link to="/Update"><button onClick={open} className="bg-[#a8dadc] cursor-pointer px-8 py-2 text-[20px] text-[#003049] m-3 rounded-4xl">Update Home</button> </Link>

      <Link to="/Complainment"> <button onClick={open} className=" px-8  text-white cursor-pointer  rounded-4xl "> <i class="fa-solid fa-box-open  text-[50px]"></i></button> </Link> 
       </div>
    </div>


{/*  */}

<h1 className="text-4xl  text-center font-semibold mt-10">Admin Access!</h1>

<div>
<div className="grid grid-cols-[400px_400px_400px] justify-center gap-8 my-10">
          {data.map((item) => {
            return (
              <div className=" shadow-xl shadow-sky-200 w-[400px] py-3 rounded relative"> 
                <img className="w-[400px] h-[250px] rounded" src={`http://localhost:5000/images/${item.image}`} alt="" /> 
                <h1 className="text-[#006400] pt-2 text-[18px] pl-1 font-semibold">{item.title}</h1>
                <h1 className="font-bold py-2 pl-1">${item.price}</h1>
                <div className="flex gap-2 pl-1">
                  <h1><span className="font-bold">{item.bed}</span> bed</h1>
                  <h1> <span className="font-bold">{item.bath}</span> bath</h1>
                  <h1><span className="font-bold">{item.sqft}</span> sqft</h1>
                </div>
                <h1 className="py-2 pl-1">{item.location}</h1>
             <h1 className='absolute  -top-3 -left-3 bg-[#036194] text-2 text-white rounded-full py-3 px-3 font-bold'>{item.Gurinumber}</h1>

             <div className="flex justify-between items-center px-2">
    <h1 className={`py-2 pl-1 ${item.available ? "text-green-500" : "text-red-500"}`}>
        {item.available ? "Available" : "Unavailable"}
    </h1>

    <button 
    className={`text-2xl px-4 mr-2 py-1 rounded ${
        item.available ? "bg-[#003049] text-white" : "bg-red-500 text-white"
    }`}
    onClick={() => toggleRentStatus(item._id, item.available)} // Send current status
>
    {item.available ? "Rent" : "Unrent"}
</button>

<i onClick={()=>HandleDalte(item._id)} class="fa-solid fa-trash text-2xl text-red-600"></i>

</div>

              </div> 
            )
          })}
        </div>

</div>
   </div>
}