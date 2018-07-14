import axios from 'axios';

import serverConfig from './server.config';

export function addWorkout(data) {
    console.log(data);
    return new Promise((resolve, reject) => {
        axios.post(`${serverConfig.base_url}/api/v1/coach/workout/add`, data)
            .then(({data}) => {
                console.log(data);
                if (data.success) {
                    resolve(data.data._id);
                } else {
                    reject(data.message);
                }
            })
            .catch(err => {
                console.error(err);
                reject("Some Error Occured");
            });
    });
}

export function addUserWorkout(data) {
    console.log(data);
    return new Promise((resolve, reject) => {
        axios.post(`${serverConfig.base_url}/api/v1/coach/workout/user/add`, data)
            .then(({data}) => {
                console.log(data);
                if (data.success) {
                    resolve(data.data);
                } else {
                    reject(data.message);
                }
            })
            .catch(err => {
                console.error(err);
                reject("Some Error Occured");
            });
    });
}

export function fetchUserWorkout(params) {
    console.log(params);
    return new Promise((resolve, reject) => {
        axios.get(`${serverConfig.base_url}/api/v1/coach/workout/user/search`, {params})
            .then(({data}) => {
                console.log(data);
                if (data.success) {
                    if (data.data == null) {
                        reject(`Workout Not Found for This Client on date ${params.date}`);
                    }
                    resolve(data.data);
                } else {
                    reject(data.message);
                }
            })
            .catch(err => {
                console.error(err);
                reject("Some Error Occured");
            });
    });
}