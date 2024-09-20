import './App.css';
import Header from './components/Header/Header.tsx';
import { Container } from '@mui/material';
import NavBar from './components/NavBar/NavBar.tsx';

const App = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Header />
        <NavBar />
        <img
          src="https://png.pngtree.com/png-clipart/20231019/original/pngtree-pizza-png-with-ai-generated-png-image_13357740.png"
          alt="s"
        />
      </Container>
    </>
  );
};

export default App;
