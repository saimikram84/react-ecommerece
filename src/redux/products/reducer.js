import { act } from 'react-dom/test-utils';
import {
    GET_PRODUCTS,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAILURE,
    GET_PRODUCTS_LIST_SUCCESS,
    GET_PRODUCTS_LIST_FAILURE
} from './contants';

const initState = {
    products : [],
    products_list : []
};

const productReducer = (state=initState, action)=>{
    switch(action.type){
        case GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.payload
            };
            break;
        case GET_PRODUCTS_FAILURE:
            return {
                ...state,
                products: []
            };
            break;
        case GET_PRODUCTS_LIST_SUCCESS:
            return {
                ...state,
                products_list : action.payload
            }
            break;
        case GET_PRODUCTS_LIST_FAILURE:
            return {
                ...state,
                products_list : []
            }
        default: 
        return state;
    }
}

export default productReducer;

