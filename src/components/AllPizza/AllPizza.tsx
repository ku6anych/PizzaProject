import { Box, Grid2, Typography } from '@mui/material';
import OnePizza from './OnePizza.tsx';
import { useAppDispatch } from '../../app/hooks.ts';
import { useEffect } from 'react';
import { getAllPizzaThunk } from './pizzaThunks.ts';
import { selectAllPizzas } from './pizzaSlice.ts';
import { useSelector } from 'react-redux';

const AllPizza = () => {
  const dispatch = useAppDispatch();
  const allPizzas = useSelector(selectAllPizzas);

  useEffect(() => {
    dispatch(getAllPizzaThunk());
  }, []);

  return (
    <Box component="div">
      <Typography component="h3" variant="h3">
        All Pizzas
      </Typography>
      <Grid2 container gap={6} flexWrap="wrap">
        {allPizzas.map((pizza) => (
          <OnePizza key={pizza.id} {...pizza} />
        ))}
      </Grid2>
    </Box>
  );
};

export default AllPizza;
