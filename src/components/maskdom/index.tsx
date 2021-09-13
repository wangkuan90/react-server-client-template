import React from 'react';
import './index.less';

interface MaskDomProps {
    children: React.ReactNode;
    className?: string;
}

const MaskDom: React.FC<MaskDomProps> = function ({ children, className }) {

    return (
        <div className={className + ' co-maskdom'}>
            <div className="nav-back"></div>
            {children}
        </div>
    );
}

export default MaskDom;
