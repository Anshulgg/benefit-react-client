import React from 'react' ;
import {Route} from 'react-router-dom' ;

import Dashboard from './dashboard/Dashboard' ;
import Profile from "./profile/Profile";

const RouterComponent = () => {
    return (
        <div>
            <Route exact path='/' component={Dashboard}/>
            <Route exact path='/profile' component={Profile}/>
        </div>
    )
};

export default RouterComponent;