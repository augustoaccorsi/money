import React, { useContext } from 'react';
import { SummaryContainer, SummaryCard } from './styles';
import {
    PiCurrencyDollarDuotone,
    PiArrowCircleDown,
    PiArrowCircleUp,
} from 'react-icons/pi';
import { TransactionsContext } from '../../contexts/TransactionContext';

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

    return { income: income, outcome: outcome, total: income + outcome };
};

const Summary = () => {
    const { transactions } = useContext(TransactionsContext);
    const summary = getSummary(transactions);

    return (
        <SummaryContainer>
            <SummaryCard>
                <header>
                    <span>Incomes</span>
                    <PiArrowCircleUp size={32} color="#00b37e" />
                </header>
                <strong>{summary.income}</strong>
            </SummaryCard>

            <SummaryCard>
                <header>
                    <span>Outcomes</span>
                    <PiArrowCircleDown size={32} color="#f75a68" />
                </header>
                <strong>{summary.outcome}</strong>
            </SummaryCard>

            <SummaryCard variant="green">
                <header>
                    <span>Total</span>
                    <PiCurrencyDollarDuotone size={32} color="#fff" />
                </header>
                <strong>{summary.total}</strong>
            </SummaryCard>
        </SummaryContainer>
    );
};

export default Summary;
