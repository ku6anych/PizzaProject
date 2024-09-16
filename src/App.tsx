import './App.css'
import Header from './components/Header/Header.tsx';
import { Container } from '@mui/material';
import NavBar from './components/NavBar/NavBar.tsx';


const App = () => {

  return (
    <>
       <Container maxWidth="xl">
         <Header/>
         <NavBar/>
       </Container>
    </>
  )
};

export default App
