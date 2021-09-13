import axios, { AxiosRequestConfig, AxiosResponse, AxiosPromise } from 'axios';
import { ServerUrl } from './config';
import { AjaxDataModel } from './model';
import { getCookie } from '../utils';

const instance = axios.create({
    baseURL: ServerUrl,
    timeout: 1000,
    withCredentials: true,
});

interface ResponseData {
    success: boolean;
    msg: string;
    message: string;
    data: any;
}

instance.interceptors.response.use((response) => {
    console.log(response);
    if (response.status >= 200 && response.status < 300) {
        const result: ResponseData = response.data;
        if (result.success) {
            return result.data;
        } else {
            // Toast.show(result.message || result.msg);
        }
    } else {
        // Toast.show(response.statusText);
    }
    return response;
});

export function doLogin(phone: string) {
    return instance({
        url: '/login.json',
        method: 'post',
        data: {
            phone
        }
    });
}