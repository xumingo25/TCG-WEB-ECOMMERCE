import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import ButtonBase from '@mui/material/ButtonBase';
import AddShoppingCartSharpIcon from '@mui/icons-material/AddShoppingCartSharp';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const Card = ({ carta }) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Paper
        sx={{
          p: 1,
          margin: 'auto',
          maxWidth: 225,
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        }}
      >
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase sx={{ height: '100%' }}>
              <Img alt="complex" src={carta.imagen} className="imgn" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  <strong>{carta.nombre}</strong>
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" component="div">
                <strong>$8.000</strong>
              </Typography>
            </Grid>
            <Button variant="contained" endIcon={<AddShoppingCartSharpIcon />}>
              Agregar al carrito
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

const CardList = () => {
  const [cartas, setCartas] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/cards');
      const data = await response.json();
      setCartas(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleNext = () => {
    setStartIndex((prevIndex) => prevIndex + 12);
  };

  const handlePrevious = () => {
    setStartIndex((prevIndex) => prevIndex - 12);
  };

  return (
    <div>
      <Grid container spacing={2} justifyContent="center">
        {cartas.slice(startIndex, startIndex + 8).map((carta) => (
          <Card key={carta.id} carta={carta} />
        ))}
      </Grid>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '1rem',
        }}
      >
        <IconButton
          color="primary"
          aria-label="Atrás"
          onClick={handlePrevious}
          disabled={startIndex === 0}
        >
          <KeyboardArrowLeft />
        </IconButton>
        <IconButton
          color="primary"
          aria-label="Siguiente"
          onClick={handleNext}
          disabled={startIndex + 8 >= cartas.length}
        >
          <KeyboardArrowRight />
        </IconButton>
      </div>
    </div>
  );
};

export default CardList;
