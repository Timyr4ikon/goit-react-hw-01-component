import React from 'react';
import propTypes from 'prop-types';
import classes from './Profile.module.css';


const Profile = (props) => {
    const statsKeys = Object.keys(props.stats);
    const statsValues = Object.values(props.stats);
    const toFinanceNumbers = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
    const FirstLetter = str => {
        if (!str) return str;
        return str[0].toUpperCase() + str.slice(1);
    };
    return (<div className='contain'>
        <div className={classes.profile}>
            <div className={classes.description}>
                <img
                src={props.src}
                alt="user avatar"
                className={classes.avatar}
                />
                <p className={classes.name}>{props.name}</p>
                <p className={classes.tag}>@{props.tag}</p>
                <p className={classes.location}>{props.locate}</p>
            </div>
            <ul className={classes.stats}>
                <li>
                    <span className={classes.label}>{FirstLetter(statsKeys[0])}</span>
                    <span className={classes.quantity}>{toFinanceNumbers(statsValues[0])}</span>
                </li>
                <li>
                    <span className={classes.label}>{FirstLetter(statsKeys[1])}</span>
                    <span className={classes.quantity}>{toFinanceNumbers(statsValues[1])}</span>
                </li>
                <li>
                    <span className={classes.label}>{FirstLetter(statsKeys[2])}</span>
                    <span className={classes.quantity}>{toFinanceNumbers(statsValues[2])}</span>
                </li>
            </ul>
        </div>
    </div>)
};

Profile.propTypes = {
    name: propTypes.string,
    tag: propTypes.string.isRequired,
    locate: propTypes.string,
    src: propTypes.string.isRequired,
    stats: propTypes.objectOf(propTypes.number)
};

Profile.defaultProps = {
    name: 'Unknown',
    locate: 'Anywhere',
    stats: {
        followers: 0,
        views: 0,
        likes: 0
    }
};

export default Profile;