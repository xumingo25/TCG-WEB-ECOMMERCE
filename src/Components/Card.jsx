import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import ButtonBase from '@mui/material/ButtonBase';
import AddShoppingCartSharpIcon from '@mui/icons-material/AddShoppingCartSharp';
import Typography from '@mui/material/Typography';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

document.addEventListener('DOMContentLoaded', () => {
  fetchData();
})

const fetchData = async () =>{
  try{
    const response = await fetch('http://localhost:8080/api/cards/')
    const data = await response.json()
    console.log(data)
  }catch(error){
    console.log(error)
  }
}

export default function ComplexGrid() {
  return (
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
          <ButtonBase sx={{ height: "100%" }}>
            <Img alt="complex" src="src\static\Giratina.jpg" />
          </ButtonBase>
        </Grid>
      </Grid>
      <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
              <strong>Giratina VSTAR</strong>
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
    </Paper>
    
  );
}