export const SELECT_CATEGORY = 'SELECT_CATEGORY'

export const selectCategory = id => {
    return ({
    categoryID: id,
    type: 'SELECT_CATEGORY'
})}