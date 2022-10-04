import React, { useState } from 'react';
import { addUser } from '../../../Service/api'
import { useNavigate } from "react-router"

const initialValues = {
    name: '',
    email: '',
    phone: '',
    address: '',
    cityname: '',
    statename: '',
    zipcode: '',
    destinationTo: '',
    destinationFrom: '',
    peopleCount: '',
    acountNumber: '',
    debitNumber: '',
    cvv:'',
    reAmount: ''
}

const Form = () => {
    const [user, setUser] = useState(initialValues);
    const { name, email, phone, address, cityname, statename , 
          zipcode, destinationTo, destinationFrom, peopleCount, 
          acountNumber, debitNumber, cvv, reAmount} = user;

    const navigate = useNavigate();

    const onValueChange = (e) =>{
        setUser({...user, [e.target.name]: e.target.value})
    }

    const addUserDetails = async () =>{
        await addUser(user);
        alert("Wait...");
        alert("Your ticket has been Book.");
        navigate('../../MyBookings')
    }
    return (
        <div className="Form-main">
        <div className="row main-form">
        <div className="col-12 col-lg-10 text-center main-form-body">
            <h2>Persnal Details</h2>
            <form className="Form-main">
              <div className="form-row">
                <div className="form-group col-md-4">
                  <label> Buyer Name: -</label>
                  <input type="text" 
                    onChange={(e) => onValueChange(e)} 
                    name='name' value={name}
                  className="form-control" placeholder="Ticket Buyer Name" />
                </div>
                <div className="form-group col-md-4">
                  <label>Email ID</label>
                  <input type="email" 
                    onChange={(e) => onValueChange(e)} 
                    name='email' value={email}
                  className="form-control" placeholder="Ticket Buyer Email Id" />
                </div>
                <div className="form-group col-md-4">
                  <label>Phone Number: -</label>
                  <input type="tel" 
                    onChange={(e) => onValueChange(e)} 
                    name='phone' value={phone}
                  className="form-control" placeholder="Pleses Enter active Mobile Number" />
                </div>
              </div>
              <div className="form-row">
              <div className="form-group col-md-4">
                <label>Address</label>
                <input type="text" 
                    onChange={(e) => onValueChange(e)} 
                    name='address' value={address}
                className="form-control" placeholder="Enter your Address" />
              </div>
                <div className="form-group col-md-3">
                  <label>City</label>
                  <input type="text" 
                    onChange={(e) => onValueChange(e)} 
                    name='cityname' value={cityname}
                  className="form-control" placeholder="Enter your City Name"/>
                </div>
                <div className="form-group col-md-3">
                  <label>State</label>
                  <input type="text" 
                    onChange={(e) => onValueChange(e)} 
                    name='statename' value={statename}
                  className="form-control" placeholder="Enter your State"/>
                </div>
                <div className="form-group col-md-2">
                  <label>Zip/Pen</label>
                  <input type="text" 
                    onChange={(e) => onValueChange(e)} 
                    name='zipcode' value={zipcode}
                  className="form-control" placeholder="Enter your code"/>
                </div>
              </div>
              <h2>Booking Details</h2>
              <div className="form-row">
              <div className="form-group col-md-4">
                  <label>Name of Destination (From)*</label>
                  <input type="text" 
                    onChange={(e) => onValueChange(e)} 
                    name='destinationFrom' value={destinationFrom}
                  className="form-control" placeholder="from" />
                </div>
                <div className="form-group col-md-4">
                  <label>Name of Destination (TO)*</label>
                  <input type="text" 
                    onChange={(e) => onValueChange(e)} 
                    name='destinationTo' value={destinationTo}
                  className="form-control" placeholder="TO" />
                </div>
                <div className="form-group col-md-2">
                  <label>Count people</label>
                  <input type="number" 
                    onChange={(e) => onValueChange(e)} 
                    name='peopleCount' value={peopleCount}
                  className="form-control" placeholder="Number of People" />
                </div>
                <div className="form-group col-md-2">
                  <label>Amount &#8377;</label>
                  <input type="text" 
                    onChange={(e) => onValueChange(e)} 
                    name='peopleCount' value={peopleCount * 30000}
                  className="form-control" />
                </div>
              </div>

              <h2>Payment Details</h2>
              <div className="form-row">
              <div className="form-group col-md-4">
                  <label>Acount Number</label>
                  <input type="text" 
                    onChange={(e) => onValueChange(e)} 
                    name='acountNumber' value={acountNumber}
                  className="form-control" placeholder="12 digit Number" />
                </div>
                <div className="form-group col-md-4">
                  <label>Debit Card Number</label>
                  <input type="text" 
                    onChange={(e) => onValueChange(e)} 
                    name='debitNumber' value={debitNumber}
                  className="form-control" placeholder="16 digit Number" />
                </div>
                <div className="form-group col-md-2">
                  <label>CVV*</label>
                  <input type="text" 
                    onChange={(e) => onValueChange(e)} 
                    name='cvv' value={cvv}
                  className="form-control" placeholder="3 digit CVV" />
                </div>
                <div className="form-group col-md-2">
                  <label>Re-Enter Amount carefully*</label>
                  <input type="text" 
                    onChange={(e) => onValueChange(e)} 
                    name='reAmount' value={reAmount}
                  className="form-control" placeholder="&#8377; re-Amount" />
                </div>
              </div>

              <button onClick={() => addUserDetails()} className="btn">Book Now</button>
            </form>
        </div>
      </div>  

        </div>
    ); 
};

export default Form;