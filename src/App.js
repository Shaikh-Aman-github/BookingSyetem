import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
//import NotFound from './Pages/NotFound';

//Routers
import Home from './Pages/Home';
import Login from './Pages/Component/login/login'
import Register from './Pages/Component/register/register'

import About from './Pages/About';
import Booking from './Pages/BookingPage';
import MyBookings from './Pages/MyBookings';
import EditUser from './Pages/Component/forms/editUser';

function App() {
  const [user, setLoginUser] = useState({})
  return (
      <div className="App">
         <Router>
            
            <Routes>
              
              <Route exact path="/" element={
              user && user._id ? 
              <Home setLoginUser={setLoginUser} /> : 
              <Login setLoginUser={setLoginUser}/>
              }/>
              
              <Route exact path="/login" element={
              <Login setLoginUser={setLoginUser} />
              }/>

              <Route exact path="/register" element={<Register />}/>
              <Route exact path="/Home" element={<Home/>}/>
              <Route exact path="/About" element={<About />}/>
              <Route exact path="/BookingPage" element={<Booking />}/>
              <Route exact path="/MyBookings" element={<MyBookings />}/>
              <Route exact path="/edit/:id" element={<EditUser />}/>
              
              {/*<Route element={<NotFound/>}/>*/}
            </Routes>
        </Router>
      </div> 
  );

  }

export default App;
