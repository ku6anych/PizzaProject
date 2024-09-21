import { Box, Button, Card, CardContent, CardMedia, Grid2, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import './Pizza.scss';
import { pizzaItem } from '../../types.ts';
import { TypesNames } from '../../Constants.ts';
import { useState } from 'react';

const OnePizza = ({ imageUrl, price, sizes, title, types }: pizzaItem) => {
  const [selectedType, setSelectedType] = useState(0);
  const [selectedSize, setSelectedSize] = useState(0);

  return (
    <Box className="PizzaItem">
      <Card className="PizzaCard">
        <CardMedia sx={{ height: '260px', width: '280px' }} image={imageUrl} title="green iguana" />
        <CardContent sx={{ padding: '0' }}>
          <Typography variant="h5" component="div" sx={{ textAlign: 'center', height: '70px' }}>
            {title.toUpperCase()}
          </Typography>
          <Grid2 container flexDirection="column" gap={1} className="pizzaOptions">
            <Grid2 container justifyContent="space-around" sx={{ width: '100%' }} gap={2}>
              {types.map((type, index) => (
                <Grid2
                  onClick={() => setSelectedType(index)}
                  key={index}
                  className={`pizzaForm ${index === selectedType ? 'selected' : ''}`}
                  sx={{ width: '40%' }}
                >
                  <Typography variant="subtitle1" component="p" textAlign="center">
                    {TypesNames[type]}
                  </Typography>
                </Grid2>
              ))}
            </Grid2>
            <Grid2 container justifyContent="space-around" sx={{ width: '100%' }} gap={2}>
              {sizes.map((size, index) => (
                <Grid2
                  onClick={() => setSelectedSize(index)}
                  key={index}
                  className={`pizzaForm ${selectedSize === index ? 'selected' : ''}`}
                  sx={{ flexGrow: 1 }}
                >
                  <Typography variant="subtitle1" component="p" textAlign="center">
                    {size}
                  </Typography>
                </Grid2>
              ))}
            </Grid2>
          </Grid2>
        </CardContent>
      </Card>
      <Grid2 container alignItems="center" className="PizzaCardBottom">
        <Grid2>
          <Typography variant="subtitle2" component="p" textAlign="center">
            From {price} AED
          </Typography>
        </Grid2>
        <Grid2 sx={{ marginLeft: 'auto' }}>
          <Button variant="outlined" color="primary">
            <AddIcon />
            Add
          </Button>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default OnePizza;
