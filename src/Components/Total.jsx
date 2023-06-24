import React from 'react'
import accounting from "accounting"
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { getBasketTotal } from '../reducer';
import { useStateValue} from '../StateProvider'

const useStyles = styled(() => ({
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
   const [{ basket }, dispatch ] = useStateValue();

  return (
    <div className={classes.root}>
            <h5>Total items: {basket?.length}</h5>
            <h5>{accounting.formatMoney(getBasketTotal(basket),"$")}</h5>
            <Button component={Link} to='/checkout' className={classes.button} variant="contained" color="secondary">Check out</Button>
    </div>
  )
}

export default Total;