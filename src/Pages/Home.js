import React from 'react';
import '../Pages/CompoCSS/Home.css';

//import Logo from '../assets/logo.png';
//import Footer from './Component/Footer';

import NavBar from './NavBar';

 
const Home = ({setLoginUser}) => {
    return (
        <div className="HomePage">
            <NavBar/>
                <div id="UserCard">
                    <div className="button" onClick={()=> setLoginUser({})}><i className="fa fa-sign-out"></i></div>
                </div>

                <div className="Home-info">
                        <font>6<sup>th</sup> SEMESTER <br/>Project<br/>
                        <label>Destination Booking System</label> <br/>
                        Class: - TYBBA-CA
                         </font>
                </div>

           <section id="HomeContainer1">
                   {/*  Social Midea section
                <div id="social-midea"> 			
                        <Link href="#"><button><i className="fa fa-facebook"></i></button></Link>	
                        <Link href="#"><button><i className="fa fa-twitter"></i></button></Link>	
                        <Link href="#"><button><i className="fa fa-instagram"></i></button></Link>	
                        <Link href="#"><button><i className="fa fa-whatsapp"></i></button></Link>	
                        <Link href="#"><button><i className="fa fa-linkedin"></i></button></Link>	
                        <Link href="#"><button><i className="fa fa-youtube-play"></i></button></Link>	
                        <Link href="#"><button><i className="fa fa-envelope"></i></button></Link>	
                   </div>*/}
                 
         
            
            </section>
                
            <div className="HomeServices">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-3">
                        <div className="card">
                            <div className="card-header">
                            <i className="fa fa-globe fa-4x"></i>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">You can Book your destination and weekend plan</h5>
                              
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-3">
                        <div className="card">
                            <div className="card-header">
                            <i className="fa fa-check-square-o fa-4x"></i>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">You can check Your booking details</h5>
                               
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-3">
                        <div className="card">
                            <div className="card-header">
                            <i className="fa fa-ban fa-4x"></i>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">You can cancel Your booking any time</h5>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-3">
                        <div className="card">
                            <div className="card-header">
                            <i className="fa fa-chevron-circle-down fa-4x"></i>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">You can book multiple things and more</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*<Footer/>*/} 
        </div>
    ); 
};

export default Home;