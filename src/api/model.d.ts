
export interface AjaxDataModel<T> {
    success: boolean;
    data: T;
    msg?: string;
    message?: string;
}

export interface UserDataModel {
    phone: string;
}

export interface IsLoginUserModel {
    user: UserDataModel | null;
    islogin: boolean;
}