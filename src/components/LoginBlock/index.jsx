import React from 'react';

import './LoginBlock.scss'


const LoginBlock = (props) => {
    return (
        <div className={'login-block'}>
            {props.children}
        </div>
    );
};

export default LoginBlock;