import { Box, Grid2, Typography } from '@mui/material';
import OnePizza from './OnePizza';
import { useAppDispatch } from '../../app/hooks';
import { useEffect } from 'react';
import { getAllPizzaThunk } from './pizzaThunks';
import {
  selectAllPizzaLoading,
  selectAllPizzas,
  selectCategoriesId,
  selectSearchPizza,
  selectSortId,
} from './pizzaSlice';
import { useSelector } from 'react-redux';
import OnePizzaSkeleton from './OnePizzaSkeleton';

const AllPizza = () => {
  const dispatch = useAppDispatch();
  const allPizzas = useSelector(selectAllPizzas);
  const allPizzasLoading = useSelector(selectAllPizzaLoading);
  const searchPizza = useSelector(selectSearchPizza);
  const categoriesId = useSelector(selectCategoriesId);
  const sortId = useSelector(selectSortId);

  useEffect(() => {
    dispatch(getAllPizzaThunk());
    window.scrollTo(0, 0);
  }, [dispatch, categoriesId, sortId]);

  return (
    <Box component="div">
      <Typography component="h3" variant="h3">
        All Pizzas
      </Typography>
      <Grid2 container justifyContent="space-between" gap={3} flexWrap="wrap">
        {allPizzasLoading
          ? [...new Array(9)].map((_, index) => <OnePizzaSkeleton key={index} />)
          : allPizzas
              .filter((item) => item.title.includes(searchPizza.toLowerCase()))
              .map((pizza) => <OnePizza key={pizza.id} {...pizza} />)}
      </Grid2>
    </Box>
  );
};

export default AllPizza;
