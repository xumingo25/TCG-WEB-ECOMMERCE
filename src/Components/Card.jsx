import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import ButtonBase from '@mui/material/ButtonBase';
import AddShoppingCartSharpIcon from '@mui/icons-material/AddShoppingCartSharp';
import Typography from '@mui/material/Typography';
import { useStateValue } from '../StateProvider';
import { actionTypes } from "../reducer";
import accounting from "accounting"


const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function Card({carta : {id, nombre, codigo, rareza,imagen}}) {

  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: actionTypes.ADD_TO_BASKET,
      item: {
         id,
         nombre,
         codigo,
         rareza,
         imagen,
      },
    });
  };

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
              <Img  src={imagen}  />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  <strong>{nombre}</strong>
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" component="div">
                <strong>{accounting.formatMoney({id},"$")}</strong>
              </Typography>
            </Grid>
            <Button onClick={addToBasket} variant="contained" endIcon={<AddShoppingCartSharpIcon />}>
              Agregar al carrito
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};