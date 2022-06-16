import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Header from '../../components/header/header'
import Footer from "../../components/footer/footer"

import {fadeInUp, fadeInLeft, fadeInRight, zoomIn} from '../../animationTypes';

import classes from './plantPage.module.css'
import RunningLine from '../../components/runningLine/runningLine'
import { useDispatch } from 'react-redux'
import { addPlantToCart } from '../../redux/actions/cart'
import { motion } from "framer-motion";
import { array } from 'prop-types'

const tabs = ['More about the plant', 'Plant care']

const aviableSizes = [{size: 25, price: 88}, {size: 30, price: 92}, {size: 60, price: 105}, {size: 120, price: 135}]

function PlantPage() {
  const [plant, setPlant] = React.useState(null)
  const [activeTab, setActiveTab] = React.useState(0)
  const [activeSize, setActiveSize] = React.useState(0)
  const [activeImage, setActiveImage] = React.useState()
  const [activePrice, setActivePrice] = React.useState(0)
  const [amount, setAmount] = React.useState(1)
  const {id} = useParams()
  const dispatch = useDispatch();

  React.useEffect(() => {
    axios.get(`/plants?id=${id}`).then(({data}) =>{
      setPlant(...data)
      setActivePrice(aviableSizes[0].price)
    })
  }, [id])

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

 const handleSize = (i) => {
    setActiveSize(i)
    setActivePrice(aviableSizes[i].price)
    setAmount(1)
 }

 const amountHandler = (num) => {
     if(amount + num < 1){
        return
     }

     setAmount(amount + num)
     setActivePrice(aviableSizes[activeSize].price * (amount + num))
 }

 const addPlantHandler = () => {
    const plantObj = {
        name: plant.name,
        id: plant.id,
        img: plant.imgUrls[0],
        price: aviableSizes[activeSize].price, 
        size: aviableSizes[activeSize].size,
     }

     if(amount > 1){
        Array(amount).fill(0).map((__) => {
            dispatch(addPlantToCart(plantObj))
        })
     }else{
        dispatch(addPlantToCart(plantObj))
     }

     
 }

  return (
    <>
      <Header bgColor = {'#2A4E2B'} textColor = "#fff" fullPaged = {true}/>
      {plant && (
        <>
        <motion.div initial = "hidden" whileInView = "visible" viewport = {{amount: 0.1, once: true}} className={classes.containerWrapper}>
            <div className={classes.headline}>
                <motion.h1 variants={fadeInUp} custom = {0.5} className = {classes.plantName}>{plant.name}</motion.h1>
                <div className={classes.headlineSuptitle}>
                    <motion.div variants={fadeInLeft} custom = {0.8} className = {classes.line}></motion.div>
                    <motion.span variants={fadeInLeft} custom = {1}>Main Page / Catalog / {plant.name}</motion.span> 
                </div>
            </div>

            <motion.section initial = "hidden" whileInView = "visible" viewport = {{amount: 0.1, once: true}} className={classes.catalogItem}>
                <div className={classes.itemWrapper}>
                    <div className={classes.itemPhotos}>
                        <div className={classes.photosSmall}>
                            {
                                plant.imgUrls.map((url, i) => {
                                    return(
                                        <motion.img variants={fadeInUp} custom = {0.8 + (0.2 * i)} src={url} alt="" key = {i + 'url'} onClick = {() => setActiveImage(plant.imgUrls[i])}/>
                                    )
                                })
                            }
                        </div>
                        <motion.img variants={fadeInRight} custom = {0.8} src={activeImage ? activeImage : plant.imgUrls[0]} alt = "" className = {classes.bigPhoto}/>
                    </div>

                    <div className={classes.itemOffer}>
                        <motion.p variants={fadeInUp} custom = {0.8} className={classes.offerDesc}>
                            {plant.desc}
                        </motion.p>

                        <motion.div variants={zoomIn} custom = {0.1} className={classes.offerFilters}>
                            <div className={classes.filter}>
                                <motion.h5 variants={fadeInLeft} custom = {0.8}>Plant height:</motion.h5>

                                <div className={classes.filters}>
                                    {
                                        aviableSizes.map(({size}, i) => (
                                            <motion.div variants={fadeInLeft} custom = {1 + (0.2 * i)} onClick = {() => handleSize(i)} key = {`${i}_${size}`} className = {`${classes.sizeFilter} ${activeSize === i ? classes.sizeFilterActive : ''}`}>{size}</motion.div>
                                        ))
                                    }
                                </div>

                            </div>

                            <div className={classes.filter}>
                            <motion.h5 variants={fadeInLeft} custom = {0.8}>Amount</motion.h5>

                                <div className={classes.amountFilters}>
                                <motion.div variants={fadeInLeft} custom = {1 + (0.2 * 0)} className={classes.amounfilter} onClick = {() => amountHandler(-1)}>-</motion.div>
                                <motion.div variants={fadeInLeft} custom = {1 + (0.2 * 1)} className={classes.amount}>{amount}</motion.div>
                                <motion.div variants={fadeInLeft} custom = {1 + (0.2 * 2)} className={classes.amounfilter} onClick = {() => amountHandler(1)}>+</motion.div>
                                </div>

                            </div>
                        </motion.div>

                        <motion.div initial = "hidden" whileInView = "visible" viewport = {{amount: 0.1, once: true}} className={classes.offerInner}>
                            <motion.div variants={fadeInUp} custom = {0.2} className={classes.innerButton} onClick = {addPlantHandler}>GET THAT’</motion.div>
                            <motion.p variants={fadeInUp} custom = {0.2} className = {classes.price}>{activePrice}.00<span>$</span></motion.p>
                        </motion.div>
                    </div>
                </div>
            </motion.section>
        </motion.div>

        <motion.div initial = "hidden" whileInView = "visible" viewport = {{amount: 0.6, once: true}} className={classes.infoWrapper}>
            <div className="catalog-all__wrapper">
                    <div className={classes.infoTabs}>
                        <div className={classes.tabs}>
                            {
                                tabs.map((name,i) => {
                                    return(
                                        <motion.div variants={fadeInLeft} custom = {0.2 + (0.4 * i)} onClick = {() => setActiveTab(i)} className={`${classes.tab} ${i === activeTab ? classes.active : ''}`} key = {i}>{name}</motion.div>
                                    )
                                })
                            }
                        </div>

                        <motion.div variants={fadeInLeft} custom = {0.8} className={`${classes.content} ${0 === activeTab ? classes.contentActive : ''}`}>{plant.description}</motion.div>
                        <motion.div variants={fadeInLeft} custom = {1} className={`${classes.content} ${1 === activeTab ? classes.contentActive : ''}`}>
                            <motion.ul initial = "hidden" whileInView = "visible" viewport = {{amount: 0.1, once: true}}>
                                {
                                    plant.care.map((plantCare, i) => <motion.li variants={fadeInLeft} custom = {0.2 + (0.2 * i)}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.55 22C8.08333 22 7.675 21.8583 7.325 21.575C6.975 21.2917 6.74167 20.925 6.625 20.475L5.5 16H18.5L17.375 20.475C17.2583 20.925 17.025 21.2917 16.675 21.575C16.325 21.8583 15.9167 22 15.45 22H8.55ZM12 8C12 6.33333 12.5833 4.91667 13.75 3.75C14.9167 2.58333 16.3333 2 18 2C18 3.5 17.525 4.8 16.575 5.9C15.625 7 14.4333 7.66667 13 7.9V10H21V13C21 13.55 20.8043 14.0207 20.413 14.412C20.021 14.804 19.55 15 19 15H5C4.45 15 3.979 14.804 3.587 14.412C3.19567 14.0207 3 13.55 3 13V10H11V7.9C9.56667 7.66667 8.375 7 7.425 5.9C6.475 4.8 6 3.5 6 2C7.66667 2 9.08333 2.58333 10.25 3.75C11.4167 4.91667 12 6.33333 12 8Z" fill="#6CA23E"/>
                                        </svg>
                                    {plantCare}</motion.li>)
                                }
                            </motion.ul>
                        </motion.div>
                    </div>
            </div>

            <motion.div variants={fadeInRight} custom = {0.2} className={classes.infoImg}>
                <img src={plant.bannerUrl} alt=""/>
            </motion.div>
        </motion.div>
        <RunningLine animated = {'animated'}/>
    </>

    )}
    <Footer/>  
    </>
  )
}

export default PlantPage