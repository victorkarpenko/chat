import React from 'react';
import * as PropTypes from "prop-types";
import readed from 'assets/img/readed.svg'
import noreaded from 'assets/img/noreaded.svg'


const IconReaded = ({isMe, isReaded}) => (
    isMe && (isReaded ?
        <img className={'message__icon-readed'} src={readed} alt=""/>
        :
        <img className={'message__icon-readed message__icon-readed--no'} src={noreaded} alt=""/>
    )) || null
;

IconReaded.propTypes = {
    isMe: PropTypes.bool,
    isReaded: PropTypes.bool,
};

export default IconReaded;