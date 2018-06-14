import React from 'react';
import ReactDOM from 'react-dom';

//Redux
import {Provider} from 'react-redux' ;
import {createStore, applyMiddleware} from 'redux' ;
import thunkMiddleware from 'redux-thunk' ;
import jwtDecode from 'jwt-decode' ;
import {setCurrentUser} from "./actions/authActions";
import rootReducer from './reducers' ;

import App from './components/App';
import setAuthHeader from "./utils/setAuthHeader";

let store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware)
);

if (localStorage.token) {
    setAuthHeader(localStorage.token);
    store.dispatch(setCurrentUser(jwtDecode(localStorage.token)));
}


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>

    , document.getElementById('root'));
