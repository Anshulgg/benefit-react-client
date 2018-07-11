import {combineReducers} from 'redux' ;

import authReducer from './authReducer' ;
import clientReducer from "./clientReducer";

const rootReducer = combineReducers({
    auth : authReducer,
    clients : clientReducer
});

export default rootReducer ;
