import React from 'react';
import { useCart } from "react-use-cart";

const SelectedTicket = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();
    if (isEmpty) return <h1>No Booking found yet</h1>
    return (
       <div className="TicketsPage">
           <div className="row">
                <div className="col-12">
                    <div className="TicketsData">
                       <h5>Your Bookigs: ({totalUniqueItems}) Total Bokings: ({totalItems})</h5>
                       <table>
                           <tbody>
                                {items.map((item, index)=>{
                                    return (
                                        <tr key={index}>
                                            <td>
                                                <img src={item.imgURL} alt={item.name} style={{height: '6rem'}} />
                                            </td>
                                            <td>{item.name}</td>
                                            <td>{item.price}</td>
                                            <td>Quantity: ({item.quantity})</td>
                                            <td>
                                                <button
                                                onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                                                >-</button>
                                                <button
                                                 onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                                                >+</button>
                                                <button
                                                onClick={() => removeItem(item.id)}
                                                >Cancel Booking</button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                       </table>
                    </div> 
                </div>
                <div className="col-auto ms-auto">
                    <h1>Total Billing: &#8377; {cartTotal}</h1>
                </div>
                <div className="col-auto ms-auto">
                    <button onClick={() => emptyCart()}>Cancel All Bookings</button>
                    <button>Pay Now</button>
                </div>
           </div>
       </div> 
    ); 
};

export default SelectedTicket;