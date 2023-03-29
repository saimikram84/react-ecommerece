import {
    GET_PRODUCTS,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAILURE
} from './contants';
import {getProductsRequest} from '../products/model';

export const getProducts = () => {
    return async dispatch=>{
        try{
            dispatch({type : GET_PRODUCTS});
            const apiReponse = await getProductsRequest();
            dispatch({type : GET_PRODUCTS_SUCCESS, payload: apiReponse});
        }
        catch(err){
            dispatch({type : GET_PRODUCTS_FAILURE, payload : err.error});
        }
    };
};
