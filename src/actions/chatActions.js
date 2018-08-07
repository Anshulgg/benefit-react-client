import axios from 'axios';

import serverConfig from './server.config';

export function fetchChat(client) {
    return axios.get(`${serverConfig.base_url}/api/v1/chat/fetch?timestamp=0&client=${client}`).then(res => {
        // console.log(res.data);
        if (res.data.success) {
            const messages = res.data.data;
            // console.log("Exercises from Server : ", exercises);
            return messages;
        } else {
            return [];
        }

    });
}
