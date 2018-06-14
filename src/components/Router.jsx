import React from 'react' ;
import {Route} from 'react-router-dom' ;

import Dashboard from './dashboard/Dashboard' ;
import Profile from "./profile/Profile";
import ProfileInfoForm from './profile/ProfileInfoForm';

const RouterComponent = () => {
    return (
        <div>
            <Route exact path='/' component={Dashboard}/>
            <Route exact path='/profile' component={Profile}/>
            <Route exact path='/profile/info' component={ProfileInfoForm}/>
        </div>
    )
};

export default RouterComponent;