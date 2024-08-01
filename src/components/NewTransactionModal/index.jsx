import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import {
    Overlay,
    Content,
    Close,
    TransactionType,
    TransactionTypeButton,
} from './styles';
import { PiX, PiArrowCircleDown, PiArrowCircleUp } from 'react-icons/pi';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const newTransactionModalSchema = z.object({
    description: z.string(),
    price: z.number(),
    category: z.string(),
    //type: z.enum(['income', 'outcome']),
});

const NewTransactionModal = () => {
    const {
        register,
        handleSubmit,
        formState: { isSubmitting },
    } = useForm({
        resolver: zodResolver(newTransactionModalSchema),
    });

    const handleCreateNewTransaction = async (data) => {
        await new Promise((resolve) => setTimeout(resolve, 3000));
        console.log(data);
    };

    return (
        <Dialog.Portal>
            <Overlay />
            <Content>
                <Dialog.Title>New Transaction</Dialog.Title>
                <Close>
                    <PiX size={24} />
                </Close>

                <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
                    <input
                        {...register('description')}
                        type="text"
                        placeholder="Description"
                        required
                    />
                    <input
                        {...register('price', { valueAsNumber: true })}
                        type="number"
                        placeholder="Price"
                        required
                    />
                    <input
                        {...register('category')}
                        type="text"
                        placeholder="Category"
                        required
                    />

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

                    <button disabled={isSubmitting} type="submit">
                        Save
                    </button>
                </form>
            </Content>
        </Dialog.Portal>
    );
};

export default NewTransactionModal;
