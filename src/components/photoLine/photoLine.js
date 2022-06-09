import React from 'react'

import { fadeInUp, fadeInLeft } from '../../animationTypes'

import classes from './photoLine.module.css'
import { motion } from "framer-motion"

function PhotoLine() {
  return (
    <motion.section initial = "hidden" whileInView = "visible" viewport = {{amount: 0.1, once: true}} className={classes.socialMedia}>
    <div className={classes.containerWrapper}>
        <div className={classes.headline}>
            <motion.h1 variants = {fadeInUp} custom = {0.1} className = {classes.headlineSubtitle}>WE ARE ON </motion.h1>
            <div className = {classes.headlineWrapper}>
                <div className={classes.headlineSuptitle}>
                    <motion.span variants = {fadeInLeft} custom = {0.4} className = {classes.insta}>@PLANTYCO</motion.span> <motion.div variants = {fadeInLeft} custom = {0.6} className = {`${classes.line} ${classes.instaLine}`}></motion.div>
                </div>
                <motion.h1 variants = {fadeInUp} custom = {0.3} className = {classes.insta}> INSTAGRAM </motion.h1>
            </div>
        </div>
    </div>
    <div className={classes.instagramSlider}>
        <div className={classes.sliderWrapper}>
        <div className={classes.sliderRow}>
            <div className={`${classes.sliderItem} ${classes.regular}`}>
                <p className={classes.sliderTitle}>HOME</p>
                <div className={classes.sliderItemImage} style = {{backgroundImage: "url('/images/photoLine/1.jpg')"}}>

                </div>
            </div>

            <div className={`${classes.sliderItem} ${classes.large}`} style = {{backgroundImage: "url('/images/photoLine/2.jpg')"}}>
                
            </div>

            <div className={`${classes.sliderItem} ${classes.regular}`}>
                <p className={classes.sliderTitle}>JUNGLE</p>
                <div className={classes.sliderItemImage} style = {{backgroundImage: "url('/images/photoLine/3.jpg')"}}>

                </div>
            </div>

            <div className={`${classes.sliderItem} ${classes.large}`} style = {{backgroundImage: "url('/images/photoLine/4.jpg')"}}>
                
            </div>
            </div>

           <div className={classes.sliderRow}>
            <div className={`${classes.sliderItem} ${classes.regular}`}>
                <p className={classes.sliderTitle}>HOME</p>
                <div className={classes.sliderItemImage} style = {{backgroundImage: "url('/images/photoLine/1.jpg')"}}>

                </div>
            </div>

            <div className={`${classes.sliderItem} ${classes.large}`} style = {{backgroundImage: "url('/images/photoLine/2.jpg')"}}>
                
            </div>

            <div className={`${classes.sliderItem} ${classes.regular}`}>
                <p className={classes.sliderTitle}>JUNGLE</p>
                <div className={classes.sliderItemImage} style = {{backgroundImage: "url('/images/photoLine/3.jpg')"}}>

                </div>
            </div>

            <div className={`${classes.sliderItem} ${classes.large}`} style = {{backgroundImage: "url('/images/photoLine/4.jpg')"}}>
                
            </div>
            </div>
        </div>
            
        </div>
</motion.section>
  )
}

export default PhotoLine