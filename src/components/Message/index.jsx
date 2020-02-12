import React, {useState, useRef, useEffect} from 'react';
import * as PropTypes from "prop-types";
import classnames from 'classnames';

import './Message.scss'
import {Time, IconReaded} from 'components'

import waveIcon from 'assets/img/wave.svg'
import playIcon from 'assets/img/play.svg'
import pauseIcon from 'assets/img/pause.svg'
import {convertCurrentTime} from "utils/helpers";


const MessageAudio = ({audio}) => {

    const [isPlaying, setPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const audioElem = useRef(null);

    useEffect(() => {
        audioElem.current.addEventListener('ended', () => {
            setPlaying(false);
            setCurrentTime('00:00');
            setProgress(0);
        });
        audioElem.current.addEventListener('timeupdate', () => {
            const duration = (audioElem.current && audioElem.current.duration) || 0;
            setCurrentTime((audioElem.current.currentTime));
            setProgress((audioElem.current.currentTime / duration) * 100);
        })
    }, []);


    const togglePlaying = () => {
        if (isPlaying) {
            audioElem.current.pause()
        } else {
            audioElem.current.play();
        }
        setPlaying(!isPlaying)

    };

    return <div className="message__audio">
        <audio src={audio} ref={audioElem} preload={'auto'}/>
        <div className="message__audio-progress" style={{width: progress + '%'}}/>
        <div className="message__audio-info">
            <div className="message__audio-btn">
                <button onClick={togglePlaying}><img src={isPlaying ? pauseIcon : playIcon}
                                                     alt=""/></button>
            </div>
            <div className="message__audio-wave">
                <img src={waveIcon} alt=""/>
            </div>

            <span className={'message__audio-duration'}>{convertCurrentTime(currentTime)}</span>
        </div>
    </div>
}

const Message = (props) => {
    const {avatar, text, date, user, isMe, isReaded, isTyping, attachments, audio} = props;

    return (
        <div className={classnames('message', {
            'message--isme': isMe,
            'message--is-typing': isTyping,
            'message--image': attachments && attachments.length === 1,
            'message--is-audio': audio
        })}>
            <div className="message__content">
                <IconReaded isMe={isMe} isReaded={isReaded}/>

                <div className="message__avatar">
                    <img className={'avatar'} src={avatar} alt={`Avatar ${user.fullname}`}/>
                </div>

                <div className="message__info">
                    {(text || isTyping) &&
                    <div className={'message__bubble'}>
                        {
                            text && <p className={'message__text'}>{text}</p>
                        }
                        {
                            isTyping && <div className="message__typing">
                                <span/><span/><span/>
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
                        audio && <MessageAudio audio={audio}/>
                    }

                    {
                        date && <Time date={date}/>
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
    isTyping: PropTypes.bool,
    audio: PropTypes.string
};

export default Message;