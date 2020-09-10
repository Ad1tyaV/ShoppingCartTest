import React,{ useContext } from 'react'
import '../App.css';
import { CartDataContext } from './CartData'
import ViewCart from './ViewCart'
import { Link } from 'react-router-dom' 
import { BrowserRouter as Router, Route} from 'react-router-dom'
export default function Navbar() {
    const cartData = useContext(CartDataContext);
    return (
        <div className="App-header">
            <div className="title-header">Shopping Site Demo</div>   
            <div className="product">
                <Link to="/Products">
                    Products
                </Link> 
            </div>                
            <div className="cart">
                <Link to="/ViewCart">
                    Cart
                </Link> 
            </div>                          
            <div className="cartNumber">{cartData.cartItems.length}</div>            
        </div>
    )
}
