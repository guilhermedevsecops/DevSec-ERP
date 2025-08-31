import axios from 'axios';
import {Store} from './redux/Store';
import { AxiosPath } from './AxiosPath';

const api = axios.create({
    baseURL : AxiosPath.BASE_URL,
    headers:{
        "Content-Type" : "application/json",
    }
});


api.interceptors.request.use((config) => {
    const state = Store.getState();
    const token = state.auth.token;
    if(token){
        config.headers.Authorization = `Bearer $(token)`;
    }
    return config;
});

export default api;