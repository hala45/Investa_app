import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

function NavbarLoggedOut(props){

    return (
<<<<<<< HEAD
        <div className="container-fluid nav">
            
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark nav-right">
                <Link className="navbar-brand" to="/home">Investa </Link>
                <div className="nav-wrapper container">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/home">Home </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="nyse">NYSE  </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link disabled" to="news">News</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="chart">Charts</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="order">Order</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="summary">Summary</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="signup">Signup</Link>
                        </li>
                    </ul>
                </div>
            </nav>
=======
        <div>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark nav-right">
            <NavLink className="navbar-brand" to="/">Investa</NavLink>
            <div className="nav-wrapper container">
            <ul className="navbar-nav">
                    <li className="nav-item">
                    <NavLink className="nav-link tab disabled" to="home">Home </NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link " to="stocks">NYSE  </NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link tab disabled" to="about">About</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link tab disabled" to="news">News</NavLink>
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
>>>>>>> 5c13d9cb4a62c2896145e3bad4e6209aee349c8d
        </div>
    )
}

export default NavbarLoggedOut;