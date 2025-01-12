import React from "react"
import Home from "./home/Home"
import {Route , Routes} from "react-router-dom"
import Signup from "./components/Signup"
import  { Toaster } from 'react-hot-toast';


function App() {
  

  return (
    <>
      {/* <Home/> */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
      <Toaster />
    </>
  )
}

export default App
