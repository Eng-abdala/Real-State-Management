import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function RentHouse() {
    const { id } = useParams(); // Get the index from the URL
    // const [houses, setHouses] = useState([]);
    const [house, setHouse] = useState(null);
    const navigator = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:5000/gethouse')
            .then((res) => {
                setHouse(res.data[id]); // Use index to get house
            })
            .catch((err) => console.log(err));
    }, [id]);

    if (!house) return <h1>Loading...</h1>;

    const contact = (()=>{
        navigator('/contact')
    })

    return (
        <div className='flex justify-center  '>

        <div className="sm:p-10 p-2 sm:w-[80%] w-[92%] m-auto shadow-lg inset-shadow-sky-900">
            <img src={`http://localhost:5000/images/${house.image}`} alt={house.title} className="w-full sm:h-[600px] h-[400px] object-cover" />
         




<h1 className='text-sky-950 font-bold py-5'>🌟 Luxury Living at an Unbeatable Price! 🌟</h1>
<p className='leading-8'>


Welcome to your dream apartment in {house.location}  This stunning {house.bed}-bedroom, {house.bath}-bathroom home offers a perfect blend of comfort and modern style, making it ideal for families or professionals looking for extra space. <br />

✨ Spacious & Stylish: With 500 sqft of thoughtfully designed space, this apartment maximizes every inch to create a cozy yet functional home. <br />

🛏 {house.bed} Comfortable Bedro  oms: Whether you need extra space for guests, an office, or a personal retreat, these rooms are perfect for relaxation. <br />

🛁 {house.bath} Modern Bathrooms: Enjoy sleek finishes and refreshing showers to start your day feeling fresh! <br />

📍 Prime Location: Nestled in the heart of {house.location}, you'll have easy access to local markets, schools, restaurants, and everything you need. <br />

💰 All of this for just ${house.price}! This is an unbelievable deal that won’t last long! <br />



</p>
<p className='font-extralight py-5 text-sky-950'>Don't miss out—this apartment is waiting for you! 🚀✨</p>
<button className='bg-sky-900 font-bold text-white text-[18px] px-[20px] py-0.5 rounded ml-[30%]' onClick={contact}>Contact us</button>


        </div>


        </div>


    );






    
}