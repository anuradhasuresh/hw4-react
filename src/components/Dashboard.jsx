import React from 'react'
import Home from './Home';
import Feedback from './Feedback';
import NavyPier from './NavyPier';
import {BrowserRouter as Router, Routes, Route, NavLink} from "react-router-dom";
import './dashboard.css'

function Dashboard() {
  return (
    <div>
        <Router>
        <header>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
            Home
          </NavLink>
          <NavLink
            to="/NavyPier"
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
            Navy Pier
          </NavLink>
          <NavLink
            to="/Feedback"
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
            Feedback
          </NavLink>
        </header>
         
            <Routes>
               <Route path='/' element = {<Home />}></Route> 
               <Route path='/NavyPier' element ={<NavyPier />}></Route>
               <Route path='/Feedback' element ={<Feedback />}></Route>
            </Routes>
         
        </Router>
        
    </div>
  )
}

export default Dashboard