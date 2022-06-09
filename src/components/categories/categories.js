import React from 'react'
import classes from './categories.module.css'
import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight } from '../../animationTypes';
import { Link } from 'react-router-dom';

const categories = [
    {name: 'Rare plants', img: '/images/mainPage/categories/content-1.png'},
    {name: 'Big indoor plants', img: '/images/mainPage/categories/content-2.png'},
    {name: 'Pet-friendly plants', img: '/images/mainPage/categories/content-3.png'},
    {name: 'Shade-tolerant', img: '/images/mainPage/categories/content-4.png'},
    {name: 'Easy-care plants', img: '/images/mainPage/categories/content-5.png'}
]

function Categories() {

  const [activeHover, setActiveHover] = React.useState(0)

  return (
    <>
    <motion.section initial = "hidden" whileInView = "visible" viewport = {{amount: 0.2, once: true}} className={classes.categories}>
        <div className={classes.containerWrapper}>
                <div className={classes.headline}>
                    <div className = {classes.headlineWrapper}>
                        <div className={classes.headlineSuptitle}>
                            <motion.span variants={fadeInRight} custom = {0.8}>YOUR</motion.span> <motion.div variants={fadeInRight} custom = {1} className = {classes.line}></motion.div>
                        </div>
                        <motion.h1 variants={fadeInUp} custom = {0.4}> PLANTS MAKE </motion.h1>
                    </div>
                    <motion.h1 variants={fadeInUp} custom = {0.6} className = {classes.headlineSubtitle}>LIFE BEAUTIFUL</motion.h1>
                </div>

                <motion.div initial = "hidden" whileInView = "visible" viewport = {{amount: 0.5, once: true}} className={classes.categoriesTabs}>
                    <motion.ul initial = "hidden" whileInView = "visible" viewport = {{amount: 0.5, once: true}} className={classes.categoriesItems}>

                        {
                            categories.map(({name},i) => {
                                return(
                                    <Link to = '/catalog'><motion.li variants={fadeInLeft} custom = {0.03 + (i * 0.5)} onPointerEnter = {() => setActiveHover(i)} className={`${classes.categoriesItem} ${i === activeHover ? classes.active : ''}`} key = {i}>{name}</motion.li></Link>
                                )
                            })
                        }
                    </motion.ul>

                    <motion.div  variants={fadeInUp} custom = {0.03} className={classes.categoriesTabsContents}>
                        {
                            categories.map(({img}, i) => {
                                return(
                                    <div key = {i} className={`${classes.categoriesTabsContent} ${i === activeHover ? classes.active : ''}`}style = {{backgroundImage:"url('./images/mainPage/contents-shape.svg')"}}>
                                        <img src="/images/mainPage/content-bg.png" alt="" className={classes.backgroundCircle}/>
                                        <img src={img} alt="" className={classes.categoriesContentImg}/>
                                    </div>
                                )
                            })
                        }
                    </motion.div>

                </motion.div>
        </div>
    </motion.section>
    </>
  )
}

export default Categories