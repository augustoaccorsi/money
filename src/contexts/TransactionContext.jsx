import React, { createContext, useEffect, useState } from 'react';

export const TransactionsContext = createContext();

const TRANSACTION_API = 'http://localhost:3333/transactions';

const TransactionsProvider = (props) => {
    const [transactions, setTransactions] = useState([]);

    const fetchTransactions = async () => {
        fetch(TRANSACTION_API)
            .then((response) => response.json())
            .then((data) => setTransactions(data));
    };

    useEffect(() => {
        fetchTransactions();
    }, []);

    return (
        <TransactionsContext.Provider value={{ transactions: transactions }}>
            {props.children}
        </TransactionsContext.Provider>
    );
};

export default TransactionsProvider;
