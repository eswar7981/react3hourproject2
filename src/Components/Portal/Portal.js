import React from 'react'
import DisplayCart from './DisplayCart'
import  ReactDOM  from 'react-dom'
import './Portal.css'
const rend=document.getElementById('portal')
const Portal = (props) => {
  return (
    <>
    <div className='modal'> 
     { ReactDOM.createPortal(<DisplayCart closeCart={props.closeCart}/>,rend)}
     </div></>
  )
}

export default Portal
