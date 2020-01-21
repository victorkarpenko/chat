import React from 'react';
import * as PropTypes from "prop-types";
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import locale from 'date-fns/locale/ru'
import classnames from 'classnames';

import './Message.scss'


const Message = ({avatar, text, date, user, isMe}) => {
    return (
        <div className={classnames('message', {'message--isme': isMe})}>
            <div className="message__avatar">
                <img className={'avatar'} src={avatar} alt={`Avatar ${user.fullname}`}/>
            </div>
            <div className="message__content">
                <div className={'message__bubble'}>
                    <p className={'message__text'}>
                        {text}
                    </p>
                </div>
                <span className={'message__date'}>
                    { formatDistanceToNow(new Date(date), { addSuffix: true, locale: locale})}
                </span>
            </div>
        </div>
    );
};

Message.defaultProps = {
  user: {
      fullname: 'lolka'
  }
};

Message.propTypes = {
    avatar: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.string,
    user: PropTypes.object
};

export default Message;

//