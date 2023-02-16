import { CATEGORIES } from '../../data'
import { SELECT_CATEGORY } from '../actions/category.action'

const initialState = {
    selected: null,
    categories: CATEGORIES
}
const CategoryReducer = (state = initialState, action) => {
    switch(action.type){
        case SELECT_CATEGORY:
            const IndexCategory = state.categories.findIndex(cat => cat.id === action.categoryID)
            if(IndexCategory === -1)
                return state
            return { ...state, selected: state.categories[IndexCategory] }
        default:
            return state
    }
}
export default CategoryReducer