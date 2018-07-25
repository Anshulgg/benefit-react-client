import React, {Component} from 'react';
import {BrowserRouter, Switch, Route, } from 'react-router-dom' ;

import Home from "./Home";
import LoginForm from './auth/LoginForm';
import Chat from './chat/Chat';

import requireAuth from "../utils/requireAuth";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route exact path='/login' component ={LoginForm}/>
                        <Route exact path='/chat' component ={requireAuth(Chat)}/>
                        <Route path='/' component={requireAuth(Home)}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
