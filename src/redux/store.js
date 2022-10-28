import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import rootReducer from "./reducer/root-reducer";
import {composeWithDevTools} from 'redux-devtools-extension';


let initialState ={};
const middleware = [thunk];

const store = createStore(rootReducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store;