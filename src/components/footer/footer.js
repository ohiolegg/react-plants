import React from 'react'
import { motion } from "framer-motion";
import { fadeInUp } from '../../animationTypes';
import classes from './footer.module.css'

function Footer() {
  return (
    <motion.section initial = "hidden" whileInView = "visible" viewport = {{amount: 0.1, once: true}} className={classes.footer}>
        <a name = 'footer'></a>
        <div className={`${classes.containerWrapper} ${classes.footerWrapper}`}>
            <motion.div variants={fadeInUp} custom = {0.2} className={classes.footerLogo}>PlantyCo.</motion.div>

            <motion.div variants={fadeInUp} custom = {0.2} className={classes.map}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d164153.52229615633!2d36.145742264604!3d49.994507026000456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127a09f63ab0f8b%3A0x2d4c18681aa4be0a!2z0KXQsNGA0YzQutC-0LIsINCl0LDRgNGM0LrQvtCy0YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsINCj0LrRgNCw0LjQvdCw!5e0!3m2!1sru!2sde!4v1654615029971!5m2!1sru!2sde" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </motion.div>

            <div className={classes.menuItem}>
                <motion.h5 variants={fadeInUp} custom = {0.2}>Contacts</motion.h5>
                <ul>
                    <motion.li variants={fadeInUp} custom = {0.5}>+380505005050</motion.li>
                    <motion.li variants={fadeInUp} custom = {0.5}>plantyco@gmail.com</motion.li>
                    <motion.li variants={fadeInUp} custom = {0.5}>Glory to Ukraine, 45</motion.li>
                </ul>
            </div>

            <div className={classes.menuItem}>
                <motion.h5 variants={fadeInUp} custom = {0.2}>Menu</motion.h5>
                <ul>
                    <motion.li variants={fadeInUp} custom = {0.5}>Plants</motion.li>
                    <motion.li variants={fadeInUp} custom = {0.5}>Greeing</motion.li>
                    <motion.li variants={fadeInUp} custom = {0.5}>
                        <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M30.38 5.45992C29.9469 5.45403 29.5218 5.57669 29.1584 5.81239C28.7951 6.04809 28.5097 6.38625 28.3385 6.7841C28.1674 7.18195 28.118 7.62164 28.1967 8.04755C28.2753 8.47347 28.4785 8.86649 28.7806 9.17692C29.0826 9.48736 29.4699 9.70125 29.8935 9.79157C30.3171 9.88189 30.758 9.84457 31.1604 9.68434C31.5628 9.52411 31.9086 9.24815 32.1542 8.89137C32.3998 8.53459 32.534 8.113 32.54 7.67992V7.61992C32.5348 7.04867 32.3055 6.50229 31.9016 6.09834C31.4976 5.69438 30.9513 5.46514 30.38 5.45992Z" stroke="#2A4E2B" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M35.55 0.499908H2.45C1.92828 0.512955 1.43233 0.729415 1.068 1.10308C0.703674 1.47675 0.499837 1.97803 0.5 2.49991V35.5999C0.5 36.1303 0.710714 36.639 1.08579 37.0141C1.46086 37.3892 1.96957 37.5999 2.5 37.5999H35.6C36.1304 37.5999 36.6391 37.3892 37.0142 37.0141C37.3893 36.639 37.6 36.1303 37.6 35.5999V2.44991C37.5935 2.18724 37.5353 1.92842 37.4288 1.68825C37.3222 1.44807 37.1694 1.23124 36.979 1.05015C36.7887 0.869061 36.5645 0.727258 36.3193 0.632845C36.0741 0.538432 35.8127 0.493259 35.55 0.499908V0.499908Z" stroke="#2A4E2B" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M19 10.72C17.3624 10.72 15.7615 11.2056 14.3999 12.1154C13.0382 13.0252 11.977 14.3184 11.3503 15.8314C10.7236 17.3443 10.5596 19.0092 10.8791 20.6153C11.1986 22.2215 11.9872 23.6968 13.1452 24.8548C14.3031 26.0128 15.7785 26.8014 17.3847 27.1209C18.9908 27.4404 20.6557 27.2764 22.1686 26.6497C23.6816 26.023 24.9748 24.9617 25.8846 23.6001C26.7944 22.2385 27.28 20.6376 27.28 19V19C27.28 16.804 26.4077 14.6979 24.8548 13.1451C23.302 11.5923 21.196 10.72 19 10.72V10.72Z" stroke="#2A4E2B" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </motion.li>
                </ul>
            </div>
        </div>
    </motion.section >
  )
}

export default Footer