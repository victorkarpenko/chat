import React from 'react';

import format from 'date-fns/format'
import isToday from 'date-fns/isToday'
import * as classnames from "classnames";
import {IconReaded} from "components";

const getAvatar = user => {
    if (user.avatar) {
        return <img src={user.avatar} alt={user.fullname}/>
    } else {
        return null
    }
};

const getMessageTime = created_at => {
    if(isToday(created_at)){
        return format(
            created_at,
            'HH:mm'
        )
    } else{
        return format(
            created_at,
            'dd.MM.yyyy'
        )
    }
};

const DialogItem = ({message, unreaded, user, isMe}) => {

    return (
        <div className={classnames('dialogs__item', {'dialogs__item--online': user.isOnline})}>
            <div className="dialogs__item-avatar">
                {getAvatar(user)}
            </div>
            <div className="dialogs__item-info">
                <div className="dialogs__item-info-top">
                    <b>{user.fullname}</b>
                    <span>
                    {/*    <Time date={getMessageTime(message.created_at)}/>*/}
                        {getMessageTime(message.created_at)}
                    </span>
                </div>
                <div className="dialogs__item-info-bottom">
                    <p>
                        {message.text}
                    </p>
                    {
                        unreaded > 0 ? <div className={'dialogs__item-info-bottom-count'}>{unreaded > 9 ? '+9' : unreaded}</div> :
                            <IconReaded isMe={isMe} isReaded={message.isReaded}/>
                    }
                </div>

            </div>
        </div>
    );
};

export default DialogItem;