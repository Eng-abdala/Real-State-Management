import { Route, Routes } from "react-router-dom"
import Header from "./Components/Header"
import Login from "./Components/Login"
import SignUp from "./Components/SignUp"
import Dashboard from "./Components/pages/Dashboard"
import RentHouse from "./Components/pages/RentHouse"
import Admin from "./Components/pages/Admin"
import ContactForm from "./Components/pages/Contact"

function App() {
  return <Routes>
    <Route  path="/" element={<Header/>}/>
    <Route  path="/Dashboard" element={<Dashboard/>}/>
    <Route  path="/rent/:id" element={<RentHouse/>}/>
    <Route  path="/contact" element={<ContactForm/>}/>

    <Route  path="/login" element={<Login/>}/>
    <Route  path="/signUp" element={<SignUp/>}/>
    <Route  path="/Admin" element={<Admin/>}/>

  </Routes>
}

export default App
