import Container from "@mui/material/Container"
import Grid from "./Components/Grid"
import CardList from "./Components/CardList"
export default function App() {
  return (
    <Container sx={{ border: 3, boxShadow: 3, pb: 2, flexWrap: 'wrap-reverse'}}>
        <CardList></CardList>
    </Container>
  )
}