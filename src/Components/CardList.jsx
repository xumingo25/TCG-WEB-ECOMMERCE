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
import Card from './Card';

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
