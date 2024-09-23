import { PizzaCategories } from '../../Constants';
import { PizzaSort } from '../../Constants';
import './NavBar.scss';
import { Box, Collapse, Grid2, List, ListItemButton, ListItemText, Typography } from '@mui/material';
import React, { useState } from 'react';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

const NavBar = () => {
  const [open, setOpen] = React.useState(false);
  const [selectedCategories, setSelectedCategories] = useState(0);
  const [selectSort, setSelectSort] = useState(0);

  const onClickChangeCategories = (index: number) => {
    setSelectedCategories(index);
  };

  const onClickChangeSort = (index: number) => {
    setSelectSort(index);
    handleClick();
  };
  const handleClick = () => {
    setOpen(!open);
  };

  const primarySort = (
    <Grid2 container alignItems="center" gap={1}>
      <Typography variant="subtitle1" component="p" sx={{ fontWeight: 'bold' }}>
        Sort By:
      </Typography>
      <img src={PizzaSort[selectSort].icon} alt="" />
      <Typography className="selectSortBy" variant="subtitle1" component="p">
        {PizzaSort[selectSort].title}
      </Typography>
    </Grid2>
  );

  return (
    <Grid2 container className="navbar" alignItems="center">
      <Grid2 columnGap={4} rowGap={1} container>
        {PizzaCategories.map((item, index) => (
          <Grid2
            onClick={() => onClickChangeCategories(index)}
            key={index}
            paddingX={5}
            paddingY={1}
            className={`navbar_item ${index == selectedCategories ? 'selected' : ''}`}
          >
            <Typography variant="subtitle1" component="p">
              {item}
            </Typography>
          </Grid2>
        ))}
      </Grid2>
      <Grid2 container className="sortBy" sx={{ marginLeft: 'auto' }}>
        <List sx={{ width: '100%', maxWidth: 360 }} component="nav" aria-labelledby="nested-list-subheader">
          <ListItemButton onClick={handleClick}>
            <ListItemText primary={primarySort} />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" sx={{ position: 'absolute', top: '3rem' }}>
              {PizzaSort.map((item, index) => (
                <ListItemButton onClick={() => onClickChangeSort(index)} key={item.title} sx={{ padding: '0', pl: 2 }}>
                  <Box component="img" src={item.icon} sx={{ width: '20px', marginRight: '10px' }} />
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
