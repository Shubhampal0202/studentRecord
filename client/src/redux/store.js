import { createStore,applyMiddleware } from "redux";
import { studentReducer } from "./reducer/studentReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk'
export const store = createStore(studentReducer,composeWithDevTools(applyMiddleware(thunk)))
console.log("store");