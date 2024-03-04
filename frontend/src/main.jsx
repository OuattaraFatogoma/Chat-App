import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom';
import  {ContextProvider}  from './context.jsx';
import { SnackbarProvider, useSnackbar } from 'notistack';

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>
    <ContextProvider>
      <SnackbarProvider>
        <App />
      </SnackbarProvider>
    </ContextProvider>
  </BrowserRouter>
)
