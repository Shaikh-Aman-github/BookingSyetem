import React, { useEffect, useState } from 'react';
import NavBar from './NavBar'
import { getUsers, deleteUser} from '../Service/api';
import { Link } from 'react-router-dom'
//import BookedTickets from './Apis/TicketPage'
//import { CartProvider } from "react-use-cart";

const MyBookings = () => {
    const [users , setUsers] = useState([]);

    useEffect(() =>{
        getAllUsers();
    }, [])

    const getAllUsers = async() =>{
        const res = await getUsers();
        console.log(res.data);
        setUsers(res.data);
    }

    const deleteUserData = async (id) =>{
        await deleteUser(id);
        getAllUsers();
        alert("Your Ticket has Been Canceled");
        alert("payment will refund you within 24/hour");
    }
    return (
        <div className="MyBookingsPage">
            <NavBar/>
            <h1>My Bookings</h1>
            <table className="table text-left">
                <thead className="thead-dark">
                    <tr>
                    <th>Booking Id</th>
                    <th>Ticket Buyer</th>
                    <th>Destination</th>
                    <th>Tickets</th>
                    <th>Payment</th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                 {users.map(user =>(
                            <tr>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td><b>From:</b>{user.destinationFrom}<br/><b>To:</b>{user.destinationTo}</td>
                                <td>{user.peopleCount}</td>
                                <td><b>&#8377; {user.reAmount}</b></td>
                                <td>
                                    {/*<button 
                                    component={Link} 
                                    to={`/edit/${user.id}`}>Edit</button>*/}
                                    <button
                                        onClick={() => deleteUserData(user.id)}
                                    >Cancel Booking</button>
                                </td>
                            </tr>
                             ))
                        }
                </tbody>
                </table>

            {/*<CartProvider>
                <BookedTickets/>
            </CartProvider>*/}
        </div>
    ); 
};

export default MyBookings;