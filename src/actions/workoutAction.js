import axios from 'axios';

import serverConfig from './server.config';

export function addWorkout(data) {
    console.log(data);
    
    return axios.post(`${serverConfig.base_url}/api/v1/workout/add`, data)
        .then(res => {
            return res.data.data._id
        })
        .catch(err => {
            return err
        })
}

export function addUserWorkout(data) {
    console.log(data);

    return axios.post(`${serverConfig.base_url}/api/v1/workout/user/add`, data)
        .then(res => {            
            return res
        })
        .catch(err => {
            return err
        })
}