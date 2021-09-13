import { UserDataModel, IsLoginUserModel } from './../api/model';
import { SET_USER_DATA } from './constants';
import { getCookie } from '../utils';

function generateUserCache() {
    const userDataCache = getCookie('user');
    return {
        isLogin: !!userDataCache,
        user: userDataCache ? JSON.parse(userDataCache) : undefined
    };
}

const userData = generateUserCache();

interface IAction<T> {
    type: string;
    data: T
}

export const userReducer = (state = userData, action: any) => {
    switch (action.type) {
        case SET_USER_DATA:
            return action.data;
        default:
            return state;
    }
};
