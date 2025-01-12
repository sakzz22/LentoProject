import React from "react"
import Home from "./home/Home"
import {Route , Routes} from "react-router-dom"
import Signup from "./components/Signup"


function App() {
  

  return (
    <>
      {/* <Home/> */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </>
  )
}

export default App
