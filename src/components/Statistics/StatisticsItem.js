import React from 'react';
import {
    StatsItem,
    StatsItemLabel,
    StatsItemPercent
} from './Statistics.styled';

const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max))
};

const StatItem = (props) => {
    return <StatsItem style={{background: `rgb(${getRandomInt(255)},${getRandomInt(255)},${getRandomInt(255)})`}}>
        <StatsItemLabel>{props.label}</StatsItemLabel>
        <StatsItemPercent>{props.percentage}%</StatsItemPercent>
    </StatsItem>
};

export default StatItem;