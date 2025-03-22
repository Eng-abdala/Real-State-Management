import { Route, Routes } from "react-router-dom"
import Header from "./Components/Header"
import Login from "./Components/Login"
import SignUp from "./Components/SignUp"
import Dashboard from "./Components/Dashboard"

function App() {
  return <Routes>
    <Route  path="/" element={<Header/>}/>
    <Route  path="/Dashboard" element={<Dashboard/>}/>

    <Route  path="/login" element={<Login/>}/>
    <Route  path="/signUp" element={<SignUp/>}/>

  </Routes>
}

export default App
