import React from 'react';
import propTypes from 'prop-types';

const TransactionHistoryItem = (props) => {
    const firstLetter = str => {
        if (!str) return str;
        return str[0].toUpperCase() + str.slice(1);
    };
    return <tr>
    <td>{firstLetter(props.type)}</td>
    <td>{props.amount}</td>
    <td>{props.currency}</td>
    </tr>
}

TransactionHistoryItem.propTypes = {
    type: propTypes.string.isRequired,
    amount: propTypes.string.isRequired,
    currency: propTypes.string.isRequired
}

export default TransactionHistoryItem;