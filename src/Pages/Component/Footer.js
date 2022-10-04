import React from 'react';
import { Link } from 'react-router-dom';
import '../CompoCSS/Footer.css';

const Footer = () => {
    return (
        <div className="FooterCompo" id="footer">
            <div id="footer-content">
                <div className="row">
                    <div className="col col-lg-3" >
                        <h3>About Us</h3>
                        <p>we are providing best services in all over the world since 10 - 
                            years and this year we recived the best awords in booking and we 
                            are top 10 listed in world and we also provide best offers and 
                            security we are not just an ajuncy we are comunity to proved the 
                            fast online ticket booking in 24/7 350 days any time any where,</p>
                    </div>
                    <div className="col col-lg-3" >
                        <h3>Our Services</h3>
                        <p>Online Flgth booking, Online Hotel Booking, Food fasality, Passport Makeing,
                            VIsa, Bus Booking, Car Booking, Document Makeing, Security,
                            Online Payment Services, and more</p>
                    </div>
                    <div className="col col-lg-6" id="footer-login">
                        <input type="E-mail" placeholder="Enter E-mail" id="footer-form" /><br/>
                        <input type="password" placeholder="Enter Password" id="footer-form" /><br/>
                        <button>Login</button>
                        <hr width="80%" />
                    </div>
                </div>
               
            </div>
            <p id="copyright">
	            adventure.com_&copy;_2021_Create and Developed by AMAN SHAIKH KAMRUDDIN / Roll.No - 6611</p>
	            <center><Link to="../Home.js"><h5>Privce and police</h5></Link></center>
        </div>
    ); 
};

export default Footer;