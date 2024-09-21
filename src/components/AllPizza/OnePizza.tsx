import { Box, Button, Card, CardContent, CardMedia, Grid2, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import './Pizza.scss';

const OnePizza = () => {
  return (
    <Box className="PizzaItem">
      <Card className="PizzaCard">
        <CardMedia
          sx={{ height: '260px' }}
          image="https://png.pngtree.com/png-clipart/20231019/original/pngtree-pizza-png-with-ai-generated-png-image_13357740.png"
          title="green iguana"
        />
        <CardContent sx={{ padding: '0' }}>
          <Typography variant="h5" component="div" sx={{ textAlign: 'center' }}>
            Pizza title
          </Typography>
          <Grid2 container flexDirection="column" gap={1} className="pizzaOptions">
            <Grid2 container justifyContent="space-around" sx={{ width: '100%' }} gap={2}>
              <Grid2 className="pizzaForm" sx={{ flexGrow: 1 }}>
                <Typography variant="subtitle1" component="p" textAlign="center">
                  sds
                </Typography>
              </Grid2>
              <Grid2 className="pizzaForm" sx={{ flexGrow: 1 }}>
                <Typography variant="subtitle1" component="p" textAlign="center">
                  sds
                </Typography>
              </Grid2>
            </Grid2>
            <Grid2 container justifyContent="space-around" sx={{ width: '100%' }} gap={2}>
              <Grid2 className="pizzaForm" sx={{ flexGrow: 1 }}>
                <Typography variant="subtitle1" component="p" textAlign="center">
                  sds
                </Typography>
              </Grid2>
              <Grid2 className="pizzaForm" sx={{ flexGrow: 1 }}>
                <Typography variant="subtitle1" component="p" textAlign="center">
                  sds
                </Typography>
              </Grid2>
              <Grid2 className="pizzaForm" sx={{ flexGrow: 1 }}>
                <Typography variant="subtitle1" component="p" textAlign="center">
                  sds
                </Typography>
              </Grid2>
            </Grid2>
          </Grid2>
        </CardContent>
      </Card>
      <Grid2 container alignItems="center" className="PizzaCardBottom">
        <Grid2>
          <Typography variant="subtitle2" component="p" textAlign="center">
            From 343 AED
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
