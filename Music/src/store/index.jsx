import { createStore, combineReducers } from 'redux';
import ShopcarReducers from './reducers/shopcar';


const Reducers = combineReducers({
    ShopcarReducers
})

export default createStore(Reducers)