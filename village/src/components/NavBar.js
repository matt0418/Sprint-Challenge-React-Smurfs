import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css';


function NavBar() {
    return(
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/smurf-form">Add a smurf</NavLink>
        </nav>
    )
}

export default NavBar