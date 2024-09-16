import { Box, Divider, Grid2, Typography } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import logo from '../../assets/headerlogo.svg';
import './Header.scss';

const Header = () => {
  return (
    <Box sx={{marginBottom:"40px"}}>
        <Grid2
          marginY={5}
          container alignItems="center" justifyContent="center" className={'header'}>
          <Grid2 container gap={1}>
            <img src={logo} alt="pizzalogo" />
            <Box>
              <Typography variant="h5" component="h5">
                Pizza Project
              </Typography>
              <Typography variant="body2" component="p" sx={{ opacity: 0.5 }}>
                The most tasty Pizzas here
              </Typography>
            </Box>
          </Grid2>
          <Grid2 container
                 alignItems="center"
                 gap={2} sx={{ marginLeft: 'auto', paddingX: 2, paddingY: 1 }} className={'headerLeftButton'}>
            <Grid2>
              520 AED
            </Grid2>
            <Divider orientation="vertical" variant="fullWidth" flexItem />
            <Grid2>
              <AddShoppingCartIcon />
            </Grid2>
          </Grid2>
        </Grid2>
      <Divider/>
    </Box>
  );
};

export default Header;