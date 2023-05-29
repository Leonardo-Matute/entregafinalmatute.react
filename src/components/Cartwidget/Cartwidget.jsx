import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'


const CartWidget = () => {
  return (
    <div style={{
      display:"flex", 
      width:"20px",  
      alignItems:"flex-end"}}>
        <FontAwesomeIcon icon={faCartShopping} />
        <span>0</span>
    </div>
  )
}

export default CartWidget