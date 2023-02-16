export const SELECT_PRODUCT = 'SELECT_PRODUCT'
export const FILTERED_PRODUCTS = 'FILTERED_PRODUCTS'

export const selectProduct = id => ({
    productID: id,
    type: 'SELECT_PRODUCT'
})
export const filteredProducts = id => ({
    categoryID: id,
    type: 'FILTERED_PRODUCTS'
})