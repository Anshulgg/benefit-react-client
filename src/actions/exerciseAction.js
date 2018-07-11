import axios from 'axios';

import serverConfig from './server.config';

export function searchExercises(q) {
    return axios.get(`${serverConfig.base_url}/api/v1/coach/exercise/search/?q=${q}`).then(res => {
        // console.log(res.data);
        if (res.data.success) {
            const exercises = res.data.data;
            // console.log("Exercises from Server : ", exercises);
            return exercises;
        } else {
            return [];
        }

    });
}
