import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './Header.scss';

const Header = () => {
    return (
        <nav className="navbar navbar-dark">
            <Link className="navbar-brand" to="/">
                <img src={logo} className="d-inline-block align-top mx-sm-2" alt="" />
                <span className="nav-title">Programming Hero</span>
            </Link>
               <div className="ml-md-auto mx-auto" id="navbar-nav">
               <NavLink to="/course/programming-hero-bangla-web-course" className="text-light nav-item">
                    Course
                </NavLink>
                <NavLink to="/register" className="text-light nav-item">
                    Register
                </NavLink>
                <NavLink to="/login" className="text-light nav-item">
                    Login
                </NavLink>
               </div>
        </nav>
    );
};

export default Header;