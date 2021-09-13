import React from 'react';
import './index.less';
import rightIco from "../../assets/img/right-ico.png";

interface MaskDomProps {
    innerData: any;
}

const ListItem: React.FC<MaskDomProps> = function ({ innerData }) {

    return (
        <div className="co-list-item flex flex-justify-between flex-align-center vertical-middle">
            <p className="flex flex-align-center ml14">
                <img src={innerData.img} className="img mr8"/>
                <span className="title fs16">{innerData.title}</span>
            </p>
            <span className="flex flex-align-center">
                {
                    innerData.title === '我' && <p className="title fs14">退出</p>
                }
                <img src={rightIco} className="rightIcon mr14"/>
            </span>
        </div>
    );
}

export default ListItem;
