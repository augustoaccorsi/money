import React, { useEffect, useState, useCallback } from 'react';
import { API } from '../lib/axios';
import { createContext } from 'use-context-selector';

export const TransactionsContext = createContext();

const TransactionsProvider = (props) => {
    const [transactions, setTransactions] = useState([]);

    const fetchTransactions = useCallback(async (query) => {
        const response = await API.get('transactions', {
            params: {
                _sort: 'createdAt',
                _order: 'desc',
                q: query,
            },
        });
        setTransactions(response.data);
    }, []);

    useEffect(() => {
        fetchTransactions();
    }, [fetchTransactions]);

    const addNewTransaction = useCallback(
        async (newTransaction) => {
            const response = await API.post('transactions', newTransaction);
            setTransactions([response.data, ...transactions]);
        },
        [transactions]
    );

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
