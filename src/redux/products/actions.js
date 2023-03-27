import {
    SET_PRODUCT,
    SELECTED_PRODUCT
} from './contants';

export const setProducts = (products) => {
    return {
        type : SET_PRODUCT,
        payload : products
    };
};

export const selectedProducts = (product) => {
    return {
        type : SELECTED_PRODUCT,
        payload : product
    }
}