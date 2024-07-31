import React from 'react';
import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles';
import logo from '../../assets/logo.svg';

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logo} alt="" />
                <NewTransactionButton>New Transaction</NewTransactionButton>
            </HeaderContent>
        </HeaderContainer>
    );
};

export default Header;
