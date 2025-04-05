import {  useState ,useEffect} from "react"
import axios from "axios"
import {toast,Toaster} from "react-hot-toast"
import {  useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"

export default function UpdateFrom(){

    const param=useParams()

    const navige= useNavigate()
    
    const [tile,setTitle]=useState("")
    const [price,setPrice]=useState("")
    const [bed,setBed]=useState("")
    const [bath,setBath]=useState("")
    const [sqrl,setSqrl]=useState("")
    const [location,setlocation]=useState("")
    const [Number,setNumber]=useState("")

  

    const handGet=()=>{
        axios.get("http://localhost:5000/getSingle/"+param.id).then((res)=>{
            setTitle(res.data[0].title)
            setPrice(res.data[0].price)
            setBed(res.data[0].bed)
            setBath(res.data[0].bath)
            setSqrl(res.data[0].sqft)
            setlocation(res.data[0].location)
            setNumber(res.data[0].Gurinumber)

        }).catch((er)=>{
            console.log(er)
        })
    }
    
useEffect(()=>{
    handGet()
},[])


    const update=(e)=>{
        e.preventDefault()
        axios.put("http://localhost:5000/Update/"+param.id,{
            "title" : tile,
            "price" : price,
            "bed": bed,
            "bath": bath,
            "sqft": sqrl,
            "location": location,
            "Gurinumber": Number
        }).then(()=>{
        toast.success("You have created the data ")
        
        setTimeout(() => {
            navige("/dashboard")
        }, 1000);
     }).catch((er)=>{
        console.log(er)
     })

    }
    



    return <div  >

<form className="border-2 border-[#a8dadc] sm:w-[500px] w-[380px] mt-10 text-center py-6 mx-auto bg-[#003049] opacity-90 text-white ">

<h1 className="text-center mt-6 text-2xl py-2 font-semibold">Add The Houses And  the Descriptions</h1>

    <input value={tile}  onChange={(e)=> setTitle(e.target.value)} className="sm:w-[400px] w-[350px] border-[#a8dadc] outline-none border-2 m-2 sm:py-2 py-1  pl-2 rounded" type="text" placeholder="Enter House name" /> <br />
    <input  value={price} onChange={(e)=> setPrice(e.target.value)} className="sm:w-[400px] w-[350px] border-[#a8dadc] outline-none border-2 m-2 sm:py-2 py-1  pl-2 rounded" type="text" placeholder="Enter Price" /> <br />
    <input value={bed}  onChange={(e)=> setBed(e.target.value)} className="sm:w-[400px] w-[350px] border-[#a8dadc] outline-none border-2 m-2 sm:py-2 py-1  pl-2 rounded" type="text" placeholder="Enter bed" /> <br />
    <input  value={bath} onChange={(e)=> setBath(e.target.value)} className="sm:w-[400px] w-[350px] border-[#a8dadc] outline-none border-2 m-2 sm:py-2 py-1  pl-2 rounded" type="text" placeholder="Enter bath" /> <br />
    <input value={sqrl} onChange={(e)=> setSqrl(e.target.value)} className="sm:w-[400px] w-[350px] border-[#a8dadc] outline-none border-2 m-2 sm:py-2 py-1  pl-2 rounded" type="text" placeholder="Enter sqrl" /> <br />
    <input  value={location} onChange={(e)=> setlocation(e.target.value)} className="sm:w-[400px] w-[350px] border-[#a8dadc] outline-none border-2 m-2 sm:py-2 py-1  pl-2 rounded" type="text" placeholder="Enter Location" /> <br />
    <input  value={Number} onChange={(e)=> setNumber(e.target.value)} className="sm:w-[400px] w-[350px] border-[#a8dadc] outline-none border-2 m-2 sm:py-2 py-1  pl-2 rounded" type="text" placeholder="Enter The Unique Number of the Home" /> <br />
    <button onClick={update} className="bg-[#a8dadc] text-3xl px-20 py-2 text-white rounded my-3">Save</button>


</form>
<Toaster></Toaster>
    </div>
}