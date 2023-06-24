import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import CheckoutCard from './CheckoutCard';
import Typography from '@mui/material/Typography';
import Total from './Total';
import { useStateValue } from "../StateProvider";


const CheckoutPage = () => {
  const [{ basket }, dispatch] = useStateValue();

  function FormRow(){
    return (
      <Grid container spacing={3}>
        {basket?.map((carta) => (
          <CheckoutCard key={carta.id} carta={carta} item xs={12} sm={6} md={4} lg={3}/>
        ))}
      </Grid>
    )
  }

  return (
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
            <Total></Total>
          </Typography>
        </Grid>
      </Grid>
  );
};

export default CheckoutPage;
