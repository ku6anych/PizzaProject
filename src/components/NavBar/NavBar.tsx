import { PizzaCategories } from '../../Constants.ts';
import "./NavBar.scss"
import {Grid2, Typography } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const NavBar = () => {
  return (
    <Grid2 container className="navbar" alignItems="center">
      <Grid2
        columnGap={4}
        rowGap={1}
        container>
        {PizzaCategories.map((item)=>
          <Grid2
            key={item}
            paddingX={5}
            paddingY={1}
            className="navbar_item">
            <Typography variant="subtitle1" component="p">
              {item}
            </Typography>
          </Grid2>
        )}
      </Grid2>
      <Grid2
        container
        alignItems="center"
        sx={{marginLeft:"auto"}}>
        <KeyboardArrowUpIcon/>
        <Typography
          className="sortBy"
          variant="subtitle1" component="span">

          Sort by:
          <Typography
            className="selectSortBy"
            variant="subtitle1" component="span">Price</Typography>
        </Typography>
      </Grid2>
    </Grid2>
  );
};

export default NavBar;