import React, { createContext, useEffect, useState } from 'react';
import { API } from '../lib/axios';

export const TransactionsContext = createContext();

const TRANSACTION_API = 'http://localhost:3333/transactions';

const TransactionsProvider = (props) => {
    const [transactions, setTransactions] = useState([]);

    const fetchTransactions = async (query) => {
        const response = await API.get('transactions', {
            params: {
                q: query,
            },
        });
        setTransactions(response.data);
    };

    useEffect(() => {
        fetchTransactions();
    }, []);

    return (
        <TransactionsContext.Provider
            value={{
                transactions,
                fetchTransactions,
            }}
        >
            {props.children}
        </TransactionsContext.Provider>
    );
};

export default TransactionsProvider;
