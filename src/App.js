import './App.css';
import CatalogPage from './pages/catalogPage/catalogPage';
import { MainPage } from './pages/mainPage/mainPage';
import {Routes, Route} from 'react-router-dom'
import {useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { fetchNewArrivals, fetchPlants } from './redux/actions/products';
import PlantPage from './pages/plantPage/plantPage';
import CartPage from './pages/cartPage/cartPage';



function App() {
  const dispatch = useDispatch()
  const {species, category} = useSelector(({filtersReducer}) => filtersReducer)
  const {priceRange} = useSelector(({filtersReducer}) => filtersReducer)

  React.useEffect(() => {
    dispatch(fetchPlants(editFilters(category, 'category'), editFilters(species, 'species'), editFilters(priceRange)))
  }, [category.length, species.length, priceRange[0]])

  React.useEffect(() => {
    dispatch(fetchNewArrivals())
  }, [])

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  let res = null; 

  function editFilters(arr, filterType) {
  
    let newArr = [];
  
    if (arr.length === 0) {
      
      return null;
    }
    

    if (res === null) {
      arr.map((filter, i) => {
        if (i === 0) {
          if (filterType === undefined) {
            newArr.push(`?price_lte=${filter}`); 
            return;
          }
          newArr.push(`?${filterType}=${filter}`);
          return;
        }
  
        newArr.push(`&${filterType}=${filter}`);
      });
    } else {
      arr.map((filter, i) => {
        if (filterType === undefined) {
          newArr.push(`&price_lte=${filter}`);
          return;
        }
  
        if (i === 0) {
          newArr.push(`&${filterType}=${filter}`);
          return;
        }
  
        newArr.push(`&${filterType}=${filter}`);
      });
    }

    if(newArr.length === 0){
      return null
    }
    console.log(res)
    console.log(newArr)
    if(res === null){
      res = [...newArr]
    }else{
      newArr.map(item => res.push(item))
    }
    
    
    /* res = newArr; */
    console.log(res)
    return newArr;
  }

  const {plants} = useSelector(({productsReducer}) => {
    return{
      plants: productsReducer.plants
    }
  })
  
  const {newArrivals} = useSelector(({productsReducer}) => {
    return {
      newArrivals: productsReducer.newArrivals
    }
  })

  return (
 
      <Routes>
        <Route path = '/' element = {<MainPage newArrivals = {newArrivals}/>}/>
        <Route path = '/catalog' element = {<CatalogPage items = {plants}/>}/>
        <Route path = '/cart' element = {<CartPage/>}/>
        <Route path = '/shop/:id' element = {<PlantPage/>}/>
        <Route path = '*' element = {<MainPage/>}/>
      </Routes>

  );
}

export default App;
