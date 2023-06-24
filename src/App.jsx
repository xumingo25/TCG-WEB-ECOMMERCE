import React, { useEffect } from 'react';
import Container from "@mui/material/Container"
import CardList from "./Components/CardList"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar"
import Footer from "./Components/Footer"
import CheckoutPage from "./Components/CheckoutPage"
import Box from '@mui/material/Box';
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import { auth } from "./firebase";



export default function App() {

  const [{ user }, dispatch] = useStateValue();

  useEffect(()=>{
    auth.onAuthStateChanged((authUser) =>{
      console.log(authUser);
      if(authUser){
        dispatch({
          type: actionTypes.SET_USER,
          user: authUser,
        });
      } else {
        dispatch({
          type: actionTypes.SET_USER,
          user: null,
        });
      }
    });
  },[]);

  return (
    <Router>
    <Box>
       <NavBar />
       <Routes>
          <Route path='/checkout-page' caseSensitive={false} element={<CheckoutPage/>}/>
          <Route path='/signin' caseSensitive={false} element={<Signin />} />
          <Route path='/signup' caseSensitive={false} element={<Signup />} />
          <Route path='/' caseSensitive={false} element={<CardList />} />
       </Routes>
       <Footer></Footer>
    </Box>
    </Router>
  )
}

