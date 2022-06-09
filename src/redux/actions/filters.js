export const setCategory = (categories) => ({
    payload : categories, 
    type: 'SET_CATEGORY'
})

export const setPrice = (price) => ({
    payload : price, 
    type: 'SET_PRICE'
})

export const setMaxPrice = (price) => ({
    payload : price, 
    type: 'SET_MAX_PRICE'
})

export const setSpecies = (species) => ({
    payload : species, 
    type: 'SET_SPECIES'
})
