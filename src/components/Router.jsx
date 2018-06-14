import React from 'react' ;
import {Route} from 'react-router-dom' ;

import Dashboard from './dashboard/Dashboard' ;
import Profile from "./profile/Profile";
import ProfileInfoForm from './profile/ProfileInfoForm';
import Nutrition from './profile/Nutrition';

const RouterComponent = () => {
    return (
        <div>
            <Route exact path='/' component={Dashboard}/>
            <Route exact path='/profile' component={Profile}/>
            <Route exact path='/profile/info' component={ProfileInfoForm}/>
            <Route exact path='/profile/nutrition' component={Nutrition}/>
        </div>
    )
};

export default RouterComponent;