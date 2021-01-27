import {PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL} from '../constants/productCon'
import axios from 'axios'

export const listProducts = () => async (dispatch) {
    try {
        dispatch({type: PRODUCT_LIST_REQUEST})
       
        const {data} = await axios.get('/api/products')

        dispatch({
            type: PRODUCT_LIST_SUCCESS
        })
    } catch (error)
    {

    }
}