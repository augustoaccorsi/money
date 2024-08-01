import React, { createContext, useEffect, useState } from 'react';

export const TransactionsContext = createContext();

const TRANSACTION_API = 'http://localhost:3333/transactions';

const TransactionsProvider = (props) => {
    const [transactions, setTransactions] = useState([]);

    const fetchTransactions = async (query) => {
        const url = new URL(TRANSACTION_API);
        if (query) {
            url.searchParams.append('q', query);
        }

        fetch(url)
            .then((response) => response.json())
            .then((data) => setTransactions(data));
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
