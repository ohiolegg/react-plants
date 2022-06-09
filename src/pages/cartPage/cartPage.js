import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItem, {MCartItem} from '../../components/cartItem/cartItem'
import Header from '../../components/header/header'
import classes from './cartPage.module.css'
import {removePlantGroup, plusCartItem, minusCartItem, setDiscount} from '../../redux/actions/cart'
import Footer from "../../components/footer/footer"
import RunningLine from "../../components/runningLine/runningLine"
import { motion } from "framer-motion";
import EmptyCart from '../emptyCart/emptyCart'

import { fadeInLeft, fadeInUp, zoomIn } from '../../animationTypes'

const discountCode = 'TEST_SALE'

function CartPage() {

  const dispath = useDispatch()
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const {items, totalPrice, totalCount} = useSelector(({cartReducer}) => cartReducer)
  const [wrong, setWrong] = React.useState(false)
  const [disabled, setDisabled] = React.useState(false)
  const [success, setSuccess] = React.useState(false)
  
  const plants = Object.keys(items).map(item => {
      return items[item].items[0]
  })
  
  const [code, setCode] = React.useState('')

  const onRemove = (id) => {
      dispath(removePlantGroup(id))
      setTotalPrice()
  }

  const onPlusCartItem = (id) => {
    dispath(plusCartItem(id))
    setTotalPrice()
  }

  const onMinusCartItem = (id) => {
    dispath(minusCartItem(id))
    setTotalPrice()
  }

  const changeHandler = (e) => {
      setCode(e.target.value)
      setWrong(false)
  }

  const setTotalPrice = () => {
    if(code === discountCode){
        dispath(setDiscount())
      }
  }

  const submitHandler = (e) => {
      e.preventDefault()
      if(code === discountCode){
        dispath(setDiscount())
        setWrong(false)
        setSuccess('SUCCESFULLY ACTIVATED')
        setDisabled(true)
      }else{ 
          setWrong(true)
          setCode('WRONG CODE')
      }
  }

  return (
    <>  
        
        {
            totalCount < 1 ? <EmptyCart/>:
            <>
                <Header bgColor = {'#2A4E2B'} textColor = "#fff" fullPaged = {true}/>
                <motion.div initial = "hidden" whileInView = "visible" viewport = {{amount: 0.02, once: true}} className={classes.containerWrapper}>
            <div className="headline catalog-headline">
                    <motion.h1 variants={fadeInUp} custom = {0.4}> CART</motion.h1>
                    <div className="headline-suptitle">
                        <motion.div variants={fadeInLeft} custom = {0.6} className = "line"></motion.div>
                        <motion.span variants={fadeInLeft} custom = {0.8}>Your home jungle</motion.span> 
                    </div>
            </div>

            <div className={classes.wrapper}>
                <div className={classes.cartItems}>
                <motion.div variants={fadeInLeft} custom = {0.8} className = {classes.headline}>Plants</motion.div>

                    <div className={classes.items}>
                        {
                            plants.map((plant, key) => (
                                    <MCartItem initial = {{ x: -50, opacity: 0}}
                                    animate = {{x: 0, opacity: 1 }} transition = {{type: 'tween', duration: 0.01, stiffness: 100, delay: 1.2 + (key * 0.1)}} onPlus = {onPlusCartItem} onMinus = {onMinusCartItem} id = {plant.id} onRemovePlantGroup = {onRemove} amount = {items[plant.id].items.length} name = {plant.name} totalPrice = {items[plant.id].totalPrice} size = {plant.size} img = {plant.img} key = {`${plant.name}_${key}_cart`}/>
                                )
                            )                       
                        }
                    </div>
                </div>

                <div className={classes.orderCheck }>
                    <motion.div variants={fadeInLeft} custom = {0.9} className = {classes.headline}>Total</motion.div>
                    <motion.div variants={zoomIn} custom = {0.8} className={classes.orderForm}>
                        <div className={classes.formWrapper}>
                            <div className={classes.payInfo}>
                                <p>Subtotal: </p> <p className = {classes.price}>{totalPrice}.00<span>$</span></p>
                            </div>
                            
                            <div className={classes.payInfo}>
                                <p>Shipping: </p> <p className =  {classes.price}>5.00<span>$</span></p>
                            </div>

                            <div className={classes.payInfo}>
                                <p className = {classes.totalInfo}>Total: </p> <p className =  {classes.price}>{totalPrice + 5}.00<span>$</span></p>
                            </div>
                            <fieldset disabled = {disabled}>
                                <form className={classes.discountForm} onSubmit = {submitHandler}>
                                    <input type = "text" placeholder = {'DISCOUNT CODE'} value = {success ? success : code} onChange = {changeHandler} className={`${classes.discountInput} ${wrong ? classes.wrong : ''}`}/>
                                    <button type = "submit" className={classes.discountButton}>APPLY</button>
                                </form>
                            </fieldset>

                            <div className={classes.checkoutButton}>CHECKOUT</div>
                        </div>
                    </motion.div>
                </div>
            </div>
                </motion.div>
                <RunningLine/>
                <Footer/>
            </>
        }
        
    </>
  )
}

export default CartPage