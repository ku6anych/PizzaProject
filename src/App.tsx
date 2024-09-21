import './App.css';
import Header from './components/Header/Header.tsx';
import { Container } from '@mui/material';
import NavBar from './components/NavBar/NavBar.tsx';
import AllPizza from './components/AllPizza/AllPizza.tsx';
import { store } from './app/store.ts';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Container maxWidth="xl">
          <Header />
          <NavBar />
          <AllPizza />
        </Container>
      </Provider>
    </>
  );
};

export default App;
