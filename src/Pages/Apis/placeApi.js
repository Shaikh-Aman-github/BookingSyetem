import React, {Component} from 'react'
import CardItem from './items'

class PlaceAPI extends Component {
    
    constructor(){
        super();
        this.state = {
            products: [],
            loading: false,
        }
    }
    
    async componentDidMount(){
        let url ="https://place-apis.herokuapp.com/products";
        let data = await fetch(url);
        let passData = await data.json();
        this.setState({
            loading: true,
            products: passData.products
        });
    }
     addToCart (name){
        alert(name + " " + "Ticket has been Added"); 
        alert("kindly confirm your ticket and payment");
    }
    


    render(){
       
        const { loading } = this.state;
        if (!loading) {
          return <div>Loading...</div>
        }
        else{
        return(
            <div className = "placeApiDiv">
                {this.state.products.map((item, index) => {
                   return (
                    <div className="col-12 col-md-6 col-lg-6" key={index}>
                                <CardItem
                                    name={item.name}
                                    imgURL={item.imgURL}
                                    description={item.description}
                                    price={item.price}
                                    quantity={item.quantity}
                                    key={index}
                                    item={item}
                                    onClick={()=>this.addToCart(item.name)}
                                />
                        </div>
                   );
                })}
            </div>
        );
        }
    }
}
export default PlaceAPI;