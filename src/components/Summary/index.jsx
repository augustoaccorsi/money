import React from 'react';
import { SummaryContainer, SummaryCard } from './styles';
import {
    PiCurrencyDollarDuotone,
    PiArrowCircleDown,
    PiArrowCircleUp,
} from 'react-icons/pi';

const Summary = () => {
    return (
        <SummaryContainer>
            <SummaryCard>
                <header>
                    <span>Incomes</span>
                    <PiArrowCircleUp size={32} color="#00b37e" />
                </header>
                <strong>R$ 10,670.35</strong>
            </SummaryCard>

            <SummaryCard>
                <header>
                    <span>Outcomes</span>
                    <PiArrowCircleDown size={32} color="#f75a68" />
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
