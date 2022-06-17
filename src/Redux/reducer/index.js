import { combineReducers } from "redux";
import { productReducer } from "./producReducer"


const reducers = combineReducers({
    allProducts: productReducer,
});

export default reducers