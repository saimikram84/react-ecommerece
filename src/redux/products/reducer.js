import { act } from 'react-dom/test-utils';
import {
    GET_PRODUCTS,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAILURE
} from './contants';

const initState = {
    products : []
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
        default: 
        return state;
    }
}

export default productReducer;

