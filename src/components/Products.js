import React from 'react'
import { useContext } from 'react'
import './ProductStyle.css'
import { CartDataContext } from './CartData'


export default function Products() {
    const cartData = useContext(CartDataContext);


    const products=[
        {id:"1",title:"MacBook Pro",price:999},
        {id:"2",title:"IPhone",price:599},
        {id:"3",title:"Galaxy S10",price:799},
        {id:"4",title:"Moto G2",price:299},
        {id:"5",title:"Dell Alienware",price:1299},
        {id:"6",title:"Surface Pro",price:1199},
        {id:"7",title:"Logitech Keyboard",price:30},
        {id:"8",title:"Logitech Mouse",price:20},
        {id:"9",title:"Screen Guard",price:10},
        {id:"10",title:"Some Random Stuff",price:10},
        {id:"11",title:"Another Random Stuff",price:10},
    ]
    
    const addItem = (productTitle,productPrice) =>{
        //console.log(productID);        
        cartData.addItems(productTitle,productPrice)
    }
    
    return (
        <div className="productHolder">                    
            {
               products.map((product)=>(
                  <div className="productSquare" key={product.id}>
                      {product.title}
                      &nbsp;${product.price}
                      <br/>                      
                      <button onClick={addItem.bind(this,product.title,product.price)}>
                          Add to Cart
                      </button>                        
                                              
                  </div>
               ))
            }            
        </div>
    )
}
