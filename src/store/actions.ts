import {
    SET_USER_DATA
} from './constants';
import { UserDataModel } from './../api/model';
import { setCookie } from '../utils';

export function setUserData(data: UserDataModel) {
    if (data) {
        setCookie('user', JSON.stringify(data));
    } else {
        setCookie('user', '');
    }
    return {
        type: SET_USER_DATA,
        data: {
            isLogin: !!data,
            user: data
        }
    }
}