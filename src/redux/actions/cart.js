export const addPlantToCart = (plant) => ({
    type: 'ADD_PLANT_TO_CART',
    payload: plant
})

export const clearCart = () => ({
    type: 'CLEAR_CART'
})

export const removePlantGroup = (id) => ({
    type: 'REMOVE_PLANT_GROUP',
    payload: id
})

export const plusCartItem = (id) => ({
    type: 'PLUS_CART_ITEM',
    payload: id
})

export const minusCartItem = (id) => ({
    type: 'MINUS_CART_ITEM',
    payload: id
})

export const setDiscount = () => ({
    type: 'SET_DISCOUNT',
})