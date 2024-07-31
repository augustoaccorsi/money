import React from 'react';
import { SummaryContainer, SummaryCard } from './styles';
import { FaArrowCircleUp, FaArrowCircleDown } from 'react-icons/fa';
import { PiCurrencyDollarDuotone } from 'react-icons/pi';

const Summary = () => {
    return (
        <SummaryContainer>
            <SummaryCard>
                <header>
                    <span>Incomes</span>
                    <FaArrowCircleUp size={32} color="#00b37e" />
                </header>
                <strong>R$ 10,670.35</strong>
            </SummaryCard>

            <SummaryCard>
                <header>
                    <span>Expenses</span>
                    <FaArrowCircleDown size={32} color="#f75a68" />
                </header>
                <strong>R$ 10,670.35</strong>
            </SummaryCard>

            <SummaryCard variant="green">
                <header>
                    <span>Total</span>
                    <PiCurrencyDollarDuotone size={32} color="#fff" />
                </header>
                <strong>R$ 10,670.35</strong>
            </SummaryCard>
        </SummaryContainer>
    );
};

export default Summary;
