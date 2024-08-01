import React from 'react';
import { SearchContainer } from './styles';
import { PiMagnifyingGlass } from 'react-icons/pi';

const SearchForm = () => {
    return (
        <SearchContainer>
            <input type="text" placeholder="Search for transactions" />
            <button>
                <PiMagnifyingGlass size={20} />
                Search
            </button>
        </SearchContainer>
    );
};

export default SearchForm;
