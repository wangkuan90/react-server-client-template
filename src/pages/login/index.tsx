import React, { useState } from 'react';
import './index.less';
import {
    useHistory
} from "react-router-dom";
import chessKingIndex from "../../assets/img/chess-king-index.png";
import { setUserData } from '../../store/actions';

function Login() {
    const [phone, setCount] = useState('');
    let history = useHistory();

    function phoneChange(e: React.ChangeEvent<HTMLInputElement>) {
        setCount(e.target.value);
    }

    function submit() {
        setUserData({
            phone: '123123'
        });
        setTimeout(() => {
            history.push('/menu/home');
        }, 3000);
        // doLogin(phone).then(data => {
        // Toast.show({
        //     mask: true,
        //     content: '登录成功',
        //     afterClose: () => {
        //         setCookie('user', JSON.stringify(data));
        //         history.push('/menu/home');
        //     }
        // });
        // });
    }

    function goHome() {
        history.push('/menu/home');
    }

    return (
        <div className="pg-login">
            <p className="flex flex-justify-center mt100">
                <img src={chessKingIndex} />
            </p>
            <p className="fs26 text-center login-text mt56">登陆界面</p>
            <p className="flex flex-justify-center mt56">
                <input className="input w100" type="text" name="name" value={phone} placeholder="请输入手机号码" onChange={phoneChange} />
            </p>
            <p className="flex flex-justify-center" onClick={submit}>
                点我登陆
            </p>
        </div>
    )
}

export default Login;
