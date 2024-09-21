import './App.css';
import Header from './components/Header/Header.tsx';
import { Container } from '@mui/material';
import NavBar from './components/NavBar/NavBar.tsx';
import AllPizza from './components/AllPizza/AllPizza.tsx';

const App = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Header />
        <NavBar />
        <AllPizza />
      </Container>
    </>
  );
};

export default App;
