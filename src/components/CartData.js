import React,{ useState } from 'react'

export const CartDataContext = React.createContext()
export default function CartData(props) {
    

    const [cartItems,setCartItems] = useState([])    
    const [id,setId]=useState(1)

    const addItems=(productName,price)=>{
        const item={id:`${id}`,product:`${productName}`,price:`${price}`}        
        setCartItems(currentCart=>[...cartItems,item])
        setId(prevCount=>{return prevCount+1})
        //console.log(`${cartItems}`)  
    }
     
    const removeItems=(productID)=>{             
       
       setCartItems(prevState=>{
           let newCart=[...prevState]           
           let updatedCart=newCart.filter((value)=>{                                                   
               if(value.id===productID){                                  
                }
               else
                return !(value.id===productID)
       })           
           return updatedCart;
       })       
    }

    return (
        <div>
            
            <CartDataContext.Provider value={{
                cartItems:cartItems,
                addItems:addItems,                
                removeItems:removeItems
            }}>
                {props.children}
            </CartDataContext.Provider>

        </div>
    )

    
}
