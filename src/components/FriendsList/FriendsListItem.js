import React from 'react';
import classes from './FriendsList.module.css';
import propTypes from 'prop-types';

const FriendItem = (props) => {
    return <li className={classes.item}>
        <span className={props.isOnline ? 
        classes.online :
        classes.offline}></span>
        <img className={classes.avatar} src={props.avatar} alt="" width="48" />
        <p className={classes.name}>{props.name}</p>
    </li>
};

FriendItem.propTypes = {
    isOnline: propTypes.bool,
    avatar: propTypes.string.isRequired,
    name: propTypes.string
};

FriendItem.defaultProps = {
    isOnline: false,
    name: "Unknown"
};

export default FriendItem;