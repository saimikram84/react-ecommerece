import { combineReducers } from "redux";
import productReducer from './products/reducer';


const rootReducer = combineReducers({
    productReducer : productReducer
});

export default rootReducer;