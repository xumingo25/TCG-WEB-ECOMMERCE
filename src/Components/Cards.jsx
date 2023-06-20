import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Card from './Card'

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box sx={{marginLeft:"1%",marginTop:"1%"}}
      {...other}
    />
  );
}

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



Item.propTypes = {
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};

export default function AlignContent() {
  return (
    <div style={{ width: '100%' }}>
      <Box
        sx={{
          display: '-webkit-flex',
          flexWrap: 'wrap',
          alignContent: 'center',
          bgcolor: 'background.paper'
        }}
      >
        {/* Bucle para mostrar el componente diez veces */}
        {[...Array(12)].map((_, index) => (
                <Item><Card></Card></Item>
              ))}
      </Box>
    </div>
  );
}