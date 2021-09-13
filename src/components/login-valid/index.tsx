import { useEffect } from 'react';
import {
    useLocation,
    useHistory
} from "react-router-dom";
import { isLogin } from '../../utils';

function LoginValid() {
    let location = useLocation();
    let history = useHistory();
    useEffect(() => {
        if (location.pathname != '/login' && !isLogin()) {
            history.replace('/login');
        }
        if (location.pathname != '/login') {
        }
    });

    return null;
}

export default LoginValid;
