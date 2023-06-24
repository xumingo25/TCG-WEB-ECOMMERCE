import Container from "@mui/material/Container"
import CardList from "./Components/CardList"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar"
import Footer from "./Components/Footer"
import CheckoutPage from "./Components/CheckoutPage"
import Box from '@mui/material/Box';
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

export default function App() {

  const [{ user }, dispatch] = useStateValue();

  return (
    <Router>
    <Box>
       <NavBar />
       <Routes>
          <Route path='/checkout-page' caseSensitive={false} element={<CheckoutPage/>}/>
          <Route path='/' caseSensitive={false} element={<CardList />} />
       </Routes>
       <Footer></Footer>
    </Box>
    </Router>
  )
}

