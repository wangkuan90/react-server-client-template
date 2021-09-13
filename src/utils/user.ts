import { setCookie, getCookie } from './cookies';

export function isLogin() {
    let user = getCookie('user');
    return !!user;
}