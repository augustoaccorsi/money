import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import * as RadioGroup from '@radix-ui/react-radio-group';
import {
    Overlay,
    Content,
    Close,
    TransactionType,
    TransactionTypeButton,
} from './styles';
import { PiX, PiArrowCircleDown, PiArrowCircleUp } from 'react-icons/pi';

const NewTransactionModal = () => {
    return (
        <Dialog.Portal>
            <Overlay />
            <Content>
                <Dialog.Title>New Transaction</Dialog.Title>
                <Close>
                    <PiX size={24} />
                </Close>

                <form>
                    <input type="text" placeholder="Description" required />
                    <input type="number" placeholder="Price" required />
                    <input type="text" placeholder="Category" required />

                    <TransactionType>
                        <TransactionTypeButton variant="income" value="income">
                            <PiArrowCircleUp size={24} />
                            Income
                        </TransactionTypeButton>
                        <TransactionTypeButton
                            variant="outcome"
                            value="outcome"
                        >
                            <PiArrowCircleDown size={24} />
                            Outcome
                        </TransactionTypeButton>
                    </TransactionType>

                    <button type="submit">Save</button>
                </form>
            </Content>
        </Dialog.Portal>
    );
};

export default NewTransactionModal;
