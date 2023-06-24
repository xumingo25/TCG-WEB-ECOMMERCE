import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import { CssBaseline } from "@mui/material";
import { StateProvider } from './StateProvider';
import reducer, { initialState } from './reducer';

import './index.css'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
    <CssBaseline />
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

