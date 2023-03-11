import { ADD_ITEM, REMOVE_ITEM, CONFIRM_ITEMS } from '../actions/cart.action'

const sumTotal = list => list.map(item => item.quantity * item.price).reduce((a, b) => a + b, 0)
const INITIAL_STATE = {
    items: [],
    total: 0
}
const CartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case ADD_ITEM:
            let updatedCartAdd = []
            if(state.items.find(item => item.id === action.item.id)){
                updatedCartAdd = state.items.map(item => {
                    if(item.id === action.item.id)
                        item.quantity++
                    return item
                })
            }else{
                const item = {...action.item, quantity: 1}
                updatedCartAdd = [...state.items, item]
            }
            return {
                ...state,
                items: updatedCartAdd,
                total: sumTotal(updatedCartAdd)
            }
        case REMOVE_ITEM:
            const updatedCartRemove = state.items.filter(item => item.id !== action.itemID)
            return {
                ...state,
                items: updatedCartRemove,
                total: sumTotal(updatedCartRemove)
            }
        case CONFIRM_ITEMS:
            if(action.confirm)
                return {
                    ...state,
                    total: 0,
                    items: []
                }
    }
    return state
}
export default CartReducer