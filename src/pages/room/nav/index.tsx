import React from 'react';
import './index.less';
import BackIco from '../../../assets/img/back-ico.png';
import MaskDom from '../../../components/maskdom';

interface NavProps {
    title: string;
}

const Nav: React.FC<NavProps> = function ({ title }) {

    return (
        <MaskDom className="p-room-co-nav">
            <div className="nav-con">
                <img className="back-ico" src={BackIco}></img>
                <span className="nav-title">{title}</span>
            </div>
        </MaskDom>
    )
}

export default Nav;
