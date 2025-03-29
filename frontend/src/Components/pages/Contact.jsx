import { useState } from "react"; // Import useState for managing form data
import axios from "axios"; // Import axios to send data to the backend
import Swal from 'sweetalert2'

const ContactForm = () => {
  // State to store form input values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
  });
 

  // Function to handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page refresh
    

    

    try {
      // Send form data to backend
      await axios.post("http://localhost:5000/send-email", formData);
        Swal.fire({
            title: "Email sented successfuly!",
            text: "the add will rent you a house as soon as possible!",
            icon: "success"
          });// Notify user
    }catch (error) {
    
      alert("Failed to send email. Try again later.");
    }
  };

  return (
    <div className="flex justify-center text-center mt-[10%]">

    <form  className="contact-form w-[450px] h-[400px] shadow-2xl shadow-sky-950 p-5 m-5">
      {/* Input fields for Name, Email, Phone, and Message */}
      <input  className="w-[300px] border-2 border-sky-950 m-3" type="text" name="name" placeholder="Your Name" required onChange={handleChange}/> <br />
      <input  className="w-[300px] border-2 border-sky-950 m-3" type="email" name="email" placeholder="Your Email" required onChange={handleChange}/><br />

      <input  className="w-[300px] border-2 border-sky-950 m-3" type="text" name="phone" placeholder="Your Phone" required onChange={handleChange}/><br />
      <textarea  className="w-[300px] border-2 border-sky-950 m-3" name="description" placeholder="Your Message" required onChange={handleChange}></textarea> <br />

      {/* Submit Button */}
      <button className="bg-sky-950 w-[300px]  text-white text-[20px] h-[30px]"  onClick={handleSubmit}> Send</button>
    </form>
    </div>
  );
};

export default ContactForm; // Export component
