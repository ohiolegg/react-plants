const initialState = {
    plants: [],
    newArrivals: [],
    isLoaded: false,
    prices : null
}

const productsReducer = (state = initialState, action) => {
    switch(action.type){
        case 'SET_PLANTS': {
            let currentPrices = state.prices;
            const items = action.payload
            if( state.prices === null){
                currentPrices = {
                    maxPrice : Math.max(...items.map(plant => (plant.price))),
                    minPrice: Math.min(...items.map(plant => (plant.price)))
                } 
            }
            return{
                ...state,
                plants: items,
                prices: currentPrices,
                isLoaded: true
            }
        }
        case 'SET_LOADED':
            return{
                ...state,
                isLoaded: action.payload
            }
        case 'SET_NEW_ARRIVALS':
            return{
                ...state,
                newArrivals: action.payload,
            }
        default:
            return{
                ...state
            }
    }
}

export default productsReducer;