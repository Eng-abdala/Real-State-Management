import {motion} from 'framer-motion'
import { Link } from 'react-router-dom';
export default function Header() {


    const sentence = "Welcome Real State Management🚀";
    const letters = sentence.split("");

    return <div className=" font-[Roboto]">
        {/* Header */}
     <div className="flex  justify-between px-20 bg-[#003049] text-white py-6 items-center ">
        <h1 className="text-4xl font-[JosefinSans]">Real State</h1>

       <div>
        <button className="bg-[#a8dadc] px-8 py-2 text-[20px] text-[#003049] m-3 rounded-4xl"><Link to="/login">Login</Link></button> 
        <button className=" px-8 py-2 text-[20px] text-[#a8dadc] m-3 rounded-4xl hover:border-2 hover:border-[#a8dadc]"><Link to="/signUp">Sign Up</Link></button>
       </div>
    </div>

    {/* Second Section */}

    <div   className="bg-[url('src/images/dd.jpg')] relative h-[600px] bg-cover bg-center bg-gradient-to-b from-blue-500 to-green-500  items-center text-center pt-52" >

    <motion.h1 className="text-4xl text-[#036194] font-bold ">
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1, delay: index * 0.1,  }}
            >
            {letter}
          </motion.span>
        ))}
    
    </motion.h1>
    <motion.input 
    initial={{ opacity: 0 , y: 100}}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 1 }}
    
    className="border-2 border-[#a8dadc] bg-[#003049] text-white mt-3 w-[650px]  py-4 rounded-4xl outline-none pl-2" type="text" placeholder="Address, Price Name" />
    <motion.i  class="fa-solid fa-magnifying-glass text-white absolute text-3xl top-[272px] right-[456px]"
     initial={{ opacity: 0 , y: 100}}
     animate={{ opacity: 1, y: 0 }}
     transition={{ duration: 1, delay: 1.5 }}
    
    ></motion.i>
    </div>


    {/* Newest listings */}

   <div>
    <h1 className='text-center font-[#036194] text-4xl font-bold mt-10'>Newest listings</h1>

    <motion.div className='grid grid-cols-[300px_300px_300px_300px] justify-center gap-8 my-10'

    initial={{ opacity: 0 , y: 100}}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 3}}
    
    
    
    >

    <div className='bg-[#a8dadc] shadow shadow-[#036194] w-[300px] rounded '>
        <img className='w-[300px] rounded' src="src/images/pexels-binyaminmellish-106399.jpg" alt="" />
        <h1 className='text-[#006400] pt-2 text-[18px] pl-1 font-semibold'>Single-family Home</h1>
        <h1 className='font-bold py-2 pl-1'>$400$</h1>
        <div className='flex  gap-2 pl-1'>
            <h1> <span className='font-bold'>3</span> bed</h1>
            <h1> <span className='font-bold'>3.5</span> bath</h1>
            <h1> <span className='font-bold'>2,644</span> sqft</h1>
        </div>
        <h1 className='py-2 pl-1'>Mogadishu-Wadajir-somalia</h1>
    </div>

    <div className='bg-[#a8dadc] shadow shadow-[#036194] w-[300px] rounded'>
        <img className='w-[300px] rounded' src="src/images/pexels-binyaminmellish-106399.jpg" alt="" />
        <h1 className='text-[#006400] pl-1 pt-2 text-[18px] font-semibold'>Single-family Home</h1>
        <h1 className='font-bold py-2 pl-1'>$400$</h1>
        <div className='flex  gap-2 pl-1'>
            <h1> <span className='font-bold'>3</span> bed</h1>
            <h1> <span className='font-bold'>3.5</span> bath</h1>
            <h1> <span className='font-bold'>2,644</span> sqft</h1>
        </div>
        <h1 className='py-2 pl-1'>Mogadishu-Wadajir-somalia</h1>
    </div>

    <div className='bg-[#a8dadc] shadow shadow-[#036194] w-[300px] rounded'>
        <img className='w-[300px] rounded' src="src/images/pexels-binyaminmellish-106399.jpg" alt="" />
        <h1 className='text-[#006400] pt-2 pl-1 text-[18px] font-semibold'>Single-family Home</h1>
        <h1 className='font-bold py-2 pl-1'>$400$</h1>
        <div className='flex  gap-2 pl-1'>
            <h1> <span className='font-bold'>3</span> bed</h1>
            <h1> <span className='font-bold'>3.5</span> bath</h1>
            <h1> <span className='font-bold'>2,644</span> sqft</h1>
        </div>
        <h1 className='py-2 pl-1'>Mogadishu-Wadajir-somalia</h1>
    </div>

    <div className='bg-[#a8dadc] shadow shadow-[#036194] w-[300px] rounded'>
        <img className='w-[300px] rounded' src="src/images/pexels-binyaminmellish-106399.jpg" alt="" />
        <h1 className='text-[#006400] pt-2 pl-1 text-[18px] font-semibold'>Single-family Home</h1>
        <h1 className='font-bold py-2 pl-1'>$400$</h1>
        <div className='flex  gap-2 pl-1'>
            <h1> <span className='font-bold'>3</span> bed</h1>
            <h1> <span className='font-bold'>3.5</span> bath</h1>
            <h1> <span className='font-bold'>2,644</span> sqft</h1>
        </div>
        <h1 className='py-2 pl-1'>Mogadishu-Wadajir-somalia</h1>
    </div>
    </motion.div>

   </div>

    </div>




}