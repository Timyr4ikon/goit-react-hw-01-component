import React from 'react';
import classes from './FriendsList.module.css';
import propTypes from 'prop-types';
import FriendItem from './FriendsListItem';

const FriendsList = (props) => {
    return (<div className='contain'>
        <ul className={classes['friend-list']}>
            {props.friends.map((el) => {
                return <FriendItem isOnline={el.isOnline} avatar={el.avatar} name={el.name} key={el.id}></FriendItem>
            })}
        </ul>
    </div>)
};

FriendsList.propTypes = {
    friends: propTypes.arrayOf(propTypes.shape({
        isOnline: propTypes.bool,
        avatar: propTypes.string,
        name: propTypes.string
    })).isRequired
};

export default FriendsList;