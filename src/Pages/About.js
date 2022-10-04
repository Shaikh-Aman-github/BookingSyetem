import React from 'react';
//import{Link} from 'react-router-dom';
import './CompoCSS/About.css';
//import ProfileImg from '../assets/New.jpg';
import NavBar from './NavBar'
class About extends React.Component{

    render(){
    return (
        <div className="AboutPage">
            <NavBar/>
            <h1>About Us</h1> 
            <h2>Our Project Team member</h2>
            <section id="DeveloperDetails">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col col-lg-6">
                            <div className="row">
                                    {/*<div className="col col-lg-6">
                                    <img src={ProfileImg} id="profileImg" height="500" width="50%" alt="profileImg"/>
                                    </div>*/}
                                    <div className="col col-lg-6">
                                        <h3>1). AMAN SHAIKH KAMRUDDIN</h3>
                                        <h4>Roll No:- 6611</h4>
                                        <h4>Class:- TYBBA-CA</h4>
                                    </div>
                            </div>
                        </div>
                        <div className="col col-lg-6">
                            <div className="row">
                                    <div className="col col-lg-6">
                                        <h3>2). Pathkalan Shujaur rehman</h3>
                                        <h4>Roll No:- 6651</h4>
                                        <h4>Class:- TYBBA-CA</h4>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="col col-lg-12">
                            <div className="row">
                                    <h2>This is our 6 sem final mini-project</h2>
                                    <div className="col col-lg-4">
                                        <h3>For Frontend we have use</h3>
                                    <p>1)HTML/CSS <br/> 2)Bootstrap <br/>3)React js <br/> 4)Icon Pack<br/> 5)CDN links</p>
                                    </div>
                                    <div className="col col-lg-4">
                                        <div className="row">
                                        <h3>For Backend we have use</h3>
                                        <p>1)Node js <br/> 2)Express js</p>
                                        </div>
                                    </div>
                                    <div className="col col-lg-4">
                                        <div className="row">
                                        <h3>For Database we have use</h3>
                                        <p>1)MongoDB <br/> 2)Json- DB local storge</p>
                                        </div>
                                    </div>
                            </div>
                    </div>       
                </div>
            </section>
         
            {/*<section id="Documentation">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col col-lg-6">
                            <h1>Project Documentation</h1>
                            <embed src="../assets/docs/Reserch paper#toolbar=0&navpanes=0&scrollbar=0" type="application/pdf" width="100%" height="600px" />
                        </div>
                        <div className="col col-lg-6">
                            <h1>Project PPT</h1>
                            <embed src="../assets/docs/Reserch paper#toolbar=0&navpanes=0&scrollbar=0" type="application/pdf" width="100%" height="600px" />
                        </div>    
                    </div>
                </div>
    </section>*/}
        </div>
    ); 
    }
}

export default About;