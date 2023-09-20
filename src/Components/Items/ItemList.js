import React, { useContext } from 'react'
import './ItemList.css'
import CartContext from '../Store/CartContext'
const ItemList = () => {

  const ctx=useContext(CartContext)
  return (
    <>
    <div className='items-list'>
        <div className='title'>
      <h1>Items added into List</h1>
      </div>
      {ctx.items.map((item1)=>{
        <div className='list-items'>
          <label>{item1.Name}</label>
          <label>{item1.description}</label>
          <label>{item1.quantity}</label>
          <label>{item1.price}</label>
        </div> })}
      
    </div>
    </>
    )
}

export default ItemList
