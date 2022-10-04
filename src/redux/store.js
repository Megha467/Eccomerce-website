import {createStore } from "redux";
import rootReducers from "./reducer";
import {loadState} from './localStorage'; 
const persistedState = loadState();
 
const store = createStore(rootReducers, persistedState);
export default store;
