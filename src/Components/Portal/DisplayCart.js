import React from 'react'
import './DisplayCart.css'
const DisplayCart = (props) => {

    
  return (
    <div className='modal'>
      <h1>dd</h1>

      <button onClick={props.closeCart}>close</button>
      <button>order</button>
    </div>
  )
}

export default DisplayCart
