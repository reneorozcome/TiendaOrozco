import { DELETE_ORDER, GET_ORDERS } from '../actions/order.action'

const INITIAL_STATE = {
    list: []
}
const OrderReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case DELETE_ORDER:
            return {
                ...state,
                list: list.filter(item => item.id !== action.orderID)
            }
        case GET_ORDERS:
            return {
                ...state,
                list: action.payload
            }
        default:
            return state
    }
}
export default OrderReducer