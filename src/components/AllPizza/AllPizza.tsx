import { Box, Grid2, Typography } from '@mui/material';
import OnePizza from './OnePizza.tsx';

const AllPizza = () => {
  return (
    <Box component="div">
      <Typography component="h3" variant="h3">
        All Pizzas
      </Typography>
      <Grid2 container gap={6} flexWrap="wrap">
        <OnePizza />
        <OnePizza />
        <OnePizza />
        <OnePizza />
      </Grid2>
    </Box>
  );
};

export default AllPizza;
