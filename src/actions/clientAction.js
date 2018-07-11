import axios from 'axios';
import {SET_ALL_CLIENTS} from "./types";
import serverConfig from './server.config';

export function setAllClients(clients) {
    return {
        type: SET_ALL_CLIENTS,
        clients
    };
}

export function fetchMyClients() {
    return (dispatch) => {
        return axios.get(`${serverConfig.base_url}/api/v1/coach/clients`).then(res => {
            console.log(res.data);
            if(res.data.success){
                const clients = res.data.data ;
                console.log("Clients from Server : " , clients);
                dispatch(setAllClients(clients))
            } else {

            }

        });
    }
}
