import React from 'react'
import { motion } from "framer-motion";

import classes from './cartItem.module.css'

const CartItem = React.forwardRef(({ id, name, img, size, totalPrice, amount, onRemovePlantGroup, onPlus, onMinus }, ref) => {
  const handleRemoveGroup = () => {
    onRemovePlantGroup(id)
  }

  const handlePlusItem = () => {
    onPlus(id)
  }

  const handleMinusItem = () => {
    onMinus(id)
  }


  return (
    <div ref = {ref} className={`${classes.cartItem} cart-item`}>
        <div className={classes.content}>
            <img src={img} alt="productImage" className={classes.image}/>

            <div className={classes.desc}>
                <div className={classes.wrapper}>
                    <div className={classes.text}>
                        <p className={classes.name}>{name}</p>
                        <p className={classes.size}>Plant size: {size}</p>
                    </div>
                    <div className={classes.close} onClick = {handleRemoveGroup}>
                        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.68342 0.835938L10.1642 1.3167L1.3167 10.1635L0.835938 9.68308L9.68342 0.835938Z" fill="#7B7B7B"/>
                            <path d="M1.3167 0.835938L10.1642 9.68274L9.68342 10.1638L0.835938 1.31704L1.3167 0.835938Z" fill="#7B7B7B"/>
                        </svg>
                    </div> 
                </div>


                <div className={classes.rightPart}>
                    <div className={classes.amountFilters}>
                        <div className={classes.amounfilter} onClick = {handleMinusItem}>-</div>
                        <div className={classes.amount}>{amount}</div>
                        <div className={classes.amounfilter} onClick = {handlePlusItem}>+</div>
                    </div>
                    <p className = {`price ${classes.price}`}>{totalPrice}.00<span>$</span></p>
                </div>
            </div>



                
        </div>
    </div>
    
  )
})

export const MCartItem = motion(CartItem)
export default CartItem