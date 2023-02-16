import { legacy_createStore as createStore, combineReducers } from 'redux'
import ProductReducer from './reducers/product.reducer'
import CategoryReducer from './reducers/category.reducer'

const RootReducer = combineReducers({
    product: ProductReducer,
    category: CategoryReducer
})
export default createStore(RootReducer)