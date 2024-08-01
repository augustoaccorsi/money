import { TransactionsContext } from '../contexts/TransactionContext';
import { useContextSelector } from 'use-context-selector';

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

    const transactions = useContextSelector(
        TransactionsContext,
        (context) => context.transactions
    );

    return getSummary(transactions);
}
