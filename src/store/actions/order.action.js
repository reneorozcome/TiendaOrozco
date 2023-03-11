import { URL_API } from '../../constants/utils/database'

export const GET_ORDERS = 'GET_ORDERS'
export const DELETE_ORDER = 'DELETE_ORDER'

export const deleteOrder = id => {
    return async dispatch => {
        try {
            await fetch(`${URL_API}/ordenes/${id}.json`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            dispatch({
                orderID: id,
                type: DELETE_ORDER
            })
        } catch (error) { console.log(error.message) }
    }
}
export const getOrders = () => {
    return async dispatch => {
        try{
            const response = await fetch(`${URL_API}/ordenes.json`, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const result = await response.json()
            const orders = Object.keys(result).map(key => ({
                id: key,
                ...result[key]
            }))
            dispatch({
                payload: orders,
                type: GET_ORDERS
            })
        } catch (error) { console.log(error.message) }
    }
}