import React from 'react'
import './CartIcon.css'
const CartIcon = (props) => {
  return (
    <>
    <button onClick={props.onClick}>
        <span>
            Cart
        </span>
        <span>
            0
        </span>
    </button>
    
    </>
  )
}

export default CartIcon
