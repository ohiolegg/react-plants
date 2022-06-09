import productsReducer from './products'
import filtersReducer from './filters'
import cartReducer from './cart'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    filtersReducer,
    productsReducer,
    cartReducer
})

export default rootReducer