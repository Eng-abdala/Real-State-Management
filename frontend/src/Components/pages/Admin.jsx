import { useState } from "react"
import {toast, Toaster} from "react-hot-toast"
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import axios from "axios";


export default function Admin(){

    const [username,setusename]=useState('')
    const [Passwod,setPassword]=useState('')

    const navigate=useNavigate()

    const Handle =(e)=>{
        e.preventDefault()
        if( username.trim()=="" || Passwod.trim()==""){
            toast.error("Please Form the fill!")
        }

        else{
            axios.post("http://localhost:5000/AdminLogin",{
                "username": username,
                "Password": Passwod
            }).then((res)=>{
                if(res.data.success){
                    toast.success("login successfu")
                    navigate("/Dashboard")
                }
                else{
                    toast.error("username and password are incorrect!")
                }
                
            }).catch((e)=>{
                console.log(e)
            })
        }


    }


    return <div className="bg-[#cae9ff] h-screen">
     <motion.div className="flex justify-center pt-20"
    initial={{opacity:0, x:'-100vh'}}
    animate={{opacity:1 ,x:0}}
    transition={{duration:1}}  >

        <div className="border-2 border-[#036194] bg-[#036194] text-[#cae9ff] w-[400px] text-center shadow-2xl py-20 rounded">
            <h1 className="text-3xl font-semibold pb-10">Admin Page</h1>
        <form className="relative">
            <motion.input
            value={username}
            initial={{opacity:0 , y:-20}}
            animate={{opacity:1 ,y:0}}
            transition={{duration:0.5 , delay:1}}
            
            onChange={(e)=> setusename(e.target.value)} className="border-2  outline-none border-[#a8dadc] w-[350px] py-2 m-3 rounded pl-10" type="Email" placeholder="Enter Your Email" /> <br />
            <motion.img
             initial={{opacity:0 , x:-20}}
             animate={{opacity:1 ,x:0}}
             transition={{duration:0.5 , delay:1}}
            
            className="w-[30px] absolute top-5 left-7" src="src/images/email (1).png" alt="" />

            <motion.input 
            value={Passwod}
             initial={{opacity:0 , y:-20}}
             animate={{opacity:1 ,y:0}}
             transition={{duration:0.5 , delay:1.5}}

            onChange={(e)=> setPassword(e.target.value)} className="border-2 outline-none border-[#a8dadc] w-[350px] py-2 m-3 rounded pl-10" type="password" placeholder="Enter Your Password" /> <br />
            <motion.img
            
             initial={{opacity:0 , x:-20}}
             animate={{opacity:1 ,x:0}}
             transition={{duration:0.5 , delay:1.5}}
            
            className="w-[30px] absolute top-22 left-7" src="src/images/padlock.png" alt="" />

            <motion.button onClick={Handle} className="bg-[#cae9ff] text-[#036194] px-32 py-2 text-2xl rounded-2xl my-2"
             initial={{opacity:0 , y:20}}
             animate={{opacity:1 ,y:0}}
             transition={{duration:1 , delay:1.7}}
             >Login</motion.button>




        </form>
        <Toaster></Toaster>

        </div>
    </motion.div>
    </div>
}