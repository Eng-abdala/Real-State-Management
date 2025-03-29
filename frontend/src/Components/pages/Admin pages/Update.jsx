import axios from "axios"
import { useState,useEffect } from "react"
import { Link } from "react-router-dom"

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
    return <div>
        <div className="grid sm:grid-cols-[320px_320px_320px_320px] grid-cols-[330px] justify-center gap-8 my-10">
          {data.map((item) => {
            return (
              <div className=" shadow-xl shadow-sky-200 w-[330px] py-3 rounded relative"> 
                <img className="w-[330px] h-[200px] rounded" src={`http://localhost:5000/images/${item.image}`} alt="" /> 
                <h1 className="text-[#006400] pt-2 text-[18px] pl-1 font-semibold">{item.title}</h1>
                <h1 className="font-bold py-2 pl-1">${item.price}</h1>
                <div className="flex gap-2 pl-1">
                  <h1><span className="font-bold">{item.bed}</span> bed</h1>
                  <h1> <span className="font-bold">{item.bath}</span> bath</h1>
                  <h1><span className="font-bold">{item.sqft}</span> sqft</h1>
                </div>
                <h1 className="py-2 pl-1">{item.location}</h1>
             <h1 className='absolute  -top-3 -left-3 bg-[#036194] text-2 text-white rounded-full py-3 px-3 font-bold'>{item.Gurinumber}</h1>


          <Link to={"/UpdateFrom/"+ item._id }><h1 className="text-3xl bg-[#17d0d6] text-center text-black py-2 rounded mx-30">Edit</h1></Link> 

    

              </div> 
            )
          })}
        </div>
    </div>
}