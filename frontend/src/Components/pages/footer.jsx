import { Link } from 'react-router-dom';

export default function Footer (){
    return <>
    {/* Clients */}
     <div className="bg-[url('src/images/bg.jpeg')] relative h-[300px] bg-cover bg-center  text-center">
      <div class="absolute inset-0 bg-[#036194] opacity-30 "></div>

        <h1 className="font-bold text-[25px] text-[#003049] pt-10 ">Our Clients</h1>
        <div className=" justify-center grid sm:grid-cols-[200px_200px_200px_200px] grid-cols-[200px_200px] items-center -mt-6 sm:ml-0 ml-4 relative z-10 ">

        <img className="w-[150px]" src="src/images/irise.png" alt="" />
        <img className="w-[150px]" src="src/images/rise.png" alt="" />
        <img className="w-[150px]" src="src/images/Hormuud.svg" alt="" />
        <img className="w-[150px]" src="src/images/jtech.svg" alt="" />
        </div>
        </div>
        

        {/* footer */}
        <div className="bg-[#003049]">
        <div className="flex justify-center gap-10 items-center px-2 py-5">
            <h1 className='font-bold sm:text-[22px] text-[20px] text-white'> Have a complaint?</h1>
            <Link to={"/ComplaintForm"} > <button className="bg-[#003049] border-2 border-white hover:bg-[#a8dadc] hover:text-black text-white sm:px-4 px-2 py-2 rounded-full transition duration-300 ease-in-out shadow-md">Send Complainment</button></Link>
            </div>
        </div>

        <footer className="bg-[#003049] text-[#a8dadc] py-10 px-20">
		  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
			{/* Company Info */}
			<div>
			  <h2 className="text-3xl font-[JosefinSans]">Real State Rents</h2>
			  <p className="text-[#a8dadc] mt-4">
				Your trusted partner for finding the best rental properties. 
			  </p>
			</div>
	
			{/* Quick Links */}
			<div>
			  <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
			  <ul className="space-y-2">
				<li className="hover:text-white">Home</li>
				<li className="hover:text-white">Available Rentals</li>
				<li className="hover:text-white">About Us</li>
				<li className="hover:text-white"> Contact</li>
			  </ul>
			</div>
	
			{/* Social Media */}
			<div>
			  <h3 className="text-2xl font-semibold mb-4">Follow Us</h3>
			  <div className="flex space-x-4">
				<ul>

				<li className="hover:text-white">Facebook</li>
				<li  className="hover:text-white">Twitter</li>
				<li  className="hover:text-white">Instagram</li>
				</ul>
			  </div>
			</div>
		  </div>
	
		  {/* Bottom Text */}
		  <div className="text-center mt-8 border-t border-[#a8dadc] pt-4">
			<p>© {new Date().getFullYear()} Real State Rents. All rights reserved.</p>
		  </div>
		</footer>




    </>
    
}






