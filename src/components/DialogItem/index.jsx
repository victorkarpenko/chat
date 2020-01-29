import React from 'react';

import './DialogItem.scss'
import * as classnames from "classnames";
import {Time, IconReaded} from "components";

const getAvatar = user => {
    if(user.avatar){
        return  <img src={user.avatar} alt={user.fullname}/>
    } else{
        return null
    }
};

const DialogItem = ({user, message, unreaded}) => {

    return (
        <div className={classnames('dialogs__item', {'dialogs__item--online': user.isOnline})}>
           <div className="dialogs__item-avatar">
               {getAvatar(user)}
           </div>
            <div className="dialogs__item-info">
                <div className="dialogs__item-info-top">
                    <b>{user.fullname}</b>
                    {/*<Time date={new Date()}/>*/}
                    <span>13:03</span>
                </div>
                <div className="dialogs__item-info-bottom">
                    <p>
                        {message.text}
                    </p>
                    <div className={'dialogs__item-info-bottom-count'}>{unreaded > 0 && unreaded}</div>
    {/*                <IconReaded isMe={true} isReaded={true}/>*/}
                </div>

            </div>
        </div>
    );
};

export default DialogItem;