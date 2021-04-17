import recordsReducer from "./records-reducer";
import {combineReducers, createStore} from "redux";

let reducers = combineReducers({
    recordsPage:recordsReducer
});

let store = createStore(reducers);
window.store = store;

export default store;