import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import logo from "../assets/logo.png";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";
import { useNavigate } from "react-router-dom"
import { auth } from "../firebase";




const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function ButtonAppBar() {

  
  const [{ basket, user }, dispatch] = useStateValue();
  const navigate = useNavigate();

  const handleAuth = () => {
    if (user) {
      auth.signOut();
      dispatch({
        type: actionTypes.EMPTY_BASKET,
        basket: [],
      });
      dispatch({
        type: actionTypes.SET_USER,
        user: null,
      });
      navigate("/");
    }
  }

  return (
    <Box sx={{ flexGrow: 2, marginTop: '3.3%' }}>
      <AppBar>
        <Toolbar>
          <Typography sx={{ flexGrow: 1, width: '29%', minWidth: '100px' }}>
            <Link to="/">
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
              >
                <img src={logo} height={50} width={50} />
              </IconButton>
            </Link>
          </Typography>
          <Typography sx={{ flexGrow: 1, width: '30%' }}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          </Typography>
          <Typography sx={{ padding: 2, width: '20%', textAlign: 'right' }}>
            Hello {user ? user.email : "Guest"}
          </Typography>
          <Typography sx={{ padding: 2 }}>

          <Link to={!user && "/signin"}>
            <IconButton variant="outlined" onClick={handleAuth}>
              <strong>{user ? "Sign Out" : "Sign In"}</strong> 
            </IconButton>
            </Link>
          </Typography>
          <Link to="/checkout-page">
            <IconButton><Badge badgeContent={basket?.length} color="secondary"><ShoppingCartIcon fontSize="large"></ShoppingCartIcon></Badge>
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
