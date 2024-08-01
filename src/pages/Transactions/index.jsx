import React, { useContext } from 'react';
import Header from '../../components/Header';
import Summary from '../../components/Summary';
import {
    TransactionsContainer,
    TransactionsTable,
    PriceHighlight,
} from './styles';
import SearchForm from './components/SearchForm/index';
import { TransactionsContext } from '../../contexts/TransactionContext';

const Transactions = () => {
    const { transactions } = useContext(TransactionsContext);

    return (
        <div>
            <Header />
            <Summary />
            <TransactionsContainer>
                <SearchForm />
                <TransactionsTable>
                    {transactions.map((transaction) => (
                        <tbody key={transaction.id}>
                            <td width="50%">{transaction.description}</td>
                            <td>
                                <PriceHighlight variant={transaction.type}>
                                    {transaction.price}
                                </PriceHighlight>
                            </td>
                            <td>{transaction.category}</td>
                            <td>{transaction.createdAt}</td>
                        </tbody>
                    ))}
                </TransactionsTable>
            </TransactionsContainer>
        </div>
    );
};

export default Transactions;
