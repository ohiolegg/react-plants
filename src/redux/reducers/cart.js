const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0
}

const getTotalPrice = arr => arr.reduce((sum, obj) => obj.price + sum, 0)

const cartReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_PLANT_TO_CART': {
            const currentItems =  !state.items[action.payload.id] 
            ? [action.payload] 
            :[...state.items[action.payload.id].items, action.payload]

            const newItems = {
                ...state.items,
                [action.payload.id]: {
                    items: currentItems, 
                    totalPrice: getTotalPrice(currentItems)
                }
            }

            const totalCount = Object.keys(newItems).reduce((sum, key) => newItems[key].items.length + sum, 0)
            const totalPrice = Object.keys(newItems).reduce((sum, key) => newItems[key].totalPrice + sum, 0)

            return{
                ...state,
                items: newItems,
                totalCount,
                totalPrice
            }
        }

        case 'REMOVE_PLANT_GROUP': {
            const newItems = {
                ...state.items
            }

            const currentTotalPrice = newItems[action.payload].totalPrice
            const currentTotalCount= newItems[action.payload].items.length

            delete newItems[action.payload]

            return{
                ...state,
                items: newItems,
                totalPrice: state.totalPrice - currentTotalPrice,
                totalCount: state.totalCount - currentTotalCount
            }
        }

        case 'PLUS_CART_ITEM': {

            const newObjectItems = [   
                ...state.items[action.payload].items,
                state.items[action.payload].items[0]
            ]

            const newItems = {
                ...state.items, 
                [action.payload]: {
                    items: newObjectItems, 
                    totalPrice: getTotalPrice(newObjectItems),
                }  
            }
            
            const totalCount = Object.keys(newItems).reduce((sum, key) => newItems[key].items.length + sum, 0)
            const totalPrice = Object.keys(newItems).reduce((sum, key) => newItems[key].totalPrice + sum, 0)

            return{
                ...state, 
                items: newItems,
                totalCount,
                totalPrice
            }
        }

        case 'MINUS_CART_ITEM': {
            const oldItems = state.items[action.payload].items
            const newObjectItems = oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems

            const newItems = {
                ...state.items, 
                [action.payload]: {
                    items: newObjectItems, 
                    totalPrice: getTotalPrice(newObjectItems),
                }  
            }

            const totalCount = Object.keys(newItems).reduce((sum, key) => newItems[key].items.length + sum, 0)
            const totalPrice = Object.keys(newItems).reduce((sum, key) => newItems[key].totalPrice + sum, 0)

            return{
                ...state, 
                items: newItems,
                totalCount,
                totalPrice

            }
        }

        case 'CLEAR_CART': {
            return{
                items:{},
                totalCount: 0,
                totalPrice: 0
            }
        }

        case 'SET_DISCOUNT': {
            return{
                ...state,
                totalPrice: Math.round(state.totalPrice - (state.totalPrice / 100 * 10))
            }
        }

        default:
            return{
                ...state
            }
    }
}

export default cartReducer;