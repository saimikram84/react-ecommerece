import {
    GET_PRODUCTS,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAILURE,
    GET_PRODUCTS_LIST,
    GET_PRODUCTS_LIST_SUCCESS,
    GET_PRODUCTS_LIST_FAILURE
} from './contants';
import {getProductsRequest,getProductsListRequest} from '../products/model';

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

export const getProductsList = (page) => {
    return async dispatch => {
        try{
            dispatch({type : GET_PRODUCTS_LIST});
            const apiResponse = await getProductsListRequest(page);
            dispatch({type : GET_PRODUCTS_LIST_SUCCESS, payload: apiResponse});
        }
        catch(err){
            dispatch({type : GET_PRODUCTS_LIST_FAILURE, payload : err.error});
        }
    }
}
