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
        {/* Bucle para mostrar el componente ocho veces */}
        {[...Array(8)].map((_, index) => (
                <Item><Card></Card></Item>
              ))}
      </Box>
    </div>
  );
}