import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CatalogItem, { MCatalogItem } from '../../components/catalogItem/catalogItem'
import FilterInput, {MFilterInput} from '../../components/filterInput/filterInput'
import Header from '../../components/header/header'
import Loader from '../../components/loader/loader'
import { setCategory, setPrice, setSpecies } from '../../redux/actions/filters'
import Footer from "../../components/footer/footer";
import RunningLine from "../../components/runningLine/runningLine";
import CatalogItemLoader from "../../components/catalogItemLoader/catalogItemLoader";
import { AnimatePresence, motion } from "framer-motion";

import { fadeInUp, fadeInLeft, fadeInRight, zoomIn} from '../../animationTypes'

import './catalogPage.css'

const categories = [
    {name: 'Rare plants', link: 'rare'},
    {name:'Big indoor plants', link:'big-indoor'},
    {name:'Pet-friendly plants', link:'pet-friendly'},
    {name:'Shade-tolerant', link:'shade-tolerant'},
    {name:'Easy-care plants', link:'easy-care'}
]

const species = [
    {name: 'Aglaonema', link: 'aglaonema'},
    {name: 'Adonidia', link: 'adonidia'},
    {name: 'Adiantum', link: 'adiantum'},
    {name: 'Allocation', link: 'allocation'},
    {name: 'Anthurium', link: 'anthurium'},
    {name: 'Dieffenbachia', link: 'dieffenbachia'},
    {name: 'Caladium', link: 'caladium'},   
    {name: 'Colatea', link: 'colatea'},
    {name: 'Xanthosome', link: 'xanthosome'},
    {name: 'Platycerium', link: 'platycerium'}, 
    {name: 'Monstera', link: 'monstera'},
    {name: 'Palm', link: 'palm'},    
    {name: 'Sansevieria', link: 'sansevieria'},
    {name: 'Syngonium', link: 'syngonium'},
    {name: 'Ficus', link: 'ficus'}, 
    {name: 'Philodenaron', link: 'philodenaron'}
]

let stateCategories = [];
let stateTypes = [];

function CatalogPage({items}) {

  const [activeCategory, setActiveCategory] = React.useState(stateCategories) 
  const [activeTypes, setActiveType] = React.useState(stateTypes) 
  const isLoaded= useSelector(({productsReducer}) => productsReducer.isLoaded)
  const {prices}= useSelector(({productsReducer}) => productsReducer)
  const [openCategories, setOpenCategories] = React.useState(false)
  const [openSpecies, setOpenSpecies] = React.useState(false)
  const [hoverCross, setHoverCross] = React.useState(false)
  const [rangeValue, setStatePrice] = React.useState(null)

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  React.useEffect(() => {
    console.log(rangeValue)
  }, [rangeValue])

  const dispatch = useDispatch()

  const handleChangeRange = (price) => {
    if(price < prices.minPrice){
        return
    }
    setStatePrice(price)
    dispatch(setPrice([price]))
  }

  const handleFilters = (i) => {
    stateCategories.push(categories[i].link)
    setActiveCategory(stateCategories)
    dispatch(setCategory(stateCategories))
  }

  const handleTypes = (i) => {
    stateTypes.push(species[i].link)
    setActiveType(stateTypes)
    dispatch(setSpecies(stateTypes))
  }

  const onCancelFilters = (i) => {
        const deletingFilter = activeCategory.indexOf(categories[i].link);
        stateCategories.splice(deletingFilter, 1)
        setActiveCategory(stateCategories)
        dispatch(setCategory(stateCategories))    
  }

  const onCancelTypes = (i) => {
    const deletingFilter = activeTypes.indexOf(species[i].link);
    stateTypes.splice(deletingFilter, 1)
    setActiveType(stateTypes)
    dispatch(setSpecies(stateTypes))
  }

  const clearAllFilters = () => {  
    stateCategories = []
    setActiveCategory(stateCategories)
    dispatch(setCategory([]))
    dispatch(setSpecies([]))
    dispatch(setPrice([]))
    /* handleChangeRange(maxPrice) */
    setOpenCategories(false)
    setOpenSpecies(false)
}

  return (
      <>
        <Header bgColor = {'#2A4E2B'} textColor = "#fff" fullPaged = {true}/>
        <motion.div initial = "hidden" whileInView = "visible" viewport = {{amount: 0.02, once: true}} className="catalog-all__wrapper">
            <div className="headline catalog-headline">
                <motion.h1 variants={fadeInUp} custom = {0.5}> OUR JUNGLE</motion.h1>
                <div className="headline-suptitle">
                    <motion.div variants={fadeInLeft} custom = {0.8} className = "line"></motion.div>
                    <motion.span variants={fadeInLeft} custom = {1}>Main Page / Catalog</motion.span> 
                </div>
            </div>

            <section  className="catalog">
                <div className="catalog-wrapper">
                    <div className="catalog-filters">
                        <div className="catalog-categories">
                            <motion.div variants={fadeInLeft} custom = {1.3} className="category-title">Plants</motion.div>
                            <motion.div variants={zoomIn} custom = {1.3} className={openCategories ? 'category-filter filter-active' : 'category-filter'}>
                                <div className={openCategories ? 'filter-name filter-active' : 'filter-name'} onClick = {() => setOpenCategories(!openCategories)}>
                                <motion.p variants={fadeInUp} custom = {1.5}>Categories</motion.p> 
                                    <motion.svg variants={fadeInUp} custom = {1.6} className = {openCategories ? 'active' : ''} width="743" height="392" viewBox="0 0 743 392" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M51.5577 382.46L371.43 70.6521L691.302 382.46C697.017 388.042 704.689 391.167 712.678 391.167C720.667 391.167 728.339 388.042 734.054 382.46C736.821 379.749 739.019 376.513 740.52 372.941C742.021 369.369 742.794 365.534 742.794 361.66C742.794 357.786 742.021 353.951 740.52 350.379C739.019 346.808 736.821 343.571 734.054 340.86L393.766 9.08408C387.79 3.25919 379.775 -0.000823975 371.43 -0.000823975C363.085 -0.000823975 355.07 3.25919 349.094 9.08408L8.80566 340.796C6.01888 343.509 3.80391 346.754 2.2915 350.337C0.779094 353.92 -6.10352e-05 357.771 -6.10352e-05 361.66C-6.10352e-05 365.55 0.779094 369.4 2.2915 372.983C3.80391 376.567 6.01888 379.811 8.80566 382.524C14.5207 388.106 22.1928 391.231 30.1817 391.231C38.1706 391.231 45.8426 388.106 51.5577 382.524V382.46Z" fill="#2A4E2B"/>
                                    </motion.svg>
                                </div>
                                <AnimatePresence>
                                    {
                                        openCategories && categories.map((category, i) => {
                                            return(
                                                <MFilterInput initial = {{ x: 50, opacity: 0}}
                                                animate = {{x: 0, opacity: 1 }} transition = {{type: 'tween', duration: 0.01, stiffness: 200, delay: 0.00001 + (i * 0.1)}} onCancelFilters = {() => onCancelFilters(i)} handleFilters = {() => handleFilters(i)} name = {category.name} key = {`${category.name}_${i}`}/>
                                            )
                                        })
                                    }
                                </AnimatePresence>
                            </motion.div>

                            <motion.div variants={zoomIn} custom = {1.3} className='category-filter'>
                                <div className={openSpecies ? 'filter-name filter-active' : 'filter-name'} onClick = {() => setOpenSpecies(!openSpecies)}>
                                <motion.p variants={fadeInUp} custom = {1.5}>Plant species</motion.p> 
                                    <motion.svg variants={fadeInUp} custom = {1.6} className = {openSpecies ? 'active' : ''} width="743" height="392" viewBox="0 0 743 392" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M51.5577 382.46L371.43 70.6521L691.302 382.46C697.017 388.042 704.689 391.167 712.678 391.167C720.667 391.167 728.339 388.042 734.054 382.46C736.821 379.749 739.019 376.513 740.52 372.941C742.021 369.369 742.794 365.534 742.794 361.66C742.794 357.786 742.021 353.951 740.52 350.379C739.019 346.808 736.821 343.571 734.054 340.86L393.766 9.08408C387.79 3.25919 379.775 -0.000823975 371.43 -0.000823975C363.085 -0.000823975 355.07 3.25919 349.094 9.08408L8.80566 340.796C6.01888 343.509 3.80391 346.754 2.2915 350.337C0.779094 353.92 -6.10352e-05 357.771 -6.10352e-05 361.66C-6.10352e-05 365.55 0.779094 369.4 2.2915 372.983C3.80391 376.567 6.01888 379.811 8.80566 382.524C14.5207 388.106 22.1928 391.231 30.1817 391.231C38.1706 391.231 45.8426 388.106 51.5577 382.524V382.46Z" fill="#2A4E2B"/>
                                    </motion.svg>
                                </div>
                                <AnimatePresence>
                                {
                                    openSpecies && species.map((specie, i) => {
                                        return(
                                            <MFilterInput initial = {{ x: 50, opacity: 0}}
                                            animate = {{x: 0, opacity: 1 }} transition = {{type: 'tween', duration: 0.01, stiffness: 200, delay: 0.00001 + (i * 0.1)}} onCancelFilters = {() => onCancelTypes(i)} handleFilters = {() => handleTypes(i)} name = {specie.name} key = {`${specie.name}_${i}`}/>
                                        )
                                    })
                                }
                                </AnimatePresence>
                            </motion.div>

                            <motion.div variants={fadeInUp} custom = {2} className="filter-price">
                                {
                                    prices && (
                                        <>                                     
                                            <input type="range" value={rangeValue} onChange={(e) => handleChangeRange(e.target.value)}  style={{accentColor : '#2A4E2B'}} className = "price-range" min={"0"} step = '1' max={prices.maxPrice}/> 
                                            <div className="price-inputs">
                                                from <input className = 'min-price'  type = "text" placeholder={prices.minPrice} value={prices.minPrice} disabled/> to <input className = 'max-price' type = "text" placeholder={prices.maxPrice} value={rangeValue} disabled/>
                                            </div>
                                        </>
                                    )
                                }

                            </motion.div >

                            <motion.div initial = "hidden" whileInView = "visible" viewport = {{amount: 0.5, once: true}} className="clear-filter">
                                <motion.div variants={fadeInRight} custom = {0.2} className="clear-icon" onClick = {() => clearAllFilters()}>
                                    <svg className = {hoverCross ? 'active-cross' : ''} onPointerEnter = {() => setHoverCross(true)} onPointerLeave = {() => setHoverCross(false)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 4L4 20M20 20L4 4L20 20Z" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                                    </svg>
                                </motion.div>
                                <motion.p variants={fadeInRight} custom = {0.4} onClick = {() => clearAllFilters()}>Clear filters</motion.p>
                            </motion.div>
                        </div>
                    </div>
                    
                    <div className="catalog-item_items">
                        <AnimatePresence>
                            {
                                isLoaded && items.map((item, i)=>{
                                    return(
                                        <MCatalogItem initial = {{ y: 50, opacity: 0}}
                                     animate = {{y: 0, opacity: 1 }} transition = {{type: 'tween', duration: 0.01, stiffness: 200, delay: 0.03 + (i * 0.5)}} imgUrls = {item.imgUrls} id = {item.id} name = {item.name} desc = {item.desc} price = {item.price} key = {`${item.name}_${i}`}/>
                                    )
                                })   
                            }
                            {
                                !isLoaded && Array(15).fill(0).map((__, i)=>{
                                    return(
                                        <CatalogItemLoader key = {`loader-${i}`}/>
                                    )
                                })
                            }
                        </AnimatePresence>
                    </div>
                </div>
            </section>
        </motion.div>
        <RunningLine/>
        <Footer/>
      </>
  )
}

export default CatalogPage