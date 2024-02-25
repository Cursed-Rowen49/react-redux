import { combineReducers, createStore } from "redux";
import { accountReducer } from "./reducer/accountReducer";

const rootReducer = combineReducers({ account: accountReducer });

const store = createStore(rootReducer);

export default store;
