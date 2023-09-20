import React, { useState } from 'react'
import CartContext from './CartContext'
const CartProvider = (props) => {
    const [items,updateItems]=useState([
      {id:1,ItemName:'Paracetamol',price:10,quantity:34},
      {id:2,ItemName:'Volini Spray',price:39,quantity:24},
    ])
    const [cart,updateCart]=useState([{id:1,ItemName:'Paracetamol',price:10,quantity:34}])
    const [totalAmount,setTotalAmount]=useState(0)

  const addItemToCart=()=>{

  }

  const removeItemToCart=()=>{

  }
  
  
    const cartContext={
    items:items,
    cartItems:cart,
    totalAmount:totalAmount,
    addItem:addItemToCart,
    removeItem:removeItemToCart

  }



  return (
    <>
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
    </>
  )
}

export default CartProvider
