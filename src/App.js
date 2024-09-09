import { ThemeProvider } from 'styled-components'
import Navbar from './components/navbar/Navbar';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';
import { Container } from './components/Container';
import Hero from './components/hero/Hero';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Container backgroundColor="white" height="100vh" >
          <Navbar/>
          <Hero/>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
