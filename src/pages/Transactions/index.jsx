import React from 'react';
import Header from '../../components/Header';
import Summary from '../../components/Summary';
import {
    TransactionsContainer,
    TransactionsTable,
    PriceHighlight,
} from './styles';

const Transactions = () => {
    return (
        <div>
            <Header />
            <Summary />

            <TransactionsContainer>
                <TransactionsTable>
                    <tbody>
                        <td width="50%">Website Development</td>
                        <td>
                            <PriceHighlight variant="income">
                                R$ 12,000.00
                            </PriceHighlight>
                        </td>
                        <td>Venda</td>
                        <td>13/04/2022</td>
                    </tbody>
                    <tbody>
                        <td width="50%">Hamburguer</td>
                        <td>
                            <PriceHighlight variant="outcome">
                                -R$ 50.00
                            </PriceHighlight>
                        </td>
                        <td>Alimentaçao</td>
                        <td>13/04/2022</td>
                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </div>
    );
};

export default Transactions;
