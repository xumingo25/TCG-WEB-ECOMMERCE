import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from './Card'


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 3, maxHeight: 600, height: 900, alignContent: 'center' }}>
      <Grid container spacing={1} sx={{
        width: "100%", height: "100%", marginTop: "1%",
        marginLeft: "0%", marginRight: "1%", marginBottom: "1%"
      }}>
        <Grid sx={{ height: "15%", border: 3 }} item xs={12}>
          HEADER
        </Grid>

        <Grid sx={{ height: "70%", border: 3 }} item xs={12}>
          <Card></Card>
        </Grid>

        <Grid sx={{ height: "15%", border: 3 }} item xs={12}>
          FOOTER
        </Grid>

      </Grid>
    </Box>
  );
}