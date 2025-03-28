import { Link } from 'react-router-dom';

export default function Footer (){
    return <>
    {/* Clients */}
     <div className="bg-[url('src/images/bg.jpeg')] relative h-[300px] bg-cover bg-center  text-center">
      <div class="absolute inset-0 bg-[#036194] opacity-30 "></div>

        <h1 className="font-bold text-[25px] text-[#003049] pt-10 ">Our Clients</h1>
        <div className="flex justify-center gap-10 items-center -mt-6  relative z-10 ">

        <img className="w-[150px]" src="src/images/irise.png" alt="" />
        <img className="w-[150px]" src="src/images/rise.png" alt="" />
        <img className="w-[150px]" src="src/images/Hormuud.svg" alt="" />
        </div>
        </div>
        

        {/* footer */}
        <div className="bg-[#003049]">
        <div className="flex justify-center gap-10 items-center py-5">
            <h1 className='font-bold text-[22px] text-white'> Have a complaint?</h1>
            <Link to={"/ComplaintForm"} > <button className="bg-[#003049] border-2 border-white hover:bg-[#a8dadc] hover:text-black text-white px-4 py-2 rounded-full transition duration-300 ease-in-out shadow-md">Send Complainment</button></Link>
            </div>
        </div>


    </>
    
}