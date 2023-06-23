import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import CheckoutCard from './CheckoutCard';
import Typography from '@mui/material/Typography';

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

  function FormRow(){
    return (
        <div>
      <Grid container spacing={2}>
        {cartas.slice(startIndex, startIndex + 8).map((carta) => (
          <CheckoutCard key={carta.id} carta={carta} item xs={12} sm={6} md={4} lg={3}/>
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
          disabled={startIndex + 23 >= cartas.length}
        >
          <KeyboardArrowRight />
        </RightIconButton>
      </NavigationContainer>
    </div>
    )
  }

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography align='center' gutterBottom variant='h4'>
            Shopping Cart
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8} md={9} container spacing={2}>
          <FormRow />
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Typography align='center' gutterBottom variant='h4'>
            100
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default CardList;