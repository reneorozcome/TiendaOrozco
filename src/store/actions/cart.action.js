import { URL_API } from '../../constants/utils/database'

export const ADD_ITEM = 'ADD_ITEM'
export const REMOVE_ITEM = 'REMOVE_ITEM'
export const CONFIRM_ITEMS = 'CONFIRM_ITEMS'

export const addItem = item => ({
    item,
    type: ADD_ITEM
})
export const removeItem = itemID => ({
    itemID,
    type: REMOVE_ITEM
})
export const confirmItems = (payload, total) => {
    return async dispatch => {
        try{
            const response = await fetch(`${URL_API}ordenes.json`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    total,
                    items: payload,
                    date: Date.now()
                })
            })
            const result =  await response.json()
            dispatch({
                confirm: true,
                type: CONFIRM_ITEM
            })
        } catch (error) { console.log(error.message) }
    }
}