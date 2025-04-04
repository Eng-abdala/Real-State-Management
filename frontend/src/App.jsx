import { Route, Routes } from "react-router-dom"
import Header from "./Components/Header"
import Login from "./Components/Login"
import SignUp from "./Components/SignUp"
import Addhome from "./Components/pages/Admin pages/Addhome"
import RentHouse from "./Components/pages/RentHouse"
import Admin from "./Components/pages/Admin pages/Admin"
import ContactForm from "./Components/pages/Contact"
import ComplaintForm from "./Components/pages/ComplaintForm"
import Complainment from "./Components/pages/Admin pages/Complainment"
import AdminDashboard from "./Components/pages/Admin pages/AdminDashborad"
import Update from "./Components/pages/Admin pages/Update"
import UpdateFrom from "./Components/pages/Admin pages/UpdateFrom"
import About from "./Components/pages/About"
function App() {
  return <Routes>
    <Route  path="/" element={<Header/>}/>
    <Route  path="/About" element={<About/>}/>
    <Route  path="/Addhome" element={<Addhome/>}/>
    <Route  path="/rent/:id" element={<RentHouse/>}/>
    <Route  path="/contact" element={<ContactForm/>}/>

    <Route path="/ComplaintForm" element ={<ComplaintForm/>} />
    <Route path="/Complainment" element ={<Complainment/>} />

    <Route  path="/login" element={<Login/>}/>
    <Route  path="/signUp" element={<SignUp/>}/>
    
    <Route  path="/Admin" element={<Admin/>}/>
    <Route  path="/dashboard" element={<AdminDashboard/>}/>
    <Route  path="/Update" element={<Update/>}/>
    <Route  path="/UpdateFrom/:id" element={<UpdateFrom/>}/>
    
  </Routes>
}

export default App
