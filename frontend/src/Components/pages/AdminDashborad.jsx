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


//  Update 
const rentHouse = (id) => {
    axios.put(`http://localhost:5000/rent/${id}`)
        .then(() => {
            setData(prevData => 
                prevData.map(item => 
                    item._id === id ? { ...item, available: false } : item
                )
            );
        })
        .catch(error => console.log(error));
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
      <Link to="/Complainment"> <button onClick={open} className=" px-8  text-white cursor-pointer  rounded-4xl "> <i class="fa-solid fa-box-open  text-[50px]"></i></button> </Link> 
       </div>
    </div>


{/*  */}

<h1 className="text-4xl  text-center font-semibold mt-10">Admin Access!</h1>

<div>
<div className="grid grid-cols-[300px_300px_300px_300px] justify-center gap-8 my-10">
          {data.map((item) => {
            return (
              <div className=" shadow-xl shadow-sky-200 w-[300px] py-3 rounded relative"> 
                <img className="w-[300px] h-[250px] rounded" src={`http://localhost:5000/images/${item.image}`} alt="" /> 
                <h1 className="text-[#006400] pt-2 text-[18px] pl-1 font-semibold">{item.title}</h1>
                <h1 className="font-bold py-2 pl-1">${item.price}</h1>
                <div className="flex gap-2 pl-1">
                  <h1><span className="font-bold">{item.bed}</span> bed</h1>
                  <h1> <span className="font-bold">{item.bath}</span> bath</h1>
                  <h1><span className="font-bold">{item.sqft}</span> sqft</h1>
                </div>
                <h1 className="py-2 pl-1">{item.location}</h1>
             <h1 className='absolute  -top-3 -left-3 bg-[#036194] text-2 text-white rounded-full py-3 px-3 font-bold'>{item.Gurinumber}</h1>

                
                <div className="flex justify-between items-center px-4">
    <h1 className={`py-2 pl-1 ${item.available ? "text-green-500" : "text-red-500"}`}>
        {item.available ? "Available" : "Unavailable"}
    </h1>
    
    {item.available && (
        <button 
            className="text-2xl px-8 mr-2 py-1 bg-[#003049] text-white rounded"
            onClick={() => rentHouse(item._id)}
        >
            Rent
        </button>
    )}
</div>

              </div> 
            )
          })}
        </div>




</div>



    </div>
}