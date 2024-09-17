import { PizzaCategories } from '../../Constants.ts';
import {PizzaSort} from "../../Constants.ts";
import './NavBar.scss';
import {
  Box,
  Collapse,
  Grid2,
  List,
  ListItemButton,

  ListItemText,
  Typography,
} from '@mui/material';
import React from 'react';
import { ExpandLess, ExpandMore} from '@mui/icons-material';


const NavBar = () => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };


  return (
    <Grid2 container className="navbar" alignItems="center">
      <Grid2 columnGap={4} rowGap={1} container>
        {PizzaCategories.map((item) => (
          <Grid2
            key={item} paddingX={5} paddingY={1} className="navbar_item">
            <Typography variant="subtitle1" component="p">
              {item}
            </Typography>
          </Grid2>
        ))}
      </Grid2>
      <Grid2 container sx={{ marginLeft: 'auto' }}>
          <List
            sx={{ width: '100%', maxWidth: 360,}}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <ListItemButton onClick={handleClick}>
              <ListItemText primary="Sort By" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div"  sx={{position:"absolute", top:"3rem"}}>
                {PizzaSort.map((item)=>(
                  <ListItemButton  key={item.title} sx={{padding:"0", pl:2}}>
                      <Box
                        component="img"
                        src={item.icon}
                        sx={{width:'20px', marginRight:'10px'}}
                      />
                    <ListItemText primary={item.title} />
                  </ListItemButton>

                ))}
              </List>
            </Collapse>
          </List>

      </Grid2>

    </Grid2>
  );
};

export default NavBar;
