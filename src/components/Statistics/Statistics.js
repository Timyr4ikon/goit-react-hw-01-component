import React from 'react';
import propTypes from 'prop-types';
import {
    StatSect,
    StatTitle,
    StatsList
} from './Statistics.styled';
import StatItem from './StatisticsItem';

const Statistics = (props) => {
    return (<div className='contain'>
        <StatSect> 
            <StatTitle>{props.title.toUpperCase()}</StatTitle>
            <StatsList>
                {props.stats.map((el) => {
                    return <StatItem label={el.label} percentage={el.percentage} key={el.id}></StatItem>
                })}
            </StatsList>
        </StatSect>
    </div>)
};

Statistics.propTypes = {
    title: propTypes.string,
    stats: propTypes.arrayOf(propTypes.shape({
        id: propTypes.string,
        label: propTypes.string,
        percentage: propTypes.number
    }).isRequired)
};

Statistics.defaultProps = {
    title: "Upload Stats",
}

export default Statistics;