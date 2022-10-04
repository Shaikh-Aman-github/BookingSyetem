import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './CompoCSS/NavBar.css';

const NavBar = (props) => {
    console.log(props);
    return (
        <nav className="NavBar">
                <div className="topheader">
                    <ul>
                        <li><Link to="/Home"><i className="fa fa-home fa-customize fa-2x"></i><br/>Home</Link></li>
                        <li><Link to="/About"><i className="fa fa-user-secret fa-customize fa-2x"></i><br/>About</Link></li>
                        <li><NavLink to="/BookingPage"><i className="fa fa-map-marker fa-customize fa-2x"></i><br/>Book</NavLink></li>
                        <li><NavLink to="/MyBookings"><i className="fa fa-user-circle fa-customize fa-2x"></i><br/>My Booking</NavLink></li>
                    </ul>
                </div>


        </nav>
    ); 
};

export default NavBar;