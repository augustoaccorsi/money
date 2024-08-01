import React, { useContext } from 'react';
import { SearchFormContainer } from './styles';
import { PiMagnifyingGlass } from 'react-icons/pi';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { TransactionsContext } from '../../../../contexts/TransactionContext';

const searchFormSchema = z.object({ query: z.string() });

const SearchForm = () => {
    const { fetchTransactions } = useContext(TransactionsContext);

    const {
        register,
        handleSubmit,
        formState: { isSubmitting },
    } = useForm({
        resolver: zodResolver(searchFormSchema),
    });

    const handleSearchTransactions = async (data) => {
        await fetchTransactions(data.query);
        console.log(data);
    };

    return (
        <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
            <input
                type="text"
                placeholder="Search for transactions"
                {...register('query')}
            />
            <button type="submit" disabled={isSubmitting}>
                <PiMagnifyingGlass size={20} />
                Search
            </button>
        </SearchFormContainer>
    );
};

export default SearchForm;
