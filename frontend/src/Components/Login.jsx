import { useState } from "react"
import {toast, Toaster} from "react-hot-toast"
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";

export default function Login(){



    const [Email,setEmail]=useState('')
    const [Passwod,setPassword]=useState('')

    const navigate=useNavigate()

    const Handle =(e)=>{
        e.preventDefault()
        if( Email.trim()=="" || Passwod.trim()==""){
            toast.error("Please Form the fill!")
        }
        // else{
        //     toast.success("Successfully Login")
        //     navigate("/rent")
        // }

    }

    // sign in Button

    const signup=( e)=>{
        e.preventDefault()
        navigate("/signUp")

    }

    return <div className="bg-[#036] h-screen">
     <motion.div className="flex justify-center pt-20"
    initial={{opacity:0, x:'-100vh'}}
    animate={{opacity:1 ,x:0}}
    transition={{duration:1}}  >

        <div className="border-2 border-[#036194] bg-[#cae9ff] w-[400px] text-center shadow-2xl rounded">
        <motion.img 
        initial={{opacity:0 , y:-20}}
        animate={{opacity:1 ,y:0}}
        transition={{duration:1 , delay:0.6}}
        
        className="w-[400px]" src="src/images/login.jpeg" alt="" />
        <form className="relative">
            <motion.input
            initial={{opacity:0 , y:-20}}
            animate={{opacity:1 ,y:0}}
            transition={{duration:0.5 , delay:1}}
            
            onChange={(e)=> setEmail(e.target.value)} className="border-2  outline-none border-[#a8dadc] w-[350px] py-2 m-3 rounded pl-10" type="Email" placeholder="Enter Your Email" /> <br />
            <motion.img
             initial={{opacity:0 , x:-20}}
             animate={{opacity:1 ,x:0}}
             transition={{duration:0.5 , delay:1}}
            
            className="w-[30px] absolute top-5 left-7" src="src/images/email (1).png" alt="" />

            <motion.input 
             
             initial={{opacity:0 , y:-20}}
             animate={{opacity:1 ,y:0}}
             transition={{duration:0.5 , delay:1.5}}

            onChange={(e)=> setPassword(e.target.value)} className="border-2 outline-none border-[#a8dadc] w-[350px] py-2 m-3 rounded pl-10" type="password" placeholder="Enter Your Password" /> <br />
            <motion.img
            
             initial={{opacity:0 , x:-20}}
             animate={{opacity:1 ,x:0}}
             transition={{duration:0.5 , delay:1.5}}
            
            className="w-[30px] absolute top-22 left-7" src="src/images/padlock.png" alt="" />

            <motion.button onClick={Handle} className="bg-[#036194] text-white px-32 py-2 text-2xl rounded-2xl my-2"
             initial={{opacity:0 , y:20}}
             animate={{opacity:1 ,y:0}}
             transition={{duration:1 , delay:1.7}}
            
            
            >Login</motion.button>

            <h1 className="py-4">Don't have account? <button onClick={signup} className="text-[#036194] font-semibold cursor-pointer">SignUp</button></h1>



        </form>
        <Toaster></Toaster>

        </div>
    </motion.div>
    </div>
}