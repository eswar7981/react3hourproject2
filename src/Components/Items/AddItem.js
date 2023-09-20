import React from 'react'
import AddProductButton from './AddProductButton'
import './AddItem.css'
const AddItem = () => {
  return (
    <>
    <div className='search-item'>
        <div className='title1'>
            <h1>Product details</h1>
        </div>
        <div className='inputs'>
            <label>Product Name</label>
            <input type='text'></input>
            <label>description</label>
            <input type='text'></input>
            <label>price</label>
            <input type='number'></input>
            <label>quantity</label>
            <input type='number'></input>
             <AddProductButton></AddProductButton>
    
        </div>
   
            
           
      
    </div>
    </>
  )
}

export default AddItem
