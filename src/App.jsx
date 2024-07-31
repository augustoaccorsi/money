import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';
import { GlobalStype } from './styles/global';

function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStype />
            hello
        </ThemeProvider>
    );
}

export default App;
