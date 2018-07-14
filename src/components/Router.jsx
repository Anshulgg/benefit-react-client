import React from 'react' ;
import {Route,Switch} from 'react-router-dom' ;

import Dashboard from './dashboard/Dashboard' ;
import Profile from "./profile/Profile";
import ProfileInfoForm from './profile/ProfileInfoForm';
import Nutrition from './nutrition/Nutrition';
import Training from './training/Training';
import Expiry from './expiry/Expiry';
import Timeline from './timeline/Timeline';
import Calls from './calls/Calls';

const RouterComponent = () => {
    return (
        <Switch>
            <Route exact path='/' component={Dashboard}/>
            <Route exact path='/expiry' component={Expiry}/>
            <Route exact path='/timeline' component={Timeline}/>
            <Route exact path='/calls' component={Calls}/>
            <Route exact path='/profile/:id/info' component={ProfileInfoForm}/>
            <Route exact path='/profile/:id/nutrition' component={Nutrition}/>
            <Route exact path='/profile/:id/training' component={Training}/>
            <Route exact path='/profile/:id' component={Profile}/>

        </Switch>
    )
};

export default RouterComponent;