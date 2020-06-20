import React from 'react';
import user from './data-base/profile.json';
import Profile from './components/Profile/Profile';
import statistics from './data-base/stat.json';
import Statistics from './components/Statistics/Statistics';
import friendsList from './data-base/friends.json';
import FriendsList from './components/FriendsList/FriendsList';
import transactions from './data-base/transactions.json';
import TransactionsHistory from './components/TransactionsHistory/TransactionsHistory';

function App() {
    return (
    <>
        <Profile 
        name={user.name} 
        tag={user.tag} 
        locate={user.location} 
        src={user.avatar} 
        stats={user.stats}/>
        <Statistics
        stats={statistics}
        />
        <FriendsList
        friends={friendsList}
        />
        <TransactionsHistory
        transactions={transactions}
        />
    </>
    );
}

export default App;