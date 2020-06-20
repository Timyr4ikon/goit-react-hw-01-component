import React from 'react';
import classes from './TransactionsHistory.module.css';
import TransactionHistoryItem from './TransactionsHistoryItem';
import propTypes from 'prop-types';

const TransactionsHistory = (props) => {
    return (<div className='contain'>
            <table className={classes.transactionsHistory}>
                <thead>
                    <tr>
                    <th>TYPE</th>
                    <th>AMOUNT</th>
                    <th>CURRENCY</th>
                    </tr>
                </thead>
                <tbody>
                    {props.transactions.map((el) => {
                        return <TransactionHistoryItem type={el.type} amount={el.amount} currency={el.currency} key={el.id}></TransactionHistoryItem>
                    })}
                </tbody>
            </table>
        </div>
    );
};

TransactionsHistory.propTypes = {
    transactions: propTypes.arrayOf(propTypes.object).isRequired
}

export default TransactionsHistory;