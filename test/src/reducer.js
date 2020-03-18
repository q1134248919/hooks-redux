import { combineReducers,createStore } from "redux";

import name from './name'
import user from './user'

const appReducer = combineReducers({
    name,
    user,
});
 

export default createStore(appReducer);
