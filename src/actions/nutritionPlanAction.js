import axios from 'axios';

import serverConfig from './server.config';

export function addNutritionPlan(data) {
    console.log(data);
    return new Promise((resolve, reject) => {
        axios.post(`${serverConfig.base_url}/api/v1/coach/nutrition/add`, data)
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

export function addNutritionPlanUser(data) {
    console.log(data);
    return new Promise((resolve, reject) => {
        axios.post(`${serverConfig.base_url}/api/v1/coach/nutrition/user/add`, data)
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

export function fetchUserNutritionPlan(params) {
    console.log(params);
    return new Promise((resolve, reject) => {
        axios.get(`${serverConfig.base_url}/api/v1/coach/nutrition/user/search`, {params})
            .then(({data}) => {
                console.log(data);
                if (data.success) {
                    if (data.data == null) {
                        reject(`Plan Not Found for This Client on date ${params.date} for ${params.type}`);
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

export function searchFood(q) {
    return axios.get(`${serverConfig.base_url}/api/v1/mealLog/food/search/${q}`).then(res => {
        // console.log(res.data);
        if (res.data.success) {
            const items = res.data.data;
            // console.log("Exercises from Server : ", exercises);
            return items;
        } else {
            return [];
        }

    });
}

