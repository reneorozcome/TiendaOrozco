import thunk from 'redux-thunk'
import CartReducer from './reducers/cart.reducer'
import OrderReducer from './reducers/order.reducer'
import ProductReducer from './reducers/product.reducer'
import CategoryReducer from './reducers/category.reducer'
import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux'

const RootReducer = combineReducers({
    cart: CartReducer,
    orders: OrderReducer,
    product: ProductReducer,
    category: CategoryReducer
})
export default createStore(RootReducer, applyMiddleware(thunk))