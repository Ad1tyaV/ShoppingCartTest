import React, { useContext } from 'react'
import { CartDataContext } from './CartData'
import '../cart.css'

export default function ViewCart() {
    const cartData = useContext(CartDataContext)   
    const table_style={
        
    } 
    return (
        <div className="cartParent">                            
        <table style={table_style} align="center">
                {
                    cartData.cartItems.map((item)=>(                            
                        <React.Fragment key={item.id}>                                                
                            <tr>
                                <td>                                                                
                                {item.product}               
                                </td>
                                <td>                                
                                &nbsp;${item.price}
                                </td>                                
                                <td>
                                <button onClick={cartData.removeItems.bind(this,item.id)}>Remove</button>
                                </td>
                            </tr>                              
                                                  
                        </React.Fragment>
                    ))
                }
                
                <tr>
                    <td>
                        {!(cartData.cartItems.length===0)?"":"Please add some Items into Cart"}
                    </td>
                </tr>
            
            </table>  
        </div>
    )
}
