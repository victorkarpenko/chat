import React from 'react';
import {generateAvatarFromHash} from "utils/helpers";

import './avatar.scss'

const Avatar = ({user}) => {
    if (user.avatar) {
        return <img className={'avatar'} src={user.avatar} alt={user.fullname}/>
    } else {
        const avatarColor = generateAvatarFromHash(user._id);
        return <div className={'avatar avatar--symbol'} style={{background: `linear-gradient(135deg, ${avatarColor.color}, ${avatarColor.colorLight})`}}>
            <span>{user.fullname[0]}</span>
        </div>
    }
};

export default Avatar;