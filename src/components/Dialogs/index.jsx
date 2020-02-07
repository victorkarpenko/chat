import React from 'react';

import './Dialogs.scss'
import {DialogItem} from "components";
import {orderBy} from "lodash";

const Dialogs = ({items, userId}) => {

    return (
        <div className="dialogs">
            {
                orderBy(items, ['message.created_at'], ['desc'] ).map((item)=>(<DialogItem key={item.user._id} isMe={item.user._id === userId} {...item}/>))
            }
        </div>
    );
};

export default Dialogs;