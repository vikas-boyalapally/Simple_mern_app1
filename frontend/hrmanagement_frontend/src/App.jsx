import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import Footer from './components/footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import Services from './pages/services'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import { Routes, Route } from 'react-router-dom'
import AdminLogin from './pages/AdminLogin'
import AdminHome from './pages/AdminHome'
import Register from './pages/Register'
import Login from './pages/Login'
import HrHome from './pages/HrHome'
import EmpHome from './pages/EmpHome'

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home></Home>}> </Route>
        <Route path='/about' element={<About></About>}> </Route>
        <Route path='/contact' element={<Contact></Contact>}> </Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/adminlogin' element={<AdminLogin></AdminLogin>}></Route>
        <Route path='/adminhome' element={<AdminHome></AdminHome>}></Route>
        <Route path='/Register' element={<Register></Register>}></Route>
        <Route path='/Login' element={<Login></Login>}></Route>
        <Route path='/hrhome' element={<HrHome></HrHome>}></Route>
        <Route path='/emphome' element={<EmpHome></EmpHome>}></Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App