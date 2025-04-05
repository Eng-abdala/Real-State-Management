import { useState,useEffect } from "react"
import {toast, Toaster} from "react-hot-toast"
import { useNavigate,useLocation } from 'react-router-dom';
import { motion } from "framer-motion";
import axios from "axios";


export default function Login(){


    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        return () => {
            // Only remove selected-item if leaving /rent
            if (location.pathname === "/rent") {
                console.log("Clearing selected-item from localStorage...");
                localStorage.removeItem("selected-item");
            }
        };
    }, [location.pathname]); // Runs whenever route changes
  
  
     
     
    

   

    const [username,setusename]=useState('')
    const [Passwod,setPassword]=useState('')



    const Handle =(e)=>{
        e.preventDefault()
        if( username.trim()=="" || Passwod.trim()==""){
            toast.error("Please Form the fill!")
        }
       

        else{
            axios.post("http://localhost:5000/login",{
                "username": username,
                "Password": Passwod
            }).then((res)=>{
                if(res.data.success){
        navigate("/home")

               
               }
                
            }).catch((e)=>{
                console.log(e)
            })
        }




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
            value={username}
             initial={{opacity:0 ,x:-50}}
             animate={{opacity:1, x:0}}
             transition={{duration:1, delay:1}}
            
            
            onChange={(e)=> setusename(e.target.value)} className="border-2 outline-none border-[#a8dadc] w-[350px] py-2 m-3 rounded pl-10" type="text" placeholder="Enter Username" /> <br />
            <motion.img
            initial={{opacity:0 ,x:-50}}
            animate={{opacity:1, x:0}}
            transition={{duration:1, delay:1.4}}
            
            className="w-[30px] absolute top-5 left-7" src="src/images/user-profile.png" alt="" />

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