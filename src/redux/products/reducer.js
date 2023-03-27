import {
    SET_PRODUCT,
    SELECTED_PRODUCT
} from './contants';

const intialState = {
    products : [
        {
            id : '1',
            title : 'Dipesh',
            category : 'programmer'
        }
    ]
};

export const productReducer = (state=intialState, action)=>{
    switch(action.type){
        case SET_PRODUCT : 
        return state;
        default: 
        return state;
    }
}

