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
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { TransactionsContext } from '../../contexts/TransactionContext';
import { useContextSelector } from 'use-context-selector';

const newTransactionModalSchema = z.object({
    description: z.string(),
    price: z.number(),
    category: z.string(),
    type: z.enum(['income', 'outcome']),
});

const NewTransactionModal = () => {
    const addNewTransaction = useContextSelector(
        TransactionsContext,
        (context) => context.addNewTransaction
    );

    const {
        control,
        register,
        handleSubmit,
        formState: { isSubmitting },
        reset,
    } = useForm({
        resolver: zodResolver(newTransactionModalSchema),
    });

    const handleCreateNewTransaction = async (data) => {
        addNewTransaction({
            description: data.description,
            type: data.type,
            category: data.category,
            price: data.price,
            createdAt: new Date().toDateString(),
        });
        reset();
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

                    <Controller
                        control={control}
                        name="type"
                        render={({ field }) => (
                            <TransactionType onValueChange={field.onChange}>
                                <TransactionTypeButton
                                    variant="income"
                                    value="income"
                                >
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
                        )}
                    />

                    <button disabled={isSubmitting} type="submit">
                        Save
                    </button>
                </form>
            </Content>
        </Dialog.Portal>
    );
};

export default NewTransactionModal;
