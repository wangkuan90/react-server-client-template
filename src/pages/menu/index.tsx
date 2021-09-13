import React, { useEffect } from 'react';
import './index.less';
import LeftMenu from '../../components/left-menu';

function Menu(props: any) {

    useEffect(function () {
    }, []);

    return (
        <div className="pg-menu">
            <div className="header">
                <span className="title">Ant desing</span>
                <span className="login-out">退出登录</span>
            </div>
            <div className="content">
                <LeftMenu />
                <div className="content-page">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Menu;
