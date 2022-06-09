import axios from 'axios';

export const fetchPlants = (species, category, priceRange) => (dispatch) => {
  dispatch(setLoaded(false))
    axios.get(`/plants${species != null ? `${species.join('')}` : ''}${category != null ? `${category.join('')}` : ''}${priceRange != null ? `${priceRange.join('')}` : ''}`).then(({data}) =>{
      dispatch(setPlants(data))
    })
}

export const fetchNewArrivals = () => (dispatch) => {
  dispatch(setLoaded(false))
  axios.get('/new-arrivals?_limit=3').then(({data}) => { 
    dispatch(setNewArrivals(data))
  })
}

export const setNewArrivals = items => ({
  payload: items,
  type: 'SET_NEW_ARRIVALS'
})

export const setPlants = (items) => ({
    payload : items, 
    type: 'SET_PLANTS'
})

export const setLoaded = payload => ({
  type: 'SET_LOADED',
  payload
})

export const setMaxPrice = () => ({
  type: 'SET_MAX_PRICE'
})


