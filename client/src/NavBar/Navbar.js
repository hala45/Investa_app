import React from 'react';
import {NavLink} from 'react-router-dom';
import './Navbar.css';
function NavbarLoggedOut(props){

    return (
        <div >
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark nav-right">
            <NavLink className="navbar-brand" to="/">Investa</NavLink>
            <div className="nav-wrapper container">
            <ul className="navbar-nav">
                    <li className="nav-item">
                    <NavLink className="nav-link tab " to="home">Home </NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link " to="nyse">NYSE  </NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link tab" to="about">About</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link tab " to="news">News</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="chart">Charts</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link active" to="login">Login</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="signup">Signup</NavLink>
                    </li>
                </ul>
                </div>
        </nav>
        </div>
    )
}

export default NavbarLoggedOut;