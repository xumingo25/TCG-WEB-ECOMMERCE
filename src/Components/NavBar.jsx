import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import logo from "../assets/logo.png";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 2,marginTop: '3.3%'}}>
      <AppBar> 
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <img src={logo} height={50} width={50} />
          </IconButton>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <IconButton>
            Contacto
            </IconButton>
          </Typography>
          <Typography variant="h6" sx={{  }}>
         
            Hello Guest    
           
          </Typography>
          <IconButton>Iniciar Sesión
          </IconButton>
          <IconButton><Badge badgeContent={2} color="secondary"><ShoppingCartIcon fontSize="large"></ShoppingCartIcon></Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
