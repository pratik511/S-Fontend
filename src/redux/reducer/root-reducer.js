import {combineReducers} from 'redux';
import {productDetailReducer, productReducer} from './productReducer';

const rootReducer = combineReducers({
    products:productReducer,
    productDetail:productDetailReducer,
})

export default rootReducer;