import axios from "axios"
import { useState,useEffect } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

export default function Update(){


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
    return <div className="bg-[#a8dadc] h-screen">
      <h1 className="text-3xl font-semibold text-center py-10">Update Page</h1>
        <div className="grid sm:grid-cols-[320px_320px_320px] grid-cols-[330px]  justify-center gap-8 my-10">
          {data.map((item) => {
            return (
              <div
             
              
              className=" shadow-xl  w-[330px] pb-2  text-white rounded relative bg-[#036194]"> 
                <img className="w-[330px] h-[200px] rounded" src={`http://localhost:5000/images/${item.image}`} alt="" /> 
                <h1 className="text-[#a8dadc] pt-2 text-[18px] pl-1 font-semibold">{item.title}</h1>
                <h1 className="font-bold py-2 pl-1">${item.price}</h1>
                <div className="flex gap-2 pl-1">
                  <h1><span className="font-bold">{item.bed}</span> bed</h1>
                  <h1> <span className="font-bold">{item.bath}</span> bath</h1>
                  <h1><span className="font-bold">{item.sqft}</span> sqft</h1>
                </div>
                <h1 className="py-2 pl-1">{item.location}</h1>
             <motion.h1 
              initial={{opacity:0 , y:-100}}
              animate={{opacity:1, y:0}}
              transition={{duration:2, delay:0.5}}
              
             
             className='absolute  -top-3 -left-3 bg-[#036194] text-2 text-white rounded-full py-3 px-3 font-bold'>{item.Gurinumber}</motion.h1>


          <Link to={"/UpdateFrom/"+ item._id }><motion.h1
           initial={{opacity:0 , y:100}}
           animate={{opacity:1, y:0}}
           transition={{duration:2, delay:1}}
           
          
          className="text-3xl bg-[#17d0d6] text-center text-black py-2 rounded mx-30">Edit</motion.h1></Link> 

    

              </div> 
            )
          })}
        </div>
    </div>
}