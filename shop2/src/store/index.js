import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import LoginReducer from "./reducers/login";
import RankReducer from "./reducers/rank";
import ShopcarReducer from "./reducers/shopcar";
import GoodsListReducer from "./reducers/goods";


const reducers = combineReducers({
    LoginReducer,
    RankReducer,
    ShopcarReducer,
    GoodsListReducer,
})
const store = createStore(reducers, applyMiddleware(thunk));
export default store;