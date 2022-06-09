const initialState = {
    category: [],
    priceRange: [],
    species: []
}

const filtersReducer = (state = initialState, action) => {
    switch(action.type){
        case 'SET_CATEGORY':
            return{
                ...state,
                category: action.payload,
            }
        case 'SET_PRICE':
            return{
                ...state,
                priceRange: action.payload,
            }
        case 'SET_SPECIES':
            return{
                ...state,
                species: action.payload,
            }
        default:
            return{
                ...state
            }
    }
}

export default filtersReducer;