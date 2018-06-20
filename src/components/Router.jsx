import React from 'react' ;
import {Route} from 'react-router-dom' ;

import Dashboard from './dashboard/Dashboard' ;
import Profile from "./profile/Profile";
import ProfileInfoForm from './profile/ProfileInfoForm';
import Nutrition from './profile/Nutrition';
import Expiry from './expiry/Expiry';
import Timeline from './timeline/Timeline';
import Calls from './calls/Calls';

const RouterComponent = () => {
    return (
        <div>
            <Route exact path='/' component={Dashboard}/>
            <Route exact path='/expiry' component={Expiry}/>
            <Route exact path='/timeline' component={Timeline}/>
            <Route exact path='/calls' component={Calls}/>
            <Route exact path='/profile' component={Profile}/>
            <Route exact path='/profile/info' component={ProfileInfoForm}/>
            <Route exact path='/profile/nutrition' component={Nutrition}/>
        </div>
    )
};

export default RouterComponent;