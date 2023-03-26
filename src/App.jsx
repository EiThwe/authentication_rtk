import React from 'react'
import { Route, Routes } from 'react-router-dom'
import "./App.css"
import Guard from './components/Guard'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Guard><Dashboard/></Guard>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
         </Routes>
    </div>
  )
}

export default App