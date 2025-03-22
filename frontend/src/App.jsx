import { Route, Routes } from "react-router-dom"
import Header from "./Components/Header"
import Login from "./Components/Login"
import SignUp from "./Components/SignUp"

function App() {
  return <Routes>
    <Route  path="/" element={<Header/>}/>
    <Route  path="/login" element={<Login/>}/>
    <Route  path="/signUp" element={<SignUp/>}/>

  </Routes>
}

export default App
