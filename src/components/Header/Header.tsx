import { Box, Divider, Grid2, TextField, Typography } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import logo from '../../assets/headerlogo.svg';
import './Header.scss';
import { NavLink } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectSearchPizza, setSearchPizza } from '../AllPizza/pizzaSlice';

const Header = () => {
  const dispatch = useAppDispatch();
  const searchPizza = useAppSelector(selectSearchPizza);

  return (
    <Box sx={{ marginBottom: '40px' }}>
      <Grid2 marginY={5} container alignItems="center" justifyContent="center" className={'header'}>
        <Grid2 container gap={1}>
          <NavLink to="/">
            <img src={logo} alt="pizzalogo" />
          </NavLink>
          <Box>
            <Typography variant="h5" component="h5">
              Pizza Project
            </Typography>
            <Typography variant="body2" component="p" sx={{ opacity: 0.5 }}>
              The most tasty Pizzas here
            </Typography>
          </Box>
        </Grid2>
        <Grid2 container alignItems="center" sx={{ marginLeft: 'auto' }}>
          {!searchPizza && <ContentPasteSearchIcon sx={{ marginTop: 'auto', marginRight: 1 }} />}
          <Grid2>
            <TextField
              onChange={(e) => dispatch(setSearchPizza(e.target.value))}
              value={searchPizza}
              id="search"
              name="search"
              label="Search"
              variant="standard"
            />
          </Grid2>
          {searchPizza && (
            <Grid2 sx={{ marginTop: 'auto' }}>
              <DeleteIcon onClick={() => dispatch(setSearchPizza(''))} />
            </Grid2>
          )}
        </Grid2>
        <Grid2
          container
          alignItems="center"
          gap={2}
          sx={{ marginLeft: 'auto', paddingX: 2, paddingY: 1 }}
          className={'headerLeftButton'}
        >
          <Grid2>520 AED</Grid2>
          <Divider orientation="vertical" variant="fullWidth" flexItem />
          <Grid2>
            <NavLink to="/pizzaCart">
              <AddShoppingCartIcon />
            </NavLink>
          </Grid2>
        </Grid2>
      </Grid2>
      <Divider />
    </Box>
  );
};

export default Header;
