import React from 'react'
import './catalogItem.css'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { motion } from "framer-motion";
 
const CatalogItem = React.forwardRef(({name, desc, price, id, imgUrls}, ref) => {

  let url = `/shop/${id}`

  return (
    <div className="catalog-item" ref = {ref}>
        <img src={imgUrls[0]} alt=""/>
        <h5>{name}</h5>
        <p className='desc-item'>{desc}</p>
        <div className="catalog-item-inner">
          <Link to = {url}><div className="catalog-item-button">MORE</div></Link>
          <p className = "price">{price}.00<span>$</span></p>
        </div>              
    </div>
  )
})

CatalogItem.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}

export const MCatalogItem = motion(CatalogItem)

export default CatalogItem