import React from 'react';
import * as PropTypes from "prop-types";
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import locale from 'date-fns/locale/ru'

const Time = ({date}) => (
    <>
        {formatDistanceToNow(new Date(date), {addSuffix: true, locale: locale})}
    </>
);

Time.propTypes = {
    date: PropTypes.string,
};

export default Time;