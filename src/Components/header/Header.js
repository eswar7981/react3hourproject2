import React from 'react'
import CartIcon from './CartIcon'
import './Header.css'
const Header = (props) => {
  return (<>
    <div className='header'>
    <div className='logo'>
        <h1>Medical Shop</h1>
    </div>
    <div className='cart-icon'>
        <CartIcon onClick={props.openCart1}/>
    </div>
    </div>
    </>
    
  )
}

export default Header
