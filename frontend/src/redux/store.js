import recordsReducer from "./records-reducer";
import {combineReducers, createStore} from "redux";
import mainPageReducer from "./mainPage-reducer";

let reducers = combineReducers({
    recordsPage:recordsReducer,
    mainPage: mainPageReducer,
});

let store = createStore(reducers);
window.store = store;

export default store;