import React from 'react';
import * as PropTypes from "prop-types";
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import locale from 'date-fns/locale/ru'
import classnames from 'classnames';

import './Message.scss'
import readed from 'assets/img/readed.svg'
import noreaded from 'assets/img/noreaded.svg'


const Message = ({avatar, text, date, user, isMe, isReaded}) => {
    return (
        <div className={classnames('message', {'message--isme': isMe})}>
            <div className="message__content">
                {
                    isMe && ( isReaded ?
                        <img className={'message__icon-readed'} src={readed} alt=""/>
                        :
                        <img className={'message__icon-readed message__icon-readed--no'} src={noreaded} alt=""/>
                    )
                }

                <div className="message__avatar">
                    <img className={'avatar'} src={avatar} alt={`Avatar ${user.fullname}`}/>
                </div>

                <div className="message__info">
                    <div className={'message__bubble'}>
                        <p className={'message__text'}>
                            {text}
                        </p>
                    </div>
                    <span className={'message__date'}>
                        {formatDistanceToNow(new Date(date), {addSuffix: true, locale: locale})}
                    </span>
                </div>
            </div>
        </div>
    );
};

Message.defaultProps = {
    user: {
        fullname: 'lolka'
    },
    isReaded: false
};

Message.propTypes = {
    avatar: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.string,
    user: PropTypes.object,
    isMe: PropTypes.bool,
    isReaded: PropTypes.bool
};

export default Message;