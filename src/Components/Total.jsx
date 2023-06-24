import React from 'react'
import accounting from "accounting"
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";


const useStyles = styled((theme) => ({
    root: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "20vh",
    },
    button: {
      maxWidth: "200px",
      marginTop: "2rem",
    },
  }));


export const Total = () => {
   const classes = useStyles()
   
  return (
    <div className={classes.root}>
            <h5>Total items: 3</h5>
            <h5>{accounting.formatMoney(1000,"$")}</h5>
            <Button component={Link} to='/checkout' className={classes.button} variant="contained" color="secondary">Check out</Button>
    </div>
  )
}

export default Total;