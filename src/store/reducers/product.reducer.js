import { PRODUCTS } from '../../data'
import { SELECT_PRODUCT, FILTERED_PRODUCTS } from '../actions/product.action'

const initialState = {
    selected: null,
    products: PRODUCTS,
    filteredProducts: []
}
const ProductReduceer = (state = initialState, action) => {
    switch(action.type){
        case SELECT_PRODUCT:
            return { ...state, selected: state.products.find(product => product.id === action.productID) }
        case FILTERED_PRODUCTS:
            return { ...state, filteredProducts: state.products.filter(product => product.category === action.categoryID) }
        default:
            return state
    }
}
export default ProductReduceer