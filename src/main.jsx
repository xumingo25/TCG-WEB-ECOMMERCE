import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';

import './index.css'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { CssBaseline } from "@mui/material";

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <BrowserRouter>
    <App/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

