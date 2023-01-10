import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';

// Page imports
import Home from './pages/home';
import Discord from './pages/discord';
import Twitter from './pages/twitter';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/discord" element={<Discord />} />
      <Route path="/twitter" element={<Twitter />} />
    </Routes>
    </BrowserRouter>
  </ThemeProvider>
);