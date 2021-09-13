export function setCookie(key: string, value: string, expiredays: number = 1, domain?: string, path?: string) {
    let exdate = new Date();
    exdate.setTime(exdate.getTime() + (60 * 60 * 1000 * 24 * expiredays));
    let str = expiredays ? `;expires=${exdate.toUTCString()}` : '';
    str += domain ? `;domain=${domain}` : '';
    str += path ? `;path=${path}` : '';
    document.cookie = `${key}=${escape(value)}${str}`;
}

export function getCookie(key: string) {
    var arr, reg = new RegExp("(^| )" + key + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg)) {
        return unescape(arr[2]);
    }
    return '';
}

export function clearCookie(name: string, domain?: string, path?: string) {
    setCookie(name, '', -1, domain, path);
}