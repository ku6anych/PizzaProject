import './App.css';
import Header from './components/Header/Header';
import { Container } from '@mui/material';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import PizzaCart from './pages/PizzaCart';
import 'firebase/firestore';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <Container maxWidth="xl">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/pizzaCart" element={<PizzaCart />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Container>
        </Provider>
      </BrowserRouter>
    </>
  );
};

export default App;
