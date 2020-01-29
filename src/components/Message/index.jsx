import React from 'react';
import * as PropTypes from "prop-types";
import classnames from 'classnames';

import './Message.scss'
import {Time, IconReaded} from 'components'

const Message = (props) => {
    const {avatar, text, date, user, isMe, isReaded, isTyping, attachments} = props;
    return (
        <div className={classnames('message', {'message--isme': isMe, 'message--is-typing': isTyping, 'message--image': attachments && attachments.length===1})}>
            <div className="message__content">
                <IconReaded isMe={isMe} isReaded={isReaded}/>

                <div className="message__avatar">
                    <img className={'avatar'} src={avatar} alt={`Avatar ${user.fullname}`}/>
                </div>

                <div className="message__info">
                    { (text || isTyping) &&
                        <div className={'message__bubble'}>
                            {
                                text && <p className={'message__text'}>{text}</p>
                            }
                            {
                                isTyping && <div className="message__typing">
                                    <span></span><span></span><span></span>
                                </div>
                            }
                        </div>
                    }

                    {
                        attachments &&
                        <div className="message__attachments">
                            {attachments.map(item => (
                                <div className="message__attachments-item">
                                    <img src={item.url} alt={item.filename}/>
                                </div>
                            ))
                            }
                        </div>
                    }

                    {
                        date && <Time date={date} />
                    }

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
    isReaded: PropTypes.bool,
    attachments: PropTypes.array,
    isTyping: PropTypes.bool
};

export default Message;