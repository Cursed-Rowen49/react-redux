import { applyMiddleware, combineReducers, createStore } from "redux";
import { accountReducer } from "./reducer/accountReducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({ account: accountReducer });

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
