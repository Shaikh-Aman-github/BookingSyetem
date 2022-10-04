import React ,{useState} from 'react'
import { useCart } from "react-use-cart";
import "./apiCard.css";

const CardItems = (props) => {
      const { addItems } = useState();  

        return( 
            <div className="card places"  key={props.index}>
                <h3>{props.name}</h3>
                <img src={props.imgURL} alt={props.name}/>
                <p>{props.description}...</p>
                <p>&#8377; <b>{props.price}</b> Per person: <b>{props.quantity}</b></p>
                
                    <button 
                    onClick={props.onClick}
                    >Book Now</button>
                        
            </div>            
        );
};//() => addItems(props.item)
export default CardItems;