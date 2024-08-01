import { useContext } from 'react';
import { TransactionsContext } from '../contexts/TransactionContext';

export function useSummary() {
    const getSummary = (transactions) => {
        let income = 0;
        let outcome = 0;

        transactions.forEach((transaction) => {
            if (transaction.type === 'income') {
                income += transaction.price;
            } else {
                outcome += transaction.price;
            }
        });

        return { income: income, outcome: outcome, total: income - outcome };
    };

    const { transactions } = useContext(TransactionsContext);

    return getSummary(transactions);
}
