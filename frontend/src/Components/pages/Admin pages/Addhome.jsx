import {  useState } from "react"
import axios from "axios"
import {toast,Toaster} from "react-hot-toast"

export default function Addhome(){

    const [tile,setTitle]=useState("")
    const [price,setPrice]=useState("")
    const [bed,setBed]=useState("")
    const [bath,setBath]=useState("")
    const [sqrl,setSqrl]=useState("")
    const [location,setlocation]=useState("")
    const [Number,setNumber]=useState("")
    const [img,setImg]=useState(null)

  
    

    const PostDta=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:5000/posthouse",{
            "title" : tile,
            "price" : price,
            "bed": bed,
            "bath": bath,
            "sqft": sqrl,
            "location": location,
            "Gurinumber": Number,
            "img": img

        },
        {
            headers:{
              "Content-Type":"multipart/form-data"
            }
    
     }).then(()=>{

        toast.success("You have created the data ")
     }).catch((er)=>{
        console.log(er)
     })

    }
    



    return <div  className="bg-[url('src/images/pexels-frans-van-heerden-201846-1438832.jpg')] h-screen pt-10  bg-cover bg-center ">

<form className="border-2 border-[#a8dadc] w-[500px] text-center py-6 mx-auto bg-[#003049] opacity-90 text-white ">

<h1 className="text-center mt-6 text-2xl py-2 font-semibold">Add The Houses And  the Descriptions</h1>

    <input  onChange={(e)=> setTitle(e.target.value)} className="w-[400px] border-[#a8dadc] outline-none border-2 m-2 py-2 pl-2 rounded" type="text" placeholder="Enter House name" /> <br />
    <input  onChange={(e)=> setPrice(e.target.value)} className="w-[400px] border-[#a8dadc] outline-none border-2 m-2 py-2 pl-2 rounded" type="text" placeholder="Enter Price" /> <br />
    <input  onChange={(e)=> setBed(e.target.value)} className="w-[400px] border-[#a8dadc] outline-none border-2 m-2 py-2 pl-2 rounded" type="text" placeholder="Enter bed" /> <br />
    <input  onChange={(e)=> setBath(e.target.value)} className="w-[400px] border-[#a8dadc] outline-none border-2 m-2 py-2 pl-2 rounded" type="text" placeholder="Enter bath" /> <br />
    <input  onChange={(e)=> setSqrl(e.target.value)} className="w-[400px] border-[#a8dadc] outline-none border-2 m-2 py-2 pl-2 rounded" type="text" placeholder="Enter sqrl" /> <br />
    <input  onChange={(e)=> setlocation(e.target.value)} className="w-[400px] border-[#a8dadc] outline-none border-2 m-2 py-2 pl-2 rounded" type="text" placeholder="Enter Location" /> <br />
    <input  onChange={(e)=> setNumber(e.target.value)} className="w-[400px] border-[#a8dadc] outline-none border-2 m-2 py-2 pl-2 rounded" type="text" placeholder="Enter The Unique Number of the Home" /> <br />
    <input onChange={(e)=> setImg(e.target.files[0])}  className="w-[400px] text-[20px] py-2" type="file" /> <br />
    <button onClick={PostDta} className="bg-[#a8dadc] text-3xl px-20 py-2 text-white rounded my-3">Save</button>


</form>
<Toaster></Toaster>
    </div>
}