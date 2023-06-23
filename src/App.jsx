import Container from "@mui/material/Container"
import CardList from "./Components/CardList"
import NavBar from "./Components/NavBar"
import Footer from "./Components/Footer"
import Box from '@mui/material/Box';

export default function App() {
  return (
    <Box>
      <NavBar />
      <CardList />
      <Footer/>
    </Box>
  )
}

