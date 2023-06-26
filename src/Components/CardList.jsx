import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
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
      const response = await fetch('https://nervous-error-production.up.railway.app/api/cards');
      const data = await response.json();
      setCartas(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleNext = () => {
    setStartIndex((prevIndex) => prevIndex + 8);
  };

  const handlePrevious = () => {
    setStartIndex((prevIndex) => prevIndex - 8);
  };

  const NavigationContainer = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
  });

  const StyledIconButton = styled(IconButton)(({ theme }) => ({
    width: '80px',
    height: '80px',
    backgroundColor: 'green',
    color: theme.palette.common.white,
    '&:hover': {
      backgroundColor: 'darkred',
    },
  }));

  const LeftIconButton = styled(StyledIconButton)({
    position: 'absolute',
    bottom: '24rem',
    left: '0%',
  });

  const RightIconButton = styled(StyledIconButton)({
    position: 'absolute',
    bottom: '24rem',
    right: '0%',
  });

  return (
    <div>
      <Grid container spacing={2}>
        {cartas.slice(startIndex, startIndex + 8).map((carta) => (
          <Card key={carta.id} carta={carta} item xs={12} sm={6} md={4} lg={3}/>
        ))}
      </Grid>

      <NavigationContainer>
        <LeftIconButton
          color="primary"
          aria-label="Atrás"
          onClick={handlePrevious}
          disabled={startIndex === 0}
        >
          <KeyboardArrowLeft />
        </LeftIconButton>
        <RightIconButton
          color="primary"
          aria-label="Siguiente"
          onClick={handleNext}
          disabled={startIndex + 8 >= cartas.length}
        >
          <KeyboardArrowRight />
        </RightIconButton>
      </NavigationContainer>
    </div>
  );
};

export default CardList;
