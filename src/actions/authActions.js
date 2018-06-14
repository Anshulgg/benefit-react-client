import axios from 'axios';
import jwtDecode from 'jwt-decode';
import {SET_CURRENT_USER} from "./types";
import setAuthHeader from "../utils/setAuthHeader";
import serverConfig from './server.config';

export function setCurrentUser(user) {
    return {
        type: SET_CURRENT_USER,
        user
    };
}

export function login(data) {
    console.log(data);
    return (dispatch) => {
        console.log('called')
        return axios.post(`${serverConfig.base_url}/api/v1/coach/auth/login`, data).then(res => {
            console.log(res.data);
            if(res.data.success){
                const token = res.data.token;
                localStorage.setItem('token', token.token);
                setAuthHeader(token);
                dispatch(setCurrentUser(jwtDecode(token.token)))
            } else {

            }

        });
    }
}
