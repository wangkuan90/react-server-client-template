import React, { useEffect } from 'react';
import './index.less';
import {
    useHistory
} from "react-router-dom";
import ListItem from '../../components/list/index'
import { startMenu } from '../../utils/list';
function Menu(props: any) {
    let history = useHistory();

    function goMenu(type: string) {
        history.push(`/menu${type}`);
    }
    const myList = startMenu[0].map((inner, index) => (
        <ListItem innerData={inner} key={index}></ListItem>
    ))
    return (
        <div className="pg-me">
            <div className="body-top flex mr28 ml28 mt30 mb21 pt41 pl16 pb40">
                <div className="img mr33">
                    <img src="https://img1.baidu.com/it/u=1136624566,3053705919&fm=26&fmt=auto&gp=0.jpg" alt="" className="header" />
                </div>
                <div className="left-main">
                    <p>王宽</p>
                    <p>ID: 190237134</p>
                    <p>地区：天木山</p>
                    <p>帮会：天地会</p>
                </div>
            </div>
            <div className="body ml22 mr22 mt22">{myList}</div>
        </div>
    )
}

export default Menu;
