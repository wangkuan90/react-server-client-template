import React from 'react';
import './index.less';

function Back(props: any) {
    return (
        <div className="co-back">
            <div className="back-oil"></div>
            <div className="back-normal">
                {props.children}
            </div>
        </div>
    )
}

export default Back;
