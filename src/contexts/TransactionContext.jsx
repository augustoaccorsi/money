import React, { useEffect, useState } from 'react';
import { API } from '../lib/axios';
import { createContext } from 'use-context-selector';

export const TransactionsContext = createContext();

const TransactionsProvider = (props) => {
    const [transactions, setTransactions] = useState([]);

    const fetchTransactions = async (query) => {
        const response = await API.get('transactions', {
            params: {
                _sort: 'createdAt',
                _order: 'desc',
                q: query,
            },
        });
        setTransactions(response.data);
    };

    useEffect(() => {
        fetchTransactions();
    }, []);

    const addNewTransaction = async (newTransaction) => {
        const response = await API.post('transactions', newTransaction);
        setTransactions([response.data, ...transactions]);
    };

    return (
        <TransactionsContext.Provider
            value={{
                transactions,
                fetchTransactions,
                addNewTransaction,
            }}
        >
            {props.children}
        </TransactionsContext.Provider>
    );
};

export default TransactionsProvider;
