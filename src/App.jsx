import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';
import { GlobalStype } from './styles/global';
import Transactions from '../src/pages/Transactions/index';
import TransactionsProvider from './contexts/TransactionContext';
function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStype />
            <TransactionsProvider>
                <Transactions />
            </TransactionsProvider>
        </ThemeProvider>
    );
}

export default App;
