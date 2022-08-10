import React from 'react'
import Login from './components/Login/Login'
import { useState} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './components/Register/Register'
import Canvas from './components/Canvas/Canvas'

const App = () => {
  // eslint-disable-next-line
  const [student,setStudent]=useState("")

  return (
    <>
    
      <BrowserRouter>
        
          <Routes>
            <Route path="/" element={<Login setStudent={setStudent}/>} />
            <Route path="/register" element={<Register  />} />
            <Route path="/Home" element={<Canvas />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App