import { Route, Routes } from "react-router-dom"
import Header from "./Components/Header"
import Login from "./Components/Login"
import SignUp from "./Components/SignUp"
import Dashboard from "./Components/pages/Addhome"
import RentHouse from "./Components/pages/RentHouse"
import Admin from "./Components/pages/Admin"
import ContactForm from "./Components/pages/Contact"
import ComplaintForm from "./Components/pages/ComplaintForm"
import Complainment from "./Components/pages/complainment"
import AdminDashboard from "./Components/pages/AdminDashborad"
function App() {
  return <Routes>
    <Route  path="/" element={<Header/>}/>
    <Route  path="/Addhome" element={<Dashboard/>}/>
    <Route  path="/rent/:id" element={<RentHouse/>}/>
    <Route  path="/contact" element={<ContactForm/>}/>

    <Route path="/ComplaintForm" element ={<ComplaintForm/>} />
    <Route path="/Complainment" element ={<Complainment/>} />

    <Route  path="/login" element={<Login/>}/>
    <Route  path="/signUp" element={<SignUp/>}/>
    <Route  path="/Admin" element={<Admin/>}/>
    <Route  path="/Dashboard" element={<AdminDashboard/>}/>

  </Routes>
}

export default App
