import { useState } from "react"
import {toast, Toaster} from "react-hot-toast"
import { useNavigate } from 'react-router-dom';
import {motion} from "framer-motion"
import axios from "axios"

export default function SignUp(){



    const [name,setName]=useState('')
    const [Email,setEmail]=useState('')
    const [Passwod,setPassword]=useState('')

    const navigate=useNavigate()

    const Handle =(e)=>{
        e.preventDefault()
        if(name.trim()=="" || Email.trim()=="" || Passwod.trim()==""){
            toast.error("Please Form the fill!")
        }

        else{
            axios.post("http://localhost:5000/Register",{
                "username": name,
                "Email": Email,
                "Password": Passwod
            }).then(()=>{
                toast.success("Congratulations")
                setTimeout(() => {
                    navigate("/login")
                }, 2000);
            }).catch((e)=>{
                console.log(e)

            })
        }

    }

    // sign in Button

    const signup=(e)=>{
        e.preventDefault()
        navigate("/login")

    }

    return <div className="flex justify-center p-20 bg-[#036194]" >

        <motion.div className="border-2 border-[#036194] bg-[#cae9ff] w-[400px] text-center shadow-2xl rounded"
        
        initial={{opacity:0 ,y:'-100vh'}}
        animate={{opacity:1, y:0}}
        transition={{duration:1}}
        >

        <motion.img className="w-[400px]" src="src/images/c2bd493393de383de90990ac5741bd5b.jpg" alt=""
         initial={{opacity:0 ,x:-30}}
         animate={{opacity:1, x:0}}
         transition={{duration:1, delay:0.5 }}
        
        
        />
        <form className="relative">
            <motion.input
            value={name}
             initial={{opacity:0 ,x:-50}}
             animate={{opacity:1, x:0}}
             transition={{duration:1, delay:1}}
            
            
            onChange={(e)=> setName(e.target.value)} className="border-2 outline-none border-[#a8dadc] w-[350px] py-2 m-3 rounded pl-10" type="text" placeholder="Enter Username" /> <br />
            <motion.img
            initial={{opacity:0 ,x:-50}}
            animate={{opacity:1, x:0}}
            transition={{duration:1, delay:1.4}}
            
            className="w-[30px] absolute top-5 left-7" src="src/images/user-profile.png" alt="" />

            <motion.input
            value={Email}
            initial={{opacity:0 ,x:-50}}
            animate={{opacity:1, x:0}}
            transition={{duration:1, delay:1.6}}
            
            
            onChange={(e)=> setEmail(e.target.value)} className="border-2 outline-none border-[#a8dadc] w-[350px] py-2 m-3 rounded pl-10" type="Email" placeholder="Enter Your Email" /> <br />
            <motion.img
            initial={{opacity:0 ,x:-50}}
            animate={{opacity:1, x:0}}
            transition={{duration:1, delay:2}}
            
            className="w-[30px] absolute top-22 left-7" src="src/images/email (1).png" alt="" />

            <motion.input
            value={Passwod}
            initial={{opacity:0 ,x:-50}}
            animate={{opacity:1, x:0}}
            transition={{duration:1, delay:2.4}}
            
            
            onChange={(e)=> setPassword(e.target.value)} className="border-2 outline-none border-[#a8dadc] w-[350px] py-2 m-3 rounded pl-10" type="password" placeholder="Enter Your Password" /> <br />
            <motion.img 
            initial={{opacity:0 ,x:-50}}
            animate={{opacity:1, x:0}}
            transition={{duration:1, delay:1.8}}
            className="w-[30px] absolute top-38 left-7" src="src/images/padlock.png" alt="" />

            <motion.button onClick={Handle} className="bg-[#036194] text-white px-32 py-2 text-2xl rounded-2xl my-2"
            initial={{opacity:0 ,y:20}}
            animate={{opacity:1, y:0}}
            transition={{duration:1, delay:3}}
            
            
            >Sign Up</motion.button>

            <h1 className="py-4">I have an account? <button onClick={signup} className="text-[#036194] font-semibold cursor-pointer">Login</button></h1>



        </form>
        <Toaster></Toaster>

        </motion.div>
    </div>
}