import React, { useEffect, useState } from 'react';
import { editUser, getUsers } from '../../../Service/api'
import { useNavigate, useParams } from "react-router"

const initialValues = {
    name: '',
    email: '',
    phone: '',
    address: '',
    cityname: '',
    statename: '',
    zipcode: ''
}

const EditUser = () => {
    const [user, setUser] = useState(initialValues);
    const { name, email, phone, address, cityname, statename , zipcode} = user;
    const { id } = useParams();

    const navigate = useNavigate();

    useEffect(() =>{
        loadUserData();
    }, []);

    const loadUserData = async() =>{
       const res = await getUsers(id);
       setUser(res.data);
    }

    const onValueChange = (e) =>{
        setUser({...user, [e.target.name]: e.target.value})
    }

    const editUserDetails = async () =>{
        await editUser(id, user);
        navigate('../../MyBookings');
    }
    return (
        <div className="Form-main">
        <div className="row main-form">
        <div className="col-12 col-lg-10 text-center main-form-body">
            <h2>Edit Booking</h2>
            <form className="Form-main">
              <div className="form-row">
                <div className="form-group col-md-4">
                  <label>Ticket Buyer Name: -</label>
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
                  <input type="phone" 
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
                  className="form-control"/>
                </div>
                <div className="form-group col-md-3">
                  <label>State</label>
                  <input type="text" 
                    onChange={(e) => onValueChange(e)} 
                    name='statename' value={statename}
                  className="form-control"/>
                </div>
                <div className="form-group col-md-2">
                  <label>Zip/Pen</label>
                  <input type="text" 
                    onChange={(e) => onValueChange(e)} 
                    name='zipcode' value={zipcode}
                  className="form-control" placeholder="Enter your code"/>
                </div>
              </div>
              
              <button onClick={() => editUserDetails()} className="btn">Edit Booking</button>
            </form>
        </div>
      </div>  

        </div>
    ); 
};

export default EditUser;