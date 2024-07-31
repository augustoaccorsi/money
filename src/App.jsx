import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';
import { GlobalStype } from './styles/global';
import Transactions from '../src/pages/Transactions/index';
function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStype />
            <Transactions />
        </ThemeProvider>
    );
}

export default App;
